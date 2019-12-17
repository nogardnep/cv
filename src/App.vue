<template>
  <div id="nl-cv">
    <div class="container">
      <div class="nl-inner-container">
      <header class="nl-page-header">
        <div class="row">
          <div class="col-md-4">
            <figure class="nl-portrait-figure">
              <img v-bind:src="portraitSrc" alt="portrait" />
            </figure>
          </div>
          <div class="col-md-5">
            <div class="nl-civil-status">
              <div class="nl-owner-name">{{civilStatus.firstName}} {{civilStatus.lastName}}</div>
              <CivilStatus v-bind:civilStatus="civilStatus" />
            </div>
          </div>
          <div class="col-md-3">
            <h1 class="nl-cv-title">{{civilStatus.title}}</h1>
          </div>
        </div>
      </header>
      <div class="row">
        <div class="col-md-4">
          <div class="nl-skills">
            <h2>Compétences</h2>
            <Skills />
          </div>
        </div>
        <div class="col-md-8">
          <div class="nl-professional-experiences">
            <h2>Expérience</h2>
            <Experiences />
          </div>
          <div class="nl-education">
            <h2>Formation</h2>
            <Education />
          </div>
          <div class="nl-hobbies">
            <div class="row">
              <div class="col-md-12">
                <h2>Et aussi...</h2>
              </div>
              <div class="col-md-10 offset-md-1">
                <Hobbies />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div></div>
  </div>
</template>

<script>
import Education from "./components/Education";
import Experiences from "./components/Experiences";
import Hobbies from "./components/Hobbies";
import Skills from "./components/Skills";
import CivilStatus from "./components/CivilStatus";
import { education } from "./assets/data/education";
import { professionalExperiences } from "./assets/data/professional-experiences";
import { civilStatus } from "./assets/data/civil-status";

export default {
  name: "app",
  components: {
    Education,
    Experiences,
    Hobbies,
    Skills,
    CivilStatus
  },
  computed: {
    portraitSrc() {
      return require("@/assets/images/portrait.jpg");
    }
  },
  data: function() {
    return {
      civilStatus: civilStatus
    };
  }
};
</script>

<style scoped>
</style>
