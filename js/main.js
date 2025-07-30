let hash = window.location.hash;
let standL = document.querySelector('.stand_lang');
let langsList = document.getElementsByClassName('.lang-buttons.active');
const allLang = ['#eng','#ru','#ua','#pl'];



const planLoading = () => {
  let imgHtmlPlan = document.createElement("img");
  let planBody = document.querySelector('.plan-img');
  if( window.innerWidth > 700 ){
    if( hash == '#ru'){
      imgHtmlPlan.setAttribute('class', 'plans ru-plan');
      imgHtmlPlan.setAttribute('src', "./img/plans/ru-plan.png");
      planBody.appendChild(imgHtmlPlan);
    }
    if( hash == '#eng'){
      imgHtmlPlan.setAttribute('class', 'plans eng-plan');
      imgHtmlPlan.setAttribute('src', "./img/plans/eng-plan.png");
      planBody.appendChild(imgHtmlPlan);
    }
    if( hash == '#ua'){
      imgHtmlPlan.setAttribute('class', 'plans ua-plan');
      imgHtmlPlan.setAttribute('src', "./img/plans/ukr-plan.png");
      planBody.appendChild(imgHtmlPlan);
    }
    if( hash == '#pl'){
      imgHtmlPlan.setAttribute('class', 'plans pl-plan');
      imgHtmlPlan.setAttribute('src', "./img/plans/pl-plan.png");
      planBody.appendChild(imgHtmlPlan);
    }
  }
  if( window.innerWidth <= 700 ){
    if( hash == '#ru'){
      imgHtmlPlan.setAttribute('class', 'plans ru-plan');
      imgHtmlPlan.setAttribute('src', "./img/plans/ru-phone-plan.png");
      planBody.appendChild(imgHtmlPlan);
    }
    if( hash == '#eng'){
      imgHtmlPlan.setAttribute('class', 'plans eng-plan');
      imgHtmlPlan.setAttribute('src', "./img/plans/eng-phone-plan.png");
      planBody.appendChild(imgHtmlPlan);
    }
    if( hash == '#ua'){
      imgHtmlPlan.setAttribute('class', 'plans ua-plan');
      imgHtmlPlan.setAttribute('src', "./img/plans/ukr-phone-plan.png");
      planBody.appendChild(imgHtmlPlan);
    }
    if( hash == '#pl'){
      imgHtmlPlan.setAttribute('class', 'plans pl-plan');
      imgHtmlPlan.setAttribute('src', "./img/plans/pl-phone-plan.png");
      planBody.appendChild(imgHtmlPlan);

    }
  }
};
planLoading();



$('a[href^="#"]').on('click',function (e) {
  e.preventDefault();

  var target = $(this.hash);
  $('html, body').stop().animate({
      'scrollTop': target.offset().top
  }, 0);
});

const riderectToHomePage= () => {
  const homePage = () => {window.location.href = 'foxpartner.pl'};
  setTimeout(homePage, 3000);
}

const thxMessage = () => {

  const thxMessagePattern = (thxLang) => {
    const thxPage = () => {window.location.href = `page/${thxLang}thx.html`};
    setTimeout(thxPage, 1000);
  }
  if( hash == '#ru'){
    const thxLang = 'ru-'
    thxMessagePattern(thxLang)
  }
  if( hash == '#eng'){
    const thxLang = 'eng-'
    thxMessagePattern(thxLang)
  }
  if( hash == '#ua'){
    const thxLang = 'ua-'
    thxMessagePattern(thxLang)
  }
  if( hash == '#pl'){
    const thxLang = 'pl-'
    thxMessagePattern(thxLang)
  }
  
}

const addCookieMessage = () => {
  $('body').addClass('lock');
  $('.cookie-popup').addClass('active');

}
$('.stand_lang').click(function (event) {
  $('.lang-buttons').toggleClass('active');
  $('.stand_lang').toggleClass('active');

});
$('.cookie-popup_approvebtn').click(function (event) {
  const dellCookiePopup = () => {$('.cookie-popup').addClass('dell')};
  $('.cookie-popup').removeClass('active');
  $('body').removeClass('lock');
  setTimeout( dellCookiePopup, 1000);
});

$('.lang').click(function (event) {
  $('.lang-buttons').removeClass('active');
  $('.stand_lang').removeClass('active');
});

$('.header_burger').click(function () {
  $('.header_burger, .header-menu, .stand_lang, .lang-buttons, .header-phone__link', ).toggleClass('actives');
  $('body').toggleClass('lock');
  $('html, body').animate({scrollTop:0}, '1000');
});
$('.menu__item').click(function () {
    $('.header_burger, .header-menu, .stand_lang, .lang-buttons ,.header-phone__link').removeClass('actives');
    $('body').removeClass('lock');
});

$('.hero-content__info-btn, .terms-inner__item_btn, .plan-btn, .position__wrapper-btn').click(function () {
  $('.popup').addClass('active');
  $('body').addClass('lock');
})
$('.popup__close').click(function () {
  $('.popup').removeClass('active');
  $('body').removeClass('lock');
});

$(document).on("click", function(e){
  let popupBack = $(e.target).attr("class");
  if( popupBack == 'popup__body'){
    $('.popup').removeClass('active');
    $('body').removeClass('lock');
  }
});



const dellPrealoader = () => {
  $('body').removeClass('lock');
  $('.prealoader').addClass('delPrelaoder');
}
const dellAllPrealoader = () => {
  $('.prealoader').addClass('preloaderDisplayNone');
}

setTimeout(dellPrealoader, 4600)
setTimeout(dellAllPrealoader, 5500)
setTimeout(addCookieMessage, 6200)

new Swiper(".review-slider", {
  slidesPerView: 3,

  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    1400 : {
      slidesPerView: 3,
    },
    700:{
      slidesPerView: 2,
    },
    200:{
      slidesPerView: 1,
    }
  },

});

// Fancybox4
Fancybox.bind('[data-fancybox="gallery"]');



document.addEventListener('click', function (e) {
  if (e.target.className == 'lang') {
    let actuallyValue = e.target.value;
    standL.innerHTML = `${actuallyValue.toUpperCase()}`,
    standL.setAttribute("value", `${e.target.value}`);
    location.href = window.location.pathname + `#${actuallyValue}`;
    localStorage.setItem('lang', `#${actuallyValue}`);
    location.reload();
  }
});

const changeLanguage = () =>{
  for(let key in langArr){
    document.querySelector('.lng-'+key).innerHTML = langArr[key][hash];
  }
  if(`#${standL.value}` != hash){
    cleanHash = hash.substr(1);
    standL.innerHTML = cleanHash.toUpperCase();
  };
  if(hash == '#pl'){
    $('.hero-content__titles').addClass('settings-plHeroTitle');
   
  };
  if(hash == '#eng'){
    $('.content__info-inscription_inner').addClass('settings-infoinscription');
    $('.content__info-inscription').addClass('settings-plInfoInscription');
  };
  
}



const startConfig = () =>{
  if(hash != '' && hash == '#ru' | hash == '#eng' | hash == '#ua' | hash == '#pl'){
    $('.chose-language').addClass('deactive');
  }
  if(!allLang.includes(hash)){
    let errGlobtitle = document.querySelector('.lng-globalTitle');
    let terms = document.querySelector('.terms');
    errGlobtitle.innerHTML = 'Fox Partner';
    terms.style.display = 'none';
  }
  if(hash == ''){
    if(localStorage.getItem('lang') !== null){
      location.href = window.location.pathname + `${localStorage.getItem('lang')}`;
      location.reload();
      $('.chose-language').addClass('deactive');
    }
  }
}





const reqBtn = document.querySelector('.popup__form-btn');

reqBtn.addEventListener('click', function(e){
  let cleanHash = hash.substr(1);
  e.preventDefault();
  $('.popup').removeClass('active');
  $('body').removeClass('lock');
  thxMessage();
  $('.formInput-lang').val(cleanHash.toUpperCase());
  const form = document.querySelector('.popup__form');
  let formData = new FormData(form);
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
       
      }
    }
  }

  xhr.open('POST', 'sendmail.php', true);
  xhr.send(formData);

});












const langArr = {
  'about':{
      "#eng": 'About Us',
      "#ru":'О нас',
      "#pl":'O nas',
      "#ua":'Про нас',
  },
  'advnatages':{
      "#eng": 'Advantages',
      "#ru":'Преимущества',
      "#pl":'Zalety',
      "#ua":'Переваги',
  },
  'terms':{
      "#eng": 'Terms',
      "#ru":'Условия',
      "#pl":'Warunki',
      "#ua":'Умови',
  },
  'partnership':{
      "#eng": 'Partnership',
      "#ru":'Сотрудничество',
      "#pl":'Współpraca',
      "#ua":'Співпраця',
  },
  'reviews':{
      "#eng": 'Reviews',
      "#ru":'Отзывы',
      "#pl":'Recenzji',
      "#ua":'Відгуки',
  },
  'h2FirstStart':{
    "#eng": 'START <span>WORKING</span> <br> as a courier or driver <br> in Poland',
    "#ru":'начните <span>работу</span> <br> курьером или водителем <br> в польше',
    "#pl":'Rozpocznij <span>pracę</span> <br> jako kurier lub kierowca <br> w Polsce',
    "#ua":"Почніть <span>роботу</span> <br> кур'єром або водієм <br> в Польщі",
  },
  'phero':{
    "#eng": 'With a premium partner and get your first payout on the next day',
    "#ru":'С премиум-партнёром и уже на следующий день получите первую выплату',
    "#pl":'Z partnerem premium i otrzymaj pierwszą wypłatę już następnego dnia',
    "#ua":'З преміум-партнером і вже наступного дня отримайте першу виплату',
  },
  'inscriptionhero':{
    "#eng": 'The first week of working with',
    "#ru":'Первая неделя работы с',
    "#pl":'Pierwszy tydzień pracy z',
    "#ua":'Перший тиждень роботи з',
  },
  'inscriptionherofox':{
    "#eng": '&nbspFOX PARTNER with no commission',
    "#ru":'&nbspFOX PARTNER без комиссии',
    "#pl":'&nbspFOX PARTNER bez prowizji',
    "#ua":'&nbspFOX PARTNER без комісії',
  },
  'requestBtn':{
    "#eng": 'GET STARTED',
    "#ru":'НАЧАТЬ РАБОТУ',
    "#pl":'APLIKUJ',
    "#ua":'почати роботу',
  },
  'benefitsTitle':{
    "#eng": 'BENEFITS OF WORKING WITH FOX PARTNER',
    "#ru":'ПРЕИМУЩЕСТВА РАБОТЫ С FOX PARTNER',
    "#pl":'Dlaczego warto z nami pracować?',
    "#ua":'ПЕРЕВАГИ СПІВПРАЦІ З FOX PARTNER',
  },
  'benefitsFirstGrath':{
    "#eng": 'The possibility of obtaining insurance for your car',
    "#ru":'Возможность получения страховки на ваше авто',
    "#pl":'Możliwość uzyskania ubezpieczenia samochodu',
    "#ua":'Можливість отримання страховки на ваше авто',
  },
  'benefitsSecondGrath':{
    "#eng": 'Fast, responsible and live support, no bots and long waits',
    "#ru":'Быстрая, ответственная и живая поддержка, никаких ботов и долгих ожиданий',
    "#pl":'Szybki i odpowiedzialny support, bez botów i długiego oczekiwania',
    "#ua":'Швидка, відповідальна та жива підтримка, жодних ботів та довгих очікувань',
  },
  'benefitsThreeGrath':{
    "#eng": 'Timely and stable payments with a choice: daily or weekly',
    "#ru":'Своевременные и стабильные выплаты с возможностью выбора: ежедневно или еженедельно',
    "#pl":'Stałe i stabilne wypłaty z możliwością wyboru: dzienne lub tygodniowe',
    "#ua":'Своєчасні та стабільні виплати: щоденні або щотижневі',
  },
  'benefitsLastGrath':{
    "#eng": 'The best referral campaigns for attracting new drivers and couriers',
    "#ru":'Лучшие денежные вознаграждения на рынке за привлечение новых водителей и курьеров',
    "#pl":'Najlepsze bonusy za zaproszenie znajomych kierowców i kurierów!',
    "#ua":"Найкращі грошові бонуси на ринку за запрошення нових водіїв та кур'єрів",
  },
  'partnersGrath':{
    "#eng": ' is a partner among the best delivery and taxi companies. ',
    "#ru":' является партнёром между Вами и лучшими компаниями доставки и такси. ',
    "#pl":' to partner pomiędzy Tobą a najlepszymi firmami dostawy i taksi.',
    "#ua":" є партнером між Вами та найкращими компаніями доставки та таксі.",
  },
  'partnersInfoGrath':{
    "#eng": 'We have taken the leading position in this industry in Ukraine and are widely known for the best terms of cooperation.',
    "#ru":'Партнер известен тем, что занял лидерскую позицию на рынке Украины с лучшими условиями сотрудничества.',
    "#pl":'Zajęliśmy wiodącą pozycję w tej branży na terenie Ukrainy i jesteśmy znani z najlepszych warunków współpracy',
    "#ua":"Партнер відомий тим, що посів лідерську позицію на ринку України з найкращими умовами співпраці.",
  },
  'partnersAge':{
    "#eng": 'years',
    "#ru":'года',
    "#pl":'lat',
    "#ua":"років",
  },
  'partnersCitys':{
    "#eng": 'cities',
    "#ru":'городов',
    "#pl":'miast',
    "#ua":"міст",
  },
  'partnersClients':{
    "#eng": 'customers',
    "#ru":'клиентов',
    "#pl":'klientów',
    "#ua":"клієнтів",
  },
  'requirementsTitle':{
    "#eng": 'job requirements',
    "#ru":'требования для работы',
    "#pl":'wymagania do pracy',
    "#ua":"вимоги до роботи",
  },
  'requirementsInternetTitle':{
    "#eng": 'Internet',
    "#ru":'интернет',
    "#pl":'Internet',
    "#ua":"Інтернет",
  },
  'requirementsInternetGrath':{
    "#eng": 'Having a device with stable Internet access',
    "#ru":'Иметь устройство со стабильным доступом в Интернет',
    "#pl":'Posiadanie urządzenia za stabilnym dostępem do Internetu',
    "#ua":"Мати пристрій зі стабільним доступом до Інтернету",
  },
  'requirementsDocTitle':{
    "#eng": 'documents',
    "#ru":'документы',
    "#pl":'dokumenty',
    "#ua":"документи",
  },
  'requirementsDocGrath':{
    "#eng": "Having a driver's license (*for those using cars)",
    "#ru":'Иметь водительское удостоверение (*для использующих авто)',
    "#pl":'Posiadanie prawa jazdy (*dla osób jeżdżących samochodem)',
    "#ua":"Мати посвідчення водія (*для тих, хто використовує авто)",
  },
  'requirementsAgeGrath':{
    "#eng": "Age",
    "#ru":'Возраст',
    "#pl":'Wiek',
    "#ua":"Вік",
  },
  'requirementsAgeGrathTaxiTitle':{
    "#eng": "Taxi: ",
    "#ru":'Такси: ',
    "#pl":'Taxi: ',
    "#ua":"Таксі: ",
  },
  'requirementsAgeGrathTaxiGrath':{
    "#eng": "20+ years and at least a year of driving experience",
    "#ru":'20+ лет и минимум год стажа вождения',
    "#pl":'20+ lat i co najmniej rok doświadczenia w prowadzeniu samochodu',
    "#ua":"20+ років і мінімум рік стажу водіння",
  },
  'requirementsAgeGrathDiliveryTitle':{
    "#eng": "Delivery: ",
    "#ru":'Доставка: ',
    "#pl":'Dostawa: ',
    "#ua":"Доставка: ",
  },
  'requirementsAgeGrathDiliveryGrath':{
    "#eng": "18+ years on any transport",
    "#ru":'18+ лет на любом транспорте и любых платформах ',
    "#pl":'18+ lat na dowolnym transporcie',
    "#ua":"18+ років на будь-якому транспорті та будь-яких платформах",
  },
  'requirementsPayTitle':{
    "#eng": "Payment",
    "#ru":'Оплата',
    "#pl":'wypłata',
    "#ua":"Оплата",
  },
  'requirementsPayGrah':{
    "#eng": "You will be able to receive payment on the next day after signing the contracts. - Everything is fast and without extra commissions.",
    "#ru":'Получить оплату вы сможете уже на следующий день после подписания договоров. - Все быстро и без лишних комиссий.',
    "#pl":'Wypłatę będziesz mógł otrzymać już następnego dnia po podpisaniu umowy. - Wszystko odbywa się szybko i bez dodatkowych prowizji.',
    "#ua":"Отримати оплату ви зможете вже наступного дня після підписання договорів. - Все швидко та без зайвих комісій.",
  },
  'termsTitle':{
    "#eng": "TERMS OF COOPERATION",
    "#ru":'УСЛОВИЯ СОТРУДНИЧЕСТВА',
    "#pl":'WARUNKI WSPÓŁPRACY',
    "#ua":"УМОВИ СПІВПРАЦІ",
  },
  'termsSubTitle':{
    "#eng": "Only You decide how often you receive your salary:",
    "#ru":'Только вам выбирать, когда получать выплаты: ',
    "#pl":'Tylko Ty decydujesz, jak często będziesz otrzymywał wypłatę:',
    "#ua":"Тільки вам вибирати, коли отримувати виплати:",
  },
  'termsPremTitle':{
    "#eng": "weekly",
    "#ru":'еженедельно',
    "#pl":'Tygodniowe',
    "#ua":"щотижня",
  },
  'termsJustTitle':{
    "#eng": "daily",
    "#ru":'ежедневно',
    "#pl":'dzienne',
    "#ua":"щодня",
  },
  'termsTitlePremTaxi':{
    "#eng": "Taxi",
    "#ru":'Такси',
    "#pl":'Taxi',
    "#ua":"Таксі",
  },
  'termsTitleJustTaxi':{
    "#eng": "Taxi",
    "#ru":'Такси',
    "#pl":'Taxi',
    "#ua":"Таксі",
  },
  'termsGrathTaxiPremTaxi':{
    "#eng": "weekly commission",
    "#ru":'Комиссия в неделю',
    "#pl":'Tygodniowa prowizja',
    "#ua":"Комісія на тиждень",
  },
  'termsGrathDiliveryPremTaxi':{
    "#eng": "weekly commission",
    "#ru":'Комиссия в неделю',
    "#pl":'Tygodniowa prowizja',
    "#ua":"Комісія на тиждень",
  },
  'termsGrathTaxiJustTaxi':{
    "#eng": "weekly commission",
    "#ru":'Комиссия в неделю',
    "#pl":'Tygodniowa prowizja',
    "#ua":"Комісія на тиждень",
  },
  'termsGrathDiliveryJustTaxi':{
    "#eng": "weekly commission",
    "#ru":'Комиссия в неделю',
    "#pl":'Tygodniowa prowizja',
    "#ua":"Комісія на тиждень",
  },
  'termsTitlePremDilivery':{
    "#eng": "delivery",
    "#ru":'доставка',
    "#pl":'dostawa',
    "#ua":"доставка",
  },
  'termsTitleJustDilivery':{
    "#eng": "delivery",
    "#ru":'доставка',
    "#pl":'dostawa',
    "#ua":"доставка",
  },
  'termsPremTitleBtn':{
    "#eng": "get started",
    "#ru":'начать работу',
    "#pl":'aplikuj',
    "#ua":"почати роботу",
  },
  'planBtn':{
    "#eng": "get started",
    "#ru":'начать работу',
    "#pl":'aplikuj',
    "#ua":"почати роботу",
  },
  'termsJustTitleBtn':{
    "#eng": "get started",
    "#ru":'начать работу',
    "#pl":'aplikuj',
    "#ua":"почати роботу",
  },
  'planTitle':{
    "#eng": "Step by step cooperation plan",
    "#ru":'Пошаговый план сотрудничества',
    "#pl":'Plan współpracy krok po kroku',
    "#ua":"Покроковий план співробітництва",
  },
  'termsGrath':{
    "#eng": "We strongly recommend you to open a PKO bank account, because with it you will receive daily payments even on weekends",
    "#ru":'Для получения заработка на выходных при ежедневной выплате советуем иметь банковский счёт в PKO',
    "#pl":'Zalecamy założyć konto bankowe w PKO Bank Polski, aby otrzymywać dzienne wypłaty w weekendy i święta',
    "#ua":"Для отримання заробітку на вихідних при щоденній виплаті радимо мати банківський рахунок у PKO",
  },
  'reviewsTitle':{
    "#eng": "what our clients say about us",
    "#ru":'что говорят о нас клиенты',
    "#pl":'Opinie naszych klientów',
    "#ua":"що говорять про нас наші клієнти",
  },
  'positionTitleFirst':{
    "#eng": "WE SERVE",
    "#ru":'МЫ ОБСЛУЖИВАЕМ',
    "#pl":'Obsługujemy',
    "#ua":"МИ ОБСЛУГОВУЄМО",
  },
  'positionTitleSecond':{
    "#eng": "8 CITIES",
    "#ru":'8 ГОРОДОВ',
    "#pl":'8 MIAST',
    "#ua":"8 МІСТ",
  },
  'positionGrath':{
    "#eng": "+36 cities in Uber Eats",
    "#ru":'+36 городов в Uber Eats',
    "#pl":'+36 miast w Uber Eats',
    "#ua":"+36 міст в Uber Eats",
  },
  'positionBtn':{
    "#eng": "get started",
    "#ru":'начать работу',
    "#pl":'aplikuj',
    "#ua":"почати роботу",
  },
  'policy':{
    "#eng": "PRIVACY POLICY",
    "#ru":'ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ',
    "#pl":'POLITYKA PRYWATNOŚCI',
    "#ua":"ПОЛІТИКА КОНФІДЕНЦІАЛЬНОСТІ",
  },
  'popupTitle':{
    "#eng": "Fill the application",
    "#ru":'Заполните форму',
    "#pl":'Wypełnij formularz',
    "#ua":"Заповніть форму",
  },
  'popupGrath':{
    "#eng": "We will discuss all the conditions in more detail, help in preparing all the necessary documentation and you will get to work as quickly as possible.",
    "#ru":'Обсудим все условия подробнее, поможем в оформлении всей необходимой документации и максимально быстро приступить к работе.',
    "#pl":'Dokładnie omówimy wszystkie warunki, pomożemy w przygotowaniu całej niezbędnej dokumentacji, aby jaknajszybciej przystąpić do pracy.',
    "#ua":"Обговоримо всі умови докладніше, допоможемо в оформленні всієї необхідної документації та максимально швидко розпочати роботу.",
  },
  'popupSubstring':{
    "#eng": "First week of work with FOX PARTNER for free",
    "#ru":'Первая неделя работы с FOX PARTNER бесплатно',
    "#pl":'Pierwszy tydzień pracy z FOX PARTNER gratis',
    "#ua":"Перший тиждень роботи з FOX PARTNER безкоштовно",
  },
  'popupName':{
    "#eng": "Name: ",
    "#ru":'Имя: ',
    "#pl":'Imię: ',
    "#ua":"Iм'я: ",
  },
  'popupNumber':{
    "#eng": "Phone number:",
    "#ru":'Номер:',
    "#pl":'Numer: ',
    "#ua":"Ваш номер: ",
  },
  'popupOk':{
    "#eng": "I confirm that I have read &nbsp",
    "#ru":'Подтверждаю, что ознакомился с &nbsp',
    "#pl":'Oświadczam, źe zapoznałem się z &nbsp',
    "#ua":"Підтверджую, що ознайомився з &nbsp",
  },
  'popupOkEnter':{
    "#eng": "website www.foxpartner.pl and accept them *",
    "#ru":'веб-сайта www.foxpartner.pl и принимаю их *',
    "#pl":'serwisu internetowego www.foxpartner.pl oraz akceptuję ich treść *',
    "#ua":"веб-сайту www.foxpartner.pl та приймаю їх *",
  },
  'popupBtn':{
    "#eng": "Contact me",
    "#ru":'Cвяжитесь со мной',
    "#pl":'Skontaktuj się ze mną',
    "#ua":"Зателефонуйте мені",
  },
  'invalidMessageTitle':{
    "#eng": "Phone number error",
    "#ru":'Ошибка номера телефона',
    "#pl":'Błąd numeru telefonu',
    "#ua":"Помилка номера телефону",
  },
  'invalidMessageGrath':{
    "#eng": "Please enter the correct phone number format (+380 / +48)",
    "#ru":'Пожалуйста ,введите номер телефона в правильном формате (+380 / +48) ',
    "#pl":'Proszę podać poprawny numer telefonu format (+380 / +48)',
    "#ua":"Введіть номер телефону у правильному форматі (+380/+48)",
  },
  // 'thxPopupTitle':{
  //   "#eng": "Thanks for contacting !",
  //   "#ru":'Cпасибо за обращение !',
  //   "#pl":'Dzięki za skierowanie !',
  //   "#ua":"Дякуємо за звернення !",
  // },
  // 'thxPopupGrath':{
  //   "#eng": "Manager is already waiting for you in the chat",
  //   "#ru":'Наш менеджер уже вас ждет в чате',
  //   "#pl":'Nasz menedżer już czeka na Ciebie na czacie',
  //   "#ua":"Наш менеджер вже на вас чекає в чаті",
  // },
  'nowpricefirstprem':{
    "#eng": "50 pln",
    "#ru":'50 zł',
    "#pl":'50 zł',
    "#ua":"50 zł",
  },
  'nowpricesecondprem':{
    "#eng": "30 pln",
    "#ru":'30 zł',
    "#pl":'30 zł',
    "#ua":"30 zł",
  },
  'nowpricefirstjust':{
    "#eng": "50 pln",
    "#ru":'50 zł',
    "#pl":'50 zł',
    "#ua":"50 zł",
  },
  'nowpricesecondjust':{
    "#eng": "30 pln",
    "#ru":'30 zł',
    "#pl":'30 zł',
    "#ua":"30 zł",
  },
  'prevpricefirst':{
    "#eng": "140 pln",
    "#ru":'140 zł',
    "#pl":'140 zł',
    "#ua":"140 zł",
  },
  'prevpricesecond':{
    "#eng": "110 pln",
    "#ru":'110 zł',
    "#pl":'110 zł',
    "#ua":"110 zł",
  },
  'citywarshava':{
    "#eng": "Warsaw",
    "#ru":'Варшава',
    "#pl":'Warszawa',
    "#ua":"Варшава",
  },
  'citykrakow':{
    "#eng": "Crakow",
    "#ru":'Краков',
    "#pl":'Kraków',
    "#ua":"Краков",
  },
  'citytrojmiasto':{
    "#eng": "Tricity",
    "#ru":'Труймясто',
    "#pl":'Trójmiasto',
    "#ua":"Труймясто",
  },
  'citylodz':{
    "#eng": "Lodz",
    "#ru":'Лодзь',
    "#pl":'Łódź',
    "#ua":"Лодзь",
  },
  'citypoznan':{
    "#eng": "Poznan",
    "#ru":'Познань',
    "#pl":'Poznań',
    "#ua":"Познань",
  },
  'citywroclaw':{
    "#eng": "Wroclaw",
    "#ru":'Вроцлав',
    "#pl":'Wrocław',
    "#ua":"Вроцлав",
  },
  'citykatowice':{
    "#eng": "Katowice",
    "#ru":'Катовице',
    "#pl":'Katowice',
    "#ua":"Катовице",
  },
  'cityshecin':{
    "#eng": "Szczecin",
    "#ru":'Щецин',
    "#pl":'Szczecin',
    "#ua":"Щецин",
  },
  'benefitsLastSecondGrath':{
    "#eng": "The possibility of obtaining taxi driver’s ID and a license for your car",
    "#ru":'Возможность получения идентификатора и лицензии на автомобиль',
    "#pl":'Możliwość uzyskania identyfikatora kierowcy oraz wypisu z licencji taxi',
    "#ua":"Можливість отримання ідентифікатора та ліцензії на автомобіль",
  },
  'checkboxsecond':{
    "#eng": "I agree to receive marketing content from Enimal sp. z o.o. using telecommunications terminal equipment of which I am a user, in particular to the telephone number provided by me. *",
    "#ru":'Я согласен получать маркетинговые материалы от Enimal sp.z o.o. используя терминальное телекоммуникационное оборудование, пользователем которого я являюсь, в частности, на предоставленный мной номер телефона. *',
    "#pl":'Wyrażam zgodę na przekazywanie mi treści marketingowych Enimal sp. z o.o. za pomocą telekomunikacyjnych urządzeń końcowych, których jestem użytkownikiem, w szczególności na podany przeze mnie numer telefonu. *',
    "#ua":"Я погоджуюся отримувати маркетинговий контент від Enimal sp. z o.o. за допомогою телекомунікаційного кінцевого обладнання, користувачем якого я є, зокрема на наданий мною номер телефону. *",
  },
  'cookieTitle':{
    "#eng": "By browsing this site, you agree to our &nbsp",
    "#ru":'Просматривая этот сайт, вы соглашаетесь с нашей &nbsp',
    "#pl":'Przeglądając tę   stronę, zgadzasz się z naszą &nbsp',
    "#ua":"Переглядаючи цей сайт, ви погоджуєтесь з нашою &nbsp",
  },
  'cookiePolicy':{
    "#eng": "privacy policy &nbsp",
    "#ru":'политикой конфиденциальности &nbsp',
    "#pl":'polityką prywatności &nbsp',
    "#ua":"політикою конфіденційності &nbsp",
  },
  // 'metaDiscriptions':{
  //   "#eng": 'Work in Poland for taxi driver’s and couriers. Cooperation with Uber, Uber Eats, Bolt, Bolt Food, Free Now with daily payouts.The first week of partnership is with no commission.',
  //   "#ru":'Работа в Польше для водителей и курьеров. Подключение к Uber, Uber Eats, Bolt, Bolt Food, FreeNow с ежедневными выплатами. Первая неделя работы без комиссии.',
  //   "#pl":'Praca w Polsce dla kierowców taxi i kurierów. Podpięcie pod Uber, Uber Eats, Bolt, Bolt Food, Free Now z możliwością codziennych wypłat. Pierwszy tydzień bez prowizji.',
  //   "#ua":'Робота в Польщі для водіїв і кур’єрів. Підключення до Uber, Uber Eats, Bolt, Bolt Food, Free Now з можливістю щоденних виплат. Перший тиждень роботи без комісії. ',
  // },
  'globalTitle':{
    "":"Fox Partner — партнёр для работы водителем, курьером в Польше.",
    "#eng": "Fox Partner — a fleet partner for work as a taxi driver or courier in Poland. ",
    "#ru":'Fox Partner — партнёр для работы водителем, курьером в Польше.',
    "#pl":'Fox Partner — partner flotowy dla pracy jako kierowca taxi lub kurier w Polsce.',
    "#ua":"Fox Partner — партнер для роботи водієм, кур’єром в Польщі. ",
  },
};



const changeMetaDiscription = () =>{
  let metaDiscription = document.querySelector('meta[name="description"]');
  if( hash == "#ru"){
    metaDiscription.setAttribute("content", 'Работа в Польше для водителей и курьеров. Подключение к Uber, Uber Eats, Bolt, Bolt Food, FreeNow с ежедневными выплатами. Первая неделя работы без комиссии.')
  }
  if( hash == "#pl"){
    const plVideoList = [
      'https://youtu.be/G1bDrNfBUbg',
      'https://youtu.be/AIFF_uYlMB0',
      'https://youtu.be/LXtGU-CHUIA',
      'https://youtu.be/139kEBO6uO4',
      'https://youtu.be/GT0Viqyv1Kc',
    ];
    const plVideoWlpList = [
      './img/video-wlp/0pl-wl.webp',
      './img/video-wlp/1pl-wl.webp',
      './img/video-wlp/2pl-wl.webp',
      './img/video-wlp/3pl-wl.webp',
      './img/video-wlp/4pl-wl.webp'
    ];
    let videoList = plVideoList;
    let videoWlpList = plVideoWlpList;
    changeVideo(videoList, videoWlpList);
    metaDiscription.setAttribute("content", 'Praca w Polsce dla kierowców taxi i kurierów. Podpięcie pod Uber, Uber Eats, Bolt, Bolt Food, Free Now z możliwością codziennych wypłat. Pierwszy tydzień bez prowizji.')
  }
  if( hash == "#eng"){
    const engVideoList = [
      'https://youtu.be/8tyc_OAhkw8',
      'https://youtu.be/k2dnWmk6DOs',
      'https://youtu.be/AltbSEvd8gc',
      'https://youtu.be/q2bXx9ebyoA',
      'https://youtu.be/eUCZnLxTicU'
    ];
    const engVideoWlpList = [
      './img/video-wlp/0eng-wl.webp',
      './img/video-wlp/1eng-wl.webp',
      './img/video-wlp/2eng-wl.webp',
      './img/video-wlp/3eng-wl.webp',
      './img/video-wlp/4eng-wl.webp'
    ];
    let videoList = engVideoList;
    let videoWlpList = engVideoWlpList;
    changeVideo(videoList, videoWlpList);
    metaDiscription.setAttribute("content", 'Work in Poland for taxi driver’s and couriers. Cooperation with Uber, Uber Eats, Bolt, Bolt Food, Free Now with daily payouts.The first week of partnership is with no commission.');
  }
  if( hash == "#ua"){
    metaDiscription.setAttribute("content", 'Робота в Польщі для водіїв і кур’єрів. Підключення до Uber, Uber Eats, Bolt, Bolt Food, Free Now з можливістю щоденних виплат. Перший тиждень роботи без комісії.')
  }
}


const changeVideo = (videoList, videoWlpList) => {
  let count = 0;
  while( count != videoList.length){
    let stringCount = String(count);
    let galleryItem = document.querySelector(`.gallery__item-${stringCount}`);
    let galleryItemImg = document.querySelector(`.gallery__img-${stringCount}`);
    galleryItem.setAttribute("href", `${videoList[count]}`);
    galleryItemImg.setAttribute("src", `${videoWlpList[count]}`);
    count += 1;
  };
}



changeMetaDiscription();
changeLanguage();
startConfig();



