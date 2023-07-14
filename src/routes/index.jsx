//layouts
import AdminLayout from "@/layouts/AdminLayout"
import PrivateLayout from "@/layouts/PrivateLayout"

//auth pages
import SignIn from "@/pages/auth/SignIn"
import SignUp from "@/pages/auth/SignUp"

//private pages
import Account from "@/pages/private/Account"
import Book from "@/pages/private/Book"

//admin pages
import AdminHome from "@/pages/private/Admin/AdminHome"
import AdminBooking from "@/pages/private/Admin/AdminBooking"
import AdminApprovedTable from "@/pages/private/Admin/AdminApprovedTable"
import AdminAccount from "@/pages/private/Admin/AdminAccount"
import AdminLogin from "@/pages/private/Admin/AdminLogin"
import AdminRecruiment from "@/pages/private/Admin/AdminRecruiment"
import AdminReviews from "@/pages/private/Admin/AdminReviews"

//public pages
import Hire from "@/pages/public/Hire"
import Home from "@/pages/public/Home"

// routes
const PageRoutes = [
    { path: '/', component: Home },
    { path: '/hire', component: Hire },

    //auth
    { path: '/signin', component: SignIn, layout: null },
    { path: '/signup', component: SignUp, layout: null },

    //private
    { path: '/book', component: Book, layout: PrivateLayout },
    { path: '/account', component: Account, layout: PrivateLayout },

    //Admin
    { path: '/admin', component: AdminLogin, layout: null },
    { path: '/admin/home', component: AdminHome, layout: AdminLayout },
    { path: '/admin/account', component: AdminAccount, layout: AdminLayout },
    { path: '/admin/booking', component: AdminBooking, layout: AdminLayout },
    { path: '/admin/approved-tables', component: AdminApprovedTable, layout: AdminLayout },
    { path: '/admin/recruitment', component: AdminRecruiment, layout: AdminLayout },
    { path: '/admin/reviews', component: AdminReviews, layout: AdminLayout },
]

export { PageRoutes }