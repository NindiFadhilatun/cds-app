import {createRouter,createWebHistory} from 'vue-router'
import BodyPage from './../components/BodyPage.vue'
import LoginPage from './../components/LoginPage.vue'
import BooksList from './../components/BooksList.vue'
import BookPage from './../components/BookPage.vue'
import BooksAdmin from './../components/BooksAdmin.vue'
import BookEdit from './../components/BookEdit.vue'
import UsersList from './../components/UsersList.vue'
import UserEdit from './../components/UserEdit.vue'
import security from "@/components/security";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: BodyPage,
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginPage,
    },
    {
        path: '/books',
        name: 'Books',
        component: BooksList,
    },
    {
        path: '/books/:bookName',
        name: 'Book',
        component: BookPage,
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
        name: 'Users',
        component: UsersList,
    },
    {
        path: '/admin/users/:userId',
        name: 'User',
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