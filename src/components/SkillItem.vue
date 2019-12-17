<template>
  <div :class="['nl-skill-item', 'nl-'  + systemName +'-skill-item']">
    <h3>{{ item.text }}</h3>
    <ul class="nl-details-list" v-if="item.details">
      <li class="nl-detail-item" v-for="(detail, key) in item.details" :key="key">
        <div class="row">
          <div
            :class="['col-md-' + ((systemName=='frontend' || systemName=='backend') ? '6': '12')]"
          >
            <h4 v-html="detail.text"></h4>
          </div>
          <div
            :class="['col-md-' + ((systemName=='frontend' || systemName=='backend') ? '6': '12')]"
            v-if="detail.details"
          >
            <ul class="nl-subdetails-list" v-if="detail.details">
              <li class="nl-subdetail-item" v-for="(subdetail, key) in detail.details" :key="key">
                <span v-html="subdetail.text"></span>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SkillItem",
  props: ["item", "systemName"]
};
</script>

<style scoped>
</style>
