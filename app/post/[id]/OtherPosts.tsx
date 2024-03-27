import React from 'react'
import Card from '@/app/(shared)/Card'
import { Post } from '@prisma/client'
import { prisma } from '@/app/api/client'


type Props = {
}

const data = async () => {
    const posts = await prisma.post.findMany();
    const formattedPosts = await Promise.all(
        posts.map(async (post: Post) => {
          const imageModule = require(`../../../public${post.image}`);
          return { 
            ...post,
            image: imageModule.default,
          }
        })
    
      )
      return formattedPosts;
}

const OtherPosts = async () => {
    const posts = await data();
  return (
    <>
        <section>
            <p className="font-bold text-2xl my-8">Check out our other posts</p>
            <div className="flex flex-row md:flex-col gap-5 sm:h-[600]">
                <Card
                    className="basis-1/3 mt-5 sm:mt-0"
                    imageHeight='h-80'
                    post={posts[1]}
                />
                <Card
                    className="basis-1/3 mt-5 sm:mt-0"
                    imageHeight='h-80'
                    post={posts[0]}
                />
                <Card
                    className="basis-1/3 mt-5 sm:mt-0"
                    imageHeight='h-80'
                    post={posts[0]}
                />
            </div>
        </section>
    </>
  )
}

export default OtherPosts
