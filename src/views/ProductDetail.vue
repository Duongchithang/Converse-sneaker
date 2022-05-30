<template>
  <div class="around-detail">
    <Header />
    <div
      class="around-details lg:ml-16 lg:mr-16 md:ml-10 md:mr-10 xs:mr-2 xs:ml-2"
    >
      <div v-for="Product in ProductDetail" :key="Product"  class="container-product-detail pb-[50px] md:mt-[50px]  flex xs:flex-col md:flex-col lg:flex-row lg:pt-[40px] lg:W-[100%]">
        <div class="container-img-detail xs:w-[100%]  md:w-[100%] lg:w-[40%] lg:h-[400px]">
          <img
            class="w-full h-full object-cover"
            :src="Product.img"
            alt=""
          />
        </div>
        <div
          class="container-detail-product md:w-[100%] lg:w-[60%] lg:pl-[80px] flex flex-col items-start"
        >
          <div class="around-router-detail text-[16px] text-[#a59c9c]">
            <router-link to="/">TRANG CHỦ</router-link> /
            <router-link to="/other">PHỤ KIỆN KHÁC</router-link>
          </div>
          <h1 class="mt-[20px] xs:text-[20px] md:text-[30px] font-medium">
            {{Product.title}}
          </h1>
          <span class="w-[40px] h-[3px] mt-[10px] bg-[#E5E5E5]"></span>
          <h1 class="xs:text-[20px] md:text-[24px] mt-[10px] font-semibold">{{Product.TextCost}}</h1>
          <div class="around-payment-add flex mt-[20px]">
            <div class="number">
              <span class="minus">-</span>
              <input type="text" value="1" />
              <span class="plus">+</span>
            </div>
            <button
              class="text-[16px] font-medium text-[white] ml-[20px] bg-[#C30005] w-[160px] h-[40px]"
            >
              THÊM VÀO GIỎ
            </button>
          </div>
          <div class="around-payment-detail flex w-[100%] mt-[30px]">
            <div class="around-payment-left w-[50%] flex flex-col">
              <span class="text-left text-[16px] font-medium"
                >Tính phí ship tự động</span
              >
              <ul class="grid grid-cols-2 grid-rows-2">
                <li>
                  <img
                    class=""
                    src="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-ghn.jpg"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-vn-post.jpg"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-ninja-van.jpg"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-viettle-post.jpg"
                    alt=""
                  />
                </li>
              </ul>
            </div>
            <div class="around-payment-right ml-[50px] w-[50%] flex flex-col">
              <span class="text-center text-[16px] font-medium"
                >Thanh toán</span
              >
              <ul class="grid grid-cols-2 grid-rows-2">
                <li class="">
                  <img
                    class=""
                    src="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-acb.jpg"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-vcb.jpg"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-paypal.jpg"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/10/logo-mastercard.jpg"
                    alt=""
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
     
    </div>
     <div class="around-container-banner">
        <img src="https://www.w3schools.com/w3images/map.jpg" alt="">
      </div>
    <Footer />
     <Loader class="load"/>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Loader from '../components/Loader.vue'
import { mapState } from "vuex";
export default {
  components: {
    Header,
    Footer,
    Loader
  },
  computed: {
    ...mapState(["ProductDetail"]),
  },
  mounted() {
    $(document).ready(function () {
      $(".minus").click(function () {
        var $input = $(this).parent().find("input");
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
      });
      $(".plus").click(function () {
        var $input = $(this).parent().find("input");
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
      });
    });
     var load = document.querySelector('.load')
     setTimeout(function(){
         load.style.display = 'none';
     },1000)
  },
};
</script>

<style scoped>
span {
  cursor: pointer;
}
.minus,
.plus {
  width: 34px;
  height: 34px;
  background: #f2f2f2;
  line-height: 34px;
  border-radius: 4px;
  display: inline-block;
  /* padding:8px 5px 8px 5px; */
  border: 1px solid #ddd;
  vertical-align: middle;
  text-align: center;
}
input {
  height: 34px;
  width: 100px;
  text-align: center;
  font-size: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  display: inline-block;
  vertical-align: middle;
}
.container-product-detail {
  border-bottom: 1px solid #ececec;
}
</style>
