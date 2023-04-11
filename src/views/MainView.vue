<template>
  <HeroComponent> </HeroComponent>
  <section class="mt-2 mb-2" aria-label="section for search">
    <section class="content-input">
      <input
        class="input input-text"
        type="text"
        @keyup.enter="searchTerm"
        v-model="searchTerm"
        minlength="3"
        maxlength="30"
      />
      <span for="search">Escriba el nombre del trámite</span>
    </section>
    <button class="btn btn-primary" @click="searh">Buscar</button>
  </section>

  <section class="container" aria-label="content-procedures">
    <section aria-label="procedure-types">
      <div class="content-procedures">
        <h2 class="text-xl text-bold text-color-primary mb-2">
          Tipos de trámites
        </h2>
        <ul class="no-list-style">
          <li
            v-for="procedureType in proceduresType"
            :key="procedureType.id"
            :class="{ selected: isSelected, 'no-selected': !isSelected }"
            @click="showProceduresByType($event, procedureType.id)"
          >
            {{ procedureType.name }}
          </li>
        </ul>
      </div>
    </section>

    <section aria-label="procedures">
      <p v-if="filteredProcedures.length <= 0">No hay trámites</p>
      <h2 class="text-xl text-bold text-color-primary mb-2">
        Se han encontrado un total de {{ filteredProcedures.length }} resultados para tu
        búsqueda
      </h2>
      <ProcedureDetailComponent
        v-if="detailProcedure"
        :detailProcedure="detailProcedure"
      ></ProcedureDetailComponent>
      <ProcedureComponent
        v-for="procedure in filteredProcedures"
        :key="procedure.id"
        @click="showDetails($event, procedure.id)"
      >
        <template #title>{{ procedure.title }}</template>
        <template #description>{{ procedure.description }}</template>
        <slot v-if="procedure.mode === 'T'">
          <p class="text-info-dark bg-info-soft tag">
            <iconTelematic :fill="telematic"></iconTelematic>
            <span class="tooltipText">Telematica</span>
          </p>
        </slot>
        <slot v-if="procedure.mode === 'P'">
          <p class="text-warning-dark bg-warning-soft tag">
            <iconInPerson :fill="inPerson"></iconInPerson>
            <span class="tooltipText">Presencial</span>
          </p>
        </slot>
        <slot v-if="procedure.mode === 'PT'">
          <p class="text-info-dark bg-info-soft tag">
            <iconTelematic :fill="telematic"></iconTelematic>
            <span class="tooltipText">Telematica</span>
          </p>
          <p class="text-warning-dark bg-warning-soft tag">
            <iconInPerson :fill="inPerson"></iconInPerson>
            <span class="tooltipText">Presencial</span>
          </p>
        </slot>
        <template #button>
          <button
            type="button"
            @click="showDetails($event, procedure.id)"
            class="btn btn-primary"
          >
            <iconArrow :fill="white"> </iconArrow></button
        ></template>
      </ProcedureComponent>
    </section>
  </section>
</template>

<script>
import HeroComponent from "@/components/HeroComponent.vue";
import ProcedureComponent from "@/components/ProcedureComponent.vue";
import ProcedureDetailComponent from "@/components/ProcedureDetailComponent.vue";
import ProcedureService from "@/services/ProcedureService.js";
import iconTelematic from "@/components/icons/iconTelematic.vue";
import iconInPerson from "@/components/icons/iconInPerson.vue";
import iconArrow from "@/components/icons/iconArrow.vue";

export default {
  name: "MainView",
  data() {
    let isSelected = false;
    let isHidden = false;
    const location = "CAN";
    return {
      isSelected,
      isHidden,
      searchTerm: "",
      procedures: [],
      proceduresType: [],
      inPerson: "#755a00",
      telematic: "#013a65",
      arrow: "black",
      location,
      detailProcedure: "",
      temporalProcedures: ""
    };
  },
  mounted() {
    ProcedureService.getProcedures().then((response) => {
      this.procedures = response.results;
    });
    ProcedureService.getProcedureType().then((response) => {
      this.proceduresType = response.results;
    });
  },
  methods: {
    toggleSelected(element) {
      element.target.classList.toggle("selected");
      element.target.classList.toggle("no-selected");
    },
    showProceduresByType(element, id) {
      ProcedureService.getProceduresByLocationAndType(this.location, id).then(
        (response) => {
          this.procedures = response.results;
        }
      );
      element.target.classList.toggle("selected");
      element.target.classList.toggle("no-selected");
    },
    showDetails(element, id) {
      ProcedureService.getDetailProcedure(id).then((response) => {
        this.detailProcedure = response;
      });     
      //this.detailProcedure = this.procedures.find(procedure => procedure.id === id);
    }
  },
  computed:{
      filteredProcedures() {
      let temporalProcedures = JSON.parse(JSON.stringify(this.procedures));
      if (this.searchTerm != "") {
        temporalProcedures = temporalProcedures.filter((procedure) => {
          return (
            procedure.title
              .toUpperCase()
              .includes(this.searchTerm.trim().toUpperCase()) ||
            procedure.description
              .toUpperCase()
              .includes(this.searchTerm.trim().toUpperCase())
          );
        });
      }
      return temporalProcedures;
    },
  },
  components: {
    HeroComponent,
    ProcedureComponent,
    ProcedureDetailComponent,
    iconTelematic,
    iconInPerson,
    iconArrow,
  },
};
</script>

<style lang="scss" scoped>
.content-procedures {
  display: flex;
  flex-direction: column;
}

.tag {
  border-radius: $border-radius;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
}

.no-list-style {
  list-style: none;
}

.no-selected {
  padding: 0.5rem;
  border-radius: $border-radius;
  background-color: $light;
  margin-bottom: 1rem;
  outline: none;
}

.selected {
  padding: 0.5rem;
  border-radius: $border-radius;
  outline: none;
  background-color: $primary-soft;
  border: 0.05rem solid $primary;
  margin-bottom: 1rem;
  color: $primary-dark;
}

.hidden {
  display: none;
}

.no-hidden {
  display: flex;
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
