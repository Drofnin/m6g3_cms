import { getPostData } from "../../../lib/posts"
import  "../../styles/blogposthomepage.css";
import CakeImage from  "../../../../public/images/cake.webp";
import Image from "next/image";
import Link from "next/link";
import { request } from '../../../lib/datocms';

const PATHS_QUERY = `
query MyQuery {
    allArticles {
      slug
    }
  }`



  const ARTICLE_QUERY = `
    query MyQuery ($slug:string){
  article(filter: {slug: {eq: $slug }}) {
    author {
      name
    }
    content {
      value
    }
    coverImage {
      responsiveImage {
        width
        webpSrcSet
        srcSet
        title
        src
        sizes
        height
       aspectRatio
        alt  bgColor
        base64
       
      }
    }
    id
    publishDate
    slug
    title
  }
}
  `

             /* <Image src={postData.coverImage.url} alt={postData.title}/>*/

export default async function BlogPost(props){
        const{ params} = props;
        const slug = (await params).slug
        const postData = getPostData(slug)
        console.log (postData) 
    return (
        <div className = "main">
            {postData.title}
                <Image src={postData.coverImage} width={100} height={100} alt={postData.coverImage}/>
                <h1>{postData.title}</h1>
                    <p>{postData.author.name}/{postData.publishDate}</p>
                        <p>{postData.content}</p> 
                            <div style={{marginTop:"50px"}}></div>
                            <Link href="/"> 
                                <p>⬅️&nbsp;Tilbaka</p>
                            </Link>

        </div>
    );}


