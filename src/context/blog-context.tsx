import { api } from "../lib/axios";
import { ReactNode, createContext, useEffect, useState } from "react";

interface Post {
    title: string
    body: string
}

interface GithubDataProps {
    avatar_url: string
    bio: string
    name: string
    location: string
    followers: number
    html_url: string
    login: string
}

interface BlogContextType {
    post: Post[]
    userGithubData: GithubDataProps
    fetchPostsFromGithubIssues: (query: string) => Promise<void>
}

export const BlogContext = createContext({} as BlogContextType)

interface BlogProviderProps {
    children: ReactNode
}

export function BlogProvider({ children }: BlogProviderProps) {
    const [post, setPost] = useState<Post[]>([])
    const [userGithubData, setUserGithubData] = useState<GithubDataProps>({} as GithubDataProps)

    async function fetchGithubData() {
        const response = await api.get('/users/larads')
        const data = response.data

        setUserGithubData({
            name: data.name,
            avatar_url: data.avatar_url,
            bio: data.bio,
            followers: data.followers,
            html_url: data.html_url,
            location: data.location,
            login: data.login
        })
    }

    async function fetchPostsFromGithubIssues(query: string = '') {
        const response = await api.get(`/search/issues?q=${query}%20repo:larads/github-Blog`)
        const data = response.data.items
        setPost(data)
    }

    useEffect(() => {
        fetchGithubData()
        fetchPostsFromGithubIssues()
    }, [])

    return (
        <BlogContext.Provider value={{ post, userGithubData, fetchPostsFromGithubIssues }}>
            {children}
        </BlogContext.Provider>
    )
}