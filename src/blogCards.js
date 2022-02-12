import {Link} from 'react-router-dom'


const BlogCard = ({blogPost}) => {

return (
    <div class="container">
<div className="card" style={{width: '400px'}}>
  <img className="card-img-top" src={blogPost.heroImage.fields.file.url} alt="Card image"/>
  <div className="card-body">
    <h4 className="card-title">{blogPost.title}</h4>
    <p className="card-text">{blogPost.description}</p>
    <p className="card-text">{blogPost.body}</p>
    <Link to={blogPost.slug} className="btn btn-primary">Read More</Link>
  </div>
</div>
</div>

)}

export default BlogCard