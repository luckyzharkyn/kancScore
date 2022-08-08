<template>
    <div class="List">
            <div class="list_item" v-for="item in ListItems" :key="item.id">
                <div class="list_img">
                    <img :src="item.src" :alt="item.alt">
                </div>
                <div class="list_name">
                    <a :href="item.href">{{item.name}}</a>
                    <p class="list_description">{{item.description}}</p>
                </div>
                <div class="list_dates">
                    <div class="list_dates-header">
                        <p>{{item.id}}</p>
                        <button>
                            купить
                        </button>
                        <button>
                            удалить
                        </button>
                    </div>
                    <div class="list_dates-footer">
                        {{getPrice(item.price)}}
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        props: {
            ListItems: Array,
        },
        data() {
            return {
                
            }
        },
        methods: {
            getPrice(price) {
                return price + " тг";
            },
    },
    }
</script>