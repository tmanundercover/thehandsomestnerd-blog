import React, {FunctionComponent} from 'react'
import BlockContent from '@sanity/block-content-to-react'
import {Card, Grid} from '@material-ui/core'
import sanityClient from '../sanityClient'
import {blockSerializers} from '../common/sanityIo/BlockContentRenderer'
import {useCommonStyles} from '../common/sanityIo/CommonStyles'
import IntroSection from './terrells-portfolio-sections/IntroSection'
import ProfileSection from './terrells-portfolio-sections/ProfileSection'
import SelectedWorksSection from './terrells-portfolio-sections/SelectedWorksSection'
import SkillsSection from './terrells-portfolio-sections/SkillsSection'
import BookMeSection from './terrells-portfolio-sections/BookMeSection'
import LatestNews from './terrells-portfolio-sections/LatestNews'
import ContactUs from './terrells-portfolio-sections/ContactUs'
import BlogSection from './terrells-portfolio-sections/BlogSection'
import SourceCode from './SourceCode'
import ModernServiceSection from './derm-sections/ModernServiceSection'
import SelectedWorksMockupsSectionTerrell from './terrells-portfolio-sections/SelectedWorksMockupsSectionTerrell'
import HeroContentSection from './aft-marketing/HeroContentSection'
import WhySwitchSection from './aft-marketing/WhySwitchSection'
import AboutAndaCardSection from './aft-marketing/AboutAndaCardSection'
import CryptoInYourPocketSection from './aft-marketing/CryptoInYourPocketSection'
import {
  AboutAndaCardSectionType,
  CryptoInYourPocketSectionType,
  HeroContentSectionType,
  ThwAboutProprietorSectionType,
  ThwHeroContentSectionType,
  ThwMottoSectionType,
  ThwPositivePsychologySectionType, ThwServicesSectionType, ThwWhyChooseUsSectionType,
  WhySwitchSectionType
} from "./BlockContentTypes";
import TransformHWTheme from "../theme/transform-hw/TransformHWTheme";
import useThwCommonStyles from "../common/sanityIo/ThwCommonStyles";
import ThwHeroContentSection from "./transform-hw/ThwHeroContentSection";
import ThwPositivePsychology from "./transform-hw/ThwPositivePsychology";
import ThwMottoSection from "./transform-hw/ThwMottoSection";
import AboutTheProprietorSection from "./transform-hw/AboutTheProprietorSection";
import ThwServicesSection from "./transform-hw/ThwServicesSection";
import ThwWhyChooseUsSection from "./transform-hw/ThwWhyChooseUsSection";

export type BlockContentLayoutContainerProps = { content?: any }

const BlockContentLayoutContainer: FunctionComponent<BlockContentLayoutContainerProps> = (props) => {
  const classes = useThwCommonStyles(TransformHWTheme)

  return <Grid container item>
    {props?.content?.map((columnLayoutContainer: any, index: number) => {
        switch (columnLayoutContainer._type) {
          case 'column1BlockContent':
            return <Grid key={index} container justifyContent='center' alignItems='stretch'>
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
            return <Grid key={index} container justifyContent='center' alignItems='stretch'>
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
          case 'heroImageNameCareer':
            return <IntroSection key={index} clientName={columnLayoutContainer.clientName}
                                 occupation={columnLayoutContainer.occupation}
                                 heroImage={columnLayoutContainer.heroImage}/>
          case 'aboutMe':
            return <ProfileSection key={index} profileImage={columnLayoutContainer.profileImage}
                                   aboutMeBody={columnLayoutContainer.aboutMeBody}
                                   specialties={columnLayoutContainer.specialties}/>
          case 'selectedWorks':
            return <SelectedWorksSection key={index} projects={columnLayoutContainer.portfolioItems}/>
          case 'modernServicesSection':
            return <ModernServiceSection/>
          case 'skillsSection':
            return <SkillsSection key={index} skillsHeading={columnLayoutContainer.skillsHeading}
                                  skillsText={columnLayoutContainer.skillsText} skills={columnLayoutContainer.skills}/>
          case 'selectedWorksAnimated':
            return <SelectedWorksMockupsSectionTerrell/>
          case 'bookMe':
            return <BookMeSection key={index} prompt={columnLayoutContainer.freelancePrompt}/>
          case 'contactUs':
            return <ContactUs key={index} youtube={columnLayoutContainer.youtube}
                              linkedIn={columnLayoutContainer.linkedIn}
                              facebook={columnLayoutContainer.facebook}
                              email={columnLayoutContainer.email}
                              address={columnLayoutContainer.address}
                              phone={columnLayoutContainer.phone}
                              twitter={columnLayoutContainer.twitter}/>
          case 'latestNewsSection':
            return <LatestNews key={index}/>
          case 'blogPostSection':
            return <BlogSection key={index}/>
          case 'reference':
            return <Grid key={index} container item xs={12} className={classes.layoutContainer}>
              <SourceCode reference={columnLayoutContainer}/>
            </Grid>
          //AFT SECTIONS
          case 'heroContentSection':
            const heroSection: HeroContentSectionType = columnLayoutContainer

            return <Grid key={index} container item xs={12}>
              <HeroContentSection
                sectionData={heroSection}
              />
            </Grid>
          case 'whySwitchSection':
            const whySwitchSection: WhySwitchSectionType = columnLayoutContainer

            return <Grid key={index} container item xs={12}>
              <WhySwitchSection
                sectionData={whySwitchSection}
              />
            </Grid>
          case 'aboutAndaCardSection':
            const aboutAndaCardSection: AboutAndaCardSectionType = columnLayoutContainer

            return <Grid key={index} container item xs={12}>
              <AboutAndaCardSection
                sectionData={aboutAndaCardSection}
              />
            </Grid>
          case 'cryptoInYourPocketSection':
            const cryptoInYourPocket: CryptoInYourPocketSectionType = columnLayoutContainer

            return <Grid key={index} container item xs={12}>
              <CryptoInYourPocketSection
                sectionData={cryptoInYourPocket}
              />
            </Grid>
            //HW SECTIONS
          case 'transformHeroContentSection':
            const thwHeroSection: ThwHeroContentSectionType = columnLayoutContainer

            return <Grid key={index} container item xs={12}>
              <ThwHeroContentSection
                  sectionData={thwHeroSection}
              />
            </Grid>
          case 'transformPositivePsychologySection':
            const thwPositivePsychologySection: ThwPositivePsychologySectionType = columnLayoutContainer

            return <Grid key={index} container item xs={12} justifyContent='center' style={{backgroundColor: TransformHWTheme.palette.background.paper}}>
              <ThwPositivePsychology
                  sectionData={thwPositivePsychologySection}
              />
            </Grid>
          case 'transformMottoSection':
            const thwMottoSection: ThwMottoSectionType = columnLayoutContainer

            return <Grid key={index} container item xs={12} justifyContent='center' style={{backgroundColor: TransformHWTheme.palette.background.paper}}>
              <ThwMottoSection
                  sectionData={thwMottoSection}
              />
            </Grid>
          case 'transformAboutProprietorSection':
            const thwProprietorSection: ThwAboutProprietorSectionType = columnLayoutContainer

            return <Grid key={index} container item xs={12} justifyContent='center' style={{backgroundColor: TransformHWTheme.palette.background.paper}}>
              <AboutTheProprietorSection
                  sectionData={thwProprietorSection}
              />
            </Grid>
          case 'transformServicesSection':
            const thwServicesSection: ThwServicesSectionType = columnLayoutContainer

            return <Grid key={index} container item xs={12} justifyContent='center' style={{backgroundColor: TransformHWTheme.palette.background.paper}}>
              <ThwServicesSection
                  sectionData={thwServicesSection}
              />
            </Grid>
          case 'transformWhyChooseUsSection':
            const thwWCUSection: ThwWhyChooseUsSectionType = columnLayoutContainer

            return <Grid key={index} container item xs={12} justifyContent='center' style={{backgroundColor: TransformHWTheme.palette.background.paper}}>
              <ThwWhyChooseUsSection
                  sectionData={thwWCUSection}
              />
            </Grid>
          default:
            return <span key={index}>Undefined section {columnLayoutContainer._type}</span>
        }
    }) ?? <></>
    }

  </Grid>
}

export default BlockContentLayoutContainer
