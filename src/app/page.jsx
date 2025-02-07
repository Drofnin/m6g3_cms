/*import Image from "next/image";*/
import { performRequest } from '../lib/datocms';
import Head from "next/head";
import "./styles/homepage.css"
import {getAllPosts} from "../lib/posts.js"
import Link from "next/link";
import {Image}  from "react-datocms";


const HOMEPAGE_QUERY = `
query MyQuery {
  allArticles {
    title
    excerpt
    id
    publishDate
    slug
    author {
      name
    }
    content {
      value
    }
    coverImage {
     responsiveImage {
        alt
        aspectRatio
        base64
        bgColor
        height
        sizes
        src
        srcSet
        title
        webpSrcSet
        width
      }
    }
  }
}`

/*GraphQL fyrirspurn sem biður um gögn frá DatoCMS. Er sumsé að biðja um title, description úr homepage hlutanum */
// const PAGE_CONTENT_QUERY = ` 
// query {
//   home{
//    label
//   }
// }  `


export default  async function Home() {
  // const { home } = await performRequest(PAGE_CONTENT_QUERY);
  const posts = getAllPosts();
  const data = await performRequest (
   HOMEPAGE_QUERY,
   

  );

  return (
    <div className= "main">
     {/* {home.label} */}
        <Head>
          <title>Bakað með Brynju</title>
        </Head>
          <div>
              <div>
                <h1>Bakað með Brynju</h1>
              </div>
              <div className= "main">
               |{data.allArticles.map(p => (
               < BlogPostPreview key={p.id} data={p}/>
               ))}
              </div>
          </div> 
    </div>
  );
}



            /*ath, name tagið gerir það að verkum að það hverfur af frontpage*/
const BlogPostPreview = (props) => {
  const { data } = props;
  return (
  <div >
    <Image data={data.coverImage.responsiveImage} />
       <Link href={`/blog/${data.slug}`}>{data.title}</Link>
        <div>{data.publishDate}</div>
          <p>
            {data.excerpt}
          </p>
            <div style = {{fontWeight:"bold"}}>{data.author.name}</div> 
  
  </div>
    );
  }
