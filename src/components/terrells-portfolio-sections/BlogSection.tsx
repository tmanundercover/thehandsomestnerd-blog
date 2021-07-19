import React, {FunctionComponent} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {Avatar, Fab, Grid, Hidden, Link, Modal, Tooltip, Typography} from '@material-ui/core'
import theme from '../../common/Theme'
import {SanityImageAssetDocument} from '@sanity/client'
import sanityClient from '../../sanityClient'
import BlockContentLayoutContainer from '../BlockContentLayoutContainer'
import {urlFor} from '../abReplica/static-pages/cmsStaticPagesClient'

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100vw',
    backgroundColor: 'whitesmoke',
    padding: theme.spacing(12, 20),
  },
  blog: {
    width: '340px',
    height: '340px',
    borderRadius: '6px',
    padding: '32px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor: 'rgba(0,0,0,.1)',
  },
  blogsContainer: {
    marginBottom: '70px',
  },
  tags: {
    color: 'rgba(0,0,0,.4)',
  },
  title: {
    fontSize: '18px',
    fontWeight: 600,
  },
  aboutMe: {
    fontWeight: 800,
    letterSpacing: '10px',
    lineHeight: 1.4,
    fontSize: '30px',
    textTransform: 'uppercase',
    marginBottom: theme.spacing(5),
  },
  me: {
    display: 'inline-block',
    marginLeft: '8px',
  },
  blogPostModal: {
    position: 'absolute',
    width: 'calc(100vw - 32px)',
    height: 'calc(100vh - 16px)',
    top: '16px',
    left: '16px',
    // padding: '16px 32px 24px',
    // maxHeight: 'calc(100vh - 8px)',
    // margin: 'auto',
    // paddingTop: '28px',
    // paddingLeft: '48px',
    // paddingRight: '48px',
    // paddingBottom: '32px',
    // borderRadius: ' 0.63rem',
    // backgroundColor: 'whitesmoke',
    // boxShadow: '11px 10px 38px rgb(0 0 0 / 38%)',
    // overflow: 'scroll',
  },
  blogPostContainer: {
    maxHeight: 'calc(100vh - 8px)',
    margin: 'auto',
    paddingTop: '28px',
    paddingLeft: '48px',
    paddingRight: '48px',
    paddingBottom: '32px',
    borderRadius: ' 0.63rem',
    boxShadow: '11px 10px 38px rgb(0 0 0 / 38%)',
    overflow: 'scroll',
    backgroundColor: 'white',
  },
  postHeader: {
    backgroundColor: '#3D3D3D',
    color: 'whitesmoke',
  },
  tagsLabel: {
    marginRight: theme.spacing(2),
  },
}))

const useModalStyles = makeStyles((theme: Theme) => ({
  paper: {
    border: '2px solid #000',
    padding: '16px 32px 24px',
  },
  modalHeadlineIcon: {
    fontSize: '73px',
  },
  modalChevron: {
    color: '#F04242',
    fontSize: '443px',
    marginLeft: '-168px',
    opacity: .1,
  },
}))

export type BlogSectionProps = {}

export type SanityBlogPostType = {
  title: string,
  slug: string,
  author: any,
  categories: SanityCategory[],
  publishedAt: string,
  links: { text: string, url: string }[]
  mainImage: SanityImageAssetDocument,
  content: any[]
}

export type SanityColor = {
  value: string,
  title: string
}

export type SanityCategory = {
  title: string,
  description: string,
  color: SanityColor
}


const BlogSection: FunctionComponent<BlogSectionProps> = (props) => {
  const classes = useStyles(theme)
  const styles = useModalStyles(theme)
  const [maximize, setMaximize] = React.useState<boolean[]>([])
  const [blogPosts, setBlogPosts] = React.useState<any | undefined>(undefined)
  const [currentBlogPost, setCurrentBlogPost] = React.useState<SanityBlogPostType | undefined>(undefined)
  // const openBlogPost = (post: SanityBlogPostType) => {
  //   setCurrentBlogPost(post)
  // }

  React.useEffect(() => {
    console.log('', currentBlogPost)
  })

  const closeBlogPost = () => {
    setCurrentBlogPost(undefined)
  }

  const BlogPost = ({
                      title,
                      categories,
                      mainImage,
                      maximize,
                      links,
                      content,
                      author,
                    }: { title: string, categories: SanityCategory[], mainImage: SanityImageAssetDocument, maximize: boolean, links: any[], content: any[], author: any }) => {
    return <Typography component="div" style={{color: theme.palette.text.secondary}}>
      <Grid container direction="column" className={classes.blogPostContainer}>
        <Grid container spacing={1}>
          <Grid container item>
            <Grid container direction="column" xs={maximize ? 6 : 12} item>
              <Grid container item style={{
                minHeight: '318px', backgroundPosition: 'center', backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat', backgroundImage: `url('${urlFor(mainImage).height(450).url() ?? ''}')`,
              }} direction="column" justify="space-between" alignItems="flex-end">
                <Grid item container alignContent='flex-start' style={{padding: theme.spacing(1, 0, 0, 1)}}>
                  <Hidden xsUp={!maximize}>
                    <Grid item>
                      <Typography variant="overline" color="textSecondary"
                                  className={classes.tagsLabel}>Tags</Typography>
                    </Grid>
                  </Hidden>
                  {categories?.map((category: SanityCategory, index) => {
                    return <Grid key={index} item>
                      <Tooltip title={category.description}>
                        <Fab
                          variant="extended"
                          style={{
                            height: '32px',
                            marginBottom: theme.spacing(1),
                            backgroundColor: category.color?.value,
                          }}
                        >
                          <Grid container
                                spacing={1}
                                alignItems="stretch"
                                wrap="nowrap">
                            <Grid item>
                              <Typography variant="h6"
                                          style={{fontSize: '12px'}}>❮❯</Typography>
                            </Grid>
                            <Grid item>
                              <Typography variant="h6"
                                          style={{fontSize: '12px', color: 'whitesmoke'}}
                                          noWrap>{category.title}</Typography>
                            </Grid>
                          </Grid>
                        </Fab>
                      </Tooltip>
                    </Grid>
                  })}
                </Grid>
                <Grid container
                      item
                      justify="space-between"
                      alignItems="stretch"
                      style={{backgroundColor: 'rgba(0,0,0,.5)'}}
                      wrap="nowrap">
                  <Grid container
                        item
                        style={{paddingLeft: theme.spacing(1)}}
                        alignItems="center"
                        xs={10}>
                    <Grid container item alignItems="center">
                      <Typography variant="h4" style={{color: theme.palette.background.paper}}>{title}</Typography>
                    </Grid>
                  </Grid>
                  <Grid container
                        item
                        style={{padding: theme.spacing(1, 1, 1, 1)}}
                        xs={2}>
                    <Grid item
                          container
                          alignItems="center"
                          justify="flex-end">
                      <Tooltip title={`by ${author?.name ?? ''}`}>
                        <Avatar alt={author?.name ?? ''}
                                src={urlFor(author?.image).height(56).width(56).url() ?? ''}
                                style={{
                                  width: theme.spacing(7),
                                  height: theme.spacing(7),
                                }}/>
                      </Tooltip>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Hidden xsUp={!maximize}>
              <Grid container xs={maximize ? 6 : 12} item direction="column">
                <Grid container justify='flex-end' item>
                  <Typography
                    variant='overline'
                    color="textSecondary"
                    style={{
                      marginBottom: theme.spacing(2),
                      paddingBottom: theme.spacing(2),
                    }}>References</Typography>
                </Grid>
                {links && links.map((link: { text: string, url: string }, index: number) => {
                  return link &&
                    <Grid key={index} container justify='flex-end' item>
                      <Link href={link.url}>
                        <Typography
                          variant='h6'
                          color="textSecondary"
                          style={{
                            marginBottom: theme.spacing(2),
                            paddingBottom: theme.spacing(2),
                            borderBottom: '1px solid #9D9D9D',
                          }}>
                          {link.text}
                        </Typography>
                      </Link>
                    </Grid>
                })}
              </Grid>
            </Hidden>
          </Grid>
          <Grid xs={12} container item style={{overflow: 'scroll', maxHeight: maximize ? '450px' : '350px'}}>
            <BlockContentLayoutContainer content={{content: content}}/>
          </Grid>
        </Grid>
      </Grid>

    </Typography>
  }

  // const maximizePost = (index: number) => {
  //   console.log('maximize post')
  //   let newMaximizeState = new Array(maximize.length).fill(false)
  //   newMaximizeState[index] = true
  //
  //   setMaximize(newMaximizeState)
  // }
  //
  // const minimizePost = () => {
  //   console.log('minimize post')
  //   let newMaximizeState = new Array(maximize.length).fill(false)
  //
  //   setMaximize(newMaximizeState)
  // }

  React.useEffect(() => {


    // fetch the blog posts from references
    sanityClient
      .fetch(
        `*[_type == 'post']{
          title, 
          slug, 
          author->{name, image}, 
          mainImage, 
          body, 
          content,
          publishedAt,
          links,
          categories[]->{title, description, color}
       }`,
      )
      .then((data: any[]) => {
        console.log('blogsection posts', data)
        setMaximize(new Array(data.length).fill(false))

        setBlogPosts(data)
      })
      .catch(console.error)

  }, [])

  return (
    <Grid container className={classes.root}>
      <Grid container item>
        <Typography component="span" variant="h3" className={classes.aboutMe}>
          Blog
          <Typography component="span" variant="h3" className={`${classes.aboutMe} ${classes.me}`} color="primary">
            Posts
          </Typography>
        </Typography>
      </Grid>
      <Grid container item spacing={4} className={classes.blogsContainer}>
        {
          blogPosts && blogPosts.map((blog: SanityBlogPostType, blogIndex: number) => (
            <Grid
              key={`portfolio-blog-${blogIndex}`}
              item
              onClick={() => {
                setCurrentBlogPost(blog)
              }}
              xs={maximize[blogIndex] ? 12 : 6}
              style={maximize[blogIndex] ? {
                position: 'relative',
                top: blogIndex % 2 === 0 ? 0 : 'calc(-1 * calc(100vh - 32px))',
              } : {}}
            >
              <BlogPost content={blog.content} maximize={false} title={blog.title}
                        categories={blog.categories}
                        author={blog.author}
                        mainImage={blog.mainImage} links={blog.links}/>
            </Grid>
          ))
        }
      </Grid>

      <Modal
        open={!!currentBlogPost}
        onClose={() => closeBlogPost()}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      ><>
        {currentBlogPost && <Grid item className={classes.blogPostModal}>
          <BlogPost maximize={true}
                    title={currentBlogPost.title}
                    categories={currentBlogPost.categories}
                    mainImage={currentBlogPost.mainImage}
                    links={currentBlogPost.links}
                    author={currentBlogPost.author}
                    content={currentBlogPost.content}
          />
        </Grid>}
      </>
      </Modal>

    </Grid>
  )
}

export default BlogSection