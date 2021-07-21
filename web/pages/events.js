// import groq from 'groq'
// import client from '../lib/sanity'
// import Link from 'next/link'

// const Events = (props) => {
//     const { posts = [] } = props
//     return (
//       <div>
//         {posts.map(
//           ({ _id, title = '', slug = '', _updatedAt = '' }) =>
//             slug && (
//               <li key={_id}>
//                 <Link href="/post/[slug]" as={`/post/${slug.current}`}>
//                   <a>{title}</a>
//                 </Link>{' '}
//                 ({new Date(_updatedAt).toDateString()})
//               </li>
//             )
//         )}
//       </div>
//     )
// }

// Events.getInitialProps = async () => ({
//     posts: await client.fetch(groq`
//       *[_type == "post" && publishedAt < now()]|order(publishedAt desc)
//     `)
// })

// export default Events

import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'

export default function Events({ allPosts, preview }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>NERR | Events</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)
  return {
    props: { allPosts, preview },
  }
}