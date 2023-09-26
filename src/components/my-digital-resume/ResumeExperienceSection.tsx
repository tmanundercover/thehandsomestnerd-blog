import React, {FunctionComponent, useContext} from 'react'
import {makeStyles, MuiThemeProvider, Theme} from "@material-ui/core/styles"
import {Chip, Grid, Typography, useTheme} from '@material-ui/core'
import {ResumeExperience, ResumeExperienceSectionType} from "../BlockContentTypes";
import DigitalResumeTheme, {COLORS} from "../../theme/DigitalResumeTheme";
import useThwCommonStyles from "../../common/sanityIo/ThwCommonStyles";
import MediaQueriesContext from "../media-queries-context/MediaQueriesContext";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {},
}))

interface IProps {
    sectionData: ResumeExperienceSectionType
}

const ResumeExperienceSection: FunctionComponent<IProps> = (props: IProps) => {
    const classes = useThwCommonStyles()
    const theme = useTheme()

    const mediaQueryContext = useContext(MediaQueriesContext)
    const xsOnly = mediaQueryContext.xsOnly

    return (<MuiThemeProvider theme={DigitalResumeTheme}><Grid
        container
        item
        style={{
            padding: theme.spacing(4)
        }}
        className={classes.resumeSection}
    >
        <Grid container item spacing={3}>
            <Grid item container md={4} alignContent='flex-start' spacing={1}>
                <Grid item><Typography variant='h6'>{props.sectionData.title}<Typography variant='h6'
                                                                                         color='primary'
                                                                                         display='inline'>.</Typography></Typography></Grid>
                <Grid item><Typography variant='body1'>{props.sectionData.introduction}</Typography></Grid>
            </Grid>
            <Grid item container md={8} spacing={2} justifyContent={xsOnly ? 'center' : 'flex-start'}>
                {
                    props.sectionData.experiences?.map((experience: ResumeExperience, index2: number) => {
                        return <Grid item container alignContent='flex-start'
                                     style={{
                                         borderBottom: `1px solid ${index2 >= (props.sectionData.experiences?.length ?? 0) - 1 ? "transparent" : COLORS.LIGHTGRAY}`,
                                         // padding: theme.spacing(1.75, 0)
                                     }} xs={12}>
                            <Grid container item>
                                <Grid item xs={12} md={4}>
                                    <Typography display='inline'
                                                variant='body2'>{experience.companyName}</Typography>
                                </Grid>
                                <Grid item xs={6} md={4}>

                                    <Typography display='inline'
                                                variant='body1'>{experience.title}</Typography>
                                </Grid>
                                <Grid item xs={6} md={4}>

                                    <Typography display='inline'
                                                variant='subtitle1'>{experience.companySubtitle}</Typography>
                                </Grid>
                            </Grid>
                            <Grid container item>


                                <Grid item sm={4}>
                                    <Typography display='inline'
                                                variant='body1'>{experience.dateStart?.toString().replaceAll('-', '.')}</Typography>

                                    {/*</Grid>*/}
                                    {/*<Grid item xs={1} container justifyContent='center'>*/}
                                    <Typography display='inline'
                                                variant='body1' style={{margin: theme.spacing(0, 1)}}>—</Typography>

                                    {/*</Grid>*/}
                                    {/*<Grid item xs={2} container>*/}
                                    <Typography display='inline'
                                                variant='body1'>{experience.dateEnd?.toString().replaceAll('-', '.')}</Typography>

                                </Grid>

                            </Grid>
                            <Grid container item>
                                <Typography
                                    variant='body1' gutterBottom>{experience.description}</Typography>
                            </Grid>
                            <Grid container item spacing={1}
                                  style={{overflowX: "scroll", paddingBottom: theme.spacing(1)}} wrap='nowrap'>
                                {
                                    experience.skillsUsed?.map((skill, index) => {
                                        return <Grid item><Chip size='small' color='primary'
                                                                label={skill.title}/></Grid>
                                    })
                                }
                            </Grid>
                        </Grid>
                    })
                }
            </Grid>
        </Grid></Grid></MuiThemeProvider>)
}

export default ResumeExperienceSection