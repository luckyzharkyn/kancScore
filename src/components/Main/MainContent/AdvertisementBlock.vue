<template>
    <div class="main__content__advertisement">
        <div class="poster">
            <img :src="mainPoster" alt="poster">
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
                mainPoster: 'https://thumbs.dreamstime.com/b/%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B9-%D0%B3%D0%BE%D1%80%D0%B8%D0%B7%D0%BE%D0%BD%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D1%80%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D0%BD%D1%8B%D0%B9-%D0%BF%D0%BB%D0%B0%D0%BA%D0%B0%D1%82-%D0%BD%D0%B0-%D1%83%D0%BB%D0%B8%D1%86%D0%B5-%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80-d-%D1%80%D0%B5%D0%BD%D0%B4%D0%B5%D1%80%D0%B8%D0%BD%D0%B3-148827254.jpg',
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
        },
    }
</script>