// import React, {FunctionComponent, MutableRefObject, Ref, useRef} from 'react'
// import {makeStyles, Theme} from '@material-ui/core/styles'
// import {Grid, Link, Typography} from '@material-ui/core'
// import theme from '../../common/Theme'
// import {SanityImageAssetDocument} from '@sanity/client'
// import {SanityColor} from './BlogSection'
// import {useHistory} from 'react-router-dom'
// import portfolio1 from './DisplayScreenMockupPack-cold-lead-transparent.png'
// import portfolio2 from './DisplayScreenMockupPack-AB-Site-transparent.png'
// import portfolio3 from './DisplayScreenMockupPack-macbook-transparent-cutout.png'
// import {motion, useAnimation} from 'framer-motion'
// import socialMediaDemoVideo from './socialMediaSimDemo.mp4'
// import motionDemoVideo from './motionDemo.mp4'
// import ctl from './sliced-macbook/macbook-corner-top-left.png'
// import ctr from './sliced-macbook/macbook-corner-top-right.png'
// import cbr from './sliced-macbook/macbook-corner-bottom-right.png'
// import cbl from './sliced-macbook/macbook-corner-bottom-left.png'
// import framebot from './sliced-macbook/macbook-frame-bottom.png'
// import frameleft from './sliced-macbook/macbook-frame-left.png'
// import frameright from './sliced-macbook/macbook-frame-right.png'
// import frametop from './sliced-macbook/macbook-frame-top.png'
// import dermKingPoster from './derm-king-video-poster.png'
// import socialMediaPoster from './live-sim-icon.png'
//
// export const useStyles = makeStyles((theme: Theme) => ({
//   root: {
//     width: '100vw',
//     backgroundColor: 'whitesmoke',
//     padding: theme.spacing(4, 4)
//   },
//   project: {
//     width: '340px',
//     height: '340px',
//     borderRadius: '6px',
//     padding: '32px',
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: 'cover'
//   },
//   projectsContainer: {
//     marginBottom: '70px',
//     padding: theme.spacing(0, 4)
//   },
//   tags: {
//     color: 'rgba(0,0,0,.4)'
//   },
//   title: {
//     fontSize: '18px',
//     fontWeight: 600,
//     color: 'whitesmoke'
//   },
//   aboutMe: {
//     fontWeight: 800,
//     letterSpacing: '10px',
//     lineHeight: 1.4,
//     fontSize: '30px',
//     textTransform: 'uppercase',
//     marginBottom: theme.spacing(5)
//   },
//   me: {
//     display: 'inline-block',
//     marginLeft: '8px'
//   }
// }))
//
// const useMacbookSlicedStyles = makeStyles((theme) => ({
//   wrapper: {
//     width: '500px',
//     background: '#ccc'
//   },
//
//   frame: {
//     backgroundImage: `url('${frametop}')`,
//     backgroundPosition: 'bottom right',
//     backgroundRepeat: "repeat-x",
//     backgroundSize: "contain"
//   },
//
//   corner: {
//     // width: '10px',
//     // height: '10px',
//     // position: 'absolute'
//     // background: 'red'
//   },
//
//   ctl: {
//     // top: 0,
//     // left: 0,
//     backgroundImage: `url(${ctl})`,
//     backgroundPosition: 'right bottom',
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "contain"
//   },
//
//   ctr: {
//     // top: 0,
//     // right: 0,
//     backgroundImage: `url(${ctr})`,
//     backgroundPosition: 'left bottom',
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "contain"
//   },
//
//   cbl: {
//     // bottom: 0,
//     // left: 0,
//     backgroundImage: `url(${cbl})`,
//     backgroundPosition: 'right bottom',
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "cover"
//   },
//
//   cbr: {
//     // bottom: 0,
//     // right: 0,
//     backgroundImage: `url(${cbr})`,
//     backgroundPosition: 'right bottom',
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "cover"
//
//   },
//
//   frame_right: {
//     // padding: '10px',
//     // width: "100%",
//     background: `url(${frameright})`,
//     backgroundRepeat: "repeat-y",
//     backgroundPosition: "top right",
//     backgroundSize: "contain"
//
//   },
//
//   frame_bot: {
//     backgroundImage: `url(${framebot})`,
//     backgroundRepeat: "no-repeat",
//     backgroundPosition: "top center",
//     backgroundSize: "cover",
//
//     minHeight: "29px"
//   },
//
//   frame_left: {
//     background: `url(${frameleft})`,
//     backgroundRepeat: "repeat-y",
//     backgroundPosition: "top right",
//     backgroundSize: "contain"
//   }
// }))
//
// const useModalStyles = makeStyles((theme: Theme) => ({
//     paper: {
//       position: 'absolute',
//       width: '98%',
//       height: '98%',
//       backgroundColor: 'whitesmoke',
//       border: '2px solid #000',
//       top: '1%',
//       left: '1%',
//       padding: '16px 32px 24px'
//     },
//     modalHeadlineIcon: {
//       fontSize: '73px'
//     },
//     modalChevron: {
//       color: '#F04242',
//       fontSize: '443px',
//       marginLeft: '-168px',
//       opacity: .1
//     }
//   })
// )
//
// export type SelectedWorksSectionProps = {}
//
// export type SanityPortfolioType = {
//   title: string,
//   slug: string,
//   name: string,
//   body: string,
//   subtitle: string,
//   categories: any[],
//   tag: string,
//   source: string,
//   coverImage: SanityImageAssetDocument,
//   linkToProd: string,
//   linkToDev: string,
//   iconBackground: SanityColor
// }
//
// const SelectedWorksMockupsSectionBackup: FunctionComponent = (props) => {
//   const classes = useStyles(theme)
//
//   const videoDemos:{ref: MutableRefObject<any>, link: string, poster:string|undefined, video: any, title:string, description:string}[] = [{
//     ref: useRef<any>(),
//     link: '/dermKing',
//     poster: undefined,
//     video: motionDemoVideo,
//     title: "Dynamic and Animated Pages",
//     description: "Typically websites display large amounts of text. Animation can make the page feel alive by adding " +
//       "motion to static text or to create a carousel of image elements."
//   },
//     {
//       ref: useRef<any>(),
//       link: 'https://socialmediasimulator-9a49b.web.app/',
//       poster: undefined,
//       video: socialMediaDemoVideo,
//       title: "Social Media Live Simulation",
//       description: "Ever wanted to have 10's of 1000's of followers, friends, associations on social media? This " +
//         "application creates the look and feel of a social media Influencer. Simply edit the default values to customize " +
//         "and screen record. "
//     }
//   ]
//
//   const sliceClasses = useMacbookSlicedStyles()
//
//   const history = useHistory()
//   const controls = useAnimation()
//
//   const leftSide = 1
//   const rightSide = 1
//   const middle = 10
//
//
//   return (
//     <Grid container className={classes.root} direction="column">
//       <Grid container item>
//         <Typography variant="h3" className={classes.aboutMe}>
//           Selected
//           <Typography component="span" variant="h3" className={`${classes.aboutMe} ${classes.me}`} color="primary">
//             Works
//           </Typography>
//         </Typography>
//       </Grid>
//       <Grid container item className={classes.projectsContainer} justify="center">
//         {
//           [''].map((image: any, imageIndex) => (
//             <Grid
//               key={`portfolio-project-${imageIndex}`}
//               item
//               container
//               spacing={8}
//             >
//               <Grid item xs={12} md={6}>
//                 <Link target="_blank" href={'https://assembledbrands.com'}
//                       style={{textDecoration: 'none', color: '#3D3D3D'}}><Grid item>
//                   <Grid container direction="column" alignItems="center">
//                     <motion.div
//                       initial={{scale: 1, opacity: .7}}
//                       whileHover={{scale: 1.5, opacity: 1}}
//                     >
//                       <img src={portfolio2} width="100%"/>
//                     </motion.div>
//                   </Grid>
//                   <Grid item><Typography variant="h4">Company Website</Typography></Grid>
//                   <Grid item><Typography variant="caption" style={{textAlign: 'center'}}>A financial technology company
//                     website. This includes SEO and
//                     newsletter list generation.</Typography></Grid>
//                 </Grid>
//                 </Link>
//               </Grid>
//               <Grid item xs={12} md={6}>
//                 <Link target="_blank" style={{textDecoration: 'none', color: '#3D3D3D'}} href={'/apply'}><Grid item>
//                   <Grid container direction="column" alignItems="center">
//                     <motion.div
//                       initial={{scale: 1, opacity: .7}}
//                       whileHover={{scale: 1.5, opacity: 1}}
//                     ><img src={portfolio1} width="100%"/></motion.div>
//                   </Grid>
//                   <Grid item><Typography variant="h4">Cold Lead Collection</Typography></Grid>
//                   <Grid item><Typography variant="caption" style={{textAlign: 'center'}}>A multi-step form that collects
//                     contact or company relevant information. This is perfect for a landing page.</Typography></Grid>
//                 </Grid>
//                 </Link>
//               </Grid>
//               {/*<Grid item xs={12} md={6}>*/}
//               {/*  <Link*/}
//               {/*    target="_blank"*/}
//               {/*    style={{textDecoration: 'none', color: '#3D3D3D'}}*/}
//               {/*    href={'https://socialmediasimulator-9a49b.web.app/'}>*/}
//               {/*    <Grid container direction="column" alignItems="center">*/}
//               {/*      <Grid item container>*/}
//               {/*        <motion.div*/}
//               {/*          style={{width: '100%', scale: .7}}*/}
//               {/*          initial={{scale: 1, opacity: .7}}*/}
//               {/*          onHoverEnd={() => controls.start('plain')}*/}
//               {/*          animate={controls}*/}
//               {/*          variants={{*/}
//               {/*            ['hover']: {scale: 1.2, opacity: 1},*/}
//               {/*            ['plain']: {scale: 1, opacity: .7}*/}
//               {/*          }}*/}
//               {/*        >*/}
//               {/*          <motion.div*/}
//               {/*            onHoverStart={() => controls.start('hover')}*/}
//               {/*            style={{*/}
//               {/*              width: '100%',*/}
//               {/*              // backgroundSize: 'cover',*/}
//               {/*              // backgroundImage: `url(${portfolio3})`*/}
//               {/*            }}*/}
//               {/*            animate={controls}*/}
//               {/*            variants={{*/}
//               {/*              ['hover']: {top: '106px', left: '160px'}*/}
//               {/*            }}*/}
//               {/*          >*/}
//               {/*            <Grid container item style={{ marginBottom:"32px", backgroundColor: "#fafafa"}}>*/}
//               {/*              <Grid container>*/}
//               {/*                <Grid container item>*/}
//               {/*                  <Grid container item xs={leftSide}><img src={ctl} style={{width: "100%"}}/></Grid>*/}
//               {/*                  <Grid container item xs={middle}><img src={frametop} style={{width: "100%"}}/></Grid>*/}
//               {/*                  <Grid container item xs={rightSide}><img src={ctr} style={{width: "100%"}}/></Grid>*/}
//               {/*                </Grid>*/}
//               {/*                <Grid container item alignItems="stretch">*/}
//               {/*                  <Grid item xs={leftSide} className={sliceClasses.frame_left}></Grid>*/}
//               {/*                  <Grid item xs={middle} container>*/}
//               {/*                    <video playsInline autoPlay muted loop poster="live-sim-icon.png" id="bgvid" style={{*/}
//               {/*                      position: 'relative',*/}
//               {/*                      width: '80%',*/}
//               {/*                      marginLeft: "32px"*/}
//               {/*                    }}>/!*<source src="polina.webm" type="video/webm">*!/*/}
//               {/*                      <source src={video} type="video/mp4"/>*/}
//               {/*                    </video>*/}
//               {/*                  </Grid>*/}
//               {/*                  <Grid item xs={rightSide} className={sliceClasses.frame_right}></Grid>*/}
//               {/*                </Grid>*/}
//               {/*                <Grid container  alignItems="stretch">*/}
//               {/*                  <Grid container item xs={leftSide}><img src={cbl} style={{width: "100%"}}/></Grid>*/}
//               {/*                  <Grid container item xs={middle}><img src={framebot} style={{width: "100%"}}/></Grid>*/}
//               {/*                  <Grid container item xs={rightSide}><img src={cbr} style={{width: "100%"}}/></Grid>*/}
//
//               {/*                </Grid>*/}
//               {/*              </Grid>*/}
//               {/*            </Grid>*/}
//               {/*          </motion.div>*/}
//
//               {/*        </motion.div>*/}
//               {/*      </Grid>*/}
//
//               {/*      <Grid item><Typography variant="h4">Social Media Live Simulator</Typography></Grid>*/}
//               {/*      <Grid item><Typography variant="caption" style={{textAlign: 'center'}}>Feel like you have Tens of*/}
//               {/*        thousands of followers with this Application. You can change the inputs to personalize the*/}
//               {/*        experience.</Typography></Grid>*/}
//
//               {/*    </Grid>*/}
//               {/*  </Link>*/}
//               {/*</Grid>*/}
//               {
//                 videoDemos.map((video, videoItemIndex)=><Grid item xs={12} md={6}>
//                 <Link
//                   target="_blank"
//                   style={{textDecoration: 'none', color: '#3D3D3D'}}
//                   href={video.link}>
//                   <Grid container direction="column" alignItems="center">
//                     <Grid item container>
//                       <motion.div
//                         style={{width: '100%', scale: .7}}
//                         initial={{scale: 1, opacity: .7}}
//                         onHoverEnd={() => {
//                           video.ref.current.pause()
//                           controls.start('plain'+videoItemIndex)
//                         }}
//                         animate={controls}
//                         variants={{
//                           ['hover'+videoItemIndex]: {scale: 1.2, opacity: 1},
//                           ['plain'+videoItemIndex]: {scale: 1, opacity: .7}
//                         }}
//                       >
//                         <motion.div
//                           onHoverStart={() => {
//                             video.ref.current.play()
//                             controls.start('hover'+videoItemIndex)
//                           }}
//                           style={{
//                             width: '100%',
//                           }}
//                           animate={controls}
//                           variants={{
//                             ['hover'+videoItemIndex]: {top: '106px', left: '160px'}
//                           }}
//                         >
//                           <Grid container item style={{ marginBottom:"32px"}}>
//                             <Grid container>
//                               <Grid container item>
//                                 <Grid container item xs={leftSide}><img src={ctl} style={{width: "100%"}}/></Grid>
//                                 <Grid container item xs={middle}><img src={frametop} style={{width: "100%"}}/></Grid>
//                                 <Grid container item xs={rightSide}><img src={ctr} style={{width: "100%"}}/></Grid>
//                               </Grid>
//                               <Grid container item alignItems="stretch">
//                                 <Grid item xs={leftSide} className={sliceClasses.frame_left}></Grid>
//                                 <Grid item xs={middle}>
//                                   <video ref={video.ref} playsInline muted loop poster={video.poster} id="bgvid" style={{
//                                     position: 'relative',
//                                     width: '100%'
//                                   }}>{/*<source src="polina.webm" type="video/webm">*/}
//                                     <source src={video.video} type="video/mp4"/>
//                                   </video>
//                                 </Grid>
//                                 <Grid item xs={rightSide} className={sliceClasses.frame_right}></Grid>
//                               </Grid>
//                               <Grid container  alignItems="stretch">
//                                 <Grid container item xs={leftSide}><img src={cbl} style={{width: "100%"}}/></Grid>
//                                 <Grid container item xs={middle}><img src={framebot} style={{width: "100%"}}/></Grid>
//                                 <Grid container item xs={rightSide}><img src={cbr} style={{width: "100%"}}/></Grid>
//
//                               </Grid>
//                             </Grid>
//                           </Grid>
//                         </motion.div>
//
//                       </motion.div>
//                     </Grid>
//
//                     <Grid item><Typography variant="h4">{video.title}</Typography></Grid>
//                     <Grid item><Typography variant="caption" style={{textAlign: 'center'}}>{video.description}</Typography></Grid>
//
//                   </Grid>
//                 </Link>
//               </Grid>)
//               }
//
//
//
//             </Grid>
//           ))
//         }
//       </Grid>
//     </Grid>
//   )
// }
//
// export default SelectedWorksMockupsSectionBackup
export {}