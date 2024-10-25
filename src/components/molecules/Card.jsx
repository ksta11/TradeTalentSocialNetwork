export function Card({className, title, content, imageUrl }) {
    return (
        <div className={`card ${className}`}>
            <img src={imageUrl} alt={title} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{content}</p>
            </div>
        </div>
    );
}