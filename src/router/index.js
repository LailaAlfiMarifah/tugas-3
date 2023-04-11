import { createWebHistory, createRouter} from "vue-router"
import Home from "@/views/Home"
import Contact from "@/views/Contact"
import About from "@/views/About"
import Product from "@/views/Product"
import Detail from "@/views/Detail"

const routes = [
    {
        path:  "/",
        name: "Home",
        componen: Home,
    },
    {
        path:  "/contact",
        name: "Contact",
        componen: Contact,
    },
    {
        path:  "/about",
        name: "About",
        componen: About,
    },
    {
        path:  "/product",
        name: "Product",
        componen: Product,
    },
    {
        path:  "/detail/:id_product",
        name: "Detail",
        componen: Detail,
        props : true,
    },
];

const router = createRouter({
    history : createWebHistory(),
    routes,
});

export default router;