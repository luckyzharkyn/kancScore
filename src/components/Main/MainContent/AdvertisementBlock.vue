<template>
    <div class="main__content__advertisement">
        <div class="poster">
            <img src="https://www.csusm.edu/artopp/images/poster-images-english/poster-3.jpg" alt="poster">
            <div class="poster-nav">
                <ul>
                    <li v-for="(item, index) in posterList"
                        :key="index">
                        <a :href="item.href">{{item.title}}</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="poster2">
            <div v-for="(item, index) in poster2List" :class="item.className" :key="index">
                <img :src="item.src" :alt="item.alt">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                posterList: [
                    {title: 'new', href: '#'},
                    {title: 'paper', href: '#'},
                    {title: 'red paper', href: '#'},
                    {title: 'information', href: '#'},
                ],
                poster2List: [
                    {src: 'https://klike.net/uploads/posts/2019-11/1573899403_2.jpg', alt: "action", className: "action"},
                    {src: 'https://st2.depositphotos.com/1021974/6857/i/950/depositphotos_68572319-stock-photo-sale-sign-over-red-background.jpg', alt: "sale", className: "sale"},
                    {src: 'https://miro.medium.com/max/1400/1*COuwMUFfPAzADv7zEysdbg.jpeg', alt: "percent", className: "percent"}
                ]
            }
        }
    }
</script>