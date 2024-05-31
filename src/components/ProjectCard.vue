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

    <div class="col-6">
        <div class="card">
            <template v-if="project.img.startsWith('uploads')">
                <img class="card-img-top" :src="base_api_url + '/storage/' + project.img" alt="">
            </template>
            <template v-else>
                <img class="card-img-top" :src="project.img" alt="">
            </template>

            <div class="card-body d-flex flex-column ">
                <h4 class="card-title h-25">{{ project.title }}</h4>
                <p class="card-text h-50 overflow-hidden mt-5">{{ project.description }}</p>
                <div class="card-body h-25">
                    <a :href="project.github_link" class="btn btn-primary mb-2">View it on GitHub</a>
                    <p class="card-text text-start fw-bold m-2">Project start: <span class="fw-normal">{{ project.start_date
                            }}</span></p>
                    <p class="card-text text-start fw-bold m-2">Project end: <span class="fw-normal">{{ project.end_date
                            }}</span></p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss"></style>
