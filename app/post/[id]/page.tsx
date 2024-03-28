import { prisma } from '@/app/api/client'
import React from 'react'
import { Post as PostType } from '@prisma/client'
import { FormattedPost } from '@/app/types'
import Content from './Content'
import OtherPosts from './OtherPosts'
import { Pinterest } from '@mui/icons-material'

type Props = {
  params: {id: string}
}

export const revalidate = 60;

const data = async (postId: string) => {
  const posts = await prisma.post.findMany({
      where:{
          NOT:{
              id:{
                  equals: postId
              }
          }
      }
  });
  const formattedPosts = await Promise.all(
      posts.map(async (post: PostType) => {
        const imageModule = require(`../../../public${post.image}`);
        return { 
          ...post,
          image: imageModule.default,
        }
      })
  
    )
    return formattedPosts;
}

const getPost = async (id: string) => {
  const post: PostType | null = await prisma.post.findUnique({
    where: {id}
  });

  if (!post) {
    console.log(`Post with id ${id} not found`)
    return null;
  }

  const formattedPost = {
    ...post,
    createdAt: post?.createdAt?.toISOString(),
    updatedAt: post?.updatedAt?.toISOString(),
  }

  return formattedPost;
};


const Post = async ({params}: Props) => {
  const {id} = params;
  const post: FormattedPost | null = await getPost(id);
  const posts = await data(id);
  return (
    <main className="px-10 leading-7">
      <div className="md:flex gap-10 mb-5">
        <div className="basis-3/4">
          {post && <Content post={post}/>}
        </div>
        <hr id="hrElement" className="border-1 border-black"/>
        <div className="basis-1/4">
          {post && <OtherPosts posts={posts}/>}
        </div>
      </div>
    </main>


  )
}

export default Post;