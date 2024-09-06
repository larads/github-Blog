import { api } from "../lib/axios";
import { ReactNode, createContext, useEffect, useState } from "react";

interface Post {
    title: string
    body: string
}

interface BlogContextType {
    post: Post[]
    fetchPostsFromGithubIssues: (query: string) => Promise<void>
}

export const BlogContext = createContext({} as BlogContextType)

interface BlogProviderProps {
    children: ReactNode
}

export function BlogProvider({ children }: BlogProviderProps) {
    const [post, setPost] = useState<Post[]>([])

    async function fetchPostsFromGithubIssues(query: string = '') {
        const response = await api.get(`/search/issues?q=${query}%20repo:larads/github-Blog`)
        const data = response.data.items
        setPost(data)
    }

    useEffect(() => {
        fetchPostsFromGithubIssues()
    }, [])

    return (
        <BlogContext.Provider value={{ post, fetchPostsFromGithubIssues }}>
            {children}
        </BlogContext.Provider>
    )
}