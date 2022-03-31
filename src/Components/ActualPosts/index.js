import React, { useState, useEffect } from "react";
import Post from '../Post'
import './style.scss'

export default function ActualPosts({ userId, users }) {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(response => response.json())
            .then(data => setPosts(data))
    }, [])
    const postsWithUserId = posts.filter(post => post.userId === userId).splice(7)
    const userName = users.filter(user => user.id === userId)[0]?.name
    return (
        <div className='actual-posts'>
            <div className='actual-posts__images'>
                <div className="image-up"></div>
                <div className="image-down"></div>
            </div>
            <div className='actual-posts__content'>
                <div className='title'>3 актуальных поста {userName}</div>
                {postsWithUserId.map(item => <Post post={item} key={item.id} />)}

            </div>
        </div>
    )
}