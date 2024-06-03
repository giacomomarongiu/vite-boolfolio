<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';

export default {
    name: 'SingleProject',

    components: {
        ProjectCard
    },

    data() {
        return {
            base_api_url: 'http://127.0.0.1:8000',
            base_projects_url: '/api/projects',
            project: null,
            projectID: null,
        }
    },
    methods: {

        /**Mi permette di effettuare una chiama API al mio server locale
     * 
     * @param {string} url 
     */
        callAPI(url) {
            axios
                .get(url)
                .then(response => {
                    console.log(response);
                    this.project = response.data.response
                })
                .catch(err => {
                    console.error(err);
                })
        }
    },
    created() {
        //Chiamo la funzione nel Mounted per avere già dati in pagina
        this.projectID = this.$route.params.id;
        let url = this.base_api_url + this.base_projects_url + '/' + this.projectID;
        console.log(url);
        this.callAPI(url);
    }
}
</script>

<template>
    <div> {{ console.log(this.project) }}
        <ProjectCard :project="this.project"></ProjectCard>
    </div>
</template>

<style lang="scss"></style>