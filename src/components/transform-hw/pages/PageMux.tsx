import React, {FunctionComponent, useContext} from 'react'
import {makeStyles, Theme} from "@material-ui/core/styles"
import FourOhFour from "./error-page/FourOhFour";
import {SanityTransformHwHomePage} from "../../../common/sanityIo/Types";
import PageContext from "../../page-context/PageContext";
import {useParams} from 'react-router';
import LoadingPage from "./loading-page/LoadingPage";
import ThwPageLayout from "./ThwPageLayout";
import UnderConstruction from "./under-construction-page/UnderConstruction";
import {Grid} from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {},
}))

interface IProps {
    homePage?: SanityTransformHwHomePage
    isLoading?: boolean
    isRefetching?: boolean
}

const PageMux: FunctionComponent<IProps> = (props: IProps) => {
    const classes = useStyles()
    const pageContext = useContext(PageContext)

    const urlParams = useParams()

    React.useEffect(() => {
        if (urlParams.pageSlug) {
            console.log("found a slug in the mux", urlParams)
            pageContext.fetchPage && pageContext.fetchPage(urlParams.pageSlug)
        }
    },[])

    const PageContents = () => {
        if (!pageContext.page || pageContext.isPageLoading)
            return <LoadingPage/>

        if (pageContext.page && !pageContext.page.isUnderConstruction) {
            return <ThwPageLayout homePage={pageContext.page}></ThwPageLayout>
        } else if (pageContext.page && pageContext.page.underConstructionPageRef) {
            return <UnderConstruction underConstructionPageRef={pageContext.page.underConstructionPageRef}
                                      email={pageContext.page?.email}/>
        }

        if (pageContext.isPageError) {
            return <FourOhFour/>
        }

        return <FourOhFour/>
    }


    return <PageContents />
}

export default PageMux