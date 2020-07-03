<template>
  <div id="nl-cv" :class="cvType">
    <div class="nl-outer-container">
      <div class="container">
        <div class="nl-inner-container">
          <header class="nl-page-header">
            <div class="row">
              <div class="col-md-4">
                <div class="nl-civil-status">
                  <div class="nl-owner-name">{{civilStatus.firstName}} {{civilStatus.lastName}}</div>
                  <CivilStatus :civilStatus="civilStatus" :config="config" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="nl-cv-title-container">
                  <h1 class="nl-cv-title">
                    <span v-if="config.retraining" class="nl-insersion">Projet professionnel</span>
                    <span class="nl-main-title">{{config.cvTitle}}</span>
                  </h1>
                </div>
              </div>
              <div class="col-md-2 offset-md-1 no-padding">
                <figure v-if="config.displayPortrait" class="nl-portrait-figure">
                  <img v-bind:src="portraitSrc" alt="portrait" />
                </figure>
              </div>
            </div>
          </header>
          <div class="row">
            <div class="col-md-12"> 
              <div class="nl-skills">
                <h2>Compétences</h2>
                <Skills :skills="skills" />
              </div>
            </div>
            <div class="col-md-12">
              <div class="row">
                <div class="col-md-6">
                  <div class="nl-professional-experiences">
                    <h2>Expérience<br/>professionnelle</h2>
                    <Experiences :config="config" :professionalExperiences="professionalExperiences" />
                  </div> 
                </div>
                <div class="col-md-6">
                  <div class="nl-education">
                    <h2>Formation</h2>
                    <Education :education="education" :config="config" />
                    <div class="nl-extra-skills">
                      <Skills :skills="extraSkills" />
                    </div>
                  </div>
                </div>
              </div>
            </div>  
            <div class="col-md-12">
              <div class="row">
                <div class="col-md-7" v-if="config.displayVolunteering">
                  <div class="nl-volunteering">
                    <h2>Bénévolat</h2>
                    <Volunteering :volunteering="volunteering" />
                  </div> 
                </div>
                <div class="col-md-5" v-if="config.displayHobbies">
                  <div  class="nl-hobbies">
                      <h2>Et aussi...</h2>
                      <Hobbies :hobbies="hobbies" />
                  </div>
                </div>
              </div>
            </div>
          </div>     
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Education from "./components/Education";
import Experiences from "./components/Experiences";
import Hobbies from "./components/Hobbies";
import Skills from "./components/Skills";
import Volunteering from "./components/Volunteering";
import CivilStatus from "./components/CivilStatus";

const type = "graphism";
const dataRoot = "assets/data";

export default {
  name: "app",
  components: {
    Education,
    Experiences,
    Hobbies,
    Skills,
    CivilStatus,
    Volunteering
  },
  computed: {
    portraitSrc() {
      return require("@/assets/images/portrait.jpg");
    }, 
    cvType() {
      return "nl-cv-type-" + type;
    }
  },
  data: function() {
    return {
      civilStatus: {},
      config: {}, 
      hobbies: {},
      education: {},
      professionalExperiences: {},
      skills: {},
      extraSkills: {},
      volunteering: {}
    };
  }, 
  mounted: function() {
    loadData(this, "civilStatus", "civil-status")
    loadData(this, "config", "config")
    loadData(this, "hobbies", "hobbies")
    loadData(this, "education", "education")
    loadData(this, "volunteering", "volunteering")
    loadData(this, "professionalExperiences", "professional-experiences")
    loadData(this, "skills", "skills")
    loadData(this, "extraSkills", "extra-skills")
  }
};

function  loadData (componentData, propName, dataName) {
  // TODO: ugly

  try{
    require("./" + dataRoot + "/" + type + "/" + dataName)

    import("./" + dataRoot + "/" + type + "/" + dataName).then((response) => {
      componentData[propName] = response.default;
    })
  } catch(e) {
    import("./" + dataRoot + "/global/" + dataName).then((response) => {
      componentData[propName] = response.default;
    })
  }
  
}


</script>

<style scoped>
</style>
