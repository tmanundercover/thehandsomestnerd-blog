import React, {FunctionComponent} from 'react'
import {makeStyles, Theme} from "@material-ui/core/styles"
import {Grid, Typography} from '@material-ui/core'
import {ArrowLeft, ArrowRight} from "@material-ui/icons";
import TransformHWTheme from "../../theme/transform-hw/TransformHWTheme";
import {ServiceAmenityType, ThwServiceItemNoRefType} from "../BlockContentTypes";
import {v4 as uuidv4} from "uuid";
import ToolTipWrap from "./ToolTipWrap";
import {urlFor} from "../block-content-ui/static-pages/cmsStaticPagesClient";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
    },
}))

interface IProps {
    service:ThwServiceItemNoRefType
}

const AmenitiesSection: FunctionComponent<IProps> = (props:IProps) => {
    const ref = React.useRef(null);
    const isOverflow = true

    return (<Grid container item justifyContent='center' style={{position: "relative"}} alignContent='center'
                  alignItems='stretch'>
        {
            isOverflow ?
            <Grid
                // ref={ref}
                container
                xs={3}
                alignItems='center'
                alignContent='center'
                item
                style={{
                    backgroundImage: 'linear-gradient(to right, whitesmoke, transparent)',
                    position: "absolute",
                    left: 16,
                    height: "100%",
                    zIndex: "1000",
                    pointerEvents: 'none'
                    // opacity: 0
                }}
            >
                <ArrowLeft/>
            </Grid>:<></>
        }
        <Grid xs={10} item container>
            <Grid
                direction="column"
                // justifyContent='flex-start'
                alignContent={isOverflow ? 'flex-start' : 'center'}
                ref={ref}
                style={{
                    paddingTop: TransformHWTheme.spacing(2),
                    overflowY: "hidden",
                    overflowX: "scroll",
                    maxHeight: "110px",
                    position: "relative",
                    // backgroundColor: "red"
                }}
                container
                item
            >
                {
                    props.service.serviceAmenities?.map((serviceAmenity: ServiceAmenityType) => {
                        return <Grid
                            key={uuidv4()}
                            item
                            container
                            xs={4}
                            style={{minHeight: "60px", minWidth: "60px", cursor: "pointer"}}
                        >
                            <ToolTipWrap
                                serviceTitle={props.service.contentTitle}
                                amenity={serviceAmenity}
                            >
                                <Grid container item direction='column' justifyContent='center'
                                      alignContent='center'
                                      alignItems='center' style={{
                                    marginBottom: "24px",

                                }} spacing={1}>
                                    <Grid key={uuidv4()} item
                                          container xs={2}
                                          style={{
                                              minHeight: "32px",
                                              minWidth: "32px",
                                              backgroundSize: 'contain',
                                              backgroundImage: `url(${urlFor(serviceAmenity.imageSrc).url()})`,
                                              backgroundRepeat: "no-repeat",

                                          }}
                                    ></Grid>
                                    <Grid item container justifyContent='center'>

                                        <Grid item xs={6} container justifyContent='center'>
                                            <Typography
                                                variant='subtitle2'
                                                align='center'
                                            >{serviceAmenity.title}</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </ToolTipWrap>
                        </Grid>
                    })
                }
            </Grid>
        </Grid>
        {
            isOverflow ? <Grid container xs={3} item style={{
                backgroundImage: 'linear-gradient(to right,transparent, whitesmoke)',
                position: "absolute",
                right: 16,
                height: "100%",
                zIndex: "1000",
                pointerEvents: 'none'
                // opacity: 0
            }}
                                justifyContent='flex-end' alignContent='center'>
                <ArrowRight/>
            </Grid>:<></>
        }
    </Grid>)
}

export default AmenitiesSection