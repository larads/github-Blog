import { api } from "../lib/axios";
import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { UserCard } from "../components/user-card";

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
        </div>
    )
}