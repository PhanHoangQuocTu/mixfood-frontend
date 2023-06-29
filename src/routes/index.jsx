import SignIn from "@/pages/auth/SignIn"
import SignUp from "@/pages/auth/SignUp"
import Home from "@/pages/public/Home"

//public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/signin', component: SignIn, layout: null },
    { path: '/signup', component: SignUp, layout: null },
]

//private routes
const privateRoutes = [

]

export { publicRoutes, privateRoutes }