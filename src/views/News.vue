<template>
  <div class="news">
     <Header/>
     <div class="around-news  lg:ml-16 lg:mr-16  md:ml-10 md:mr-10  xs:mr-2 xs:ml-2">
         <h1 class="mt-[30px] mb-[45px] text-[20px] font-semibold">TIN TỨC</h1>
         <div class="around-news-navbar flex xs:flex-col-reverse md:flex-col-reverse lg:flex-row md:mb-[50px] md:justify-between">
            <div class="around-news-left xs:mt-[40px] lg:mt-0 xs:w-[100%] lg:w-[25%]">
                <div class="around-news-search flex w-full">
                    <input class="border-[1px] xs:w-[100%] lg:w-[250px] border-[#DDDDDD] pl-3 outline-none" placeholder="Tìm kiếm..." type="text">
                    <button class="w-[40px] h-[40px] text-[20px] font-semibold text-white bg-[#C30005]"><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
                <h1 class="text-left mt-[30px] mb-[30px] font-semibold">BÀI VIẾT MỚI</h1>
                <ul class="list-news xs:w-full lg:w-[290px] flex flex-col px-[15px] py-[15px] bg-[#FCFCFC]">
                    <li class="flex pb-[10px]">
                        <img class="w-[50px] h-[50px] object-cover rounded-full mr-2" src="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/03/news-1-150x150.jpg" alt="">
                        <span class="text-[14px] text-left flex-wrap">
Converse sẽ mang Golf le Fleur* Chuck 70 về Việt...</span>
                    </li>
                    <li class="flex pb-[10px]">
                        <img class="w-[50px] h-[50px] object-cover rounded-full mr-2" src="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/03/news-2-150x150.jpg" alt="">
                        <span class="text-[14px] text-left flex-wrap">
Comme des Garçons Play x Converse nhá hàng mẫu...</span>
                    </li>
                    <li class="flex pb-[10px]">
                        <img class="w-[50px] h-[50px] object-cover rounded-full mr-2" src="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/03/news-3-150x150.jpg" alt="">
                        <span class="text-[14px] text-left flex-wrap">
Xinh xắn nhất những ngày này là những mẫu giày của...</span>
                    </li>
                    <li class="flex pb-[10px]">
                        <img class="w-[50px] h-[50px] object-cover rounded-full mr-2" src="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/03/news-4-150x150.jpg" alt="">
                        <span class="text-[14px] text-left flex-wrap">
Fashionista Việt đua nhau sống “ngược” theo trào lư...</span>
                    </li>
                    <li class="flex pb-[10px]">
                        <img class="w-[50px] h-[50px] object-cover rounded-full mr-2" src="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/03/news-5-150x150.png" alt="">
                        <span class="text-[14px] text-left flex-wrap">
Hội Thần Kinh Giày xôn xao với hình ảnh 18 ngàn lượt like của nhóc tì m...</span>
                    </li>
                </ul>
            </div>
            <div class="around-news-right md:pl-0 lg:pl-[25px] xs:w-[100%] lg:w-[70%]">
                <div class="around-list-news grid xs:grid-cols-1 xs:grid-rows-6 xs:gap-y-[50px] lg:grid-cols-3 lg:gap-y-[20px] lg:gap-x-[20px] lg:grid-rows-2">
                    <div class="around-items-news flex flex-col px-[5px] pb-[10px] relative">
                        <div class="container-img-news">
                            <img class="xs:h-[350px] lg:h-[150px] w-full object-cover mt-1" src="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/03/news-1-300x225.jpg" alt="">
                        </div>
                        <span class="text-left font-semibold text-[16px] xs:mt-[10px] lg:mt-0">Converse sẽ mang Golf le Fleur* Chuck 70 về Việt Nam?</span>
                        <span class="w-[50px] mt-2 h-[2px] bg-gray"></span>
                        <span class="text-[14px] mt-[10px] text-left">Nhờ cú leak vừa rồi từ nơi sản sinh ra các thành phẩm converse...</span>
                     <div class="absolute flex flex-col justify-center items-center w-[50px] h-[50px] top-[30px] left-[-10px] rounded-full bg-[#C30005] text-white font-semibold">
                           <span class="text-[14px]">08</span>
                           <span class="text-[12px]">Th3</span>
                       </div>
                    </div>
                     <div class="around-items-news flex flex-col px-[5px] pb-[10px] relative">
                        <div class="container-img-news">
                            <img class="xs:h-[350px] lg:h-[150px] w-full object-cover mt-1" src="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/03/news-2-300x229.jpg" alt="">
                        </div>
                        <span class="text-left font-semibold text-[16px] xs:mt-[15px] lg:mt-0">Xinh xắn nhất những ngày này là những mẫu giày của các...</span>
                        <span class="w-[50px] mt-2 h-[2px] bg-gray"></span>
                        <span class="text-[14px] mt-[10px] text-left">Phải tới ngày 27 tới, BST này mới ra mắt nhưng giờ nó...</span>
                       <div class="absolute flex flex-col justify-center items-center w-[50px] h-[50px] top-[30px] left-[-10px] rounded-full bg-[#C30005] text-white font-semibold">
                           <span class="text-[14px]">08</span>
                           <span class="text-[12px]">Th3</span>
                       </div>
                    </div>
                     <div class="around-items-news flex flex-col px-[5px] pb-[10px] relative">
                        <div class="container-img-news">
                            <img class="xs:h-[350px] lg:h-[150px] w-full object-cover mt-1" src="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/03/news-3-300x143.jpg" alt="">
                        </div>
                        <span class="text-left font-semibold text-[16px] xs:mt-[15px] lg:mt-0">Fashionista Việt đua nhau sống "ngược theo trào lưu"</span>
                        <span class="w-[50px] mt-2 h-[2px] bg-gray"></span>
                        <span class="text-[14px] mt-[10px] text-left">Trước lời thách thức của Kaylee và Brian , giới trẻ việt nam nói chung...</span>
                      <div class="absolute flex flex-col justify-center items-center w-[50px] h-[50px] top-[30px] left-[-10px] rounded-full bg-[#C30005] text-white font-semibold">
                           <span class="text-[14px]">08</span>
                           <span class="text-[12px]">Th3</span>
                       </div>
                    </div>
                     <div class="around-items-news flex flex-col px-[5px] pb-[10px] relative">
                        <div class="container-img-news">
                            <img class="xs:h-[350px] lg:h-[150px] w-full object-cover mt-1" src="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/03/news-4-300x200.jpg" alt="">
                        </div>
                        <span class="text-left font-semibold text-[16px] xs:mt-[15px] lg:mt-0">Comme des Garcon Play x Converse nhá hàng mẫu giày...</span>
                        <span class="w-[50px] mt-2 h-[2px] bg-gray"></span>
                        <span class="text-[14px] mt-[10px] text-left">Không phụ lòng mong đợi của các fan, Comme des Garcon x Play...</span>
                        <div class="absolute flex flex-col justify-center items-center w-[50px] h-[50px] top-[30px] left-[-10px] rounded-full bg-[#C30005] text-white font-semibold">
                           <span class="text-[14px]">08</span>
                           <span class="text-[12px]">Th3</span>
                       </div>
                    </div>
                     <div class="around-items-news flex flex-col px-[5px] pb-[10px] relative">
                        <div class="container-img-news">
                            <img class="xs:h-[350px] lg:h-[150px] w-full object-cover mt-1" src="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/03/news-5-300x203.png" alt="">
                        </div>
                        <span class="text-left font-semibold text-[16px] xs:mt-[15px] lg:mt-0">Hội thần kinh giày xôn xao với hình ảnh 18 ngàn lượt like của...</span>
                        <span class="w-[50px] mt-2 h-[2px] bg-gray"></span>
                        <span class="text-[14px] mt-[10px] text-left">Có vẻ như bức hình của cô nhóc xinh xắn đôi Converse trắng đã...</span>
                       <div class="absolute flex flex-col justify-center items-center w-[50px] h-[50px] top-[30px] left-[-10px] rounded-full bg-[#C30005] text-white font-semibold">
                           <span class="text-[14px]">08</span>
                           <span class="text-[12px]">Th3</span>
                       </div>
                    </div>
                     <div class="around-items-news flex flex-col px-[5px] pb-[10px] relative">
                        <div class="container-img-news">
                            <img class="xs:h-[350px] lg:h-[150px] w-full object-cover mt-1" src="http://mauweb.monamedia.net/converse/wp-content/uploads/2018/03/news-6-300x225.jpg" alt="">
                        </div>
                        <span class="text-left font-semibold text-[16px] xs:mt-[15px] lg:mt-0">Đế giày Converse có thiết kế rất đặc biệt, nhưng lí do thì chắc...</span>
                        <span class="w-[50px] mt-2 h-[2px] bg-gray"></span>
                        <span class="text-[14px] mt-[10px] text-left">Nếu chú ý, bạn sẽ thấy đế giày Converse có một lớp nỉ cao su...</span>
                       <div class="absolute flex flex-col justify-center items-center w-[50px] h-[50px] top-[30px] left-[-10px] rounded-full bg-[#C30005] text-white font-semibold">
                           <span class="text-[14px]">08</span>
                           <span class="text-[12px]">Th3</span>
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
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Loader from '../components/Loader.vue'
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
  .list-news li{
      border-bottom : 1px dashed #DDDDDD;
      margin-top: 10px;
  }
  .around-news-right{
      border-left: 1px solid #DDDDDD;
  }
  .around-items-news{
      border: 1px solid #DDDDDD;
  }
</style>