<template>
    <div>
        Loading app...
    </div>
</template>

<script>
    export default {
        name: 'app',
        data: () => {
            return {

            }
        },
        mounted: function () {
            console.log('Loading subapp')
            return loadScript('/subapp-bundle.js')
                .then(() => {
                    let url = SubappLib.RegisterRoutes(this.$router)
                    this.$router.replace({name: url})
                })
        },
        computed: {}
    }
</script>