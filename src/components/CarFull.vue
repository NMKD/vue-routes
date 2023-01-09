<template>
    <div>
        <h3 class="mt-5">Car name: {{ $route.query.name }}</h3>
        <p>{{ $route.query.year }} year</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, cumque!</p>
    </div>
</template>

<script>
export default {
    name: 'v-carinfo-page',
}
</script>