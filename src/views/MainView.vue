<template>
  <HeroComponent> </HeroComponent>
  <section class="mt-2">
    <section class="content-input">
      <input
          class="input input-text"
          type="search"
          @keyup.enter="search"
          v-model="searchTerm"
          minlength="3"
          maxlength="30"
          required
        />
      <span for="search"
        >Escriba el nombre del trámite
      </span>

    </section>
    <button class="btn btn-primary" @click="search">Buscar</button>
  </section>

  <section>
    <ProcedureComponent v-for="procedure in procedures" :key="procedure.id">
      <template #title>{{ procedure.title }}</template>
      <template #description>{{ procedure.description }}</template>
      <iconUser v-if="procedure.modeProcedure === 'PT'" />
      <iconDoc v-if="procedure.modeProcedure === 'PT'" />
      <iconDoc v-if="procedure.modeProcedure === 'T'" />
      <iconDoc v-if="procedure.modeProcedure === 'P'" />
      <template #button
        ><button
          type="button"
          @click="showDetails(procedure.id)"
          class="btn-primary"
        >
          Acceder
        </button></template
      >
    </ProcedureComponent>
  </section>
</template>

<script>
import { ref } from "vue";
import HeroComponent from "@/components/HeroComponent.vue";
import ProcedureComponent from "@/components/ProcedureComponent.vue";
//import ProcedureService from "@/services/ProcedureService.js";

export default {
  setup() {
    const searchTerm = ref("");
    const procedures = [];
    const search = () => {
      console.log(searchTerm.value);
    };
    return {
      searchTerm,
      search,
      procedures,
    };
  },
  created() {
   // ProcedureService.getProcedures().then((data) => { this.procedures = data; });
  },
  components: {
    HeroComponent,
    ProcedureComponent,
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
</style>
