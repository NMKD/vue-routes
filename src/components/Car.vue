<template>
    <div>
        <h1 class="mt-5">Car {{ id }}</h1>
        <button @click="toCars" class="btn btn-sm btn-primary center">Back</button>
        <router-link class="btn btn-sm btn-info center ml-3"
            :to="{ name: 'v-carinfo-page', query: { name: 'Mazda', year: 2000 } }">
            Full info
        </router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'v-car-page',
    data() {
        return {
            id: this.$route.params.id
        }
    },
    methods: {
        toCars() {
            this.$router.push('/cars')
        }
    },
    watch: {
        // eslint-disable-next-line no-unused-vars
        $route(toParams, from) {
            this.id = toParams.params.id
        }
    },
    beforeRouteLeave(to, from, next) {
        if (window.confirm('Are you sure want to leave?')) {
            next()
        } else {
            next(false)
        }
    }
}
</script>