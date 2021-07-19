import React, {FunctionComponent} from 'react'
import BlockContent from '@sanity/block-content-to-react'
import {Grid} from '@material-ui/core'
import sanityClient from '../sanityClient'
import {blockSerializers} from '../common/sanityIo/BlockContentRenderer'
import {useCommonStyles} from '../common/sanityIo/CommonStyles'
import theme from '../common/Theme'
import IntroSection from './terrells-portfolio-sections/IntroSection'
import ProfileSection from './terrells-portfolio-sections/ProfileSection'
import SelectedWorksSection from './terrells-portfolio-sections/SelectedWorksSection'
import SkillsSection from './terrells-portfolio-sections/SkillsSection'
import BookMeSection from './terrells-portfolio-sections/BookMeSection'
import LatestNews from './terrells-portfolio-sections/LatestNews'
import ContactUs from './terrells-portfolio-sections/ContactUs'
import BlogSection from './terrells-portfolio-sections/BlogSection'
import SourceCode from './SourceCode'

export type BlockContentLayoutContainerProps = { content?: any }

const BlockContentLayoutContainer: FunctionComponent<BlockContentLayoutContainerProps> = (props) => {
  const classes = useCommonStyles(theme)

  return <Grid container>{props?.content?.content?.map((columnLayoutContainer: any, index:number) => {
    switch (columnLayoutContainer._type) {
      case 'column1BlockContent':
        return <Grid key={index} container item xs={12} className={classes.layoutContainer}>
          <Grid item xs={12}>
            <BlockContent
              blocks={columnLayoutContainer.content}
              serializers={blockSerializers}
              projectId={sanityClient.config().projectId}
              dataset={sanityClient.config().dataset}
            />
          </Grid>
        </Grid>
      case 'column2BlockContent':
        return <Grid key={index} container item xs={12} className={classes.layoutContainer}>
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
      case 'heroImageNameCareer':
        return <IntroSection  key={index} clientName={columnLayoutContainer.clientName} occupation={columnLayoutContainer.occupation}
                             heroImage={columnLayoutContainer.heroImage}/>
      case 'aboutMe':
        return <ProfileSection key={index} profileImage={columnLayoutContainer.profileImage}
                               aboutMeBody={columnLayoutContainer.aboutMeBody}
                               specialties={columnLayoutContainer.specialties}/>
      case 'selectedWorks':
        return <SelectedWorksSection key={index} projects={columnLayoutContainer.portfolioItems}/>
      case 'skillsSection':
        return <SkillsSection key={index} skillsHeading={columnLayoutContainer.skillsHeading}
                              skillsText={columnLayoutContainer.skillsText} skills={columnLayoutContainer.skills}/>
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
      default:
        return <span key={index}>Undefined section {columnLayoutContainer._type}</span>
    }
  }) ?? <></>
  }
  </Grid>
}

export default BlockContentLayoutContainer
