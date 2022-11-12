import {useQuery} from "react-query";
import sanityClient from "../../sanityClient";
import groqQueries from "../../utils/groqQueries";
import {redirect} from "react-router";
import {RoutesEnum} from "../../App";
import {useParams} from "react-router-dom";
import GroqQueries from "../../utils/groqQueries";
import {SanityMenuContainer} from "../../common/sanityIo/Types";
import {ThwServiceItemType} from "../BlockContentTypes";

const useFetchPageBySlugQuery = () => {
    const urlParams: { pageSlug?: string } = useParams()

    return useQuery(
        ['fetchPageBySlug'],
        async () => {
            const pageSlug = urlParams.pageSlug
            if (pageSlug) {
                return sanityClient
                    .fetch(
                        `*[slug.current == $pageSlug && _type == "homePage"]{
          ${groqQueries.HOMEPAGE}
       }`, {pageSlug})
                    .then((result) => {
                        if (result.length === 0) {
                            redirect(RoutesEnum.ERROR)
                        }
                        return result
                    }).catch(() => {
                        redirect(RoutesEnum.ERROR)
                    })
            } else {
                redirect(RoutesEnum.COMING_SOON)
            }
        }
    );
}
const useFetchMenuBySlugQuery = (menuSlug: string) => {
    console.log("fetching menu with slug", menuSlug)
    return useQuery(
        [menuSlug],
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

const useFetchServicesQuery = (pageSlug?: string) => {
    return useQuery(
        ['fetchServices'],
        async () => {
            const serviceSlug = pageSlug

            let serviceSlugClause:string = ''
            if (serviceSlug) {
                serviceSlugClause = " && slug.current != $serviceSlug"
            }

            const query = `*[_type == "transformServiceItem"${serviceSlugClause}]{
             ${groqQueries.SERVICE}
            }`

            const params = serviceSlug ?{serviceSlug: serviceSlug}:{}

            return sanityClient
                .fetch(query, params)
                .then((results: ThwServiceItemType[]) => {
                    if (results.length === 0) {
                       console.log("No Services present")
                    }
                    return results
                }).catch((e:any) => {
                    console.log("error getting services", e)
                    return []
                })
        }
    );
}

export default {useFetchPageBySlugQuery, useFetchMenuBySlugQuery, useFetchServicesQuery}