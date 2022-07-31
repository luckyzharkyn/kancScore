<template>
    <main>
        <MainImg />
        <div class="container">
            <div class="main__content" :class="addAnimation()">
                <SideBar/>

                <div class="site_content">
                    <SearchComponent />
                        <router-view>
                        </router-view>
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

    export default {
        data() {
            return {
                
            }
        },
        methods: {
            addAnimation() {
                return {vanishIn: true}
            },
        },
        components: { 
            MainImg, SearchComponent, MainNews, 
            SideBar, 
        },
}
</script>