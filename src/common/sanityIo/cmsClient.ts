import sanityClient from '../../sanityClient'
import {SanityRef, SanityRepositoryType, SanitySourceCodeType} from './Types'

const fetchSourceCode = (reference: SanityRef): Promise<SanitySourceCodeType<SanityRepositoryType>> => {
  const sourceCodeReference = reference._ref
  return sanityClient
    .fetch(
      `*[_type=="sourceCode" && _id == $sourceCodeReference]{
         filename,
         slug,
         repoLink->{service, repoLink, author->{_id, name, image{asset->{_id,url}}, bio}},
         theCode,
         links[]{url, text}
       }[0]`,
      {sourceCodeReference},
    ).then((data: SanitySourceCodeType<SanityRepositoryType>) => {
      return data
    })
}

export default {
  fetchSourceCode,
}