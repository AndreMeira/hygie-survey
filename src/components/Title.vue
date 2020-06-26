<template>
  <div>
    <div>
      <h3>BILAN DE VITALITÉ</h3>
    </div>
    <div>
      <h4>{{text}}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props:["text"]
}
</script>

<style lang="scss" scoped>
h3 {
  // border:solid 1px #efefef;
  // background-color: #fcb69f;
  // padding: 1rem 2rem;
  // border-radius: 2rem;
  // color:white;
  // box-shadow: 0px 0px 3px #444;

  font-family: "Helvetica neue";
  letter-spacing: .3rem;
  margin-top: 1rem;
}

h4 {
  margin-top: 1rem;
  text-align: center;
}
</style>
