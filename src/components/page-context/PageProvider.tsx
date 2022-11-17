import React, {FunctionComponent, PropsWithChildren, useContext, useMemo, useReducer,} from 'react';
import {SanityMenuContainer, SanityRef, SanityTransformHwHomePage} from "../../common/sanityIo/Types";
import thwClient from "../transform-hw/thwClient";
import {ServiceAmenityType, ThwServiceItemNoRefType} from "../BlockContentTypes";
import SnackbarContext from "../snackbar-context/SnackbarContext";
import PageContext from './PageContext';
import amenitiesSection from "../transform-hw/AmenitiesSection";

type IProps = {};

type PageProviderState = {
    loading?: boolean,
    page?: SanityTransformHwHomePage
    isRefetching?: boolean,
    isPageError?: boolean,
    error?: string,
    pageSlug?: string,
    allServices?: ThwServiceItemNoRefType[],
    pageHeader?: SanityMenuContainer,
    pageFooter?: SanityMenuContainer,
}

const initialState: PageProviderState = {
    loading: false,
    page: undefined,
    isRefetching: false,
    isPageError: false,
    error: undefined,
    pageSlug: "",
    allServices: [],
    pageHeader: undefined,
    pageFooter: undefined,
};

const reducer = (state: PageProviderState, action: any) => {
    switch (action.type) {
        case 'INITIAL':
            return initialState;
        case 'START_PAGE_LOAD':
            console.log("in page load switch", action.payload.pageSlug)
            return {
                ...state,
                loading: true,
                pageSlug: action.payload.pageSlug,
            };
        case 'LOAD_PAGE_COMPONENTS':
            return {
                ...state,
                loading: false,
                page: action.payload.page,
                pageHeader: action.payload.page?.headerMenuRef,
                pageFooter: action.payload.page?.footerMenuRef
            };
        case 'LOAD_SERVICES':
            return {
                ...state,
                loading: false,
                allServices: action.payload.allServices
            };
        case 'PAGE_LOADING':
            return {
                ...state,
                loading: action.payload.loading,
            };
        case "ERROR":
            return {
                ...state,
                loading: false,
                isError: action.payload.isError,
                pageError: action.payload.error
            }
        default:
            throw new Error();
    }
}


const PageProvider: FunctionComponent<IProps & PropsWithChildren> = (
    props: PropsWithChildren<IProps>,
) => {
    const [state, dispatch] = useReducer(reducer, initialState)


    const loadedPageQuery = thwClient.useFetchPageBySlugQuery(state.pageSlug)

    React.useEffect(() => {
        if ((state.pageSlug && state.pageSlug.length > 0)) {
            console.log("states pageslug changd", state.pageSlug)
            loadedPageQuery.refetch().then((resp) => {
                console.log("reftecth?", resp)
            })
        }
    }, [state.pageSlug])

    React.useEffect(() => {
        if (loadedPageQuery.data) {
            console.log("context homepage data", loadedPageQuery.data)
            dispatch({
                type: "LOAD_PAGE_COMPONENTS",
                payload: {
                    page: loadedPageQuery.data,
                }
            })
        }
    }, [loadedPageQuery.data])
    React.useEffect(() => {
        dispatch({
            type: "PAGE_LOADING",
            payload: {
                loading: loadedPageQuery.isLoading
            }
        })
    }, [loadedPageQuery.isLoading])
    React.useEffect(() => {
        dispatch({
            type: "PAGE_LOADING",
            payload: {
                loading: loadedPageQuery.isRefetching
            }
        })
    }, [loadedPageQuery.isRefetching])
    React.useEffect(() => {
        if (loadedPageQuery.isError) {
            dispatch({
                type: "ERROR",
                payload: {
                    isError: loadedPageQuery.isError,
                    pageError: loadedPageQuery.error
                }
            })
        }
    }, [loadedPageQuery.isError])

    const fetchPage = async (pageSlug: string) => {
        console.log("Fetching the page", pageSlug)
        dispatch({
            type: "START_PAGE_LOAD",
            payload: {
                pageSlug: pageSlug,
            }
        })
    }

    // React.useEffect(() => {
    //     if (allServicesQuery.data) {
    //         console.log("context services data", allServicesQuery.data)
    //         dispatch({
    //             type: "LOAD_SERVICES",
    //             payload: {
    //                 allServices: allServicesQuery.data
    //             }
    //         })
    //     }
    // }, [allServicesQuery.data])
    // React.useEffect(() => {
    //     dispatch({
    //         type: "PAGE_LOADING",
    //         payload: {
    //             loading: allServicesQuery.isLoading
    //         }
    //     })
    // }, [allServicesQuery.isLoading])
    // React.useEffect(() => {
    //     dispatch({
    //         type: "PAGE_LOADING",
    //         payload: {
    //             loading: allServicesQuery.isRefetching
    //         }
    //     })
    // }, [allServicesQuery.isRefetching])
    // React.useEffect(() => {
    //     if (allServicesQuery.isError) {
    //         dispatch({
    //             type: "ERROR",
    //             payload: {
    //                 isError: allServicesQuery.isError,
    //                 pageError: allServicesQuery.error
    //             }
    //         })
    //     }
    // }, [allServicesQuery.isError])


    // React.useEffect(() => {
    //     if (!headerMenuQuery.isPreviousData && headerMenuQuery.data) {
    //         console.log("context header data", headerMenuQuery.data)
    //         dispatch({
    //             type: "LOAD_HEADER",
    //             payload: {
    //                 pageHeader: headerMenuQuery.data
    //             }
    //         })
    //     }
    // }, [headerMenuQuery.data])
    // React.useEffect(() => {
    //     dispatch({
    //         type: "PAGE_LOADING",
    //         payload: {
    //             loading: headerMenuQuery.isLoading
    //         }
    //     })
    // }, [headerMenuQuery.isLoading])
    // React.useEffect(() => {
    //     dispatch({
    //         type: "PAGE_LOADING",
    //         payload: {
    //             loading: headerMenuQuery.isRefetching
    //         }
    //     })
    // }, [headerMenuQuery.isRefetching])
    // React.useEffect(() => {
    //     if (headerMenuQuery.isError) {
    //         dispatch({
    //             type: "ERROR",
    //             payload: {
    //                 isError: headerMenuQuery.isError,
    //                 pageError: headerMenuQuery.error
    //             }
    //         })
    //     }
    // }, [headerMenuQuery.isError])
    //
    //
    // React.useEffect(() => {
    //     if (!footerMenuQuery.isPreviousData && footerMenuQuery.data) {
    //         console.log("context footer data", footerMenuQuery.data)
    //         dispatch({
    //             type: "LOAD_FOOTER",
    //             payload: {
    //                 pageFooter: footerMenuQuery.data
    //             }
    //         })
    //     }
    // }, [footerMenuQuery.data])
    // React.useEffect(() => {
    //     dispatch({
    //         type: "PAGE_LOADING",
    //         payload: {
    //             loading: footerMenuQuery.isLoading
    //         }
    //     })
    // }, [footerMenuQuery.isLoading])
    // React.useEffect(() => {
    //     dispatch({
    //         type: "PAGE_LOADING",
    //         payload: {
    //             loading: footerMenuQuery.isRefetching
    //         }
    //     })
    // }, [footerMenuQuery.isRefetching])
    // React.useEffect(() => {
    //     if (footerMenuQuery.isError) {
    //         dispatch({
    //             type: "ERROR",
    //             payload: {
    //                 isError: footerMenuQuery.isError,
    //                 pageError: footerMenuQuery.error
    //             }
    //         })
    //     }
    // }, [footerMenuQuery.isError])

    const snackbarContext = useContext(SnackbarContext)


    React.useEffect(() => {
        if (state.error) {
            snackbarContext.openSnackbar && snackbarContext.openSnackbar(state.error)
        }
    }, [state.error, state.isPageError])


    React.useEffect(() => {
        dispatch({
            type: "PAGE_LOADING",
            payload: {
                loading: !!state.page
            }
        })
    }, [loadedPageQuery.isLoading])


    const getOtherServices = (pageSlug: string) => {
        return state.allServices?.filter((service: ThwServiceItemNoRefType) => {
            return pageSlug !== service.slug.current
        }) ?? []


    }

    const newValue = useMemo(
        () => ({
            page: state.page,
            slug: state.pageSlug,
            pageHeader: state.pageHeader,
            pageFooter: state.pageFooter,
            isPageLoading: state.loading,
            isRefetching: state.isRefetching,
            isPageError: state.isPageError,
            fetchPage,

            allServices: state.allServices,

            getOtherServices,
        }),
        [
            state.page,
            state.pageSlug,
            state.pageHeader,
            state.pageFooter,
            state.loading,
            state.isRefetching,
            state.isPageError,
            fetchPage,
            state.allServices,
            getOtherServices,
        ]
    );

    return (
        <PageContext.Provider value={newValue}>
            {props.children}
        </PageContext.Provider>
    );
};

export default PageProvider;
