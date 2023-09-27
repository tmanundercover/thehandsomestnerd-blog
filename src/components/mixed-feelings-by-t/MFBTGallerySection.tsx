import React, {FunctionComponent, useContext} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {Grid, ImageList, ImageListItem, Typography} from '@material-ui/core'
import {MfbtGallerySectionType} from "../BlockContentTypes";
import MixedFeelingsByTTheme from "../../theme/MixedFeelingsByTTheme";
import MediaQueriesContext from "../media-queries-context/MediaQueriesContext";
import {urlFor} from "../block-content-ui/static-pages/cmsStaticPagesClient";
import EyeIcon from "@sanity/types/parts/part.@sanity/components/build-snapshot/components/icons/Eye";
import {RemoveRedEye} from "@material-ui/icons";

export const useStyles = makeStyles((theme: Theme) => ({
    preroot: {
        minHeight: '521px',
        backgroundColor: "black",
        color:"white"
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
        width:"100%",
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    contentBullets: {
        // border: "1px solid black"
        marginBottom: theme.spacing(5)
    }
}))


interface IProps {
    sectionData: MfbtGallerySectionType
}

const THUMBNAILSIZE = 150
const MAINIMAGESIZE = 400

const MFBTGallerySection: FunctionComponent<IProps> = (props) => {
    const classes = useStyles(MixedFeelingsByTTheme)
    const mediaQueriesContext = useContext(MediaQueriesContext)

    const [currentImageUrl, setCurrentImageUrl] = React.useState<string>();
    React.useEffect(() => {
        if (props.sectionData.gallery[0]) {
            setCurrentImageUrl(urlFor(props.sectionData.gallery[0]).height(MAINIMAGESIZE).url() ?? "");
        }
    }, [props.sectionData.gallery])

const [hoveredImage, setHoveredImage] = React.useState<number>(-1)
    return (
        <Grid container item className={classes.preroot} xs={mediaQueriesContext.xsOnly ? 12 : 12}
              style={mediaQueriesContext.xsOnly ? {paddingBottom: 32, paddingTop: 32} : {
                  paddingBottom: MixedFeelingsByTTheme.spacing(10),
                  paddingTop: MixedFeelingsByTTheme.spacing(10),
              }}>
            <Grid container item alignContent='center' justifyContent='center'
                  style={{ paddingBottom: mediaQueriesContext.xsOnly ? MixedFeelingsByTTheme.spacing(3) : MixedFeelingsByTTheme.spacing(0)}}>
                <Typography variant='h4' align='center' color='inherit'>{props.sectionData.contentTitle}</Typography>
            </Grid>
            <Grid container item>
                <Grid container item justifyContent='center' style={{
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    backgroundImage: `url(${currentImageUrl})`,
                    minHeight: "300px",
                    maxHeight: "400px"
                }}>
                    {/*<img style={{width: "100%",*/}
                    {/*    height: "100%",}} src={currentImageUrl} alt={"title"}/>*/}
                </Grid>
                <Grid container item justifyContent='center' style={{
                    paddingTop: MixedFeelingsByTTheme.spacing(.5),
                    paddingBottom: MixedFeelingsByTTheme.spacing(.5)
                }}
                >
                    <ImageList cols={mediaQueriesContext.xsDown ? 3.5 : 5.5} className={classes.imageList}>
                        {
                            props.sectionData.gallery.map((galleryImage, index) =>
                                <ImageListItem key={index}
                                               onClick={() => setCurrentImageUrl(urlFor(galleryImage).height(MAINIMAGESIZE).url() ?? "")}>
                                    <Grid onMouseLeave={()=>{setHoveredImage(-1)}} onMouseEnter={()=>{setHoveredImage(index)}} container justifyContent='center' alignContent='center'
                                          style={{position: "relative"}}>
                                        {
                                            currentImageUrl === urlFor(galleryImage).height(MAINIMAGESIZE).url() &&
                                            <Grid item container style={{
                                                zIndex: 3,
                                                position: "absolute",
                                                width: "100%",
                                                height: "100%",
                                                backgroundColor: "rgba(221,79,17,0.47)"
                                            }}>
                                                <Grid container item style={{
                                                    width: "100%",
                                                    height: "100%",
                                                }} justifyContent='center' alignContent='center'>
                                                    <RemoveRedEye></RemoveRedEye>
                                                </Grid>
                                            </Grid>
                                        }
                                        {
                                            hoveredImage === index &&
                                            <Grid item container style={{
                                                zIndex: 2,
                                                position: "absolute",
                                                width: "100%",
                                                height: "100%",
                                                backgroundColor:"rgba(0,0,0,0.47)",
                                                // border: "1px solid rgba(221,79,17,0.87)"
                                            }}>
                                                <Grid container item style={{
                                                    width: "100%",
                                                    height: "100%",
                                                }} justifyContent='center' alignContent='center'>

                                                </Grid>
                                            </Grid>
                                        }
                                        <img width={"100%"} height={"100%"} style={{zIndex: 1}}
                                             src={urlFor(galleryImage).height(THUMBNAILSIZE).url() ?? ""}
                                             alt={"title"}/>
                                    </Grid>
                                    {/*<ImageListItemBar*/}
                                    {/*    title={item.title}*/}
                                    {/*    classes={{*/}
                                    {/*        root: classes.titleBar,*/}
                                    {/*        title: classes.title,*/}
                                    {/*    }}*/}
                                    {/*    actionIcon={*/}
                                    {/*        <IconButton aria-label={`star ${item.title}`}>*/}
                                    {/*            <StarBorderIcon className={classes.title} />*/}
                                    {/*        </IconButton>*/}
                                    {/*    }*/}
                                    {/*/>*/}
                                </ImageListItem>
                            )
                        }
                    </ImageList>

                </Grid>
            </Grid>

        </Grid>
    )
}

export default MFBTGallerySection