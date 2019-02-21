<template>
    <div>
        This is the sub app coded in app-sub/SubIndex.vue ({{today}})<br/>
        <router-link :to="{name:'AnotherSubpage'}">Next page</router-link>
    </div>
</template>

<script>
    import { dayjs } from 'corelib'

    export default {
        name: 'app',
        data: () => {
            return {

            }
        },
        computed: {
            today: function () {
                return dayjs()
            }
        }
    }
</script>