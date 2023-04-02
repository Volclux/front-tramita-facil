<template>
    <div class="not-found">
        <img src="@/assets/img/404.png" alt="404" >
        <h1 class="text-3xl text-bold text-center mt-2 mb-2">¡Oh no! Parece que perdimos <br> esta página en el laberinto de internet</h1>
        <RouterLink to="/">
            <button class="btn btn-primary">Volver al incio</button>
        </RouterLink>
        
        
    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/_all.scss";

.not-found{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    color: $dark;
}

</style>