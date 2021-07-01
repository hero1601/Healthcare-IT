<template>
  <div id="app">
      <router-link to="AllCodes">AllCodes</router-link><br/><br/>
      <router-link to="SearchCode">SearchCode</router-link><br/><br/>
      <router-link to="AddCode">AddCode</router-link><br/><br/>
      <router-link to="DeleteCode">RemoveCode</router-link><br/><br/>
      <router-link to="UpdateCode">UpdateCode</router-link><br/><br/>
      <router-link to="SearchValueSet">SearchValueSet</router-link><br/><br/>
      <router-link to="FindCodesFromValueSet">FindCodesFromValueSet</router-link><br/><br/>
      <router-link to="AddValueSet">AddValueSet</router-link><br/><br/>
    <router-view/>
  </div>
  </template>

<script>
export default {
  name: 'App',
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
