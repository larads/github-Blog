import { api } from '../lib/axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../components/Header'
import { PostCard } from '../components/post-card'
import ReactMarkdown from 'react-markdown'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Prism } from 'react-syntax-highlighter'

interface Post {
    title: string
    body: string
    comments: number
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
                title: data.title,
                comments: data.comments
            })
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        fetchPostDetail()
    })

    const markdown = `${post.body}`

    return (
        <div className='h-screen'>
            <Header />
            <div className='mx-2'>

                <PostCard title={post.title} comments={post.comments} id={id!} />

                <ReactMarkdown
                    className="max-w-4xl mx-auto flex flex-col gap-3 px-8 py-10 text-base-text"
                    children={markdown}
                    components={{
                        code(props) {
                            const { children, className, ...rest } = props
                            const match = /language-(\w+)/.exec(className || '')
                            return match ? (
                                <Prism
                                    PreTag="div"
                                    children={String(children).replace(/\n$/, '')}
                                    language={match[1]}
                                    style={dracula}
                                />
                            ) : (
                                <code {...rest} className={className}>
                                    {children}
                                </code>
                            )
                        }
                    }}
                />
            </div>
        </div>
    )
}