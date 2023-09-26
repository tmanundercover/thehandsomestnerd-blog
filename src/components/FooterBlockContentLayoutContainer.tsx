import React, {FunctionComponent} from 'react'
import BlockContent from '@sanity/block-content-to-react'
import {Card, Grid, Link, MuiThemeProvider} from '@material-ui/core'
import sanityClient from '../sanityClient'
import {blockSerializers} from '../common/sanityIo/BlockContentRenderer'
import {
    ResumeBioSectionType,
    ResumeContactUsSectionType,
    ResumeEducationSectionType,
    ResumeExperienceSectionType,
    ResumeFeedbackSectionType,
    ResumePortfolioSectionType,
    ResumeSkillSectionType,
    PortfolioSectionType,
    ThwAboutProprietorSectionType,
    ThwContactUsSectionType,
    ThwHeroContentSectionType,
    ThwMottoSectionType,
    ThwPositivePsychologySectionType,
    ThwServiceItemType,
    ThwServicesSectionType,
    ThwWhyChooseUsSectionType,
    WebDevAboutUsSectionType,
    WebDevHeroContentSectionType,
    WebDevStatsCounterSectionType,
    WebDevTestimonialsSectionType,
    HowItWorksSectionType,
    DevelopmentHeaderSectionType,
    HeaderSectionType,
    DevelopmentFooterSectionType, FooterSectionType,
} from "./BlockContentTypes";
import DigitalResumeTheme from "../theme/DigitalResumeTheme";
import useThwCommonStyles from "../common/sanityIo/ThwCommonStyles";
import ThwHeroContentSection from "./transform-hw/ThwHeroContentSection";
import ThwPositivePsychology from "./transform-hw/ThwPositivePsychology";
import ThwMottoSection from "./transform-hw/ThwMottoSection";
import AboutTheProprietorSection from "./transform-hw/AboutTheProprietorSection";
import ThwServicesSection from "./transform-hw/ThwServicesSection";
import ThwWhyChooseUsSection from "./transform-hw/ThwWhyChooseUsSection";
import ThwContactUsSection from "./transform-hw/ThwContactUsSection";
import {SanityHomePage} from "./block-content-ui/static-pages/cmsStaticPagesClient";
import ThwServicesEducationPage from "./transform-hw/service-education-page/ThwServiceEducationPage";
import ResumeBio from "./my-digital-resume/ResumeBio";
import MMHeroContentSection from "./mackenzies-mind/MMHeroContentSection";
import ResumeSkillsSection from "./my-digital-resume/ResumeSkillsSection";
import ResumeExperienceSection from "./my-digital-resume/ResumeExperienceSection";
import ResumeEducationSection from "./my-digital-resume/ResumeEducationSection";
import ResumeFeedbackSection from "./my-digital-resume/ResumeFeedbackSection";
import ResumeContactUsSection from "./my-digital-resume/ResumeContactUsSection";
import ResumePortfolioSection from "./my-digital-resume/ResumePortfolioSection";
import WebDevHeroContentSection from "./web-dev-site/WebDevHeroContentSection";
import WebDevStatsCounterSection from "./web-dev-site/WebDevStatsCounterSection";
import WebDevAboutUsSection from "./web-dev-site/WebDevAboutUsSection";
import WebDevServicesSection from "./web-dev-site/WebDevServicesSection";
import WebDevPortfolioSection from "./web-dev-site/WebDevPortfolioSection";
import WebDevTestimonialsSection from "./web-dev-site/WebDevTestimonialsSection";
import WebDevHowItWorksSection from "./web-dev-site/WebDevHowItWorksSection";
import DevelopmentHeader from "./mackenzies-mind/header/DevelopmentHeader";
import Header from "./mackenzies-mind/header/Header";
import WebDevSiteTheme from "../theme/WebDevSiteTheme";
import Footer from "./mackenzies-mind/footer/Footer";
import WebDevFooter from "./web-dev-site/dev-footer/WebDevFooter";

export type FooterBlockContentLayoutContainerProps = {
    content?: any,
}

const FooterBlockContentLayoutContainer: FunctionComponent<FooterBlockContentLayoutContainerProps> = (props) => {
    const classes = useThwCommonStyles()

    return <Grid container item>
        {props?.content?.map((columnLayoutContainer: any, index: number) => {
            switch (columnLayoutContainer._type) {
                case 'column1BlockContent':
                    return <Grid key={'column1BlockContent_header'} container justifyContent='center'
                                 alignItems='stretch'>
                        <Grid item>
                            <Card className={classes.root} style={{paddingTop: '80px'}}>
                                <Grid container item xs={12} className={classes.layoutContainer}>
                                    <Grid item xs={12}>
                                        <BlockContent
                                            blocks={columnLayoutContainer.content}
                                            serializers={blockSerializers}
                                            projectId={sanityClient.config().projectId}
                                            dataset={sanityClient.config().dataset}
                                        />
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>
                    </Grid>
                case 'column2BlockContent':
                    return <Grid key={'column2BlockContent_header'} container justifyContent='center'
                                 alignItems='stretch'>
                        <Grid item>
                            <Card className={classes.root} style={{paddingTop: '80px'}}>
                                <Grid container item xs={12} className={classes.layoutContainer}>
                                    <Grid item xs={6}>
                                        <BlockContent
                                            blocks={columnLayoutContainer.column1.content}
                                            serializers={blockSerializers}
                                            projectId={sanityClient.config().projectId}
                                            dataset={sanityClient.config().dataset}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <BlockContent
                                            blocks={columnLayoutContainer.column2.content}
                                            serializers={blockSerializers}
                                            projectId={sanityClient.config().projectId}
                                            dataset={sanityClient.config().dataset}
                                        />
                                    </Grid>
                                </Grid>
                            </Card></Grid>
                    </Grid>
                case 'DevelopmentFooterSection':
                    const developmentFooter: DevelopmentFooterSectionType = columnLayoutContainer

                    return <MuiThemeProvider theme={WebDevSiteTheme}><Grid key={'BOTTOM_OF_PAGE_DEV'} container item
                                                                           xs={12}
                                                                           >
                        <Link id={"BOTTOM_OF_PAGE"}><></>
                        </Link>
                        <WebDevFooter
                            pageFooter={developmentFooter.footerMenuRef}
                        />
                    </Grid></MuiThemeProvider>
                case 'FooterSection':
                    const footer: FooterSectionType = columnLayoutContainer

                    return <MuiThemeProvider theme={DigitalResumeTheme}><Grid key={'BOTTOM_OF_PAGE'} container item xs={12}
                                                                              >
                        <Link id={"BOTTOM_OF_PAGE"}><></>
                        </Link>
                        <Footer
                            pageFooter={footer.footerMenuRef}
                        />
                    </Grid></MuiThemeProvider>
                default:
                    return <span key={index}>Undefined section {columnLayoutContainer._type}</span>
            }
        }) ?? <></>
        }

    </Grid>
}

export default FooterBlockContentLayoutContainer
