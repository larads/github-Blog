import z from "zod"
import { useContext } from 'react'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { BlogContext } from "../context/blog-context"

const searchFormSchema = z.object({
    query: z.string()
})

export type SearchFormInput = z.infer<typeof searchFormSchema>

export function SearchForm() {
    const { fetchPostsFromGithubIssues } = useContext(BlogContext)

    const {
        register,
        handleSubmit
    } = useForm<SearchFormInput>({
        resolver: zodResolver(searchFormSchema)
    })

    async function handleSearchGithubIssues(data: SearchFormInput) {
        await fetchPostsFromGithubIssues(data.query)
    }

    return (
        <form onSubmit={handleSubmit(handleSearchGithubIssues)}>
            <input
                type="text"
                className="w-full rounded-md px-4 py-3 bg-base-input border border-base-border outline-none focus:ring-2 leading-relaxed text-base-text"
                placeholder="Buscar conteúdo"
                {...register('query')}
            />
        </form>
    )
}