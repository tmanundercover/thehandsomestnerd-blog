import React, {FunctionComponent, useContext} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {Grid, ImageList, ImageListItem, Tooltip, Typography} from '@material-ui/core'
import {MfbtGallerySectionType, MfbtMixedListSectionType} from "../BlockContentTypes";
import MixedFeelingsByTTheme from "../../theme/MixedFeelingsByTTheme";
import MediaQueriesContext from "../media-queries-context/MediaQueriesContext";
import {urlFor} from "../block-content-ui/static-pages/cmsStaticPagesClient";
import EyeIcon from "@sanity/types/parts/part.@sanity/components/build-snapshot/components/icons/Eye";
import {ArrowLeft, ArrowRight, RemoveRedEye} from "@material-ui/icons";

export const useStyles = makeStyles((theme: Theme) => ({
    preroot: {
        minHeight: '521px',
        backgroundColor: "black",
        color: "white"
        // paddingLeft: -theme.spacing(-5),
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    imageList: {
        flexWrap: 'nowrap',
        width: "100%",
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    contentBullets: {
        // border: "1px solid black"
        marginBottom: theme.spacing(5)
    }
}))


interface IProps {
    sectionData: MfbtMixedListSectionType
}

const THUMBNAILSIZE = 150
const MAINIMAGESIZE = 400

const MFBTMixedListSection: FunctionComponent<IProps> = (props) => {
    const classes = useStyles(MixedFeelingsByTTheme)
    const mediaQueriesContext = useContext(MediaQueriesContext)

    const [currentIndex, setCurrentIndex] = React.useState<number>(0);
    React.useEffect(() => {
        if (props.sectionData.mixedList[0]) {
            setCurrentIndex(0);
        }
    }, [props.sectionData.mixedList])

    // React.useEffect(() => {
    //     if (currentIndex >= props.sectionData.mixedList.length) {
    //         setCurrentIndex(0)
    //     }
    //     if (currentIndex < 0) {
    //         setCurrentIndex(props.sectionData.mixedList.length)
    //     }
    //
    // }, [currentIndex])

    const [hoveredImage, setHoveredImage] = React.useState<number>(-1)
    return (
        <Grid container item className={classes.preroot} xs={mediaQueriesContext.xsOnly ? 12 : 12}
              style={mediaQueriesContext.xsOnly ? {paddingBottom: 32, paddingTop: 32} : {
                  paddingBottom: MixedFeelingsByTTheme.spacing(10),
                  paddingTop: MixedFeelingsByTTheme.spacing(10),
              }}>
            <Grid container item alignContent='center' justifyContent='center'
                  style={{paddingBottom: mediaQueriesContext.xsOnly ? MixedFeelingsByTTheme.spacing(3) : MixedFeelingsByTTheme.spacing(4)}}>
                <Typography variant='h4' align='center' color='inherit' gutterBottom>{props.sectionData.contentTitle}</Typography>
            </Grid>
            <Grid container item justifyContent='center'>
                <Grid container item alignContent='center' justifyContent='center'
                      >
                    <Typography variant='h5' align='center'
                                color='primary'>{props.sectionData.mixedList[currentIndex].categoryName}</Typography>
                </Grid>
                <Grid xs={6} container item alignContent='space-between' alignItems='center'>
                    <Grid xs={1} item onClick={() => {
                        if(currentIndex > 0) {
                            setCurrentIndex((state) => state - 1)
                        } else{

                        setCurrentIndex(props.sectionData.mixedList.length - 1)
                        }
                    }}>
                        <Tooltip title={
                            <Grid item>
                                <Typography variant='caption' >previous</Typography>
                                <Typography variant='subtitle1' style={{color: "black"}}>{currentIndex - 1>= 0?props.sectionData.mixedList[currentIndex-1].categoryName:props.sectionData.mixedList[props.sectionData.mixedList.length - 1].categoryName}</Typography>
                                <Typography  variant='caption'>{currentIndex-1>=0? props.sectionData.mixedList[currentIndex-1].drinkName:props.sectionData.mixedList[props.sectionData.mixedList.length - 1].drinkName}</Typography>
                            </Grid>
                        }>
                        <ArrowLeft fontSize='large' />
                        </Tooltip>
                    </Grid>
                    <Grid xs={10} container item justifyContent='space-between' style={{
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        backgroundImage: `url(${urlFor(props.sectionData.mixedList[currentIndex].image).height(MAINIMAGESIZE).url()})`,
                        height: "400px",
                        position: "relative",
                    }}>

                    </Grid>
                    <Grid xs={1} item>
                        <Tooltip title={
                            <Grid item>
                                <Typography variant='caption' >next</Typography>
                                <Typography variant='subtitle1' style={{color: "black"}}>{currentIndex+1 < props.sectionData.mixedList.length?props.sectionData.mixedList[currentIndex+1].categoryName:props.sectionData.mixedList[0].categoryName}</Typography>
                                <Typography variant='caption'>{currentIndex+1 < props.sectionData.mixedList.length?props.sectionData.mixedList[currentIndex+1].drinkName:props.sectionData.mixedList[0].drinkName}</Typography>
                            </Grid>
                        }>

                        <ArrowRight fontSize='large' onClick={() => {
                            if(currentIndex < props.sectionData.mixedList.length - 1) {
                                setCurrentIndex((state) => state + 1)
                            } else{
                                setCurrentIndex(0)
                            }
                        }}/>
                        </Tooltip>
                    </Grid>
                </Grid>
                <Grid container item alignContent='center' justifyContent='center'>
                    <Typography variant='h6' align='center'
                                color='primary'>{props.sectionData.mixedList[currentIndex].drinkName}</Typography>
                </Grid>
                <Grid container item alignContent='flex-start' justifyContent='center' xs={6} md={4} style={{height: "100px"}}>
                    <Typography variant='body1' align='center'
                                color='inherit'>{props.sectionData.mixedList[currentIndex].description}</Typography>
                </Grid>
                <Grid container item justifyContent='center' style={{
                    paddingTop: MixedFeelingsByTTheme.spacing(.5),
                    paddingBottom: MixedFeelingsByTTheme.spacing(.5)
                }}
                >
                    {/*<ImageList cols={mediaQueriesContext.xsDown ? 3.5 : 5.5} className={classes.imageList}>*/}
                    {/*    {*/}
                    {/*        props.sectionData.mixedList.map((galleryImage, index) =>*/}
                    {/*            <ImageListItem key={index}*/}
                    {/*                           onClick={() => setCurrentImageUrl(urlFor(galleryImage.image).height(MAINIMAGESIZE).url() ?? "")}>*/}
                    {/*                <Grid onMouseLeave={() => {*/}
                    {/*                    setHoveredImage(-1)*/}
                    {/*                }} onMouseEnter={() => {*/}
                    {/*                    setHoveredImage(index)*/}
                    {/*                }} container justifyContent='center' alignContent='center'*/}
                    {/*                      style={{position: "relative"}}>*/}
                    {/*                    {*/}
                    {/*                        currentImageUrl === urlFor(galleryImage.image).height(MAINIMAGESIZE).url() &&*/}
                    {/*                        <Grid item container style={{*/}
                    {/*                            zIndex: 3,*/}
                    {/*                            position: "absolute",*/}
                    {/*                            width: "100%",*/}
                    {/*                            height: "100%",*/}
                    {/*                            backgroundColor: "rgba(221,79,17,0.47)"*/}
                    {/*                        }}>*/}
                    {/*                            <Grid container item style={{*/}
                    {/*                                width: "100%",*/}
                    {/*                                height: "100%",*/}
                    {/*                            }} justifyContent='center' alignContent='center'>*/}
                    {/*                                <RemoveRedEye></RemoveRedEye>*/}
                    {/*                            </Grid>*/}
                    {/*                        </Grid>*/}
                    {/*                    }*/}
                    {/*                    {*/}
                    {/*                        hoveredImage === index &&*/}
                    {/*                        <Grid item container style={{*/}
                    {/*                            zIndex: 2,*/}
                    {/*                            position: "absolute",*/}
                    {/*                            width: "100%",*/}
                    {/*                            height: "100%",*/}
                    {/*                            backgroundColor: "rgba(0,0,0,0.47)",*/}
                    {/*                            // border: "1px solid rgba(221,79,17,0.87)"*/}
                    {/*                        }}>*/}
                    {/*                            <Grid container item style={{*/}
                    {/*                                width: "100%",*/}
                    {/*                                height: "100%",*/}
                    {/*                            }} justifyContent='center' alignContent='center'>*/}

                    {/*                            </Grid>*/}
                    {/*                        </Grid>*/}
                    {/*                    }*/}
                    {/*                    <img width={"100%"} height={"100%"} style={{zIndex: 1}}*/}
                    {/*                         src={urlFor(galleryImage.image).height(THUMBNAILSIZE).url() ?? ""}*/}
                    {/*                         alt={"title"}/>*/}
                    {/*                </Grid>*/}
                    {/*                <ImageListItemBar*/}
                    {/*                    title={item.title}*/}
                    {/*                    classes={{*/}
                    {/*                        root: classes.titleBar,*/}
                    {/*                        title: classes.title,*/}
                    {/*                    }}*/}
                    {/*                    actionIcon={*/}
                    {/*                        <IconButton aria-label={`star ${item.title}`}>*/}
                    {/*                            <StarBorderIcon className={classes.title} />*/}
                    {/*                        </IconButton>*/}
                    {/*                    }*/}
                    {/*                />*/}
                    {/*            </ImageListItem>*/}
                    {/*        )*/}
                    {/*    }*/}
                    {/*</ImageList>*/}

                </Grid>
            </Grid>

        </Grid>
    )
}

export default MFBTMixedListSection