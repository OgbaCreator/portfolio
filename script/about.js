const equalification1 = document.querySelector('.js-equalification1');
const equalification2 = document.querySelector('.js-equalification2');
const equalification3 = document.querySelector('.js-equalification3');
const boxInfo = document.querySelector('.js-box-info');

boxInfo.innerHTML = `
  <div class="box-i">
    <div>Honesty</div>
    <div>Emphaty</div>
  </div>
  <div class="box-ii">
    <div>Creative</div>
    <div>Tenacity</div>
  </div>
  <div class="box-iii">
    <div>Realistic</div>
    <div>Flexibilty</div>
  </div>
  <div class="box-iv">
    <div>Pofessional</div>
    <div>Multitasking</div>
  </div>
  <div class="box-v">
    <div>Good Listener</div>
    <div>Result Driven</div>
  </div>`;

equalification1.classList.add('add-toggle');
equalification1.addEventListener('click', () => {
  equalification1.classList.add('add-toggle');
  equalification2.classList.remove('add-toggle');
  equalification3.classList.remove('add-toggle');
  boxInfo.innerHTML = `
  <div class="box-i">
    <div>Honesty</div>
    <div>Emphaty</div>
  </div>
  <div class="box-ii">
    <div>Creative</div>
    <div>Tenacity</div>
  </div>
  <div class="box-iii">
    <div>Realistic</div>
    <div>Flexibilty</div>
  </div>
  <div class="box-iv">
    <div>Pofessional</div>
    <div>Multitasking</div>
  </div>
  <div class="box-v">
    <div>Good Listener</div>
    <div>Result Driven</div>
  </div>`;

});

equalification2.addEventListener('click', () => {
  equalification2.classList.add('add-toggle');
  equalification3.classList.remove('add-toggle');
  equalification1.classList.remove('add-toggle');
  boxInfo.innerHTML = `<div><p>2020 - 2021</p>
  EllaBeautyCastle as Social Media Manager
  </div>
  <div><p>2022</p>
  SocialMediaOgaAcademy as Community Manager</div>
  </div>
  <div><p>2023</p>
  WaterFront as Social Media Marketer</div>
  </div>`;
});

equalification3.addEventListener('click', () => {
  equalification3.classList.add('add-toggle');
  equalification1.classList.remove('add-toggle');
  equalification2.classList.remove('add-toggle');
  boxInfo.innerHTML = `<div>
    <p class="year">2020</p>
    SocialMediaManagement from SocialMediaOgaAcademy
  </div>
  <div>
    <p class="year">2022</p>
    COmmunityManagement from Haneefah
  </div>
  <div>
    <p class="year">2014</p>
    EventManagement from YellowLyfe.
  </div>`;

});