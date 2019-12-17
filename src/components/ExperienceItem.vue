<template>
  <li class="nl-experience-item">
    <div class="nl-date">{{item.startDate | date}} - {{item.endDate | date}}</div>
    <div class="row">
      <div class="col-sm-9">
        <h3>{{item.name}}</h3>
        <ul class="nl-details-list" v-if="item.details">
          <li
            class="nl-detail-item"
            v-for="(detail, key) in item.details"
            :key="key"
            v-html="detail"
          ></li>
        </ul>
      </div>
      <div class="col-sm-3">
        <div class="nl-company" v-html="item.company"></div>
        <div class="nl-location" v-html="item.location"></div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "ExperienceItem",
  props: ["item"],
  filters: {
    date: function(date) {
      return date.getMonth() + "/" + date.getFullYear();
    }
  }
};
</script>

<style scoped>
</style>
