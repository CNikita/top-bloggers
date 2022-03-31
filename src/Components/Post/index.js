import './style.scss'

export default function Post({ post }) {
    return (
        <div className='post'>
            <div className='post__title'>{post.title}</div>
            <div className='post__content'>{post.body}</div>
        </div>
    )
}