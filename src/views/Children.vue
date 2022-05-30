<template>
  <div class="Other">
    <Header />
    <div class="around-other lg:ml-16 lg:mr-16  md:ml-10 md:mr-10  xs:mr-2 xs:ml-2">
      <div class="around-other-option lg:mt-[25px] xs:mt-[25px] xs:flex-col flex lg:flex-row justify-between">
        <div class="container-router-other xs:text-[14px] lg:text-[18px] text-[#949494]">
          <router-link to="" class="text-[#949494]">TRANG CHỦ</router-link> /
          <router-link to="" class="font-medium text-black">TRẺ EM</router-link>
        </div>
        <div class="container-options flex">
          <span class="mr-[20px] xs:hidden lg:block">Hiển thị một kết quả duy nhất</span>
          <form class="woocommerce-ordering outline-none xs:mx-auto lg:mt-[0] xs:mt-[20px]" method="get">
            <select name="orderby" class="orderby outline-none xs:text-[14px] lg:w-[250px] lg:text-[16px]  xs:w-[250px] px-[10px] py-[5px]">
              <option value="menu_order" class="outline-none" selected="selected">
                Thứ tự mặc định
              </option>
              <option value="popularity">Thứ tự theo mức độ phổ biến</option>
              <option value="rating">Thứ tự theo điểm đánh giá</option>
              <option value="date">Mới nhất</option>
              <option value="price">Thứ tự theo giá: thấp đến cao</option>
              <option value="price-desc">
                Thứ tự theo giá: cao xuống thấp
              </option>
            </select>
            <input type="hidden" class="outline-none " name="paged" value="1" />
          </form>
        </div>
      </div>
      <div class="container-other flex xs:justify-center xs:mt-[50px] xs:mb-[50px]  lg:mt-[50px] lg:mb-[50px]">
        <div class="other-left xs:hidden lg:block lg:w-[25%]">
            <h1 class="text-[18px] font-medium text-[#353535] text-left">SẢN PHẨM</h1>
              <ul class="other-list flex flex-col lg:mt-[20px] lg:px-[8px] lg:py-[12px] bg-[#FCFCFC] border-[1.5px] border-[#DDDDDD]">
                <li class="flex pb-[10px] justify-around">
                    <img class="lg:w-[60px] lg:h-[60px] object-cover" src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/men-psy-1-100x100.jpg" alt="">
                    <div class="content-price flex flex-col justify-between ml-[10px]">
                        <span class="text-[14px] text-[#666]">Chuck 70 Psy-Kicks Ox</span>
                        <span class="text-[16px] text-black font-medium">2,800,000 đ</span>
                    </div>
                </li>
                <li class="flex pb-[10px] justify-around">
                    <img class="lg:w-[60px] lg:h-[60px] object-cover" src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-psy-2-150x150.jpg" alt="">
                    <div class="content-price flex flex-col justify-between ml-[10px]">
                        <span class="text-[14px] text-[#666]">Chuck 70 Psy-Kicks Ox</span>
                        <span class="text-[16px] text-black font-medium">1,800,000 đ</span>
                    </div>
                </li>
                <li class="flex pb-[10px] justify-around">
                    <img class="lg:w-[60px] lg:h-[60px] object-cover" src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-sunbaked-1-150x150.jpg" alt="">
                    <div class="content-price flex flex-col justify-between ml-[10px]">
                        <span class="text-[14px] text-[#666] w-full">One Star Sunbaked</span>
                        <span class="text-[16px] text-black font-medium">1,600,000 đ</span>
                    </div>
                </li>
                <li class="flex pb-[10px] justify-around">
                    <img class="lg:w-[60px] lg:h-[60px] object-cover" src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-sunbaked-2-100x100.jpg" alt="">
                    <div class="content-price flex flex-col justify-between ml-[10px]">
                        <span class="text-[14px] text-[#666]">One star Sunbaked</span>
                        <span class="text-[16px] text-black font-medium">1.600,000 đ</span>
                    </div>
                </li>
                <li class="flex pb-[10px] justify-around">
                    <img class="lg:w-[60px] lg:h-[60px] object-cover" src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-sunbaked-3-100x100.jpg" alt="">
                    <div class="content-price flex flex-col justify-between ml-[10px]">
                        <span class="text-[14px] text-[#666]">One Star Sunbaked</span>
                        <span class="text-[16px] text-black font-medium">1,600,000 đ</span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="other-right">
            <div class="other-product-around lg:mt-[40px] lg:ml-[20px]">
                <div class="other-product-list grid lg:grid-cols-4 xs:grid-cols-1 xs:grid-rows-6 xs:gap-y-[20px] md:grid-cols-2 md:grid-rows-3 md:gap-x-[20px] md:gap-y-[20px] lg:gap-y-[20px] lg:gap-x-[20px] lg:grid-rows-2">
                    <div class="other-product-item pb-[10px]">
                        <img class="h-[200px] object-cover" src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/kid-3-300x225.jpg" alt="">
                        <div class="around-content-item flex flex-col">
                             <span class="text-[14px] text-[#666]">Coverse Collegiate Text SS...</span>
                             <span class="mt-[10px] text-[15px] font-medium text-black">600.000đ</span>
                        </div>
                        <button class="mt-[8px] w-[110px] h-[30px] text-[12px] font-medium text-white bg-[#C30005]">THÊM VÀO GIỎ</button>
                    </div>
                     <div class="other-product-item pb-[10px]">
                        <img class="h-[200px] object-cover" src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/kid-4-300x225.jpg" alt="">
                        <div class="around-content-item flex flex-col">
                             <span class="text-[14px] text-[#666]">Converse "Metal Cons" Pull</span>
                             <span class="mt-[10px] text-[15px] font-medium text-black">1.400.000đ</span>
                        </div>
                        <button class="mt-[8px] w-[110px] h-[30px] text-[12px] font-medium text-white bg-[#C30005]">THÊM VÀO GIỎ</button>
                    </div>
                     <div class="other-product-item pb-[10px]">
                        <img class="h-[200px] object-cover" src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/kid-2-300x225.jpg" alt="">
                        <div class="around-content-item flex flex-col">
                             <span class="text-[14px] text-[#666]">Coverse Star Jogger</span>
                             <span class="mt-[10px] text-[15px] font-medium text-black">950.000đ</span>
                        </div>
                        <button class="mt-[8px] w-[110px] h-[30px] text-[12px] font-medium text-white bg-[#C30005]">THÊM VÀO GIỎ</button>
                    </div>
                     <div class="other-product-item pb-[10px]">
                        <img class="h-[200px] object-cover" src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/kid-1-300x225.jpg" alt="">
                        <div class="around-content-item flex flex-col">
                             <span class="text-[14px] text-[#666]">Converse X</span>
                             <span class="mt-[10px] text-[15px] font-medium text-black">700.000đ</span>
                        </div>
                        <button class="mt-[8px] w-[110px] h-[30px] text-[12px] font-medium text-white bg-[#C30005]">THÊM VÀO GIỎ</button>
                    </div>
                     <div class="other-product-item pb-[10px]">
                        <img class="h-[200px] object-cover" src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/kid-6-300x225.jpg" alt="">
                        <div class="around-content-item flex flex-col">
                             <span class="text-[14px] text-[#666]">Lil Duffel</span>
                             <span class="mt-[10px] text-[15px] font-medium text-black">700.000đ</span>
                        </div>
                        <button class="mt-[8px] w-[110px] h-[30px] text-[12px] font-medium text-white bg-[#C30005]">THÊM VÀO GIỎ</button>
                    </div>
                     <div class="other-product-item pb-[10px]">
                        <img class="h-[200px] object-cover" src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/balo-3-300x225.jpg" alt="">
                        <div class="around-content-item flex flex-col">
                             <span class="text-[14px] text-[#666]">Poly Chuck Plus 1.0</span>
                             <span class="mt-[10px] text-[15px] font-medium text-black">770.000đ</span>
                        </div>
                        <button class="mt-[8px] w-[110px] h-[30px] text-[12px] font-medium text-white bg-[#C30005]">THÊM VÀO GIỎ</button>
                    </div>
                     <div class="other-product-item pb-[10px]">
                        <img class="h-[200px] object-cover" src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/balo-3-300x225.jpg" alt="">
                        <div class="around-content-item flex flex-col">
                             <span class="text-[14px] text-[#666]">Speed 2 BackPack</span>
                             <span class="mt-[10px] text-[15px] font-medium text-black">700.000đ</span>
                        </div>
                        <button class="mt-[8px] w-[110px] h-[30px] text-[12px] font-medium text-white bg-[#C30005]">THÊM VÀO GIỎ</button>
                    </div>
                     <div class="other-product-item pb-[10px]">
                        <img class="h-[200px] object-cover" src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/balo-1-300x225.jpg" alt="">
                        <div class="around-content-item flex flex-col">
                             <span class="text-[14px] text-[#666]">Sport Duffel</span>
                             <span class="mt-[10px] text-[15px] font-medium text-black">1.000.000đ</span>
                        </div>
                        <button class="mt-[8px] w-[110px] h-[30px] text-[12px] font-medium text-white bg-[#C30005]">THÊM VÀO GIỎ</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
    <Footer/>
   <Loader class="load"/>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Loader from '../components/Loader.vue'
export default{
  components: {
    Header,
    Footer,
    Loader
  },
  mounted(){
     var load = document.querySelector('.load')
     setTimeout(function(){
         load.style.display = 'none';
     },1000);
  }
};
</script>

<style scoped>
option{
    outline: none;
}
.other-list li{
     border-bottom : 1px dashed #DDDDDD;
     margin-top: 10px;
}
.other-product-item{
    border: 1px solid #DDDDDD;
}
</style>
