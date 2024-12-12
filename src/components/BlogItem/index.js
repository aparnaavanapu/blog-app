import './index.css'

const BlogItem=(props)=>{
    const {details}=props
    const {title,description,publishedDate}=details
    return(
        <div className="posts-container">
            <div className="title-container">
                <p className="title">{title}</p>
                <p className="date">{publishedDate}</p>
            </div>
            <p className="description">{description}</p>
            <hr/>
        </div>
    )

}

export default BlogItem