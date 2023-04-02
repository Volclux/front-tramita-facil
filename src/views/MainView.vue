<template>
  <HeroComponent> </HeroComponent>
  <section class="mt-2">
    <section class="content-input">
      <input
          class="input input-text"
          type="search"
          @keyup.enter="searchTerm"
          v-model="searchTerm"
          minlength="3"
          maxlength="30"
          required
        />
      <span for="search"
        >Escriba el nombre del trámite
      </span>

    </section>
    <button class="btn btn-primary" @click="searh">Buscar</button>
  </section>

  <section class="content-procedures">
    <ProcedureComponent v-for="procedure in procedures" :key="procedure.id">
      <template #title>{{ procedure.title }}</template>
      <template #description>{{ procedure.description }}</template>
      <slot v-if="procedure.mode === 'T'">
        <p class="text-info-dark bg-info-soft tag"><iconTelematic :stroke="telematic"></iconTelematic> Telematica</p>
      </slot>
      <slot v-if="procedure.mode === 'P'">
        <p class="text-warning-dark bg-warning-soft tag"><iconInPerson :fill="inPerson"></iconInPerson> Presencial</p>
      </slot>
      <slot v-if="procedure.mode === 'PT'">
        <p class="text-info-dark bg-info-soft  tag"><iconTelematic :stroke="telematic"></iconTelematic> Telematica</p>
        <p class="text-warning-dark bg-warning-soft  tag"><iconInPerson :fill="inPerson"></iconInPerson> Presencial</p>
      </slot>
      
      <template #button>
        <button
          type="button"
          @click="showDetails(procedure.id)"
          class="btn btn-primary">
          Acceder
        </button></template
      >
    </ProcedureComponent>
    
  </section>
</template>

<script>
import HeroComponent from "@/components/HeroComponent.vue";
import ProcedureComponent from "@/components/ProcedureComponent.vue";
import ProcedureService from "@/services/ProcedureService.js";
import iconTelematic from "@/components/icons/iconTelematic.vue";
import iconInPerson from "@/components/icons/iconInPerson.vue";

export default {
  name: "MainView",
  data() {
    return {
      searchTerm: "",
      search: "",
      procedures: [],
      inPerson: "#755a00",
      telematic: '#013a65',
    };
  },
  mounted() {
    ProcedureService.getProcedures().then((response) => {
      this.procedures = response.results;
    });
  },
  components: {
    HeroComponent,
    ProcedureComponent,
    iconTelematic,
    iconInPerson,
  },
};
</script>

<style lang="scss" scoped>
.content-input {
  position: relative;
  width: 820px;
  margin-bottom: 1rem;
  input{
    width: 100%;
    padding: 0.5rem;
    border-radius: $border-radius;
    outline: none;
    transition: 0.5s;
    + span{
      position: absolute;
      top: 0;
      left: 0;
      padding: 0.4rem;
      pointer-events: none;
      color: $primary;
      transition: 0.5s;
    }
    &:valid ~ span, &:focus~span{
        color: $primary;
        transform: translateX(1rem) translateY(-.8rem);
        font-size: 1rem;
        padding: 0 1rem;
        background-color: $light-soft;
        border-left: 0.05rem solid$primary;
        border-right: 0.05rem solid$primary;
    }
    &:valid, &:focus{
      border: 0.05rem solid $primary;
    }
  }
}
.content-procedures{
  display: flex;
  flex-direction: column;

}
.tag{
  border-radius: $border-radius;
  display: flex;
  align-items: center;
  gap: .5rem;
  padding: .5rem;
}
</style>
