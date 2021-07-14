// [slug].js
// import groq from "groq";
// import imageUrlBuilder from "@sanity/image-url";
// import BlockContent from "@sanity/block-content-to-react";
// import client from "../../client";
// import Comments from "../../components/comments";

// function urlFor(source) {
//   return imageUrlBuilder(client).image(source);
// }

// const Post = (props) => {
//   const {
//     title = "Missing title",
//     name = "Missing name",
//     categories,
//     authorImage,
//     body = [],
//   } = props;
//   return (
//     <article>
//       <h1>{title}</h1>
//       <span>By {name}</span>
//       {categories && (
//         <ul>
//           Posted in
//           {categories.map((category) => (
//             <li key={category}>{category}</li>
//           ))}
//         </ul>
//       )}
//       {authorImage && (
//         <div>
//           <img src={urlFor(authorImage).width(50).url()} />
//         </div>
//       )}
//       <BlockContent
//         blocks={body}
//         imageOptions={{ w: 320, h: 240, fit: "max" }}
//         {...client.config()}
//       />
//       <Comments comments={post?.comments} />
//     </article>
//   );
// };

// const query = groq`*[_type == "post" && slug.current == $slug][0]{
//   title,
//   "name": author->name,
//   "categories": categories[]->title,
//   "authorImage": author->image,
//   body
// }`;

// Post.getInitialProps = async function (context) {
//   // It's important to default the slug so that it doesn't return "undefined"
//   const { slug = "" } = context.query;
//   return await client.fetch(query, { slug });
// };

// export default Post;

import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import MoreStories from '../../components/more-stories'
import PostHeader from '../../components/post-header'
import Comments from '../../components/comments'
import Form from '../../components/form'
import SectionSeparator from '../../components/section-separator'
import Layout from '../../components/layout'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'

export default function Post({ post, morePosts, preview }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {post.title} | Next.js Blog Example with {CMS_NAME}
                </title>
                {/* <meta property="og:image" content={post.ogImage.url} /> */}
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.body} />
            </article>
            <Comments comments={post.comments} />
            <Form _id={post._id} />
            <SectionSeparator />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview)
  return {
    props: {
      preview,
      post: data?.post || null,
      morePosts: data?.morePosts || null,
    },
    revalidate: 1
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()
  return {
    paths:
      allPosts?.map((post) => ({
        params: {
          slug: post.slug,
        },
      })) || [],
    fallback: true,
  }
}
