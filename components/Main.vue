<template>
  <!-- main section -->
  <main class="yb-main-content">
  			<!-- <h1 v-for="(award, index) in allAwards" :key="index">{{ award.title }}</h1> -->
  			<Portfolio :allWorks="allWorks" />
  			<About />
  			<Resume :allEducations="allEducations" :allExperiences="allExperiences" :allAwards="allAwards" :allStacks="allStacks"/>
  			<Contact />
  </main> <!-- end main section -->
</template>

<script>
	import gql from 'graphql-tag'

	export default{

    apollo:{

      allWorks: gql`{
  allWorks {
    title
    tech
    stack
    url
    poster{
      webp: url(imgixParams: {fm: webp, q: 60})
    }
  }
    }`,

    allEducations: gql`{

  allEducations{
    period
    title
    school
    body
  }


    }`,

        allExperiences: gql`{

  allExperiences{
    period
    title
    place
    body
  }


    }`,

        allAwards: gql`{

  allAwards{
    period
    title
    body
  }


    }`,

   allStacks: gql`{

  allStacks{
    name
    logo{
      webp: url(imgixParams: {fm: webp, q: 60})
    }
  }


    }`,











      }
    }

</script>

<style>

</style>
