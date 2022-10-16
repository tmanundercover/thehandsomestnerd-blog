import React, {FunctionComponent} from 'react'
import {makeStyles, Theme} from "@material-ui/core/styles"
import Carousel from 'react-material-ui-carousel'
import {Grid, Typography} from '@material-ui/core'
import cmsStaticPagesClient, {SanityImageAssetProj, SanityImageCarousel, urlFor} from '../cmsStaticPagesClient'
import abTheme from '../../common/Theme'

export const useStyles = makeStyles((theme: Theme) => ({
    image: {
        maxWidth: '700px',
        width: '100%'
    },
    description: {
        marginLeft: theme.spacing(1)
    }
}))

export type ImageCarouselProps = {
    slug: string
}
const ImageCarousel: FunctionComponent<ImageCarouselProps> = ({slug}) => {
    const classes = useStyles(abTheme)

    const [data, setData] = React.useState<SanityImageCarousel>({})

    const getCarouselData = async (): Promise<void> => {
        const response = await cmsStaticPagesClient.fetchImageCarousel(slug)
        setData(response)
    }
    React.useEffect(() => {
        getCarouselData().then()
    }, [])

    return (
        // @ts-ignore
        <Carousel fullHeightHover={false}
                  indicators={false}
        >
            {data?.images?.map((item: SanityImageAssetProj, index) =>
                <Grid key={index} container direction="column" alignItems="center" spacing={0}>
                    <Grid item xs={12}>
                        {item?.mainImage && <img className={classes.image} src={urlFor(item.mainImage).url() ?? ""}/>}
                    </Grid>
                    <Grid item className={classes.description}>
                        <Typography variant="subtitle1" color="textPrimary">{item?.title}</Typography>
                    </Grid>
                </Grid>
            )}
        </Carousel>
    )
}

export default ImageCarousel