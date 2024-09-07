import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { BlogProvider } from "./context/blog-context";

export function App() {
    return (
        <BrowserRouter>
            <BlogProvider>
                <Router />
            </BlogProvider>
        </BrowserRouter>
    )
}