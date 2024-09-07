import { Routes, Route } from 'react-router-dom'

import { Blog } from './screens/Blog'
import { PostDetail } from './screens/PostDetail'

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<Blog />} />
            <Route path='/post/:id' element={<PostDetail />} />
        </Routes>
    )
}