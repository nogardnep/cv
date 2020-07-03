<template>
  <div class="row">
      <div :class="col" v-for="(skill, key) in skills" :key="key">
        <SkillItem :item="skill" />
      </div>
  </div>
</template>

<script>
import SkillItem from "./SkillItem";

export default {
  name: "Skills",
  props: ["skills"],
  computed: {
    col: function(item) {
      const maxSkillsByRow = 3; 
      let skillsByRow = this.skills.length;
      if (skillsByRow > maxSkillsByRow) {
        skillsByRow = maxSkillsByRow;
      }
      let colSize = Math.round(12 / skillsByRow);
      
      return "col-md-" + colSize;
    }
  },
  components: {
    SkillItem
  }
};
</script>

<style scoped>
</style>
