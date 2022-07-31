<template>
    <footer>
            <div class="social-networks">
                <div class="treaty">
                    <a href="#">Договор</a>
                    <a href="#">Отзывы</a>
                </div>
                <div class="social-links">
                    <ul class="social-icons">
                        <li v-for="(item, index) in socialClass"
                            :key="index">
                            <a :class="item.className" :href="item.href" target="_blank" rel="noopener"></a>
                        </li>
                      </ul>
                </div>
            </div>
        </footer>
</template>

<script>
    export default {
        data() {
            return {
                socialClass: [
                    {className: 'social-icon-twitter', href: '#'},
                    {className: 'social-icon-fb', href: '#'},
                    {className: 'social-icon-vk', href: '#'},
                    {className: 'social-icon-telegram', href: '#'},
                    {className: 'social-icon-youtube', href: '#'},
                ]
            }
        }
    }  
</script>