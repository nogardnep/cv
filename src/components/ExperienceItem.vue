<template>
  <li class="nl-experience-item">
    <div class="nl-date">
    {{date}}
      <!--span>{{item.startDate | date}}</span>
      <span v-if="item.startDate != item.endDate"> - {{item.endDate | date}}</span-->
    </div>
    <div class="row">
      <div class="col-sm-6">
        <h3>{{item.name}}</h3>
        <ul v-if="displayDetails && item.details" class="nl-details-list">
          <li
            class="nl-detail-item"
            v-for="(detail, key) in item.details"
            :key="key"
            v-html="detail"
          ></li>
        </ul>
      </div>
      <div class="col-sm-6">
        <div class="nl-company" v-html="item.company"></div>
        <div class="nl-location" v-html="item.location"></div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "ExperienceItem",
  props: ["item", "displayDetails"],
  computed: {
    date: function(item) {
      
      let displayedDate = this.$options.filters.date(this.item.startDate);

      if (this.item.startDate.getFullYear() != this.item.endDate.getFullYear() || this.item.startDate.getMonth() != this.item.endDate.getMonth()) {
        displayedDate += " - " + this.$options.filters.date(this.item.endDate);
      }

      return displayedDate;
    }
  },
  filters: {
    date: function(date) {
      return (date.getMonth() + 1) + "/" + date.getFullYear();
    }
  }
};
</script>

<style scoped>
</style>
