import "./scss/style.scss"
import "bootstrap-icons/font/bootstrap-icons.scss"

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// import Swiper JS
import Swiper from 'swiper';
// 모듈 임포트
import { Navigation, Pagination } from 'swiper/modules';
// 스타일 추가
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
  // Optional parameters  
  loop: true,
  // 모듈 추가
  modules: [Navigation, Pagination],
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
});