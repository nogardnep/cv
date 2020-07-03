<template>
  <div class="row">
    <div class="col-sm-12" v-for="(hobby, key) in hobbies" :key="key">
      <HobbyItem :item="hobby" />
    </div>
  </div>
</template>

<script>
import HobbyItem from './HobbyItem';

export default {
  name: 'Hobbies',
  props: ["hobbies"],
  components: {
    HobbyItem
  }
};
</script>

<style scoped>
</style>
