import React, {FunctionComponent} from 'react'
import {makeStyles, Theme} from "@material-ui/core/styles"
import {Grid, Link} from '@material-ui/core'
import {SanityTransformHwHomePage} from "../../../common/sanityIo/Types";
import BlockContentLayoutContainer from "../../BlockContentLayoutContainer";
import transformHWTheme from "../../../theme/transform-hw/TransformHWTheme";
import PsychologyTodaySeal from "../psychology-today-stamp/PsychologyToday";
import ThwHeader from "../header/ThwHeader";
import ThwFooter from "../footer/ThwFooter";

interface IProps {
    homePage: SanityTransformHwHomePage
}

const ThwPageLayout: FunctionComponent<IProps> = (props: IProps) => {

    return (<Grid container item style={{width: "100vw"}}>
        <Grid container item>
            <ThwHeader pageHeader={props.homePage.headerMenuRef}/>
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
            <ThwFooter homePage={props.homePage}/>
        </Grid>
        <Grid container item
              alignContent='center'
              alignItems='center'
              style={{
                  backgroundColor: "white",
                  position: "static",
                  bottom: 0,
                  padding: transformHWTheme.spacing(1, 3, 1.5)
              }}
            // xs={11}
              justifyContent='space-between'>
            <Grid item xs={8}>
                <Grid item xs={8} sm={12}>
                    <Link
                        gutterBottom
                        href='https://thehandsomestnerd.com'
                        color='textPrimary'
                        variant='subtitle2'>
                        © Copyright 2022
                        TheHandsomestNerd, LLC. All Rights Reserved.
                    </Link>
                </Grid>
            </Grid>
            <Grid item justifyContent='flex-end' xs={4} container alignContent='center' style={{paddingTop: "4px"}}>
                <PsychologyTodaySeal/>
            </Grid>
        </Grid>
    </Grid>)
}

export default ThwPageLayout


const PageLayout = (props: { homePage: SanityTransformHwHomePage }) => {
    return
}