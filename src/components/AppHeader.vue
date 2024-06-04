<script>
export default {
name: "AppHeader",
}
</script>

<template>
    <div class="links d-flex justify-content-end">
        <nav class="navbar ">
            <form class="container-fluid justify-content-end">
                <RouterLink class="btn border-0 btn-sm btn-outline-danger text-decoration-none fw-bold"
                    :to="{ name: 'home' }">Home
                </RouterLink>
                <RouterLink class="btn border-0  btn-sm btn-outline-danger text-decoration-none fw-bold"
                    :to="{ name: 'blog' }">Blog
                </RouterLink>
                <RouterLink class="btn border-0  btn-sm btn-outline-danger text-decoration-none fw-bold"
                    :to="{ name: 'about' }">About
                </RouterLink>
                <RouterLink class="btn border-0  btn-sm btn-outline-danger text-decoration-none fw-bold"
                    :to="{ name: 'contacts' }">Contacts
                </RouterLink>
            </form>
        </nav>
    </div>
</template>

<style lang="scss"></style>