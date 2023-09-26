import React, {FunctionComponent} from 'react'
import BlockContent from '@sanity/block-content-to-react'
import {Card, Grid, Link} from '@material-ui/core'
import sanityClient from '../sanityClient'
import {blockSerializers} from '../common/sanityIo/BlockContentRenderer'
import {
    HowItWorksSectionType,
    MfbtAboutProprietorSectionType,
    MfbtHeroContentSectionType,
    MfbtPaymentMethodSectionType,
    PortfolioSectionType,
    ResumeBioSectionType,
    ResumeContactUsSectionType,
    ResumeEducationSectionType,
    ResumeExperienceSectionType,
    ResumeFeedbackSectionType,
    ResumePortfolioSectionType,
    ResumeSkillSectionType,
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
} from "./BlockContentTypes";
import MixedFeelingsByTTheme from "../theme/MixedFeelingsByTTheme";
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
import MfbtHeroContentSection from "./mixed-feelings-by-t/MfbtHeroContentSection";
import MfbtAboutTheProprietor from "./mixed-feelings-by-t/MFBTAboutTheProprietor";
import MFBTPaymentMethodsSection from "./mixed-feelings-by-t/MFBTPaymentMethodsSection";
import ResumeBio from "./my-digital-resume/ResumeBio";
import ResumeExperienceSection from "./my-digital-resume/ResumeExperienceSection";
import ResumePortfolioSection from "./my-digital-resume/ResumePortfolioSection";
import ResumeSkillsSection from "./my-digital-resume/ResumeSkillsSection";
import ResumeFeedbackSection from "./my-digital-resume/ResumeFeedbackSection";
import ResumeContactUsSection from "./my-digital-resume/ResumeContactUsSection";
import ResumeEducationSection from "./my-digital-resume/ResumeEducationSection";
import WebDevHeroContentSection from "./web-dev-site/WebDevHeroContentSection";
import WebDevStatsCounterSection from "./web-dev-site/WebDevStatsCounterSection";
import WebDevServicesSection from "./web-dev-site/WebDevServicesSection";
import WebDevAboutUsSection from "./web-dev-site/WebDevAboutUsSection";
import WebDevTestimonialsSection from "./web-dev-site/WebDevTestimonialsSection";
import WebDevHowItWorksSection from "./web-dev-site/WebDevHowItWorksSection";
import WebDevPortfolioSection from "./web-dev-site/WebDevPortfolioSection";

export type BlockContentLayoutContainerProps = {
    content?: any,
    homePage: SanityHomePage
}

const BlockContentLayoutContainer: FunctionComponent<BlockContentLayoutContainerProps> = (props) => {
    const classes = useThwCommonStyles()

    return <Grid container item>
        {props?.content?.map((columnLayoutContainer: any, index: number) => {
            switch (columnLayoutContainer._type) {
                case 'column1BlockContent':
                    return <Grid key={'column1BlockContent'} container justifyContent='center' alignItems='stretch'>
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
                    return <Grid key={'column2BlockContent'} container justifyContent='center' alignItems='stretch'>
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
                case 'transformHeroContentSection':
                    const thwHeroSection: ThwHeroContentSectionType = columnLayoutContainer

                    return <Grid key={'transformHeroContentSection'} container item xs={12}>
                        <Link id={"TOP_OF_PAGE"}><></>
                        </Link>
                        <ThwHeroContentSection
                            sectionData={thwHeroSection}
                        />
                    </Grid>
                case 'transformServiceItem':
                    const thwServiceEducationPage: ThwServiceItemType = columnLayoutContainer

                    // const fetchedServiceItem =

                    return <Grid key={'transformServiceItem'} container item xs={12}>
                        <Link id={"TOP_OF_PAGE"}><></>
                        </Link>
                        <ThwServicesEducationPage
                            serviceData={thwServiceEducationPage}
                        />
                    </Grid>
                case 'transformPositivePsychologySection':
                    const thwPositivePsychologySection: ThwPositivePsychologySectionType = columnLayoutContainer

                    return <Grid key={'transformPositivePsychologySection'} container item xs={12} justifyContent='center'
                                 style={{backgroundColor: MixedFeelingsByTTheme.palette.background.paper}}>
                        <Link id={"ABOUT_US"} style={{position: "relative", top: -80}}><></>
                        </Link>
                        <ThwPositivePsychology
                            sectionData={thwPositivePsychologySection}
                        />
                    </Grid>
                case 'transformMottoSection':
                    const thwMottoSection: ThwMottoSectionType = columnLayoutContainer

                    return <Grid key={'transformMottoSection'} container item xs={12} justifyContent='center'
                                 style={{backgroundColor: MixedFeelingsByTTheme.palette.background.paper}}>
                        <ThwMottoSection
                            sectionData={thwMottoSection}
                        />
                    </Grid>
                case 'transformAboutProprietorSection':
                    const thwProprietorSection: ThwAboutProprietorSectionType = columnLayoutContainer

                    return <Grid key={'transformAboutProprietorSection'} container item xs={12} justifyContent='center'
                                 style={{backgroundColor: MixedFeelingsByTTheme.palette.background.paper}}>
                        <Link id={"ABOUT_PROPRIETOR"} style={{position: "relative", top: -80}}><></>
                        </Link>
                        <AboutTheProprietorSection
                            sectionData={thwProprietorSection}
                        />
                    </Grid>
                case 'transformServicesSection':
                    const thwServicesSection: ThwServicesSectionType = columnLayoutContainer

                    return <Grid key={'transformServicesSection'} container item xs={12} justifyContent='center'
                                 style={{backgroundColor: MixedFeelingsByTTheme.palette.background.paper}}>
                        <Link id={"SERVICES"} style={{position: "relative", top: -80}}><></>
                        </Link>
                        <ThwServicesSection
                            sectionData={thwServicesSection}
                        />
                    </Grid>
                case 'transformWhyChooseUsSection':
                    const thwWCUSection: ThwWhyChooseUsSectionType = columnLayoutContainer

                    return <Grid key={'transformWhyChooseUsSection'} container item xs={12} justifyContent='center'
                                 style={{backgroundColor: MixedFeelingsByTTheme.palette.background.paper}}>
                        <ThwWhyChooseUsSection
                            sectionData={thwWCUSection}
                        />
                    </Grid>
                case 'transformContactUsSection':
                    const thwCUSection: ThwContactUsSectionType = columnLayoutContainer

                    return <Grid key={'transformContactUsSection'} container item xs={12} justifyContent='center'
                                 style={{backgroundColor: MixedFeelingsByTTheme.palette.background.paper}}>
                        <ThwContactUsSection
                            sectionData={thwCUSection}
                        />
                    </Grid>
                case 'mfbtHeroContentSection':
                    const mfbtHeroSection: MfbtHeroContentSectionType = columnLayoutContainer

                    return <Grid key={'mfbtContactUsSection'} container item xs={12} justifyContent='center'
                                 style={{backgroundColor: MixedFeelingsByTTheme.palette.background.paper}}>
                        <MfbtHeroContentSection
                            sectionData={mfbtHeroSection}
                        />
                    </Grid>
                case 'mfbtAboutProprietorSection':
                    const mfbtAboutTheProprietorSection: MfbtAboutProprietorSectionType = columnLayoutContainer

                    return <Grid key={'mfbtAboutProprietorSection'} container item xs={12} justifyContent='center'
                                 style={{backgroundColor: MixedFeelingsByTTheme.palette.background.paper}}>
                        <MfbtAboutTheProprietor
                            sectionData={mfbtAboutTheProprietorSection}
                        />
                    </Grid>
                case 'mfbtPaymentMethods':
                    const mfbtPaymentMethodsSection:  MfbtPaymentMethodSectionType = columnLayoutContainer

                    return <Grid key={'mfbtAboutProprietorSection'} container item xs={12} justifyContent='center'
                                 style={{backgroundColor: "white"}}>
                        <MFBTPaymentMethodsSection
                            sectionData={mfbtPaymentMethodsSection}
                        />
                    </Grid>
                // case 'menuContainer':
                //     if (columnLayoutContainer.slug.current.includes('header')) {
                //         const pageHeader: SanityMenuContainer = columnLayoutContainer
                //         return <Grid container item xs={12} key='transform-hw-header'>
                //             <ThwHeader menuSlug={pageHeader.slug?.current}/>
                //         </Grid>
                //     } else {
                //         const pageFooter: SanityMenuContainer = columnLayoutContainer
                //         return <Grid container item xs={12} key='transform-hw-footer'>
                //             <ThwFooter footerMenuSlug={pageFooter.slug?.current} homePage={props.homePage}/>
                //         </Grid>
                //     }
                case 'ResumeBioSection':
                    const resumeBioSection: ResumeBioSectionType = columnLayoutContainer

                    return <Grid key={'ResumeBioSection'} container item xs={12} justifyContent='center' >
                        <Link id={"TOP_OF_PAGE"} style={{position: "relative", top: -80}}><></></Link>
                        <Link id={"BIO"} style={{position: "relative", top: -80}}><></></Link>

                        <ResumeBio
                            homePage={props.homePage}
                            sectionData={resumeBioSection}
                        />
                    </Grid>
                case 'ResumeSkillSection':
                    const resumeSkillSection: ResumeSkillSectionType = columnLayoutContainer

                    return <Grid key={'ResumeSkillSection'} container item xs={12} justifyContent='center'>
                        <Link id={"SKILLS"} style={{position: "relative", top: -80}}><></></Link>

                        <ResumeSkillsSection
                            sectionData={resumeSkillSection}
                        />
                    </Grid>
                case 'ResumeExperienceSection':
                    const resumeExperienceSection: ResumeExperienceSectionType = columnLayoutContainer

                    return <Grid key={'ResumeExperienceSection'} container item xs={12} justifyContent='center'>
                        <Link id={"EXPERIENCE"} style={{position: "relative", top: -80}}><></></Link>

                        <ResumeExperienceSection
                            sectionData={resumeExperienceSection}
                        />
                    </Grid>
                case 'ResumeEducationSection':
                    const resumeEducationSection: ResumeEducationSectionType = columnLayoutContainer

                    return <Grid key={'ResumeEducationSection'} container item xs={12} justifyContent='center'>
                        <Link id={"EDUCATION"} style={{position: "relative", top: -80}}><></></Link>

                        <ResumeEducationSection
                            sectionData={resumeEducationSection}
                        />
                    </Grid>
                case 'ResumeFeedbackSection':
                    const resumeFeedbackSection: ResumeFeedbackSectionType = columnLayoutContainer

                    return <Grid key={'ResumeFeedbackSection'} container item xs={12} justifyContent='center'>
                        <Link id={"FEEDBACK"} style={{position: "relative", top: -80}}><></></Link>

                        <ResumeFeedbackSection
                            sectionData={resumeFeedbackSection}
                        />
                    </Grid>
                case 'ResumePortfolioSection':
                    const resumePortfolioSection: ResumePortfolioSectionType = columnLayoutContainer

                    return <Grid key={'ResumePortfolioSection'} container item xs={12} justifyContent='center'>
                        <Link id={"PORTFOLIO"} style={{position: "relative", top: -80}}><></></Link>

                        <ResumePortfolioSection
                            sectionData={resumePortfolioSection}
                        />
                    </Grid>
                case 'ResumeContactUsSection':
                    const resumeContactUsSection: ResumeContactUsSectionType = columnLayoutContainer

                    return <Grid key={'ResumeContactUsSection'} container item xs={12} justifyContent='center'>
                        <Link id={"CONTACT"} style={{position: "relative", top: -80}}><></></Link>

                        <ResumeContactUsSection
                            sectionData={resumeContactUsSection}
                        />
                    </Grid>
                case 'WebDevHeroContentSection':
                    const webDevHeroSection: WebDevHeroContentSectionType = columnLayoutContainer

                    return <Grid key={'webDevHeroContentSection'} container item xs={12}>
                        <Link id={"TOP_OF_PAGE"}><></></Link>
                        <WebDevHeroContentSection
                            sectionData={webDevHeroSection}
                        />
                    </Grid>
                case 'WebDevStatsCounterSection':
                    const webDevStatsCounterSection: WebDevStatsCounterSectionType = columnLayoutContainer

                    return <Grid key={'webDevStatsCounterSection'} container item xs={12}>
                        <WebDevStatsCounterSection
                            sectionData={webDevStatsCounterSection}
                        />
                    </Grid>
                case 'WebDevAboutUsSection':
                    const webDevAboutUsSection: WebDevAboutUsSectionType = columnLayoutContainer

                    return <Grid key={'webDevAboutUsSection'} container item xs={12}>
                        <Link id={"ABOUT_US"}><></></Link>
                        <WebDevAboutUsSection
                            sectionData={webDevAboutUsSection}
                        />
                    </Grid>
                case 'ServicesSection':
                    const webDevServicesSection: PortfolioSectionType = columnLayoutContainer

                    return <Grid key={'webDevServicesSection'} container item xs={12}>
                        <Link id={"SERVICES"}><></></Link>

                        <WebDevServicesSection
                            sectionData={webDevServicesSection}
                        />
                    </Grid>
                case 'PortfolioSection':
                    const webDevPortfolioSection: PortfolioSectionType = columnLayoutContainer

                    return <Grid key={'webDevPortfolioSection'} container item xs={12}>
                        <Link id={"PORTFOLIO"}><></></Link>

                        <WebDevPortfolioSection
                            sectionData={webDevPortfolioSection}
                        />
                    </Grid>
                case 'TestimonialsSection':
                    const webDevTestimonialsSection: WebDevTestimonialsSectionType = columnLayoutContainer

                    return <Grid key={'webDevTestimonialsSection'} container item xs={12}>
                        <Link id={"TESTIMONIALS"}><></></Link>

                        <WebDevTestimonialsSection
                            sectionData={webDevTestimonialsSection}
                        />
                    </Grid>
                case 'WebDevHowItWorksSection':
                    const webDevHowItWorksSection: HowItWorksSectionType = columnLayoutContainer

                    return <Grid key={'webDevHowItWorksSection'} container item xs={12}>
                        <Link id={"HOW_IT_WORKS"}><></></Link>
                        <WebDevHowItWorksSection
                            sectionData={webDevHowItWorksSection}
                        />
                    </Grid>
                default:
                    return <Grid container item></Grid>
                    // return <span key={index}>Undefined section {columnLayoutContainer._type}</span>
            }
        }) ?? <></>
        }

    </Grid>
}

export default BlockContentLayoutContainer
