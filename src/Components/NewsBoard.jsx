import { useEffect } from "react";
import { useState } from "react"
import NewsItem from "./NewsItem";

const NewsBoard = ({category}) => {
    const [articles , setArticles] = useState([]);

    useEffect(()=>{
        let url  = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url).then(response=> response.json()).then(data=> setArticles(data.articles));
        // we will get data in article state 
    },[category])
    // run whenever the newsboard component loads
    //display articles in newsItem component
  return (
    <div>
        <h1 className="text-center" style={{paddingTop:"70px"}}>Latest <span className="badge bg-danger">News</span></h1>
        {articles.map((news , index)=>{
            return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
            // details as props 
        })}
    </div>
  )
}
export default NewsBoard