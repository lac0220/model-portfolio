import './post.scss';

export default function Post ({ post: { title, img, text, date } }) {
    return (  
        <div className="post">
            <h2 >{title}</h2>
            <div>
                <img src={img} alt="Blog" />
            </div>
            <p>{text}</p>
            <h3 style={{fontFamily: 'Times New Roman'}}>Published: {date}</h3>
        </div>
    )
}
  
