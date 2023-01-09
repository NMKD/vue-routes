<template>
    <div>
        <h1 class="text-center m-5">Cars page</h1>
        <ul>
            <li v-for="car in 5" :key="car">
                <router-link :to="{name: 'v-car-page', params: {id: car}}">
                    <a>Car: {{ car }}</a>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'v-cars-page',
}
</script>

