<template>
  <ul class="nl-education-list" v-if="items">
    <EducationItem v-for="(item, key) in sortedItems" :item="item" :key="key" />
  </ul>
</template>

<script>
import EducationItem from "./EducationItem";
import { education } from "../assets/data/education";

export default {
  name: "Education",
  components: {
    EducationItem
  },
  computed: {
    sortedItems() {
      return Object.keys(this.items)
        .map(t => {
          this.$set(this.items[t], "key", t);
          return this.items[t];
        })
        .sort(function(a, b) {
          return b.endDate - a.endDate;
        });
    }
  },
  data() {
    return {
      items: education
    };
  }
};
</script>

<style scoped>
</style>
