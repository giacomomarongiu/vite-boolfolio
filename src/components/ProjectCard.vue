<script>
export default {
    name: "ProjectCard",
    props: {
        project: Object
    },
    data() {
        return {

        }
    },
}

</script>

<template>

    <div class="col-6" v-if="project">
        <div class="my_card h-100">
            <template v-if="project">

                <template v-if="project.img.startsWith('uploads')">
                    <img class="card-img-top" :src="base_api_url + '/storage/' + project.img" alt="">
                </template>
                <template v-else>
                    <img class="card-img-top" :src="project.img" alt="">
                </template>

                <div class="my_card_body d-flex h-100">
                    <h5 class="my_card_title ibm-plex-mono-medium">{{ project.title }}</h5>
                    <p class=" m-3 ibm-plex-mono-light text-end ">{{ project.description }}</p>

                    <div class="links d-flex">
                        <a :href="project.github_link" class="my_btn">GitHub</a>
                        <RouterLink class=" my_btn" :to="{ name: 'single-project', params: { id: project.id } }">
                            Details
                        </RouterLink>
                    </div>

                </div>

            </template>
            <template v-else>
                Loading
            </template>
        </div>

    </div>
    <div v-else>Loading</div>
</template>

<style lang="scss"></style>
