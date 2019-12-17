<template>
  <ul class="nl-experience-list" v-if="items">
    <ExperienceItem v-for="(item, key) in sortedItems" :item="item" :key="key"/>
  </ul>
</template>

<script>
import { professionalExperiences } from "../assets/data/professional-experiences";
import ExperienceItem from "./ExperienceItem";

export default {
  name: "Experiences",
  components: {
    ExperienceItem
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
      items: professionalExperiences
    };
  }
};
</script>

<style scoped>
</style>
