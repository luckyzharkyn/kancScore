<template>
    <div class="main__news">
        <div class="main__news_title">News</div>
        <div class="news_block" v-for="(item, index) in newsList" :key="index">
            <p class="title">
                {{item.title}}
            </p>
            <p class="description">
                {{item.description}}
            </p>
        </div>
        
    </div>
</template>

<script>
    export default {
        data() {
            return {
                newsList: [
                    {
                        title: 'С праздником Наурыз!!!',
                        description: 'В светлый весенний праздник Наурыз, который дарит новые надежды и возможности, мы, коллектив ТОО "ЛИТАН", желаем Вам здоровья, мира, добра, весеннего '
                    },
                    {
                        title: 'С 8 марта!!!',
                        description: 'В светлый весенний праздник Наурыз, который дарит новые надежды и возможности, мы, коллектив ТОО "ЛИТАН", желаем Вам здоровья, мира, добра, весеннего '
                    },
                    {
                        title: 'С Днем Защитника Отечества!!!',
                        description: 'В светлый весенний праздник Наурыз, который дарит новые надежды и возможности, мы, коллектив ТОО "ЛИТАН", желаем Вам здоровья, мира, добра, весеннего '
                    },
                ]
            }
        }
    }
</script>