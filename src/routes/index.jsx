import PrivateLayout from "@/layouts/PrivateLayout"
import SignIn from "@/pages/auth/SignIn"
import SignUp from "@/pages/auth/SignUp"
import Book from "@/pages/private/Book"
import Home from "@/pages/public/Home"

// routes
const PageRoutes = [
    { path: '/', component: Home },
    { path: '/signin', component: SignIn, layout: null },
    { path: '/signup', component: SignUp, layout: null },
    { path: '/book' , component: Book, layout: PrivateLayout}
]

export { PageRoutes }