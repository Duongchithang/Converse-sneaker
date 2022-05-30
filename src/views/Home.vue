<template>
  <div class="home relative">
    <Header/>
    <Slider/>
    <Content/>
    <Footer/>
    <button class="btn-scroll" @click="scrollToTop"><i class="fa-solid fa-arrow-up"></i></button>
    <Loader class="load"/> 
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/Header.vue'
import Slider from '../components/Slider.vue'
import Content from '../components/Content.vue'
import Footer from '../components/Footer.vue'
import Loader from '../components/Loader.vue';
export default {
  name: 'HomeView',
  components: {
    Header,
    Slider,
    Content,
    Footer,
    Loader
  },
  methods:{
 scrollToTop() {
    window.scrollTo({
    top: 0,
    behavior: 'smooth'
})
}
  },
  mounted(){
      var load = document.querySelector('.load')
     setTimeout(function(){
         load.style.display = 'none';
     },1000)
  }
}
</script>
<style scoped>
   .btn-scroll{
     color: black;
     width: 60px;
     height: 60px;
     border-radius: 100%;
     background: transparent;
     border:2px solid black;
     position: fixed;
     right: 20px;
     bottom: 20px;
     z-index: 100;
   }
   .btn-scroll i{
     font-size: 18px;
     font-weight: 600;
   }
</style>
