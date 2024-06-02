<script>
import AppHeader from "../components/AppHeader.vue"
import AppFooter from "../components/AppFooter.vue"


export default {
    name: 'AppHome',
    components: {
        AppHeader,
        AppFooter
    },
}

</script>


<template>
    <main class="my_bg_main">
        <div class="container-fluid p-0 h-100 d-flex justify-content-center align-items-center">
            <div class="inner-square row justify-content-between flex-column">
                <AppHeader></AppHeader>
                <div class="my_name">
                    <h1 class="text-center ibm-plex-mono-bold">
                        Giacomo Marongiu
                    </h1>
                    <p class="text-center ibm-plex-mono-thin text_small">from Sardinia | Italy</p>
                    <div class="text-center ibm-plex-mono-regular">
                        Aspiring Full Stack Developer | Formed by Boolean - Class 119
                    </div>
                    <div class="text-center ibm-plex-mono-regular">
                        HTML + CSS + Bootstrap + Javascript + Vue + Vite + Php + Laravel
                    </div>
                </div>
                <AppFooter></AppFooter>
            </div>
        </div>
    </main>
</template>


<style lang="scss">
.my_name h1 {
    font-size: 75px;
}
</style>