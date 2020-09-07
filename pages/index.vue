<template>
  <div :class = "(lightMode)?'yb-dark-skin uk-light':''">
    <Header @darkMode="ChangeMode" :mode="lightMode"/>
    <Main />
    <Footer />
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
