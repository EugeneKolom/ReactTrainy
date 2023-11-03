const NewsItem = ({ title, description, src, url }) => {
  return (

    <div className="card bg-dark text-light mb-3 d-inline-block m-3 p-3" style={{ maxWidth: '365px' }}>
      <img src={src} style={{ height: '200px', maxWidth: '360px' }} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">{description ? description.slice(0, 90) : "News with current event. It is information about something that has just happened."}</p>
        <a href={url} className="btn btn-primary">Read more</a>
      </div>
    </div>
  )
}

export default NewsItem