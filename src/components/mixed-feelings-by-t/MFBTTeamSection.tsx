import React, {FunctionComponent, useContext} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {Grid, Typography} from '@material-ui/core'
import {MfbtTeamSectionType} from "../BlockContentTypes";
import MixedFeelingsByTTheme from "../../theme/MixedFeelingsByTTheme";
import ImageWIthButtonOverlay from "../image-with-button-overlay/ImageWithButtonOverlay";
import MediaQueriesContext from "../media-queries-context/MediaQueriesContext";
import {RemoveRedEye} from "@material-ui/icons";
import bgImage from './shutterstock_1345205486.jpg'
export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        minHeight: '521px',
        backgroundColor: "white",
        // backgroundImage: `url(${bgImage})`,
        backgroundSize:"cover",
        width:"100%",
        // padding:0
        // paddingLeft: -theme.spacing(-5),
    },
    contentBullets: {
        // border: "1px solid black"
        marginBottom: theme.spacing(5)
    }
}))


interface IProps {
    sectionData: MfbtTeamSectionType
}

const MFBTTeamSection: FunctionComponent<IProps> = (props) => {
    const classes = useStyles(MixedFeelingsByTTheme)
    const mediaQueriesContext = useContext(MediaQueriesContext)

    const [onHover, setOnHover] = React.useState<number>(-1)
    return (
        <Grid container item className={classes.root} xs={12}
              style={mediaQueriesContext.xsOnly ? {paddingBottom: 32, paddingTop: 32} : {
                  paddingBottom: MixedFeelingsByTTheme.spacing(10),
                  paddingTop: MixedFeelingsByTTheme.spacing(10),
              }}>
            <Grid container item alignContent='center' justifyContent='center'
                  style={{
                      paddingBottom: mediaQueriesContext.xsOnly ? MixedFeelingsByTTheme.spacing(3) : MixedFeelingsByTTheme.spacing(2)
                  }}>
                <Typography variant='h4' align='center' style={{color:"black"}}>{props.sectionData.contentTitle}</Typography>
            </Grid>
            <Grid container item justifyContent='space-around' spacing={2}
                  // style={{padding: MixedFeelingsByTTheme.spacing(2, 4)}}
            >
                {
                    props.sectionData.teamList.map((teamMember, index) => <Grid key={"member-" + index} container item
                                                                                xs={12} sm={6} alignContent='center'
                                                                                justifyContent='center'
                                                                                style={{color: "black"}}>
                        <Grid container item justifyContent='center' alignContent='center'>
                            <Grid container  item justifyContent='center' alignContent='center' style={{width: "260px", height:260}} onMouseEnter={() => {
                                setOnHover(index)
                            }} onMouseLeave={() => {
                                setOnHover(-1)
                            }}>
                                <Grid container item justifyContent='center' alignContent='center'>

                                        <ImageWIthButtonOverlay height={250} isSquare={true}
                                                                imageSrc={teamMember.image}></ImageWIthButtonOverlay>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item container justifyContent='center' style={{marginBottom: "-8px"}} onMouseEnter={() => {
                            setOnHover(index)
                        }} onMouseLeave={() => {
                            setOnHover(-1)
                        }}>
                            <Typography variant={'body1'}
                                        color={index === onHover ? 'primary' : "inherit"}>{teamMember.title}</Typography>
                        </Grid>
                        <Grid item container spacing={1} justifyContent='center' onMouseEnter={() => {
                            setOnHover(index)
                        }} onMouseLeave={() => {
                            setOnHover(-1)
                        }}>
                            <Grid item> <Typography variant={'h6'}
                                                    color={index === onHover ? 'primary' : "inherit"}>{teamMember.firstName}</Typography>
                            </Grid>
                            <Grid item><Typography variant={'h6'}
                                                   color={index === onHover ? 'primary' : "inherit"}>{teamMember.lastName}</Typography></Grid>

                        </Grid>

                    </Grid>)
                }
            </Grid>
        </Grid>
    )
}

export default MFBTTeamSection