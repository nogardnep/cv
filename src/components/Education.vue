<template>
  <ul class="nl-education-list" v-if="education">
    <EducationItem v-for="(item, key) in sortedItems" :item="item" :displayDetails="config.displayEducationDetails" :key="key" />
  </ul>
</template>

<script>
import EducationItem from "./EducationItem";

export default {
  name: "Education",
  props: ["education", "config"],
  components: {
    EducationItem
  },
  computed: {
    sortedItems() {
      return Object.keys(this.education)
        .map(t => {
          this.$set(this.education[t], "key", t);
          return this.education[t];
        })
        .sort(function(a, b) {
          return b.endDate - a.endDate;
        });
    }
  }
};
</script>

<style scoped>
</style>
