<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-body-tertiary">
      <div class="container">
        <a class="navbar-brand text-white" href="/">
          <img src="/src/components/icons/quran.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
          Al-Qur'an Online
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul class="navbar-nav">

          </ul>
        </div>

        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
  </header>

  <router-view />
</template>

<style>
.navbar-brand.text-white {
  color: black !important;
}
</style>
