<template>
  <div class="row">
    <div class="col-sm-9">
      <HobbyItem :item="hobbies.creation" />
    </div>
    <div class="col-sm-3">
      <HobbyItem :item="hobbies.culture" />
    </div>
  </div>
</template>

<script>
import { hobbies } from '../assets/data/hobbies';
import HobbyItem from './HobbyItem';

export default {
  name: 'Hobbies',
  components: {
    HobbyItem
  },
  data() {
    return {
      hobbies: hobbies
    };
  }
};
</script>

<style scoped>
</style>
