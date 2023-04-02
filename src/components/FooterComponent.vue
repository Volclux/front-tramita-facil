<template>
    <footer> TramitaFacil - {{ year }}</footer>
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
