<template>
  <div class="contact">
      <Header/>
      <div class="around-contact ">
           <div class="intro-banner relative w-full h-[200px]">
             <div class="container-banner-img w-full h-full">
                 <img class="w-full h-full object-cover" src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/banner-1.jpg  " alt="">
             </div>
             <div class="container-banner-content absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]">
                 <h1 class="heading-intro xs:text-[20px] md:text-[30px] text-white font-medium">GIỚI THIỆU</h1>
                 <div class="container-router xs:text-[16px] md:text-[20px] text-white pt-4 ">
                    <router-link class="Home text-[#FAFAFA]" to="/">TRANG CHỦ</router-link> /
                    <router-link class="Intro text-white font-medium" to="/intro">LIÊN HỆ</router-link>
                 </div>
             </div>
         </div>
         <div class="around-input-contact xs:flex-wrap md:flex-nowrap xs:mt-[50px] flex  md:justify-between md:mt-[65px] mb-[55px] lg:px-4 lg:ml-16 lg:mr-16 md:px-3 md:ml-10 md:mr-10 xs:px-1 xs:mr-2 xs:ml-2">
             <div class="container-contact-info">
                 <h1 class="info-contact xs: md:text-[20px] text-[#C30005] font-semibold text-left lg:">THÔNG TIN LIÊN HỆ</h1>
                 <ul class="info-contact-list flex text-left xs:mt-[10px] md:mt-[20px] flex-col xs:gap-y-[5px] md:gap-y-[15px]">
                     <li class="text-[#353535]">
                         <i class="fa-solid fa-location-dot xs:text-[14px] xs:pr-[10px] md:text-[20px] md:pr-[14px]"></i>
                         <span class="xs:text-[15px] md:text-[18px]">Vinh An, Phu Vang, Thua Thien Hue</span>
                     </li>
                     <li class="text-[#353535]">
                        <i class="fa-solid fa-envelope xs:text-[14px] xs:pr-[10px] md:text-[20px] md:pr-[14px]"></i>
                         <span class="xs:text-[15px] md:text-[18px]">Chithang0210@gmail.com</span>
                     </li>
                     <li class="text-[#353535]">
                        <i class="fa-solid fa-square-phone xs:text-[14px] xs:pr-[10px] md:text-[20px] md:pr-[14px]"></i>
                         <span class="xs:text-[15px] md:text-[18px]">0373728***</span>
                     </li>
                 </ul>
                 <ul class="flex gap-x-[20px] mt-[20px]">
                     <li>
                         <i class="fa-brands fa-facebook-f text-[20px]"></i>
                     </li>
                      <li>
                       <i class="fa-brands fa-instagram text-[20px]"></i>
                     </li>
                      <li>
                        <i class="fa-brands fa-twitter text-[20px]"></i>
                     </li>
                      <li>
                        <i class="fa-brands fa-skype text-[20px]"></i>
                     </li>
                 </ul>
             </div>
             <div class="around-input-group xs:w-full lg:w-[50%] md:flex-col md:flex md:items-end xs:mt-[30px] md:mt-[0px]">
                 <div class="input-list grid xs:grid-cols-1 xs:grid-rows-4 xs:gap-y-[10px] lg:grid-cols-2 lg:grid-rows-2 lg:gap-x-[10px] lg:gap-y-[10px]">
                     <div class="input-item flex flex-col">
                         <input class="input-name xs:w-full xs:h-[35px] xs md:w-[280px] md:h-[40px]" type="text" placeholder="Họ và tên">
                         <span class="check-name text-[14px] text-left"></span>
                     </div>
                   
                     <div class="input-item flex flex-col">
                         <input class="input-email xs:w-full xs:h-[35px] xs md:w-[280px] md:h-[40px]" type="text" placeholder="Email">
                         <span class="check-email text-[14px] text-left"></span>
                     </div>
                  
                     <div class="input-item flex flex-col">
                         <input class="input-number xs:w-full xs:h-[35px] xs md:w-[280px] md:h-[40px]" type="text" placeholder="Số điện thoại">
            
                         <span class="check-number text-[14px] text-left"></span>
                     </div>
                     <div class="input-item flex flex-col">
                         <input class="input-address xs:w-full xs:h-[35px] xs md:w-[280px] md:h-[40px]" type="text" placeholder="Địa chỉ">
                         <span class="check-address text-[14px] text-left"></span>
                     </div>
                     
                 </div>
                   
                         <textarea class="input-big-text pt-2 pl-4 mt-[10px] xs:w-full md:w-[280px] lg:w-full outline-none" name="" id="" cols="" rows="5" placeholder="Lời nhắn"></textarea>
                        <h1  class="check-text w-full text-left"></h1>
        
                    <button class="btn-send mt-[10px] h-[38px] font-semibold text-white xs:w-[250px] md:w-[150px] lg:w-[250px] bg-[#C30005]">GỬI</button>
             </div>
        
         </div>
         <div class="around-map">
             <img src="https://www.w3schools.com/w3images/map.jpg" alt="">
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
      Header, Footer ,Loader
  },
  mounted(){
       var load = document.querySelector('.load')
     setTimeout(function(){
         load.style.display = 'none';
     },1000);
     var input_name = document.querySelector('.input-name');
     var input_email = document.querySelector('.input-email');
     var input_number = document.querySelector('.input-number');
     var input_address = document.querySelector('.input-address');
     var input_text = document.querySelector('.input-big-text');
     var check_text = document.querySelector('.check-text');
     var check_name = document.querySelector('.check-name');
     var check_email = document.querySelector('.check-email');
     var check_number = document.querySelector('.check-number');
     var check_address = document.querySelector('.check-address');
     var btn_send = document.querySelector('.btn-send');
     btn_send.addEventListener('click', function(e){
         e.preventDefault();
         CheckName();
         CheckEmail();
         CheckNumber();
         CheckAddress();
         CheckText();
     });
     function CheckName(){
         if(input_name.value.trim()===``){
              setErrorName('Name cannot be blank!')
         }
         else{
             setSuccessName(``)
         }
     }
     function CheckText(){
         if(input_text.value.trim()===``){
            setErrorText('Text cannot be blank!')
         }
         else{
             setSuccessText(``)
         }
     }
     function CheckEmail(){
         if(input_email.value.trim()===``){
              setErrorEmail('Email cannot be blank!')
         }
         else{
             setSuccessEmail(``)
         }
     }
     function CheckNumber(){
         if(input_number.value.trim()===``){
              setErrorNumber('Number cannot be blank!')
         }
         else{
             setSuccessNumber(``)
         }
     }
     function CheckAddress(){
         if(input_address.value.trim()===``){
              setErrorAddress('Address cannot be blank!')
         }
         else{
              setSuccessAddress(``)
         }
     }
     function setErrorText(mess){
         check_text.classList.add('error');
         check_text.innerHTML = mess;
     }
       function setErrorName(mess){
        check_name.classList.add('error')
        check_name.innerHTML = mess;
    }
     function setErrorEmail(mess){
         check_email.classList.add('error')
         check_email.innerHTML = mess;
      }
        function setErrorNumber(mess){
         check_number.classList.add('error')
         check_number.innerHTML = mess;
      }
        function setErrorAddress(mess){
         check_address.classList.add('error')
         check_address.innerHTML = mess;
      }
     function setSuccessText(mess){
         check_text.innerHTML = mess;
     }
    function setSuccessName(mess){
        check_name.innerHTML = mess;
    }
    function setSuccessEmail(mess){
        check_email.innerHTML = mess;
    }
     function setSuccessNumber(mess){
        check_number.innerHTML = mess;
    }
     function setSuccessAddress(mess){
        check_address.innerHTML = mess;
    }
  }
}
</script>
   
<style scoped>
    .input-item input{
        outline: none;
        border : 1px solid #DDDDDD;
        padding-left: 15px;
    }
    .input-big-text{
        border : 1px solid #DDDDDD;
    }
     .success{
      color:green;
  }
  .error{
      color: red;
  }
</style>