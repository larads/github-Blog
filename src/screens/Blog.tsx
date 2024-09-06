import { useContext, useEffect, useState } from "react";

import { api } from "../lib/axios";
import { Header } from "../components/Header";
import { UserCard } from "../components/user-card";
import { BlogCard } from "../components/blog-card";
import { BlogContext } from "../context/blog-context";
import { SearchForm } from "../components/search-form";

export interface GithubDataProps {
    avatar_url: string
    name: string
    bio: string
    location: string
    followers: number
    html_url: string
    login: string
}

export function Blog() {
    const [userGithubData, setUserGithubData] = useState<GithubDataProps>({} as GithubDataProps)

    const { post } = useContext(BlogContext)

    async function fetchGithubData() {
        const response = await api.get('/users/larads')

        const data = response.data

        setUserGithubData({
            bio: data.bio,
            name: data.name,
            login: data.login,
            html_url: data.html_url,
            location: data.location,
            followers: data.followers,
            avatar_url: data.avatar_url,
        })
    }


    useEffect(() => {
        fetchGithubData()
    }, [])

    return (
        <div className="h-screen">
            <Header />
            <UserCard userInfo={userGithubData} />

            <div className="mt-16 max-w-4xl mx-auto flex flex-col gap-3">
                <div className="flex items-center justify-between">
                    <h2 className="text-base-subtitle text-lg font-bold leading-relaxed">Publicações</h2>

                    <span className="text-base-span text-sm leading-relaxed">6 publicações</span>
                </div>
                <SearchForm />
            </div>

            <main className="max-w-4xl mx-auto mt-12 grid grid-cols-2 gap-8 pb-32">
                {
                    post.map(item => {
                        return (
                            <BlogCard key={item.title} body={item.body} title={item.title} />
                        )
                    })
                }
            </main>
        </div>
    )
}