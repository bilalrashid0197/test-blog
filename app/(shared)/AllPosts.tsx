import React from 'react'
import Card from './Card'
import { Post } from '@prisma/client'

type Props = {
    allPosts: Array<Post>;
}

const AllPosts = ({allPosts}: Props) => {
  return (
    <section>
        <hr className="border-1 border-black"/>
        {/* HEADER */}
        <p className="font-bold text-2xl my-8">All Posts</p>
        <div className="sm:grid grid-cols-3 gap-8">
            {allPosts.map((post, index) => (
                <Card
                    key={post.id}
                    className="mt-5 sm:mt-0"
                    imageHeight="h-80"
                    post={post}
                />
            ))}
        </div>
    </section>
  )
}

export default AllPosts;