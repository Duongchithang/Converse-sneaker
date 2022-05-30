<template>
  <div class="around-cart">
    <Header />
    <div
      v-if="ArrayNew.length == 0"
      class="around-cart-no-product flex flex-col pl-[75px] pr-[75px] mt-[70px] mb-[100px] justify-center items-center"
    >
      <h1 class="not-product text-[16px] text-[#3B3535]">
        Chưa có sản phẩm nào trong một giỏ hàng
      </h1>
      <router-link
        class="back-store mt-[30px] w-[250px] h-[40px] bg-[#C30005] text-[16px] font-semibold text-white leading-[40px]"
        to="/"
        >QUAY TRỜ LẠI CỬA HÀNG</router-link
      >
    </div>
    <div
      v-if="ArrayNew.length > 0"
      class="around-cart-have-product mb-[50px] mt-[30px] lg:ml-16 lg:mr-16 md:ml-10 md:mr-10 xs:mr-2 xs:ml-2"
    >
      <div class="container-payment flex xs:flex-col lg:flex-row">
        <div class="around-payment-left pr-[20px] xs:w-full lg:w-[60%]">
            <div class="around-repons-product-payment w-full">
              <ul class="payment-list w-full grid font-semibold text-[16px] pb-[10px]">
                <li class="text-left lg:block">
                  SẢN PHẨM
                </li>
                <li class="text-left xs:hidden lg:block">
                     GIÁ
                </li>
                <li class="xs:text-right lg:text-left lg:block">
                  SỐ LƯỢNG
                </li>
                <li class="text-right xs:hidden lg:block">
                   TỔNG
                </li>
              </ul>
              <div v-for="(Product,index) in ArrayNew" :key="(Product,index)" class="payment-list-item w-full xs:justify-between xs:flex lg:grid items-center pt-[20px] pb-[20px]">
                <div class="payment-item text-left">
                  <div class="around-content w-full flex">
                    <i class="fa-solid fa-circle-xmark text-[18px] text-[#888787]"></i>
                    <div class="around-info flex items-center">
                      <img class="w-[80px] h-[50px]" :src="Product.img" alt="">
                      <div class="around-content-payment-bi flex flex-col items-center">
                        <p class="ml-[10px] text-[16px] text-[#797575]">{{Product.title}}</p>
                        <p class="lg:hidden xs:block mt-[10px] font-medium">1.250.000 đ</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="payment-item text-left lg:block font-medium xs:hidden">
                  {{Product.TextCost}}
                </div>
                <div class="payment-item text-left">
                    <div class="around-count">
                      <span @click="minProduct" class="min-cart px-[10px] text-[18px] pb-[8px] pt-[6px] bg-[rgb(249,249,249)]">-</span>
                      <span class="btn-number-cart px-[15px] py-[8px]">{{countProduct}}</span>
                      <span @click="countProduct++" class="plus-cart px-[10px] py-[8px] bg-[rgb(249,249,249)]">+</span>
                    </div> 
                </div>
                <div class="payment-item text-right lg:block xs:hidden font-medium">
                  {{Product.TextCost}}
                </div>
              </div>                                                     
            </div>
            <div
              class="around-button-update mt-[30px] text-[#C30005] mb-[50px] flex-row flex justify-start"
            >
              <span
                class="btn-continue text-[14px] font-medium mr-[20px] px-[10px] py-[8px]"
                >TIẾP TỤC XEM SẢN PHẨM</span
              >
              <span
                class="btn-update text-[14px] font-medium px-[10px] py-[8px]"
                >CẬP NHẬT GIỎ HÀNG</span
              >
            </div>
          
        </div>

          <div
            class="around-payment-sum xs:w-full lg:w-[40%] xs:pr-[20px] pl-[20px]"
          >
            <h1 class="sum-number text-[16px] text-left font-medium">
              TỔNG SỐ LƯỢNG
            </h1>
            <div
              class="around-sum-phu flex mt-[10px] text-[14px] justify-between pb-[10px]"
            >
              <span>Tổng phụ</span>
              <span class="font-medium">{{ FormatSum }}</span>
            </div>
            <div
              class="around-ship flex mt-[10px] text-[14px] pb-[10px] justify-between items-center text-[#6B6866]"
            >
              <span>Giao hàng</span>
              <ul>
                <li>Giao hàng miễn phí</li>
                <li>Ước tính cho Việt Nam</li>
                <li>Đổi địa chỉ</li>
              </ul>
            </div>
            <div
              class="around-sum-center flex justify-between mt-[10px] text-[14px]"
            >
              <span>Tổng</span>
              <span class="font-medium">{{ FormatSum }}</span>
            </div>
            <button
              class="mt-[20px] text-[16px] font-medium text-white bg-[#D26E4B] w-full h-[40px]"
            >
              TIẾN HÀNH THANH TOÁN
            </button>
            <div
              class="around-card-discount mt-[20px] flex-row justify-start flex items-center pb-[10px]"
            >
              <i class="fa-brands fa-discourse mr-[10px] text-[18px]"></i>
              <span class="font-medium">Phiếu ưu đãi</span>
            </div>
            <input
              class="input-discount w-full h-[40px] mt-[10px] pl-[15px] outline-none"
              placeholder="Mã ưu đãi"
              type="text"
            />
            <button
              class="btn-discount w-full mt-[20px] h-[40px] bg-[#F9F9F9] font-normal text-[#796866]"
            >
              Áp dụng
            </button>
          </div>
      </div>
      
    </div>
    <Footer />
      <Loader class="load" />
  </div>
</template>

<script>
import Loader from "../components/Loader.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["ArrayNew", "FormatSum"]),
  },
  data() {
    return {
      countProduct: 1,
    };
  },
  components: {
    Header,
    Footer,
    Loader,
  },
  methods:{
    minProduct(){
      if(this.countProduct>0){
        this.countProduct--;
      }
      else{
        this.countProduct = 0; 
      }
    }
  },
  mounted() {
    var number = 1;
    this.countProduct = number;
    var min = document.querySelector(".min-cart");
    var plus = document.querySelector(".plus-cart");
    var input_number = document.querySelector(".btn-number-cart");
    // min.addEventListener('click',function(){
    // number--;
    // });
    // plus.addEventListener('click', function(){
    //  number++;
    // })
    var load = document.querySelector(".load");

    setTimeout(function () {
      load.style.display = "none";
    }, 1000);
  },
};
</script>

<style scoped>
.btn-number-cart{
  border-top: 1px solid #cccccc;
  border-bottom: 1px solid #cccccc;
}

.min-cart{
  border : 1px solid #ccc
}
.plus-cart{
  border:1px solid #ccc;
}
.payment-list{
  grid-template-columns:  3fr 1fr 1fr 1fr;
  border-bottom: 2px solid #cccc;
}
.payment-list-item{
  grid-template-columns: 3fr 1fr 1fr 1fr;
  border-bottom: 1px solid #cccc;
}
.button-number {
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  box-shadow: 1px 0 1px 0 #ccc;
}
.button-max {
  border: 1px solid #ccc;
  box-shadow: 0 0 0.2px 0.3px #ccc;
}
.btn-continue {
  border: 3px solid #c30005;
}
.btn-update {
  border: 3px solid #c30005;
}
.list-product-title {
  border-bottom: 3px solid #cccc;
}
.around-payment-left {
  border-right: 1px solid #ccc;
}
.sum-number {
  padding-bottom: 10px;
  border-bottom: 2px solid #ccc;
}
.around-sum-phu {
  border-bottom: 2px solid #ccc;
}
.around-ship {
  border-bottom: 2px solid #ccc;
}
.input-discount {
  border: 1.5px solid #ccc;
}
.around-card-discount {
  border-bottom: 2px solid #ccc;
}
.btn-discount {
  border: 1px solid #cccc;
}
@media screen and (max-width: 500px){
  .payment-list{
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
</style>
