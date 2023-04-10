<template>
    <section class="procedure-detail mb-2 p-2" aria-label="detail procedure">
        <div class="procedure-info">
            <h3 class="text-xl text-color-dark text-bold">
                {{ detailProcedure.title }}
            </h3>
            <p class="text-color-dark-soft text-lg">
                {{ detailProcedure.description }}
            </p>
        </div>
        <div class="procedure-mode">
            <IconTelematic v-if="detailProcedure.mode === 'T' || detailProcedure.mode === 'PT'"></IconTelematic>
            <iconInPerson v-if="detailProcedure.mode === 'P' || detailProcedure.mode === 'PT'"></iconInPerson>
        </div>
        <div class="procedure-url">
            <iconLink :fill="'#000000'"></iconLink><a href="#" target="_blank">Ir al sitio</a>
        </div>
        {{ detailProcedure.additional_values }}

    </section>
</template>

<script>
import iconTelematic from "@/components/icons/iconTelematic.vue";
import iconInPerson from "@/components/icons/iconInPerson.vue";
import iconLink from "@/components/icons/iconLink.vue";
export default {
    props: {
        detailProcedure: {
            type: Object,
            required: true
        }
    },
    components: {
    iconTelematic,
    iconInPerson,
    iconLink,
    
    }
}
</script>

<style lang="scss" scoped>
.procedure-detail{
    display: flex;
    flex-direction: column;
    background: $light;
    border-radius: $border-radius;
}
.procedure-url{
    display: flex;
    align-items: center;
    width: auto;
    background-color: $primary-soft;
    border-radius: $border-radius;
    & a{
        color: $primary;
        text-decoration: none;
    }
}
</style>