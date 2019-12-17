<template>
  <div class="row">
    <div class="col-md-12">
      <SkillItem :item="skills.frontend" :system-name="'frontend'" />
    </div>
    <div class="col-md-12">
      <SkillItem :item="skills.backend" :system-name="'backend'" />
    </div>
    <div class="col-md-12">
      <SkillItem :item="skills.tools" :system-name="'tools'" />
    </div>
    <div class="col-md-12">
      <SkillItem :item="skills.infographics" :system-name="'infographics'" />
    </div>
    <div class="col-md-12">
      <SkillItem :item="skills.languages" :system-name="'languages'" />
    </div>
  </div>
</template>

<script>
import { skills } from "../assets/data/skills";
import SkillItem from "./SkillItem";

export default {
  name: "Skills",
  components: {
    SkillItem
  },
  data() {
    return {
      skills: skills
    };
  }
};
</script>

<style scoped>
</style>
