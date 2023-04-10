<template>
    <footer class="text-center p-2"> TramitaFacil - {{ year }}</footer>
</template>

<script>
export default {
    
    setup () {
        let date = new Date();
        let year = date.getFullYear();

        return {
            year
        }
    }
}
</script>
