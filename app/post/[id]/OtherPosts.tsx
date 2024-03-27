import React from 'react'
import Card from '@/app/(shared)/Card'
import { Post } from '@prisma/client'
import { prisma } from '@/app/api/client'


type Props = {
    postId: string;
}

function generateUniqueRandomNumbers(lowerLimit: number, upperLimit: number, count: number) {
    const randomNumbers = new Set();
  
    while (randomNumbers.size < count) {
      const randomNumber = Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit;
      randomNumbers.add(randomNumber);
    }
  
    return Array.from(randomNumbers);
};

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


const OtherPosts = async ({postId}: Props) => {
  const posts = await data(postId);
  const postToExtract: number[] = generateUniqueRandomNumbers(0, posts.length - 1 , 3);
  return (
    <>
        <section>
            <p className="font-bold text-2xl my-6">Check out our other posts</p>
            <div className="flex flex-row md:flex-col gap-5 sm:h-[600]">
                <Card
                    className="basis-1/3 mt-5 sm:mt-0"
                    imageHeight='h-80'
                    post={posts[postToExtract[0]]}
                />
                <Card
                    className="basis-1/3 mt-5 sm:mt-0"
                    imageHeight='h-80'
                    post={posts[postToExtract[1]]}
                />
                <Card
                    className="basis-1/3 mt-5 sm:mt-0"
                    imageHeight='h-80'
                    post={posts[postToExtract[2]]}
                />
            </div>
        </section>
    </>
  )
}

export default OtherPosts;
