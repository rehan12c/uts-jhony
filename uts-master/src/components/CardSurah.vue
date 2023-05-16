<template>
  <div class="row">
    <div class="col-md-4" v-for="(item, index) in ListSurah" :key="item.id">
      <div class="card mb-4">
        <div class="card-body">
          <h5 class="card-title">Surah {{ index + 1 }}: {{ item.name_simple }}</h5>
          <router-link :to="{ name: 'surah', params: { id: item.id } }">
            <button type="button" class="btn btn-success">Baca</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { ref } from 'vue'

export default {
  data() {
    return {
      ListSurah: ref([])
    }
  },

  mounted() {
    this.getListSurah()
  },

  methods: {
    getListSurah() {
      axios
          .get('https://api.quran.com/api/v4/chapters?language=id')
          .then((response) => {
            console.log(response)
            this.ListSurah = response.data.chapters
          })
          .catch((error) => {
            console.log(error)
          })
    }
  }
}
</script>

<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  margin: 30px;
}

.col-md-4 {
  padding: 5px;
}
</style>
