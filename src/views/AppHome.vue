<script>
export default {
    name: 'AppHome',
}

</script>


<template>
    <main class="my_bg_main">
        <div class="container-fluid p-0 h-100 d-flex justify-content-center align-items-center">
            <div class="inner-square row justify-content-between flex-column">
                <div class="links d-flex justify-content-end">
                    <nav class="navbar bg-transparent">
                        <form class="container-fluid justify-content-end bg-transparent">
                            <RouterLink class="btn border-0 btn-sm btn-outline-secondary bg-none text-decoration-none"
                                :to="{ name: 'home' }">Home
                            </RouterLink>
                            <RouterLink class="btn border-0  btn-sm btn-outline-secondary bg-none text-decoration-none"
                                :to="{ name: 'about' }">About
                            </RouterLink>
                            <RouterLink class="btn border-0  btn-sm btn-outline-secondary bg-none text-decoration-none"
                                :to="{ name: 'blog' }">Blog
                            </RouterLink>
                            <RouterLink class="btn border-0  btn-sm btn-outline-secondary bg-none text-decoration-none"
                                :to="{ name: 'contacts' }">Contacts
                            </RouterLink>
                        </form>
                    </nav>

                </div>
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
                <div class="bottom_square d-flex justify-content-between">
                    <div class="copyright text-start text-secondary ibm-plex-mono-thin pb-2">
                        <i class="fa fa-copyright" aria-hidden="true"></i>
                        <span class="text_small"> Copyrith 2024 - All rights reserved.</span>
                    </div>
                    <div class="icons d-flex gap-3 text-end"> <i class="fa fa-linkedin" aria-hidden="true"></i>
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                        <i class="fa fa-github" aria-hidden="true"></i>
                    </div>

                </div>
            </div>
        </div>
    </main>
</template>


<style lang="scss">
.my_bg_main {
    background-color: rgba(241, 245, 252, 0.973);
    height: 100vh;
}


html,
body {
    height: 100%;
    margin: 0;
}


.inner-square {
    height: 100vh;
    width: 100vw;
    border: 1rem solid rgb(33, 52, 174);
}

h1 {
    font-size: 75px;
}

.text_small{
    font-size: 12px;
}
</style>