<template>
    <div>
        <NavBar></NavBar>
        <h1 class="bg-blue-200">layout</h1>
        <slot></slot>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
export default {
    components : {
        NavBar
    }
}
</script>