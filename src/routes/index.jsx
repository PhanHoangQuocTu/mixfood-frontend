//layouts
import AdminLayout from "@/layouts/AdminLayout"
import PrivateLayout from "@/layouts/PrivateLayout"

//auth
import SignIn from "@/pages/auth/SignIn"
import SignUp from "@/pages/auth/SignUp"
import AdminAccount from "@/pages/private/Admin/AdminAccount"
import AdminApprovedTable from "@/pages/private/Admin/AdminApprovedTable"
import AdminBooking from "@/pages/private/Admin/AdminBooking"

//pages
import AdminHome from "@/pages/private/Admin/AdminHome"
import AdminLogin from "@/pages/private/Admin/AdminLogin"
import AdminRecruiment from "@/pages/private/Admin/AdminRecruiment"
import AdminReviews from "@/pages/private/Admin/AdminReviews"
import Book from "@/pages/private/Book"
import Hire from "@/pages/public/Hire"
import Home from "@/pages/public/Home"

// routes
const PageRoutes = [
    { path: '/', component: Home },
    { path: '/signin', component: SignIn, layout: null },
    { path: '/signup', component: SignUp, layout: null },
    { path: '/book', component: Book, layout: PrivateLayout },
    { path: '/hire', component: Hire },
    { path: '/admin', component: AdminLogin, layout: null },
    { path: '/admin/home', component: AdminHome, layout: AdminLayout },
    { path: '/admin/account', component: AdminAccount, layout: AdminLayout },
    { path: '/admin/booking', component: AdminBooking, layout: AdminLayout },
    { path: '/admin/approved-tables', component: AdminApprovedTable, layout: AdminLayout },
    { path: '/admin/recruitment', component: AdminRecruiment, layout: AdminLayout },
    { path: '/admin/reviews', component: AdminReviews, layout: AdminLayout },
]

export { PageRoutes }