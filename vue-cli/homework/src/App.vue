<template>
  <div class="container">
    <appHeader></appHeader>
    <hr>
    <div class="row">
      <appServers></appServers>
      <appServerDetails></appServerDetails>
    </div>
    <hr>
    <appFooter></appFooter>
  </div>
</template>

<script>
  import Header from "./components/Common/Header";
  import Footer from "./components/Common/Footer";
  import Servers from "./components/Server/Servers";
  import ServerDetails from "./components/Server/ServerDetails";

  export default {
    components : {
      appHeader : Header,
      appFooter : Footer,
      appServers : Servers,
      appServerDetails : ServerDetails
    }
  }
</script>

<style>
</style>
