<template>
        <Header class="header" :class="{puffIn: true}">
                <div class="navigation">
                    <ul>
                        <li>
                            <select>
                                <option value="Almaty">Almaty</option>
                                <option value="Astana">Astana</option>
                            </select>
                        </li>
                        <li v-for="(item, index) in MenuList"
                            :key="index"
                            >
                            <a :href="item.href"
                            >{{item.title}}</a>
                        </li>
                    </ul>
                </div>
                <div class="auth">
                    Авторизация
                </div>
                <div class="cart"
                    @click="getActiveCatalog('inCart')">
                    Корзина
                </div>
        </Header>
</template>

<script>
    export default {
        props: {
            getActiveCatalog: Function
        },
        data() {
            return {
                MenuList: [
                    {title: 'About us', href: "#"},
                    {title: 'С нами выгодно', href: "#"},
                    {title: 'Условия покупки', href: "#"},
                    {title: 'Помощь', href: "#"},
                    {title: 'Контакты', href: "#"},
                    {title: 'Акции', href: "#"},
                ],
            }
        },
        methods: {
            
        }
    }
</script>