<script>
import axios from 'axios';
import AppHeader from "../components/AppHeader.vue"
import AppFooter from "../components/AppFooter.vue"



export default {
    name: 'AppAbout',
    components: {
        AppHeader,
        AppFooter
    },
    data() {
        return {
            base_api_url: 'http://127.0.0.1:8000',
            base_projects_url: '/api/projects',
            projects: [],
            activeIndex: 0
            //loading: true
        }
    },
    methods: {

        prev() {
            this.activeIndex = (this.activeIndex === 0) ? this.projects.length - 1 : this.activeIndex - 1;

        },
        next() {
            this.activeIndex = (this.activeIndex === this.projects.length - 1) ? 0 : this.activeIndex + 1;
        },

        /**Mi permette di effettuare una chiama API al mio server locale
     * 
     * @param {string} url 
     */
        callAPI(url) {
            axios
                .get(url)
                .then(response => {
                    console.log(response);
                    this.projects = response.data.carosuelProjects
                    //this.loading = false
                    //console.log(response.data.projects);
                })
                .catch(err => {
                    console.error(err);
                })
        }
    },
    mounted() {
        //Chiamo la funzione nel Mounted per avere già dati in pagina
        let url = this.base_api_url + this.base_projects_url
        this.callAPI(url);
    }
}

</script>


<template>

    <main class="my_bg_main">
        <div class="container-fluid p-0 h-100 d-flex justify-content-center align-items-center">
            <div class="inner-square d-flex  px-2 justify-content-between flex-column">
                <AppHeader></AppHeader>

                <div id="carouselExample" class="carousel slide mb-5">
                    <div class="carousel-inner m-auto my_height">

                        <div class="carousel-item" v-for="(project, index) in this.projects"
                            :class="{ active: index === activeIndex }">
                            {{ console.log(project.img) }}
                            <template v-if="(project.img).startsWith('uploads')">
                                <img class="card-img-top" :src="project.img" alt="">
                            </template>
                            <template v-else>
                                <img class="card-img-top" :src="project.img" alt="">
                            </template>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>

                <AppFooter></AppFooter>
            </div>
        </div>
    </main>

</template>


<style lang="scss">
.my_height{
    max-height: 70vh;
    max-width: 150vh;
}

</style>