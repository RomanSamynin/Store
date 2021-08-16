import Inspirations from './pages/Inspirations';
import Rooms from './pages/Rooms';
import Shop from './pages/Shop';
import Admin from './pages/Admin';
import Basket from './pages/Basket';
import Like from './pages/Like';
import Auth from './pages/Auth';
import ProductPage from './pages/ProductPage';
import {ADMIN_ROUTE, INSPIRATIONS_ROUTE, SHOP_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, DEVICE_ROUTE, LIKE_ROUTE, ROOMS_ROUTE } from './utils/consts';


export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
]


export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Component: ProductPage
    },
    {
        path: INSPIRATIONS_ROUTE,
        Component: Inspirations
    },
    {
        path: ROOMS_ROUTE,
        Component: Rooms
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
    {
        path: LIKE_ROUTE,
        Component: Like
    }
]

