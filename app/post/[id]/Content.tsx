"use client";
import Image from 'next/image';
import React, { useState } from 'react'
import { FormattedPost } from '@/app/types'


type Props = {
    post: FormattedPost;
}

const Content = ({post}: Props) => {
    const date = new Date(post.createdAt);
    const formattedDate = date.toLocaleDateString("en-Us", {year: "numeric", month: "long", day: "numeric"});
    return (<div className="prose w-full max-w-full mb-8">
        {/* Breadcrums */}
        <h5 className="text-wh-300">{`Home > ${post.category} > ${post.title}`}</h5>

        <div className="flex justify-between items-center">
            <h4 className="bg-accent-orange py-2 px-5 text-wh-900 text-sm font-bold">{post.category}</h4>
        </div>
        <form>
        <h3 className="font-bold text-3xl mt-3">{post.title}</h3>
        <div className="flex gap-3">
            <h5 className="font-semibold text-xs">By <i>{post.author}</i></h5>
            <h6 className="text-wh-300 text-xs">{formattedDate}</h6>
        </div>

        {/* IMAGE */}
        <div className="relative w-auto mt-2 mb-16 h-96">
            <Image
                fill
                alt={post.title}
                src={post.image}
                sizes="(max-width: 480px) 100vw,
                        (max-width: 768px) 85vw,
                        (max-width: 1060px) 75vw,
                        60vw"
                style={{objectFit: "cover"}}
            />
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />


    </form> 
    </div>
    )
}

export default Content;