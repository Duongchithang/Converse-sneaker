<template>
   <paginate
    :page-count="3"
    :page-range="3"
    :margin-pages="2"
    :click-handler="clickCallback"
    :prev-text="'Prev'"
    :next-text="'Next'"
    :container-class="'pagination'"
    :page-class="'page-item'"
  >
     <h1>duong chi thang</h1>
  </paginate>
</template>

<script>
import Paginate from 'vuejs-paginate-next'
export default {
  components:{
      Paginate
  },
    methods: {
      clickCallback (pageNum){
        console.log(pageNum)
      }
}
}   
</script>

<style>

</style>