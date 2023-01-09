<template>
    <div>
        <h3 class="font-weight-bold text-danger mt-5 mb-3">404 Not Found</h3>
        <router-link :to="{name: 'v-home-page'}" class="btn btn-primary">To Home</router-link>
    </div>
</template>

<script>
export default {
    name: 'v-error-page',
}
</script>