<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div>
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link class="nav-link" :to="{name: 'v-home-page'}" active-class="active">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{name: 'v-cars-page'}" exact active-class="active">Cars</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/car/3" exact active-class="active">Cars 3</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/car/5" exact active-class="active">Cars 5</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script scoped>
export default {
    name: 'v-navbar-links',
}
</script>