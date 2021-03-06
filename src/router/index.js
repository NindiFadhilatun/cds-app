import {createRouter,createWebHistory} from 'vue-router'
import BodyPage from './../components/BodyPage.vue'
import LoginComposition from './../components/LoginComposition.vue'
import BooksComposition from './../components/BooksComposition.vue'
import BookComposition from './../components/BookComposition.vue'
import BooksAdmin from './../components/BooksAdmin.vue'
import BookEdit from './../components/BookEdit.vue'
import UsersList from './../components/UsersList.vue'
import UserEdit from './../components/UserEdit.vue'
import security from "@/components/security";

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: BodyPage,
    },
    {
        path: '/login',
        name: 'LoginComposition',
        component: LoginComposition,
    },
    {
        path: '/books',
        name: 'BooksComposition',
        component: BooksComposition,
    },
    {
        path: '/books/:bookName',
        name: 'BookComposition',
        component: BookComposition,
    },
    {
        path: '/admin/books',
        name: 'BooksAdmin',
        component: BooksAdmin,
    },
    {
        path: '/admin/books/:bookId',
        name: 'BookEdit',
        component: BookEdit,
    },
    {
        path: '/admin/users',
        name: 'UsersList',
        component: UsersList,
    },
    {
        path: '/admin/users/:userId',
        name: 'UserPage',
        component: UserEdit,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// this function will run every time a user navigates to any part of the site,
// and call checkToken(). If the user has a token in store.token, then we validate
// that token.
router.beforeEach(() => {
    security.checkToken();
})

export default router