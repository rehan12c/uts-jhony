<template>
  <div>
    <div class="suara">
      <p></p>
      <audio :src="audio.audio_url" controls></audio>
    </div>
    <hr class="my-4">

    <div class="accordion" id="accordionAyat">
      <div v-for="(ayatQuran, index) in ayat" :key="index" class="mb-3">
        <div class="accordion-item">
          <h2 class="accordion-header" :id="'heading' + index">
            <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                :data-bs-target="'#collapse' + index"
                aria-expanded="false"
                :aria-controls="'collapse' + index"
            >
              {{ ayatQuran.text_uthmani }} {{ ayatQuran.verse_key }}
            </button>
          </h2>
          <div
              :id="'collapse' + index"
              class="accordion-collapse collapse"
              :aria-labelledby="'heading' + index"
              data-bs-parent="#accordionAyat"
          >
            <div class="accordion-body">
              <p>Artinya:</p>
              <p v-html="Arti[index].text"></p>
            </div>
          </div>
        </div>
        <hr class="my-4">
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";

export default {
  data() {
    return {
      ayat: ref([]),
      Arti: ref([]),
      audio: ref([])
    };
  },
  mounted() {
    this.getAyat();
    this.getArti();
    this.getAudio();
  },
  methods: {
    getAyat() {
      axios
          .get(`https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=${this.$route.params.id}`)
          .then((response) => {
            this.ayat = response.data.verses;
          })
          .catch((err) => {
            console.log("error" + err);
          });
    },
    getArti() {
      axios
          .get(`https://api.quran.com/api/v4/quran/translations/33?chapter_number=${this.$route.params.id}`)
          .then((response) => {
            this.Arti = response.data.translations;
          })
          .catch((err) => {
            console.log("error" + err);
          });
    },
    getAudio() {
      axios
          .get(`https://api.quran.com/api/v4/chapter_recitations/7?chapter=${this.$route.params.id}`)
          .then((response) => {
            this.audio = response.data.audio_files[0];
          })
          .catch((error) => {
            console.log(error);
          });
    }
  }
};
</script>

<style scoped>
.suara {
  margin-bottom: 20px;
  text-align: center;
}

.mb-3 {
  margin-bottom: 20px;
}

.my-4 {
  margin-top: 40px;
  margin-bottom: 40px;
}
.accordion-item {
  padding-left: 300px;
  padding-right: 300px;
}
</style>
