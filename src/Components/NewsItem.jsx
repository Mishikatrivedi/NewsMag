import image from '../assets/news_default.png'
// destructure the props 
const NewsItem = ({title , description , src , url}) => {
    
  return (
    <div className="card bg-dark text-light mb-3 my-3 mx-5 px-2 py-2 d-inline-block" style={{maxWidth:"340px"}}>
        <img src={src?src:image} style={{height:"200px" , width:"320px"}} className="card-img-top"/>
        <div className="card-body">
            <h5 className="card-title">{title.slice(0,50)}</h5>
            <p className="card-text">{description?description.slice(0,90):"News is the dissemination of information about recent events, developments, or occurrences that are ...."}</p>
            <a href={url} className="btn btn-primary">Read More</a>
        </div>
   </div>
  )
}
export default NewsItem