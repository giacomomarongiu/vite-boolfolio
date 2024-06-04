<script>
export default {
    name: "AppHeader",
}
</script>

<template>
    <div class="links d-flex justify-content-end">
        <div class="ball ibm-plex-mono-bold">Booleaner</div>
        <nav class="navbar ">
            <form class="container-fluid justify-content-end">
                <RouterLink class="btn border-0 btn-sm btn-outline-danger text-decoration-none fw-bold"
                    :to="{ name: 'home' }">Home
                </RouterLink>
                <RouterLink class="btn border-0  btn-sm btn-outline-danger text-decoration-none fw-bold"
                    :to="{ name: 'about' }">Photogallery
                </RouterLink>
                <RouterLink class="btn border-0  btn-sm btn-outline-danger text-decoration-none fw-bold"
                    :to="{ name: 'contacts' }">Contacts
                </RouterLink>
                <RouterLink class="btn border-0  btn-sm btn-outline-danger text-decoration-none fw-bold"
                    :to="{ name: 'blog' }">Blog
                </RouterLink>
            </form>
        </nav>
    </div>
</template>

<style lang="scss">
.ball {
    height: 250px;
    width: 250px;
    border: 1rem solid rgba(196, 48, 48, 0.722);
    border-radius: 50%;
    position: absolute;
    left: 10%;
    top: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(196, 48, 48, 0.722);
    font-size: 70px;
    transform: rotate(320deg);
    z-index: 1;

}
</style>