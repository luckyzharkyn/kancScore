<template>
    <main>
        <MainImg />
        <div class="container">
            <div class="main__content" :class="{vanishIn: true}">
                <SideBar/>

                <div class="site_content">
                    <SearchComponent />
                    <MainCatalog />
                    <CatalogsList />
                        <!-- <router-view>
                        </router-view> -->
                    <MainNews />
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import MainImg from "./MainImg.vue";
import SideBar from "./MainContent/SideBar.vue";
import SearchComponent from "./MainContent/SearchComponent.vue";
import MainNews from "./MainContent/MainNews.vue";
import MainCatalog from "./MainContent/MainCatalog.vue";
import CatalogsList from "./MainContent/CatalogsList.vue";

    export default {
        data() {
            return {
                
            }
        },
        methods: {
            
        },
        components: {
            MainImg,
            SearchComponent,
            MainNews,
            SideBar,
            MainCatalog,
            CatalogsList
        },
}
</script>