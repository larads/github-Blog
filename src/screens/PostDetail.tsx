import { api } from '../lib/axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

interface Post {
    title: string
    body: string
}

export function PostDetail() {
    const { id } = useParams()
    const [post, setPost] = useState<Post>({} as Post)

    async function fetchPostDetail() {
        try {
            const response = await api.get('/repos/larads/github-Blog/issues/1')

            const data = response.data

            setPost({
                body: data.body,
                title: data.title
            })
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        fetchPostDetail()
    })

    return (
        <div>
            <p className='text-white text-4xl'>Post de id = {id}</p>
            <h1>{post.title}</h1>
            <span>
                {post.body}
            </span>
        </div>
    )
}