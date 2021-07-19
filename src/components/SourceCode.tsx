import React, {FunctionComponent} from 'react'
import cmsClient from '../common/sanityIo/cmsClient'
import {SanityRef, SanityRepositoryType, SanitySourceCodeType} from '../common/sanityIo/Types'
import {Avatar, Chip, Grid, Link} from '@material-ui/core'
import {CodeBlockRender} from '../common/sanityIo/BlockContentRenderer'
import {urlFor} from './abReplica/static-pages/cmsStaticPagesClient'

export type SourceCodeProps = {
  reference: SanityRef
}

const SourceCode: FunctionComponent<SourceCodeProps> = (props) => {
  const [sourceCode, setSourceCode] = React.useState<SanitySourceCodeType<SanityRepositoryType>>()

  React.useEffect(() => {
    console.log('sourceCode render', sourceCode)
    cmsClient.fetchSourceCode(props.reference).then((sanitySourceCode: SanitySourceCodeType<SanityRepositoryType>) => {
      console.log('sanitysourcedoe object', sanitySourceCode)
      setSourceCode(sanitySourceCode)
    })
  }, [])

  return (
    <Grid container direction="column">
      <Grid container item><CodeBlockRender node={{...sourceCode?.theCode}}/></Grid>
      <Grid container item>
        <Grid item>
          {sourceCode?.filename} by <Link href={sourceCode?.repoLink?.repoLink?.url}>{sourceCode?.repoLink?.repoLink.text}</Link>
        </Grid>
        <Grid item>
          <Chip color="secondary"
                avatar={
                  <Avatar
                    alt={sourceCode?.repoLink?.author.name}
                    src={urlFor(sourceCode?.repoLink?.author?.image).height(36).url()??""}/>
                }
                label={sourceCode?.repoLink?.author.name}
          />
        </Grid>
      </Grid>

    </Grid>
  )
}

export default SourceCode