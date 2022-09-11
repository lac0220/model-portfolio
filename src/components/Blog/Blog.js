import './blog_post.scss';
import Post from "./Post";
import { useEffect } from 'react';
import img_blog1 from '../../img/Blog/blog1.webp';
import img_blog2 from '../../img/Blog/blog2.webp';
import img_blog3 from '../../img/Blog/blog3.webp';

export default function Blog () {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []) 
      
    const blogPosts = [
        {
            title: "Post1",
            img:`${img_blog1}`,
            text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto aspernatur voluptatibus laudantium assumenda sequi accusamus qui dolor saepe dicta! Dolores temporibus sit aliquid harum omnis inventore praesentium hic eaque id?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto aspernatur voluptatibus laudantium assumenda sequi accusamus qui dolor saepe dicta! Dolores temporibus sit aliquid harum omnis inventore praesentium hic eaque id?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto aspernatur voluptatibus laudantium assumenda sequi accusamus qui dolor saepe dicta! Dolores temporibus sit aliquid harum omnis inventore praesentium hic eaque id?`,
            date: "01.01.2022"
        },
        {
            title: "Post2",
            img:`${img_blog2}`,
            text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto aspernatur voluptatibus laudantium assumenda sequi accusamus qui dolor saepe dicta! Dolores temporibus sit aliquid harum omnis inventore praesentium hic eaque id?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto aspernatur voluptatibus laudantium assumenda sequi accusamus qui dolor saepe dicta! Dolores temporibus sit aliquid harum omnis inventore praesentium hic eaque id?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto aspernatur voluptatibus laudantium assumenda sequi accusamus qui dolor saepe dicta! Dolores temporibus sit aliquid harum omnis inventore praesentium hic eaque id?`,
            date: "01.01.2022"
        },
        {
            title: "Post3",
            img:`${img_blog3}`,
            text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto aspernatur voluptatibus laudantium assumenda sequi accusamus qui dolor saepe dicta! Dolores temporibus sit aliquid harum omnis inventore praesentium hic eaque id?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto aspernatur voluptatibus laudantium assumenda sequi accusamus qui dolor saepe dicta! Dolores temporibus sit aliquid harum omnis inventore praesentium hic eaque id?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto aspernatur voluptatibus laudantium assumenda sequi accusamus qui dolor saepe dicta! Dolores temporibus sit aliquid harum omnis inventore praesentium hic eaque id?`,
            date: "01.01.2022"
        }
    ];

    return (
        <div className="blog">
            <h1>Blog</h1>
            <div className="blog-container">
                {blogPosts.map((post,i) => (
                    <Post key={i} post={post} />
                ))}
            </div>
        </div>
    );
};
    
