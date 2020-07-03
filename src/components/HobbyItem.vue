<template>
  <div class="nl-hobby-item">
    <div class="row">
      <div class="col-md-12">
        <h3 v-html="item.text"></h3>
      </div>
      <div class="col-md-12">
        <ul class="nl-details-list" v-if="item.details">
          <li class="nl-detail-item" v-for="(detail, key) in item.details" :key="key">
            <span v-html="detail.text"></span>
            <ul class="nl-subdetails-list" v-if="detail.details">
              <li class="nl-subdetail-item" v-for="(subdetail, key) in detail.details" :key="key">
                <span v-html="subdetail.text"></span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HobbyItem",
  props: ["item"]
};
</script>

<style scoped>
</style>
