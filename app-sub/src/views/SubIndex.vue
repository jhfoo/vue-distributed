<template>
    <div>
        This is the sub app coded in app-sub/SubIndex.vue ({{today}})
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