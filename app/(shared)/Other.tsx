import React from 'react'
import Card from './Card'
type Props = {}

const Other = (props: Props) => {
  return (
    <section>
        <hr className="border-1"/>
        {/* HEADER */}
        <p className="font-bold text-2xl my-8">All Posts</p>
        <div className="sm:grid grid-cols-2 gap-16">
            <Card
                className="bg-wh-500 mt-5 sm:mt-0"
                imageHeight="h-80"
            />
            <Card
                className="bg-wh-500 mt-5 sm:mt-0"
                imageHeight="h-80"
            />
            <Card
                className="bg-wh-500 mt-5 sm:mt-0"
                imageHeight="h-80"
            />
            <Card
                className="bg-wh-500 mt-5 sm:mt-0"
                imageHeight="h-80"
            />
        </div>
    </section>
  )
}

export default Other