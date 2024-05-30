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

    <div class="col-4">
        <div class="card">
            <!--             <img class="card-img-top" src="" alt="Title" />
 -->
            <div class="card-body">
                <h4 class="card-title">{{project.title}}</h4>
                <p class="card-text">{{ project.description }}</p>
            </div>
        </div>
    </div>
</template>

<style></style>
