import React, {FunctionComponent, useContext} from 'react'
import {Grid, Link, useTheme} from '@material-ui/core'
import {SanityTransformHwHomePage} from "../../../common/sanityIo/Types";
import BlockContentLayoutContainer from "../../BlockContentLayoutContainer";
import firebaseAnalyticsClient from "../../../utils/firebase/FirebaseAnalyticsClient";
import {useLocation} from "react-router";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import HeaderBlockContentLayoutContainer from "../../HeaderBlockContentLayoutContainer";
import FooterBlockContentLayoutContainer from "../../FooterBlockContentLayoutContainer";
import BusinessCard from "../../BusinessCard";
import PageContext from "../../page-context/PageContext";

interface IProps {
    homePage: SanityTransformHwHomePage
}

const PageLayout: FunctionComponent<IProps> = (props: IProps) => {
    const location = useLocation();
    const theme = useTheme()

    const pageContext = useContext(PageContext)

    React.useEffect(() => {
        props.homePage.title && firebaseAnalyticsClient.analyticsPageView(
            location.pathname,
            location.search,
            `${props.homePage.title} | James Terrell Singleton`,
        );
    }, []);

    return (<Grid container item style={{width: "100vw"}}>
        {/*<Grid container item>*/}
        {/*    <Header pageHeader={props.homePage.headerMenuRef}/>*/}
        {/*</Grid>*/}
        {props.homePage.isFabActivated && <Grid container item style={{position: "fixed", bottom: 0, right: 0, zIndex: 9999}}>
            <BusinessCard menu={pageContext.page?.headerContent.content[0].headerMenuRef} anchor={'bottom'}/>
        </Grid>}
        <Grid container item>
            {props.homePage.headerContent && <Grid container item>
                <HeaderBlockContentLayoutContainer
                    content={props.homePage.headerContent.content}/>
            </Grid>}
        </Grid>
        <Grid item container>
            {
                props.homePage.pageContent && <Grid container item>
                    <BlockContentLayoutContainer
                        homePage={props.homePage}
                        content={props.homePage.pageContent.content}/>
                </Grid>
            }
        </Grid>
        <Grid container item>
            {props.homePage.footerContent && <Grid container item>
                <FooterBlockContentLayoutContainer
                    content={props.homePage.footerContent.content}/>
            </Grid>}
        </Grid>
        <Grid container item
              alignContent='center'
              alignItems='center'
              style={{
                  backgroundColor: "white",
                  position: "static",
                  bottom: 0,
                  padding: theme.spacing(1, 3, .5)
              }}
            // xs={11}
        >
            <Link
                gutterBottom
                href='https://thehandsomestnerd.com'
                color='textPrimary'
                variant='subtitle2'>
                © Copyright 2022
                TheHandsomestNerd, LLC. All Rights Reserved.
            </Link>
        </Grid>
    </Grid>)
}

export default PageLayout