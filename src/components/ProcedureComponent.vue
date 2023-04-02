<template>
  <div class="procedure-list mt-2">
    <p class="text-bold">
      <slot name="title"></slot>
    </p>
    <p>
      <slot name="description"></slot>
    </p>
    <i class="icon-center">
      <slot></slot>
    </i>
    <slot name="button"></slot>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.procedure-list{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    border: 1px solid $primary;
    border-radius: 1rem;
    margin: 1rem;
    width: 20rem;
    height: 20rem;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    transition: all 0.3s ease-in-out;
    &:hover{
        transform: scale(1.05);
    }
}
</style>
