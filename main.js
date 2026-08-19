import './assets/scss/all.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

console.log('Hello world');

AOS.init({
  offset: 120,
  duration: 400,
  once: false,
  delay: 100,
});