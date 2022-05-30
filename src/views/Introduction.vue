<template>
  <div class="around-intro">
     <Header/>
     <div class="container-intro ">
         <div class="intro-banner relative w-full h-[200px]">
             <div class="container-banner-img w-full h-full">
                 <img class="w-full h-full object-cover" src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/banner-1.jpg  " alt="">
             </div>
             <div class="container-banner-content absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]">
                 <h1 class="heading-intro xs:text-[20px] md:text-[30px] text-white font-medium">GIỚI THIỆU</h1>
                 <div class="container-router xs:text-[16px] md:text-[20px] text-white pt-4 ">
                    <router-link class="Home text-[#FAFAFA]" to="/">TRANG CHỦ</router-link> /
                    <router-link class="Intro text-white font-medium" to="/intro">GIỚI THIỆU</router-link>
                 </div>
             </div>
         </div>
         <div class="container-info-content mt-[60px] lg:px-4 lg:ml-16 lg:mr-16 md:px-3 md:ml-10 md:mr-10 xs:px-1 xs:mr-2 xs:ml-2">
             <div class="container-info-top  lg:flex lg:w-[100%] md:w-[100%]  lg:justify-between">
                 <div class="around-image-info md:w-[300px] md:flex mx-auto md:h-[400px] lg:w-[380px] lg:h-[450px]">
                     <img class="w-full h-full object-cover" src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/03306320213d3356ce875921ff197762.jpg" alt="">
                 </div>
                 <div class="around-info-text lg:w-[60%] md:w-[100%]">
                     <div class="info-text-top flex flex-col">
                         <h1 class="intro-title md:mt-[30px] xs:text-left xs:text-[25px] xs:mt-[20px] lg:mt-0 md:text-center lg:text-left text-[30px] font-medium">GIỚI THIỆU</h1>
                         <p class="intro-content text-left xs:mt-[10px] md:mt-[20px] text-[#424242] text-[16px]">Chào mừng bạn đến với ngôi nhà Converse ! Tại đây, Mỗi một dòng, mỗi chi tiêt hình ảnh đều là nhũng dấu ấn mang bằng chứng lịch sử Coverse 100 năm, và đang không ngừng phát triển lớn mạnh.</p>
                     </div>
                     <div class="info-text-bottom mt-[40px] flex flex-col">
                        <h1 class="text-info text-black text-[25px] md:text-center lg:text-left xs:text-left">SẢN PHẨM GIÀY TỐT NHẤT</h1>
                        <div class="container-text-info-bottom mt-[30px]  flex text-[#424242] xs:text-[14px] md:text-[16px]">
                            <span class="text-left content-left flex-wrap xs:border-none xs:pr-[15px]  md:pr-[30px]">Chào mừng bạn đến với ngôi nhà Converse! Tại đây mỗi dòng chữ, mỗi chi tiết hình ảnh đều là những bằng chứng mang dấu ấn lịch sử Converse 100 năm,</span>
                            <span class="text-left content-right pl-[30px] ">Chào mừng bạn đến với ngôi nhà Converse! Tại đây mỗi dòng chữ, mỗi chi tiết hình ảnh đều là những bằng chứng mang dấu ấn lịch sử Converse 100 năm,</span>
                        </div>
                     </div>
                 </div>
             </div>
             <div class="container-info-botom xs:mt-[50px] xs:mb-[50px] md:mt-[100px] md:mb-[100px]">
                 <div class="container-info-list grid xs:grid-cols-1 xs:gap-y-[20px] xs:grid-rows-6 md:grid-cols-2 md:grid-rows-3 md:gap-x-[40px] md:gap-y-[40px]">
                     <div class="info-item flex">
                         <i class="fa-solid fa-truck xs:text-[25px] xs:pr-[15px] md:text-[35px] md:pr-[20px] text-[#C30005]"></i>
                         <div class="info-item-content flex flex-col text-left">
                             <h1 class="xs:text-[18px] md:text-[25px] font-medium">Miễn phí giao hàng</h1>
                             <p class="xs:pt-[8px] xs:text-[14px] md:text-[18px] md:pt-3">Tại đây, mỗi một dòng chữ, mỗi chi tiết và hình ảnh đều là những bằng chứng mang dấu ấn lịch sử Converse 100 năm, và đang không ngừng phát triển lớn mạnh</p>
                         </div>
                     </div>
                     <div class="info-item flex">
                       <i class="fa-solid fa-comment-dollar xs:text-[25px] xs:pr-[15px] md:text-[35px] md:pr-[20px] text-[#C30005]"></i>
                         <div class="info-item-content flex flex-col text-left">
                             <h1 class="xs:text-[18px] md:text-[25px] font-medium">Đổi trả trong vòng 7 ngày</h1>
                             <p class="xs:pt-[8px] xs:text-[14px] md:text-[18px] md:pt-3">Tại đây, mỗi một dòng chữ, mỗi chi tiết và hình ảnh đều là những bằng chứng mang dấu ấn lịch sử Converse 100 năm, và đang không ngừng phát triển lớn mạnh</p>
                         </div>
                     </div>
                      <div class="info-item flex">
                       <i class="fa-solid fa-cart-plus xs:text-[25px] xs:pr-[15px] md:text-[35px] md:pr-[20px] text-[#C30005]"></i>
                         <div class="info-item-content flex flex-col text-left">
                             <h1 class="xs:text-[18px] md:text-[25px] font-medium">Sản phẩm 100%</h1>
                             <p class="xs:pt-[8px] xs:text-[14px] md:text-[18px] md:pt-3">Tại đây, mỗi một dòng chữ, mỗi chi tiết và hình ảnh đều là những bằng chứng mang dấu ấn lịch sử Converse 100 năm, và đang không ngừng phát triển lớn mạnh</p>
                         </div>
                     </div>
                      <div class="info-item flex">
                       <i class="fa-solid fa-comments xs:text-[25px] xs:pr-[15px] md:text-[35px] md:pr-[20px] text-[#C30005]"></i>
                         <div class="info-item-content flex flex-col text-left">
                             <h1 class="xs:text-[18px] md:text-[25px] font-medium">Chăm sóc khách hàng</h1>
                             <p class="xs:pt-[8px] xs:text-[14px] md:text-[18px] md:pt-3">Tại đây, mỗi một dòng chữ, mỗi chi tiết và hình ảnh đều là những bằng chứng mang dấu ấn lịch sử Converse 100 năm, và đang không ngừng phát triển lớn mạnh</p>
                         </div>
                     </div>
                      <div class="info-item flex">
                         <i class="fa-brands fa-product-hunt xs:text-[25px] xs:pr-[15px] md:text-[35px] md:pr-[20px] text-[#C30005]"></i>
                         <div class="info-item-content flex flex-col text-left">
                             <h1 class="xs:text-[18px] md:text-[25px] font-medium">Hàng chính hãng</h1>
                             <p class="xs:pt-[8px] xs:text-[14px] md:text-[18px] md:pt-3">Tại đây, mỗi một dòng chữ, mỗi chi tiết và hình ảnh đều là những bằng chứng mang dấu ấn lịch sử Converse 100 năm, và đang không ngừng phát triển lớn mạnh</p>
                         </div>
                     </div>
                      <div class="info-item flex">
                       <i class="fa-solid fa-money-check xs:text-[25px] xs:pr-[15px] md:text-[35px] md:pr-[20px] text-[#C30005]"></i>
                         <div class="info-item-content flex flex-col text-left">
                             <h1 class="xs:text-[18px] md:text-[25px] font-medium">Thanh toán đa dạng</h1>
                             <p class="xs:pt-[8px] xs:text-[14px] md:text-[18px] md:pt-3">Tại đây, mỗi một dòng chữ, mỗi chi tiết và hình ảnh đều là những bằng chứng mang dấu ấn lịch sử Converse 100 năm, và đang không ngừng phát triển lớn mạnh</p>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     </div>
      <Loader class="load"/> 
     <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Loader from '../components/Loader.vue';
export default {
   components:{
       Header,
       Footer,
       Loader
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
  .content-left{
      border-right: double #C30005;
  }
  .content-right{
      border-left: double #C30005;
  }
</style>