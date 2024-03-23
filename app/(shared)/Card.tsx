import React from 'react'
import Link from 'next/link';
import { Post } from '@prisma/client';
import Image from 'next/image';

type Props = {
    className?: string;
    imageHeight: string;
    isSmallCard?: boolean;
    isLongForm?: boolean;
    post: Post;
};

const Card = ({className, imageHeight, isSmallCard = false, isLongForm = false, post}: Props) => {
    
    const {id, title, author, createdAt, image, snippet} = post || {};
    const date = new Date(createdAt);
    const formattedDate = date.toLocaleDateString("en-Us", {year: "numeric", month: "long", day: "numeric"});
  
    return (
    <div className={className}>
        <Link className="basis-full hover:opacity-70 duration-500" 
        href={`${process.env.NEXT_PUBLIC_URL}/post/${post?.id}`}
        >
            <div className={`relative w-auto mb-3 ${imageHeight}`}>
            <Image 
                fill
                alt="tech"
                placeholder="blur"
                src= {post?.image}
                sizes="(max-width: 480px) 100 vw,
                           (max-width: 768px) 75vw,
                           (max-width: 1060px) 50vw,
                           33vw"
                style={{objectFit : "cover", borderRadius: "3px",}}
            />
            </div>
        </Link>
        <div className="basis-full">
            <Link href={`${process.env.NEXT_PUBLIC_URL}/post/${post?.id}`}>
                <h4 className={`font-bold hover:text-accent-green underline
                ${isSmallCard ? "text-base" : "text-lg"}
                ${isSmallCard ? "line-clamp-2" : "text-lg"}`}>{title}</h4>
            </Link>

            <div className={`${isSmallCard ? "my-2": "flex my-3"} gap-3`}>
                <h5 className="font-semibold text-xs italic">{author}</h5>
                <h6 className="text-wh-300 text-xs ">{formattedDate}</h6>
            </div>
            <p className={`text-wh-500 ${isLongForm ? "line-clamp-7": "line-clamp-3"}`}>
                {snippet}
            </p>
        </div>
    </div>
  )
}

export default Card