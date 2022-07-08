<template>
  <div class="content md:px-2 md:mx-10 lg:px-4 lg:mx-16 lg:mb-20">
      <div  class="around-product-type mt-16 grid gap-x-4 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
          <div class="product-type-contain flex flex-col justify-center  items-center">
              <div class="product-type-image xs:w-[250px]"><img class="w-full h-full object-cover" src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-chuck-07-300x225.jpg" alt=""></div>
              <span class="product-type-title text-[#5c5959] pt-4 text-lg font-medium">Chuck 70 Archive</span>
              <button class="product-see mt-3 w-[150px] text-[16px] font-medium py-2 text-white bg-[#C30005] rounded">Xem sản phẩm</button>
          </div>
          <div class="product-type-contain flex flex-col justify-center items-center">
              <div class="product-type-image xs:w-[250px]"><img class="w-full h-full object-cover" src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-chuck-07-1-300x225.jpg" alt=""></div>
              <span class="product-type-title text-[#5c5959] pt-4 text-lg font-medium">Chuck Taylor AllStar</span>
              <button class="product-see mt-3 w-[150px] text-[16px] font-medium py-2 text-white bg-[#C30005] rounded">Xem sản phẩm</button>
          </div>
          <div class="product-type-contain flex flex-col justify-center items-center">
              <div class="product-type-image xs:w-[250px]"><img class="w-full h-full object-cover" src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-chuck-07-3-300x225.jpg" alt=""></div>
              <span class="product-type-title text-[#5c5959] pt-4 text-lg font-medium">Chuck Taylor AllStar</span>
              <button class="product-see mt-3 w-[150px] text-[16px] font-medium py-2 text-white bg-[#C30005] rounded">Xem sản phẩm</button>
          </div>
      </div>
      <div>
          <div  class="around-tabs mt-20" data-aos="fade-right">
              <nav>
            <div class="nav nav-tabs flex justify-center" id="nav-tab">
              <button @click="onChangeTabs(1)" class="button-active active nav-link text-[18px] font-medium" id="nav-profile-tab" data-bs-toggle="tab" type="button">SẢN PHẨM MỚI</button>
              <button @click="onChangeTabs(2)" class="button-active nav-link text-[18px] font-medium" id="nav-home-tab" data-bs-toggle="tab" type="button">SẢN PHẨM BÁN CHẠY</button>
              <button @click="onChangeTabs(3)" class="button-active nav-link text-[18px] font-medium" id="nav-contact-tab" data-bs-toggle="tab" type="button">SẢN PHẨM PHỔ BIẾN</button>
            </div>
          </nav>
           <!-- Using Tabs by Bootstrap  -->
          <div class="tab-content" id="nav-tabContent">
            <div v-show="currentTab === 1" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
               <swiper
              :slidesPerView="4"
              :spaceBetween="20"
              :slidesPergroup='4'
              :data-swiper-parallax="50"
              :breakpoints="swiperOptions.breakpoints"
              :pagination="{
          clickable: true,
              }"
              :navigation="true"
              :modules="modules"
              class="mySwiper"
            >
              <swiper-slide v-for="Product in ProductNew" :key="Product">
            <div class="item-slides flex flex-col items-center">
                <div class="around-item-image">
                    <img class="object-bottom" :src='Product.img' alt="">
                </div>
                <div class="around-item-info flex flex-col items-center">
                    <span class="item-title text-[#5c5959] pt-3  text-[16px] font-medium">{{Product.title}}</span>
                    <span class="item-price pt-2 text-[16px] text-[#C30005] font-medium">{{Product.TextCost}}</span>
          
                </div>
                <button @click="SendProduct(Product) , SendSum(Product.cost)" class="text-[16px] mt-2 font-medium text-white w-[130px] py-[6px] bg-[#C30005]">Thêm vào giỏ</button>
            </div>
              </swiper-slide>
          </swiper>
            </div>
            <div v-show="currentTab === 2" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
            <swiper
              :slidesPerView="4"
              :spaceBetween="20"
              :slidesPergroup='4'
               :breakpoints="swiperOptions.breakpoints"
              :pagination="{
          clickable: true,
              }"
              :navigation="true"
              :modules="modules"
              class="mySwiper"
            >
              <swiper-slide v-for="Product in ProductSale" :key="Product">
            <div class="item-slides flex flex-col items-center">
                <div class="around-item-image">
                    <img :src='Product.img' alt="">
                </div>
                <div class="around-item-info flex flex-col items-center">
                    <span class="item-title text-[#5c5959] pt-3  text-[16px] font-medium">{{Product.title}}</span>
                    <span class="item-price pt-2 text-[16px] text-[#C30005] font-medium">{{Product.TextCost}}</span>
          
                </div>
                <button @click="SendProduct(Product), SendSum(Product.cost)" class="text-[16px] mt-2 font-medium text-white w-[130px] py-[6px] bg-[#C30005]">Thêm vào giỏ</button>
            </div>
              </swiper-slide>
          </swiper>
            </div>
            <div v-show="currentTab === 3" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
          <swiper
              :slidesPerView="4"
              :spaceBetween="20"
              :slidesPergroup='4'
               :breakpoints="swiperOptions.breakpoints"
              :pagination="{
          clickable: true,
              }"
           
              :navigation="true"
              :modules="modules"
              class="mySwiper"
            >
              <swiper-slide v-for="Product in ProductNew" :key="Product">
            <div class="item-slides flex flex-col items-center">
                <div class="around-item-image">
                    <img :src='Product.img' alt="">
                </div>
                <div class="around-item-info flex flex-col items-center">
                    <span class="item-title text-[#5c5959] pt-3  text-[16px] font-medium">{{Product.title}}</span>
                    <span class="item-price pt-2 text-[16px] text-[#C30005] font-medium">{{Product.TextCost}}</span>
          
                </div>
                <button @click="SendProduct(Product), SendSum(Product.cost)" class="text-[16px] mt-2 font-medium text-white w-[130px] py-[6px] bg-[#C30005]">Thêm vào giỏ</button>
            </div>
              </swiper-slide>
          </swiper>
            </div>
          </div>
          </div>
      </div>
      <div data-aos="fade-up-right" data-aos-delay = "500" class="around-product-other mt-28">
          <h1 class="head-product-other text-[22px] font-medium">PHỤ KIỆN KHÁC</h1>
          <div class="product-other-list pt-10 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
              <div class="container-product-item flex flex-col items-center mt-4" v-for="Product in ProductOther" :key="Product">
                  <div class="product-other-image">
                      <img :src='Product.img' alt="">
                  </div>
                  <span class="product-other-title text-[#334862] mt-2">{{Product.title}}</span>
                  <span class="product-other-price text-[#C30005] mt-1">{{Product.TextCost}}</span>
                  <button @click="SendProduct(Product), SendSum(Product.cost)" class="add-product-other py-2 text-white font-medium text-[14px] mt-2 w-[120px] bg-[#C30005]">Thêm sản phẩm</button>
              </div>
          </div>
          <h1 class="see-all cursor-pointer text-center text-[16px] font-medium hover:bg-black hover:text-white hover:border-black mt-[25px] mx-auto py-[15px] w-[120px] border-2 border-[#334862]">Xem tất cả</h1>
          <div  class="around-product-discount mt-[100px]">
              <div class="container-product-image w-full md:h-[300px] lg:h-[500px] relative">
                  <img class="w-full h-full object-cover" src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/banner-1.jpg" alt="">
                <div class="info-product-discount w-full h-full xs:top-[70%] xs:left-[50%]  absolute md:top-[70%] lg:top-[80%]">
                <span class="title text-white md:text-[16px] lg:text-[22px] font-medium">MONA   S N E <i class="fa-solid fa-star-half-stroke"></i>K E R</span>
                <h1 class="product-discount pt-7 md:text-[40px] lg:text-[60px] text-white font-semibold">KHUYẾN MÃI<span class="pl-4 text-[#FFFF00]">GIẢM GIÁ 50%</span></h1>
                <button class="see-product-discount text-white mt-4 py-2 px-3 font-medium hover:bg-black text-[18px]">Xem sản phẩm</button>
              </div>
              </div>
          </div>
          <h1  class="shoes-discount text-[25px] mb-3 font-medium mt-[100px]">SẢN PHẨM GIÁM GIÁ</h1>
          <div>
              <div class=" around-shoes-discount pt-7 border-t-2 border-[black]" data-aos="fade-right">
                  <div class="container-shoes-discount flex-col items-center justify-center grid lg:grid-cols-4 md:grid-cols-2 gap-x-[20px]">
                      <div class="shoes-item relative mt-9" v-for="Product in ProductDiscount" :key="Product">
                          <div class="shoes-item-img xs:w-[300px]">
                              <img :src='Product.img' alt="">
                          </div>
                          <h2 class="shoes-title text-[#5c5959] font-medium text-[16px] mt-2">{{Product.title}}</h2>
                          <div class="around-shoes-price mt-2">
                              <span class="remove-price pr-5 font-medium line-through text-[#b1262a] text-[16px]">{{Product.RemoveCost}}</span>
                              <span class="current-price text-[16px] text-[#C30005] font-medium">{{Product.TextCost}}</span>
                          </div>
                          <span class="item-discount py-[14px] font-medium text-[16px] text-white px-[9px] rounded-full absolute top-[20px] left-0 bg-[#C30005]">-30%</span>
                          <button @click="SendProduct(Product) , SendSum(Product.cost), sendID(Product.id)" class="add-product-discount mt-3 w-[130px] py-2 text-white font-medium text-[16px] bg-[#C30005]">Thêm sản phẩm</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";

export default {
    data(){
        return{
        currentTab: 1,
        check: true,
    swiperOptions: {
          breakpoints: {       
      350: {       
         slidesPerView: 2,
         spaceBetween: 10     
      },          
      750: {       
         slidesPerView: 2,       
         spaceBetween: 50     
      },   
      1000: {       
         slidesPerView: 4,       
         spaceBetween: 30     
      } 
   }  
        }
      }
    },
    setup(){
    return {
        modules: [ Navigation],
        
    }; 
    },
    components:{
           Swiper,
    SwiperSlide,
    },
    methods: {
        ...mapState(['']),
        ...mapMutations(['addProduct','addSum','addId']),
        onChangeTabs(newValue) {       
            this.currentTab = newValue;
        },
        SendProduct(value){
            this.addProduct(value);
        },
        SendSum(value){
            this.addSum(value)
        },
        sendID(id){
         this.addId(id)   
        }
    },
   computed:{
       ...mapState(['ProductNew','ProductOther','ProductSale','ProductDiscount','ArrayNew'])
   },
   mounted(){
       var actives = document.querySelectorAll('.button-active');
      actives.forEach((item,index)=>{
          item.addEventListener('click',function(){
              actives.forEach((items)=>{
                  items.classList.remove('active')
                  })
             item.classList.add('active')
          })
      })
   }
}
</script>

<style scoped>
   /* css components */
   .active{
       background: black;
   }
   .product-see{
       transform: scale(0);
       transition: all 0.2s linear;
   }
   .product-type-contain:hover .product-see{
       transform: scale(1);
   }
    .nav-tabs .nav-link.active {
       background: black;
       color: white;
       border:none
   }
   .nav-tabs{
       border-bottom: 1.5px solid black;
   }
   .tab-content{
     margin-top: 40px;
   }
   .around-slider-product{
       display: flex;
   }
   .add-product{
       transform: scale(0);
       transition: all 0.15s linear;
   }
   .slider-contain-image:hover .add-product{
       transform: scale(1);
   }
   .container-product-other{
       padding-top: 30px;
   }
   .product-other-list{
       margin-top: 10px;
       border-top: 2px solid black;
   }
   .add-product-other{
       transform: scale(0);
       transition: all 0.25s linear;
   }
   .container-product-item:hover .add-product-other{
       transform: scale(1);
   }
   .see-all{
       transition: all 0.2s linear;
   }
   .info-product-discount{
       transform: translate(-50%,-50%);
   }
   .see-product-discount{
       border: 2px solid white;
       transition: all 0.2s linear;
   }
   .see-product-discount:hover{
       border: 2px solid black;
   }
   /* css slider product */
#app { height: 100% }
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  height: 250px;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.mySwiper{
  height: 350px;
}
.item-slides{
  width: 100%;
    height: 100%;
}
.around-item-image{
    width: 100%;
    height: 70%;
}
.around-item-info{
    width: 100%;
    height: 30%;
}
.around-item-image img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    
}
.add-product-discount{
    transform: scale(0);
    transition: all 0.2s linear;
}
.shoes-item:hover .add-product-discount{
    transform: scale(1);
}
</style>