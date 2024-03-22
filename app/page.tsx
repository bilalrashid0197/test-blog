import Trending from "./(home)/Trending";
import Tech from "./(home)/Tech";
import Travel from "./(home)/Travel";
import { prisma } from "app/api/client";
import { Post } from "@prisma/client";
import AllPosts from "./(shared)/AllPosts";

export const revalidate = 60;

const getPosts = async () => {
  const posts = await prisma.post.findMany();
  const formattedPosts = await Promise.all(
    posts.map(async (post: Post) => {
      const imageModule = require(`../public${post.image}`);
      return {
        ...post,
        image: imageModule.default,
      }
    })

  )
  return formattedPosts;
}

export default async function Home() {
  const posts = await getPosts();

  const formatPost = () => {
    let allPosts: Array<Post> = [];
    const trendingPosts: Array<Post>  = [];
    const techPosts: Array<Post>  = [];
    const travelPosts: Array<Post>  = [];
    for(let i = 0; posts.length > i; i++){
      // Push to the all posts array
      allPosts.push(posts[i]);
      // Push to the trending array 4 posts
      if(i < 4){
        trendingPosts.push(posts[i]);
      }
      // Push to the tech array
      if(posts[i]?.category === "Tech"){
        techPosts.push(posts[i])
      }
      if(posts[i]?.category === "Travel"){
        travelPosts.push(posts[i]);
      }
      allPosts = allPosts.sort((a,b) => 0.5 - Math.random()) // Shuffle all Posts
    }    
    return [allPosts, trendingPosts, techPosts, travelPosts];  
  };
  
  const [allPosts, trendingPosts, techPosts, travelPosts] = formatPost();
  return (
    <main className="px-10 leading-7">
      <Trending trendingPosts={trendingPosts}/>
      <div className="md:flex mb-5">
      <div /*className="basis-3/4"*/>
          <Tech techPosts={techPosts} />
          <Travel travelPosts={travelPosts}/>
          <AllPosts allPosts={allPosts} />
          <div className="hidden md:block">

          </div>
        </div>
        <div className="1/4">
          {/*<Sidebar />*/}
        </div>
      </div>
    </main>
  );
}
