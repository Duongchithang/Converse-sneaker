<template>
  <div class="slider lg:mr-[75px] xs:ml-[20px] xs:mr-[20px] xs:h-[250px] lg:ml-[75px] mt-[50px] lg:h-[500px] md:h-[350px] md:mr-10 md:ml-10">
    <swiper :navigation="true" :modules="modules" class="mySwiper">
    <swiper-slide class="slide-item"><img class="image-slide" src="https://images.unsplash.com/photo-1594843954296-52fbba31a52f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871" alt=""></swiper-slide>
    <swiper-slide class="slide-item"><img class="image-slide" src="https://images.unsplash.com/photo-1612931795103-f6a5c4b073ae?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726" alt=""></swiper-slide>
    <swiper-slide class="slide-item"><img class="image-slide" src="https://images.unsplash.com/photo-1622540529856-6632540af089?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870" alt=""></swiper-slide>
    <swiper-slide class="slide-item"><img class="image-slide" src="https://images.unsplash.com/photo-1426647451887-5f2be01918a9?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870" alt=""></swiper-slide>
    <swiper-slide class="slide-item"><img class="image-slide" src="https://images.unsplash.com/photo-1589978262825-1b8f9e241586?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870" alt=""></swiper-slide>
    <swiper-slide class="slide-item"><img class="image-slide" src="https://images.unsplash.com/photo-1536830220630-ce146cccac84?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870" alt=""></swiper-slide>
    <swiper-slide class="slide-item"><img class="image-slide" src="https://images.unsplash.com/photo-1564947876973-4f29ffca69bf?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870" alt=""></swiper-slide>
    <swiper-slide class="slide-item"><img class="image-slide" src="https://images.unsplash.com/photo-1603771687008-372222245e04?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387" alt=""></swiper-slide>
    <swiper-slide class="slide-item"><img class="image-slide" src="https://images.unsplash.com/photo-1591142204497-eae224609ff8?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=566" alt=""></swiper-slide>
  </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";
export default {
    components:{
       Swiper,
      SwiperSlide,
    },
     setup(){
    return {
        modules: [ Navigation],
        
    }; 
    },
};
</script>

<style scoped>
 
 .mySwiper{
     width: 100%;
     height: 100%;
      
 }
 .image-slide{
     width: 100%;
     height: 100%;
     object-fit: cover;
 }

</style>