<template>
    <div class="w-full">
        <NavBar></NavBar>
        <!-- <h1 class="bg-blue-200">layout</h1> -->
        <div class="w-full flex justify-center">
            <div class="container">
                <slot></slot>
            </div>
        </div>
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