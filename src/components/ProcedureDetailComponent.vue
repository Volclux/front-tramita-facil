<template>
  <section class="procedure-detail mb-2 p-2" aria-label="Detail procedures">
    <section class="procedure-info" aria-label="Info principal">
      <h3 class="text-xl text-color-dark text-bold">
        {{ detailProcedure.title }}
      </h3>
      <p class="text-color-dark-soft text-lg">
        {{ detailProcedure.description }}
      </p>
    </section>
    <section class="procedure-mode">
      <p class="text-info-dark bg-info-soft tag">
        <iconTelematic v-if="detailProcedure.mode === 'T' || detailProcedure.mode === 'PT'"
        :fill="telematic"></iconTelematic>
        <span class="tooltipText">Telemática</span>
      </p>
        <p class="text-info-dark bg-info-soft tag">
        <iconInPerson v-if="detailProcedure.mode === 'P' || detailProcedure.mode === 'PT'"
        :fill="telematic"></iconInPerson>
        <span class="tooltipText">Presencial</span>
      </p>
        <section class="procedure-url">
            <iconLink :fill="'#000000'"></iconLink>
            <a id="procedure-link" href="#" target="_blank">Acceso a la presentación</a>
        </section>
    </section>
    <section aria-label="Procedure additional values">
        {{ detailProcedure.additional_values }}
    </section>
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
      required: true,
    },
  },
  components: {
    iconTelematic,
    iconInPerson,
    iconLink,
  },
};
</script>

<style lang="scss" scoped>
.procedure-detail {
  display: flex;
  flex-direction: column;
  background: $light;
  border-radius: $border-radius;
}
.procedure-mode{
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
}
.tag {
  border-radius: $border-radius;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
}
.procedure-url {
  display: flex;
  align-items: center;
  width: auto;
  padding: 0.5rem;
  gap: 1rem;
  background-color: #fff;
  border-radius: $border-radius;
  &:hover{
    background-color: $primary;
  }
  & a {
    color: $primary;
    text-decoration: none;
    &:hover{
        color: $primary-soft;
    }
  }

}
.tooltipText {
  visibility: hidden;
  width: auto;
  background-color: $dark;
  color: $light;
  text-align: center;
  border-radius: $border-radius;
  padding: 0.05rem 0.5rem;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;
  opacity: 0.5;
  transition: opacity 0.3s;
}

.tag {
  &:hover .tooltipText {
    visibility: visible;
    opacity: 1;
  }
}
</style>
