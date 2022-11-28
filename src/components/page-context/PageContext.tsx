import React from 'react';
import {SanityMenuContainer, SanityTransformHwHomePage} from "../../common/sanityIo/Types";
import {ServiceAmenityType, ThwServiceItemNoRefType} from "../BlockContentTypes";

export type PageContextType = {
    page?: SanityTransformHwHomePage
    analyticsId?: string
    slug?: string
    pageHeader?: SanityMenuContainer
    pageFooter?: SanityMenuContainer
    isPageLoading?: boolean
    isPageError?: boolean
    isRefetching?: boolean
    allServices?: ThwServiceItemNoRefType[]
    getOtherServices?: (slug:string)=>ThwServiceItemNoRefType[]
    fetchPage?: (slug:string)=>void
};

const PageContext = React.createContext<PageContextType>({});

export default PageContext;
