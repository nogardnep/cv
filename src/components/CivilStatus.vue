<template>
  <div class="nl-civil-status">
    <div v-if="config.displayAge">{{age}} ans</div>
    <address>
      <span class="nl-adress">{{civilStatus.address}}</span>
      <span class="nl-postel-code">{{civilStatus.postalCode}} {{civilStatus.city}}</span>
      <span class="nl-email">
        <a v-bind:href="emailHref">{{civilStatus.email}}</a>
      </span>
      <span class="nl-phone">{{civilStatus.phone}}</span>
    </address>
    <div class="nl-driving-licence" v-if="drivingLicense">permis B</div>
    <div class="nl-website" v-if="civilStatus.website && config.displayWebsite">
      <span class="nl-label">Mon site&nbsp;:</span>
      <a class="nl-link" v-bind:href="websiteHref" target="_blank">{{civilStatus.website}}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "CivilStatus",
  props: ["civilStatus", "config"],
  computed: {
    drivingLicense: function() {
      return this.civilStatus.drivingLicense;
    },
    age: function() {
      if (this.civilStatus["birthDate"] != undefined) {
        let ageDate = new Date(Date.now() - this.civilStatus["birthDate"].getTime());
        return Math.abs(ageDate.getUTCFullYear() - 1970);
      }
    },
    emailHref: function() {
      return "mailto:" + this.civilStatus.email;
    },
    websiteHref: function() {
      return "https://" + this.civilStatus.website;
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
span {
  display: block;
}
</style>
