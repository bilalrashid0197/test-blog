import React from 'react';


const Footer = () => {
  return (
    <footer className="bg-black text-wh-50 py-10 px-10">
        <div className="justify-between mx-auto gap-16 sm:flex">
            {/* FIRST COLUMN */}
            <div className="mt-0 basis-1/2 sm:mt-0">
                <h4 className="font-bold text-2xl">The Daily Blog</h4>
                <p className="my-3">Discover fresh perspectives and join the conversation on our blog — where every post is a new adventure in thought and community.</p>
                <p>© The Daily Blog All Rights Reserved.</p>
            </div>
            {/* SECOND COLUMN */}
            <div className="mt-6 basis-1/4 sm:mt-0">
                <h4 className="font-bold">Links</h4>
                <a href="" className="underline hover:text-blue-600 text-blue-400">
                    <p className="my-3">Home</p>
                </a>
                <a href="/#trendingSection" className="underline hover:text-blue-600 text-blue-400">
                    <p className="my-3">Trending</p>
                </a>
                {/*<a href=""  className="underline hover:text-blue-600 text-blue-400">
                    <p>About</p>
                </a>*/}
            </div>
            {/* THIRD COLUMN */}
            <div className="mt-6 basis-1/4 sm:mt-0">
                <h4 className="font-bold">Contact Us</h4>
                <a href="mailto:rash8510@mylaurier.ca" className="underline hover:text-blue-600 text-blue-400">
                    <p className="my-3">Email</p>
                </a>
                <a href="https://www.linkedin.com/in/bilal-rashid-a04625198/" className="underline hover:text-blue-600 text-blue-400">
                    <p className="my-3">LinkedIn</p>
                </a>
                {/*<a href="https://www.google.ca/" className="underline hover:text-blue-600 text-blue-400">
                    <p>Contact Form</p>
                </a>*/}
            </div>
        </div>
    </footer>
  );
};

export default Footer;