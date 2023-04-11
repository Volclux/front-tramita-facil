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
    <section class="procedure-mode mt-1">
      <p
        class="text-info-dark bg-info-soft tag"
        v-if="detailProcedure.mode === 'T'"
      >
        <iconTelematic :fill="telematic"></iconTelematic>
        <span class="tooltipText">Telemática</span>
      </p>
      <p
        class="text-warning-dark bg-warning-soft tag"
        v-if="detailProcedure.mode === 'P'"
      >
        <iconInPerson :fill="inPerson"></iconInPerson>
        <span class="tooltipText">Presencial</span>
      </p>
      <p
        class="text-info-dark bg-info-soft tag"
        v-if="detailProcedure.mode === 'PT'"
      >
        <iconInPerson :fill="telematic"></iconInPerson>
        <span class="tooltipText">Presencial</span>
      </p>
      <section class="procedure-url">
        <iconLink :fill="'#000000'"></iconLink>
        <a id="procedure-link" :href="detailProcedure.url" target="_blank"
          >Acceso a la presentación</a
        >
      </section>
    </section>

    <section class="mt-1" aria-label="Procedure additional values">
      <div v-if="detailProcedure.additional_values.url_other.length >= 0">
        <div
          class="procedure-additional-info"
          v-for="doc in detailProcedure.additional_values.url_other"
          :key="doc"
        >
          <a :href="doc.value">{{ doc.description }}</a>
        </div>
      </div>

      <div
        class="mt-1"
        v-if="detailProcedure.additional_values.url_document.length >= 0"
      >
        <h5 class="text-color-secundary text-bold">Información</h5>
        <div
          class="procedure-additional-info"
          v-for="doc in detailProcedure.additional_values.url_document"
          :key="doc"
        >
          <iconFile class="icon" :fill="icon"></iconFile
          ><a :href="doc.value">{{ doc.description }}</a>
        </div>
      </div>

      <div
        class="mt-1"
        v-if="detailProcedure.additional_values.url_program.length >= 0"
      >
        <h4 class="text-color-secundary text-bold">Descargas</h4>
        <div
          class="procedure-additional-info"
          v-for="doc in detailProcedure.additional_values.url_program"
          :key="doc"
        >
          <iconDownload :fill="icon"></iconDownload
          ><a :href="doc.value">{{ doc.description }}</a>
        </div>
      </div>

      <div
        class="mt-1"
        v-if="detailProcedure.additional_values.url_bo.length >= 0"
      >
        <h4 class="text-color-secundary text-bold">
          Información relacionada con el boletín oficial
        </h4>
        <div
          class="procedure-additional-info"
          v-for="doc in detailProcedure.additional_values.url_bo"
          :key="doc"
        >
          <iconOficialDocument :fill="icon"></iconOficialDocument
          ><a :href="doc.value">{{ doc.description }}</a>
        </div>
      </div>

      <div class="mt-1" v-if="detailProcedure.additional_values.url_telematic.length >= 0">
        <h4 class="text-color-secundary text-bold">
          URL's telemáticas
        </h4>
        <div
          class="procedure-additional-info"
          v-for="doc in detailProcedure.additional_values.url_telematic"
          :key="doc"
        >
        <iconLink :fill="icon"></iconLink> <a :href="doc.value">{{ doc.description }}</a>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import iconOficialDocument from "@/components/icons/iconOficialDocument.vue";
import iconTelematic from "@/components/icons/iconTelematic.vue";
import iconDownload from "@/components/icons/iconDownload.vue";
import iconInPerson from "@/components/icons/iconInPerson.vue";
import iconLink from "@/components/icons/iconLink.vue";
import iconFile from "@/components/icons/iconFile.vue";

export default {
  props: {
    detailProcedure: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      icon: "#2F3C4E",
      inPerson: "#755a00",
      telematic: "#013a65",
    };
  },
  components: {
    iconOficialDocument,
    iconTelematic,
    iconDownload,
    iconInPerson,
    iconLink,
    iconFile,
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

.procedure-mode {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
}

.procedure-additional-info {
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

  &:hover {
    background-color: $primary;
  }

  & a {
    color: $primary;
    text-decoration: none;

    &:hover {
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
