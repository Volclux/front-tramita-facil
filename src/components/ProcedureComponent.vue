<template>
  <section class="procedures bg-light-soft mt-2 pt-2 pb-2 pr-2 pl-2" arial-label="procedure info">
    <div class="procedure-info">
      <h3 class="text-lg text-primary-dark text-bold">
        <slot name="title"></slot>
      </h3>
      <p class="text-dark">
        <slot name="description"></slot>
      </p>
    </div> 
    <div class="procedure-mode">
      <slot></slot>
    </div>
    <div class="procedure-btn">
      <slot name="button"> </slot>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.procedures{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: $border-radius;
}
.procedure-info{
  display: flex;
  flex-direction: column;
}
.procedure-mode{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: .5rem;
}

</style>
