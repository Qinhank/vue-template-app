<style lang="scss">
  #home{
    position: relative;
    z-index: 99;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: $active;
    color: $white;
    h2{
      margin-top: -200px;
      font-size: 64px;
      margin-bottom: 20px;
      font-weight: bold;
    }
  }
</style>

<template>
  <div id="home">
    <h2>Bp-template-app</h2>
    <p>作为必派的脚手架app模板</p>
  </div>
</template>

<script>
export default {
  mounted() {
    
  },
}
</script>