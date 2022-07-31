import { createRouter, createWebHashHistory } from "vue-router";

import MainCatalog from "@/components/Main/MainContent/MainCatalog"
import CatalogsList from "@/components/Main/MainContent/CatalogsList"

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path:'/', component: MainCatalog},
        {path: "/ConstructionMaterials", component: CatalogsList},
    ]
})