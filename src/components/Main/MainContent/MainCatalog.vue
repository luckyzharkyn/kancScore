<template>
    <div class="main_catalog_anim" :class="addAnimation()">
    <AdvertisementBlock />
    <div class="main__catalog">
        <ul>
            <li v-for="item in cataLogList"
                :key="item.id">
                <a :href="item.href">
                    <img :src="item.src" :alt="item.alt">
                    <p>{{item.name}}</p>
                    <p>{{item.price}}</p>
                </a>
                <button>in cart</button>
            </li>
        </ul>
    </div>
    </div>
</template>

<script>
import AdvertisementBlock from './AdvertisementBlock.vue'
    export default {
    data() {
        return {
            cataLogList: [
                {
                    id: 1,
                    src: "https://images.satu.kz/134104585_papka-registrator-shirina-koreshka.jpg",
                    href: "#",
                    alt: "folder",
                    name: "folder",
                    price: "500"
                },
                {
                    id: 2,
                    src: "https://images.satu.kz/134104585_papka-registrator-shirina-koreshka.jpg",
                    href: "#",
                    alt: "folder",
                    name: "folder",
                    price: "500"
                },
                {
                    id: 3,
                    src: "https://images.satu.kz/134104585_papka-registrator-shirina-koreshka.jpg",
                    href: "#",
                    alt: "folder",
                    name: "folder",
                    price: "500"
                },
                {
                    id: 4,
                    src: "https://images.satu.kz/134104585_papka-registrator-shirina-koreshka.jpg",
                    href: "#",
                    alt: "folder",
                    name: "folder",
                    price: "500"
                },
                {
                    id: 5,
                    src: "https://images.satu.kz/134104585_papka-registrator-shirina-koreshka.jpg",
                    href: "#",
                    alt: "folder",
                    name: "folder",
                    price: "500"
                },
                {
                    id: 6,
                    src: "https://images.satu.kz/134104585_papka-registrator-shirina-koreshka.jpg",
                    href: "#",
                    alt: "folder",
                    name: "folder",
                    price: "500"
                },
                {
                    id: 7,
                    src: "https://images.satu.kz/134104585_papka-registrator-shirina-koreshka.jpg",
                    href: "#",
                    alt: "folder",
                    name: "folder",
                    price: "500"
                },
                {
                    id: 8,
                    src: "https://images.satu.kz/134104585_papka-registrator-shirina-koreshka.jpg",
                    href: "#",
                    alt: "folder",
                    name: "folder",
                    price: "500"
                },
            ]
        };
    },
    methods: {
        addAnimation() {
            return {slideRight : true}
        }
    },
    components: { AdvertisementBlock }
}
</script>