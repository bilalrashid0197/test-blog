import React from 'react'
import Card from './Card'
import { Post } from '@prisma/client'
type Props = {
    allPosts: Array<Post>;
}

const AllPosts = ({allPosts}: Props) => {
  return (
    <section>
        <hr className="border-1"/>
        {/* HEADER */}
        <p className="font-bold text-2xl my-8">All Posts</p>
        <div className="sm:grid grid-cols-2 gap-16">
            <Card
                className="bg-wh-500 mt-5 sm:mt-0"
                imageHeight="h-80"
                post={allPosts[0]}
            />
            <Card
                className="bg-wh-500 mt-5 sm:mt-0"
                imageHeight="h-80"
                post={allPosts[1]}

            />
            <Card
                className="bg-wh-500 mt-5 sm:mt-0"
                imageHeight="h-80"
                post={allPosts[2]}

            />
            <Card
                className="bg-wh-500 mt-5 sm:mt-0"
                imageHeight="h-80"
                post={allPosts[3]}

            />
        </div>
    </section>
  )
}

export default AllPosts;