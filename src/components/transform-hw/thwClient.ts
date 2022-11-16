import {useQuery} from "react-query";
import sanityClient from "../../sanityClient";
import groqQueries from "../../utils/groqQueries";
import GroqQueries from "../../utils/groqQueries";
import {SanityMenuContainer, SanityRef} from "../../common/sanityIo/Types";
import {ThwServiceItemType} from "../BlockContentTypes";
import {useContext} from "react";
import PageContext from "../page-context/PageContext";

const useFetchPageBySlugQuery = (slug: string) => {
    console.log("slug", slug)
    return useQuery(
        ['fetchPageBySlug', slug],
        async ({queryKey}) => {
            const [_, pageSlug] = queryKey

            console.log(" Lookin for page with slug", pageSlug, queryKey)
            if (pageSlug) {
                return sanityClient
                    .fetch(
                        `*[slug.current == $pageSlug && _type == "homePage"]{
          ${groqQueries.HOMEPAGE}
        }`, {pageSlug})
                    .then((result) => {
                        if (result.length === 0) {
                            return Promise.reject(Error("No results returned"))
                        }
                        return result[0]
                    }).catch(() => {
                        return Promise.reject(Error("Sanity Error getting pageSlug " + pageSlug))
                    })
            } else {
                return Promise.reject(Error("No page slug passed"))
            }
        },
        {}
    );
}
const useFetchMenuBySlugQuery = (menuSlug: string) => {
    console.log("fetching menu with slug", menuSlug)
    return useQuery(
        menuSlug,
        () => {
            return sanityClient
                .fetch(
                    `*[slug.current == $menuSlug]{
          ${GroqQueries.MENUGROUPCONTAINER}
       }`, {menuSlug: menuSlug ?? 'header-menu'}
                )
                .then((data: SanityMenuContainer[]) => {
                    return data[0]
                })
        },
        {
            staleTime: Infinity,
            refetchInterval: false,
            refetchOnWindowFocus: false
        }
    );
}

const useFetchMenuByRefQuery = (headerMenuRef?: SanityRef) => {
    console.log("fetching menu with ref", headerMenuRef)

    const menuId = headerMenuRef?._ref ?? "no-id"

    return useQuery(
        menuId,
        () => {
            return sanityClient
                .fetch(
                    `*[_id == $menuId && _type == "menuContainer"]{
          ${groqQueries.MENUGROUPCONTAINER}
        }`, {menuId})
                .then((result) => {
                    if (result.length === 0) {

                        return Promise.reject(Error("No results returned"))
                    }
                    return result[0]
                }).catch(() => {
                    return Promise.reject(Error("Sanity Error getting pageSlug " + menuId))
                })
        },
        {
            staleTime: Infinity,
            refetchInterval: false,
            refetchOnWindowFocus: false,
            refetchOnMount: false,
        }
    );

}

//
// const fetchLandingPageFooterMenu = (footerSlug?: string): Promise<SanityMenuContainer> => {
//     const slug = footerSlug ?? 'footer-menu'
//
//     return sanityClient
//         .fetch(
//             `*[_type=="menuContainer" && slug.current == $slug]{
//           ${GroqQueries.MENUGROUPCONTAINER}
//        }`, {slug}
//         )
//         .then((data: SanityMenuContainer[]) => {
//             return data[0]
//         })
// }
const fetchRefs = async (sanityRefs: SanityRef[]): Promise<any> => {

    console.log("get these refs", sanityRefs)

    let servicesRefs: string[] = []
    let otherContentRefs: string[] = []

    sanityRefs?.forEach((sanityRef) => {
        console.log("does match?", sanityRef._type, groqQueries.SANITY_TYPES_ENUM.SERVICE, sanityRef._type === groqQueries.SANITY_TYPES_ENUM.SERVICE)
        if (sanityRef._type == groqQueries.SANITY_TYPES_ENUM.SERVICE) {
            servicesRefs.push(sanityRef._ref)
        }

        otherContentRefs.push(sanityRef._ref)
    })

    console.log("Division of labor", sanityRefs, otherContentRefs)
    const servicesQuery = `*[_type == ${groqQueries.SANITY_TYPES_ENUM.SERVICE} && _id in $references]{
    ${groqQueries.SERVICE}
  }`

    const services = await sanityClient
        .fetch(
            servicesQuery,
            {references: servicesRefs}
        )

    const otherRefs = await sanityClient
        .fetch(
            `*[_id in $references]`,
            {references: otherContentRefs}
        )

    console.log("Done Division of labor", services, otherRefs)

    return Promise.all([...services, otherRefs])
}

const useFetchRefsQuery = (refs: SanityRef[]) => {
    return useQuery(
        ['fetchRefs'],
        async () => {
            return fetchRefs(refs)
                .then((results: any[]) => {
                    if (results.length === 0) {
                        console.log("whew! after fetching a bunch of refs ", results)
                    }
                    return results
                }).catch((e: any) => {
                    console.log("error getting services", e)
                    return []
                })
        },
        {
            staleTime: Infinity,
            refetchInterval: false,
            refetchOnWindowFocus: false
        }
    );
}


const useFetchServicesQuery = (pageSlug?: string) => {
    return useQuery(
        'fetchServices',
        async () => {
            console.log("fetchings services", pageSlug)
            const serviceSlug = pageSlug

            let serviceSlugClause: string = ''
            if (serviceSlug) {
                serviceSlugClause = " && slug.current != $serviceSlug"
            }

            const query = `*[_type == "transformServiceItem"${serviceSlugClause}]{
             ${groqQueries.SERVICE}
            }`

            const params = serviceSlug ? {serviceSlug: serviceSlug} : {}

            return sanityClient
                .fetch(query, params)
                .then((results: ThwServiceItemType[]) => {
                    if (results.length === 0) {
                        console.log("No Services present")
                    }
                    return results
                }).catch((e: any) => {
                    console.log("error getting services", e)
                    return []
                })
        }
        , {
            staleTime: Infinity,
            refetchInterval: false,
            refetchOnWindowFocus: false
        });
}

export default {
    fetchRefs,
    useFetchPageBySlugQuery,
    useFetchMenuBySlugQuery,
    useFetchServicesQuery,
    useFetchRefsQuery,
    useFetchMenuByRefQuery
}