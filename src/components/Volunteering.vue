<template>
  <div class="row">
    <div class="col-sm-12" v-for="(item, key) in volunteering" :key="key">
      <VolunteeringItem :item="item" />
    </div>
  </div>
</template>

<script>
import VolunteeringItem from './VolunteeringItem';

export default {
  name: 'Volunteering',
  props: ["volunteering"],
  components: {
    VolunteeringItem
  }
};
</script>

<style scoped>
</style>
