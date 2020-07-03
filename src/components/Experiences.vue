<template>
  <ul class="nl-experience-list" v-if="professionalExperiences">
    <ExperienceItem v-for="(item, key) in sortedItems" :item="item" :displayDetails="config.displayProfessionalExperienceDetails" :key="key"/>
  </ul>
</template>

<script>
import ExperienceItem from "./ExperienceItem";

export default {
  name: "Experiences",
  props: ["professionalExperiences", "config"],
  components: {
    ExperienceItem
  },
  computed: {
    sortedItems() {
      return Object.keys(this.professionalExperiences)
        .map(t => {
          this.$set(this.professionalExperiences[t], "key", t);
          return this.professionalExperiences[t];
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
