// First, we must import the schema creator
// import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
// import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
import menuContainer from './menuContainer'
import menuGroup from './menuGroup'
import menuItem from './menuItem'
import homePage from './homePage'
import column1BlockContent from './column1BlockContent'
import column2BlockContent from './column2BlockContent'
import contentContainer from './contentContainer'
import lineBreak from './lineBreak'
import heroContentSection from './sections/aft/HeroContentSection'
import whySwitchSection from './sections/aft/why-switch/WhySwitchSection'
import whySwitchReason from './sections/aft/why-switch/WhySwitchReason'
import aboutAndaCardSection from './sections/aft/AboutAndaCardSection'
import cryptoInYourPocketSection from './sections/aft/CryptoInYourPocketSection'
import structuredDataProduct from './sections/aft/structured-data/StructuredDataProduct'
import structuredDataOffer from './sections/aft/structured-data/StructuredDataOffer'
import structuredDataSeller from './sections/aft/structured-data/StructuredDataSeller'
import structuredDataEvent from './sections/aft/structured-data/StructuredDataEvent'
import coldLead from "./coldLead";
import ThwHeroContentSection from "./sections/transform-hw/ThwHeroContentSection";
import ThwPositivePsychology from "./sections/transform-hw/ThwPositivePsychology";
import ThwMottoSection from "./sections/transform-hw/ThwMottoSection";
import ThwAboutProprietor from "./sections/transform-hw/ThwAboutProprietor";
import ThwServicesSection from "./sections/transform-hw/services/ThwServicesSection";
import transformServiceItem from "./sections/transform-hw/services/transformServiceItem";
import ThwWhyChooseUsSection from "./sections/transform-hw/why-choose-us/ThwWhyChooseUsSection";
import transformWhyChooseUsItem from "./sections/transform-hw/why-choose-us/transformWhyChooseUsItem";
import ThwContactUs from "./sections/transform-hw/ThwContactUsSection";
import ThwUnderConstructionPage from "./sections/transform-hw/ThwUnderConstructionPage";
import serviceAmenity from "./sections/transform-hw/services/serviceAmenity";
import proprietorService from "./sections/transform-hw/proprietorService";
import modal from "./modal/Modal";
import faq from "./modal/faq";
import mfbtHeroContentSection from "./sections/mixed-feelings-by-t/MfbtHeroContentSection";
import mfbtAboutProprietor from "./sections/mixed-feelings-by-t/MfbtAboutProprietor";
import mfbtPaymentMethods from "./sections/mixed-feelings-by-t/MfbtPaymentMethods";
import ResumeBioSection from "./sections/resume/resume-bio/ResumeBioSection";
import ResumeFile from "./sections/resume/resume-bio/ResumeFile";
import ResumeSkillSet from "./sections/resume/resume-skills/ResumeSkillSet";
import ResumeSkill from "./sections/resume/resume-skills/ResumeSkill";
import ResumeSkillsSection from "./sections/resume/resume-skills/ResumeSkillsSection";
import ResumeExperience from "./sections/resume/resume-experience/ResumeExperience";
import ResumeExperienceSection from "./sections/resume/resume-experience/ResumeExperienceSection";
import ResumeEducationSection from "./sections/resume/resume-education/ResumeEducationSection";
import ResumeEducation from "./sections/resume/resume-education/ResumeEducation";
import ResumeFeedback from "./sections/resume/resume-feedback/ResumeFeedback";
import ResumeFeedbackSection from "./sections/resume/resume-feedback/ResumeFeedbackSection";
import ResumeContactUsSection from "./sections/resume/resume-contact-us/ResumeContactUsSection";
import ResumePortfolioItem from "./sections/resume/resume-portfolio/ResumePortfolioItem";
import ResumePortfolioSection from "./sections/resume/resume-portfolio/ResumePortfolioSection";
import WebDevHeroContentSection from "./sections/web-dev/WebDevHeroContentSection";
import WebDevStatistic from "./sections/web-dev/WebDevStatistic";
import WebDevStatsCounterSection from "./sections/web-dev/WebDevStatsCounterSection";
import WebDevAboutUs from "./sections/web-dev/WebDevAboutUs";
import headerContentContainer from "./headerContentContainer";
import footerContentContainer from "./footerContentContainer";
import HeaderSection from "./sections/HeaderSection";
import FooterSection from "./sections/web-dev/FooterSection";
import DevelopmentHeaderSection from "./sections/DevelopmentHeaderSection";
import DevelopmentFooterSection from "./sections/web-dev/DevelopmentFooterSection";

// Then we give our schema to the builder and provide the result to Sanity
export default [
    // The following are document types which will appear
    // in the studio.
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    menuContainer,
    menuGroup,
    menuItem,
    homePage,
    blockContent,
    contentContainer,
    lineBreak,
    column1BlockContent,
    column2BlockContent,
    // HomePageSections
    heroContentSection,
    whySwitchSection,
    whySwitchReason,
    aboutAndaCardSection,
    cryptoInYourPocketSection,
    // structured Data
    structuredDataProduct,
    structuredDataOffer,
    structuredDataSeller,
    structuredDataEvent,
    coldLead,
    // transform hw sections
    ThwHeroContentSection,
    ThwPositivePsychology,
    ThwMottoSection,
    ThwAboutProprietor,
    ThwServicesSection,
    transformServiceItem,
    ThwWhyChooseUsSection,
    transformWhyChooseUsItem,
    ThwContactUs,
    ThwUnderConstructionPage,
    serviceAmenity,
    proprietorService,
    modal,
    faq,
    // mfbt
    mfbtHeroContentSection,
    mfbtAboutProprietor,
    mfbtPaymentMethods,
    ResumeBioSection,
    ResumeFile,
    ResumeSkillSet,
    ResumeSkill,
    ResumeSkillsSection,
    ResumeExperience,
    ResumeExperienceSection,
    ResumeEducationSection,
    ResumeEducation,
    ResumeFeedback,
    ResumeFeedbackSection,
    ResumeContactUsSection,
    ResumePortfolioItem,
    ResumePortfolioSection,
    WebDevHeroContentSection,
    WebDevStatistic,
    WebDevStatsCounterSection,
    WebDevAboutUs,
    headerContentContainer,
    footerContentContainer,
    HeaderSection,
    DevelopmentHeaderSection,
    DevelopmentFooterSection,
    FooterSection,

]
