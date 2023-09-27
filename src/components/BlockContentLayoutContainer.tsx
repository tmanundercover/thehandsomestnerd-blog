import React, {FunctionComponent} from 'react'
import BlockContent from '@sanity/block-content-to-react'
import {Card, Grid, Link} from '@material-ui/core'
import sanityClient from '../sanityClient'
import {blockSerializers} from '../common/sanityIo/BlockContentRenderer'
import {
    MfbtAboutProprietorSectionType, MfbtGallerySectionType,
    MfbtHeroContentSectionType, MfbtPaymentMethodSectionType, MfbtServicesSectionType, MfbtTeamSectionType,
    ThwAboutProprietorSectionType,
    MfbtContactUsSectionType,
    ThwHeroContentSectionType,
    ThwMottoSectionType,
    ThwPositivePsychologySectionType,
    ThwServiceItemType,
    ThwServicesSectionType,
    ThwWhyChooseUsSectionType, MfbtMixedListSectionType,
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
import MFBTAboutTheProprietor from "./mixed-feelings-by-t/MFBTAboutTheProprietor";
import MFBTPaymentMethodsSection from "./mixed-feelings-by-t/MFBTPaymentMethodsSection";
import MFBTTeamSection from "./mixed-feelings-by-t/MFBTTeamSection";
import MFBTGallerySection from "./mixed-feelings-by-t/MFBTGallerySection";
import MFBTServicesSection from "./mixed-feelings-by-t/MFBTServicesSection";
import MFBTContactUsSection from "./mixed-feelings-by-t/MFBTContactUsSection";
import MFBTMixedListSection from "./mixed-feelings-by-t/MFBTMixedListSection";

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
                    const thwCUSection: MfbtContactUsSectionType = columnLayoutContainer

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

                    return <Grid key={'mfbtPaymentSection'} container item xs={12}
                                 style={{backgroundColor: "white"}}>
                        <MFBTPaymentMethodsSection
                            sectionData={mfbtPaymentMethodsSection}
                        />
                    </Grid>
                case 'MfbtTeamSection':
                    const mfbtTeamSection: MfbtTeamSectionType = columnLayoutContainer

                    return <Grid key={'mfbtTeamSection'} container item xs={12} justifyContent='center'
                                 >
                        <MFBTTeamSection
                            sectionData={mfbtTeamSection}
                        />
                    </Grid>
                case 'MfbtServicesSection':
                    const mfbtServicesSection: MfbtServicesSectionType = columnLayoutContainer

                    return <Grid key={'mfbtServicesSection'} container item xs={12} justifyContent='center'
                                 style={{backgroundColor: "white"}}>
                        <MFBTServicesSection
                            sectionData={mfbtServicesSection}
                        />
                    </Grid>
                case 'MfbtGallerySection':
                    const mfbtGallerySection: MfbtGallerySectionType = columnLayoutContainer

                    return <Grid key={'mfbtGallerySection'} container item xs={12} justifyContent='center'
                                 style={{backgroundColor: "white"}}>
                        <MFBTGallerySection
                            sectionData={mfbtGallerySection}
                        />
                    </Grid>
                case 'MfbtMixedListSection':
                    const mfbtMixedListSection: MfbtMixedListSectionType = columnLayoutContainer

                    return <Grid key={'mfbtMixedListSection'} container item xs={12} justifyContent='center'
                                 style={{backgroundColor: "white"}}>
                        <a id="mfbtMixedListSection"></a>
                        <MFBTMixedListSection
                            sectionData={mfbtMixedListSection}
                        />
                    </Grid>
                case 'MfbtContactUsSection':
                    const mfbtCUSection: MfbtContactUsSectionType = columnLayoutContainer

                    return <Grid key={'mfbtContactUsSection'} container item xs={12} justifyContent='center'
                                 style={{backgroundColor: MixedFeelingsByTTheme.palette.background.paper, position:"relative"}}>
                        <a id="ContactUs" style={{top:-100, position:"absolute"}}></a>

                        <MFBTContactUsSection
                            sectionData={mfbtCUSection}
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
                default:
                    return <Grid container item></Grid>
                    // return <span key={index}>Undefined section {columnLayoutContainer._type}</span>
            }
        }) ?? <></>
        }

    </Grid>
}

export default BlockContentLayoutContainer
