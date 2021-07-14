<template>
  <div :class = "(lightMode)?'yb-dark-skin uk-light':''">
    <Header @darkMode="ChangeMode" :mode="lightMode"/>
    <Main />
    <Footer />
    <div class="elfsight-app-3e4f01b1-a420-4a8e-9e57-a685c0a78d5e"></div>
  </div>
</template>

<script>
export default {

  data(){
    return{
    	lightMode:false,
    }},
 methods: {
    ChangeMode(value) {
    	this.lightMode = value;
   }
 }

}
</script>

<style>

</style>
