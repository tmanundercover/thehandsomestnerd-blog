// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
import category from './category'
import post from './post'
import author from './author'
import menuContainer from './menuContainer'
import menuGroup from './menuGroup'
import menuItem from './menuItem'
import homePage from './homePage'
import portfolioItem from './sections/portfolioItem'
import skill from './sections/skill'
import latestNews from './latestNews'
import column1BlockContent from './column1BlockContent'
import column2BlockContent from './column2BlockContent'
import contentContainer from './contentContainer'
import lineBreak from './lineBreak'
import HeroImageNameCareer from './sections/HeroImageNameCareer'
import AboutMe from './sections/AboutMe'
import SelectedWorks from './sections/SelectedWorks'
import SkillsSection from './sections/SkillsSection'
import BookMe from './sections/BookMe'
import ContactUs from './sections/ContactUs'
import LatestNewSection from './sections/LatestNewsSection'
import BlogPostSection from './sections/BlogPostSection'
import sourceCode from './sourceCode'
import repository from './repository'
import ImageGallery from './ImageGallery'
import PointOfInterest from './derm-sections/poi/PointOfInterest'
import PointOfInterestSection from './derm-sections/poi/PointOfInterestSection'
import abEvergreenPage from './ab/abEvergreenPage'
import abForm from './ab/abForm'
import abLeadType from './ab/abLeadType'
import communityPage from './ab/communityPage'
import gradient from './ab/gradient'
import heroImageWithText from './ab/heroImageWithText'
import imageCarousel from './imageCarousel'
import ourServicesSection from './ab/ourServicesSection'
import ourStoryPage from './ab/ourStoryPage'
import solutions from './ab/solutions'
import weWorkWith from './ab/weWorkWith'
import landingPage from './ab/landingPage'
import abHomepage from './ab/abHomePage'
import imageAsset from './imageAsset'
import modernServicesSection from './derm-sections/modern-services/ModernServicesSection'
import modernService from './derm-sections/modern-services/ModernService'
import SelectedWorksAnimated from './sections/SelectedWorksAnimated'
import csvToProcessFile from './csvToProcessFile'
import csvToProcess from './csvToProcess'
import design from './design'
import designToProcess from './designToProcess'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    menuContainer,
    menuGroup,
    menuItem,
    post,
    author,
    skill,
    category,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    homePage,
    portfolioItem,
    latestNews,
    column1BlockContent,
    column2BlockContent,
    contentContainer,
    lineBreak,
    HeroImageNameCareer,
    AboutMe,
    SelectedWorks,
    SelectedWorksAnimated,
    SkillsSection,
    BookMe,
    LatestNewSection,
    ContactUs,
    BlogPostSection,
    sourceCode,
    repository,
    ImageGallery,
    PointOfInterest,
    PointOfInterestSection,
    // ab
    abEvergreenPage,
    abForm,
    abLeadType,
    communityPage,
    gradient,
    heroImageWithText,
    abHomepage,
    ourServicesSection,
    ourStoryPage,
    solutions,
    weWorkWith,
    landingPage,
    imageCarousel,
    imageAsset,
    modernServicesSection,
    modernService,
    //firebasefunctions,
    csvToProcessFile,
    csvToProcess,
    design,
    designToProcess
  ]),
})
