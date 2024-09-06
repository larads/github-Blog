import { Blog } from "./screens/Blog";
import { BlogProvider } from "./context/blog-context";

export function App() {
    return (
        <BlogProvider>
            <Blog />
        </BlogProvider>
    )
}