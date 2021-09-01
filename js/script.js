
const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__raitings_counter'),
      lines = document.querySelectorAll('.skills__raitings_line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

$(document).ready(function(){
   
    $('.modal__close').on('click', function() {
        $('.overlay, #thanks').fadeOut('slow');
    });

    $('#form').submit(function(e){
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('.overlay, #thanks').fadeIn();
            $('#form').trigger('reset');
            
        });
        return false;
    });
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });
    
    $("a[href=#up]").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    new WOW().init();
});


const langArr = {
    "ru" : {
        "name" : "Меня зовут Айгерим Зинуллина",
        "country" : "Я web-разработчик из Италии",
        "portfolio" : "Портфолио",
        "aboutMe" : "Про меня",
        "social" : "Социальные сети",
        "experience" : "Мой Опыт",
        "skills" : "Мои Навыки",
        "contacts" : "Контакты",
        "firstName" : "Меня зовут Айгерим",
        "about" : "Я активно развивающийся frontend разработчик. Занимаюсь любимым делом с 2020 года. Максимально точно воплощаю макет, полученный от дизайнера. Мои основные услуги - верстка многостраничных сайтов, веб-сайта компании, сайта-визитки, интернет-магазина, landing page. Выполню адаптивную, валидную верстку сайта по Вашему макету. Мои навыки:",
        "nativeJS" : "Нативный JavaScript",
        "cross" : "Верстаю адаптивно и стараюсь придерживаться кроссбраурзности",
        "layout" : "Верстаю макеты любой сложности",
        "education": "Образование",
        "useful" : "Чем я буду полезна",
        "degree" : "Диплом бакалавриата | Пекин (2012-2017)",
        "degreeDescr" : "Обучалась в Пекине на кафедре Международная торговля и экономика на протяжении пяти лет, обучение проходило на китайском языке. В следствии чего отлично знаю китайский и английский языки.",
        "udemy" : "Курсы по Web-разработке(2020-2021)",
        "udemyDescr" : "Веб-разработке начала обучаться в начале 2020 года, у практикующего Full sctack разработчика Ивана Петриченко. Также паралелльно проходила обучение верстке в университете Джона Хопкинса.",
        "professionalism" : "Профессионализм",
        "adaptive" : "Адаптивность",
        "adaptiveDescr" : "Сайт, адаптированный под все мобильные устройства.",
        "quality" : "Качество",
        "qualityDescr" : "Качественное отображение своего сайта в любом браузере.",
        "coding" : "Верстка макета сайта любой сложности",
        "codingDescr" : "Многостраничный сайт, веб-сайт компании, сайт-визитка, интернет-магазин, landing page.",
        "use" : "Что я использую в работе",
        "html" : "Именно он создает каркас вашего сайта или приложения, а пятая версия позволит мне создавать более SEO-оптимизированную структуру вашего продукта",
        "css" : "Язык, который отвечает за описание внешнего вида HTML-документа. Подавляющее большинство современных веб-сайтов работают на основе связки HTML+CSS.",
        "JS" : "Этот язык программирования позволяет оживить все что угодно: слайдеры, окна, подсказки, вкладки, получение данных от сервера и многое другое.",
        "other" : "И многое другое",
        "otherDescr" : "Множество других разных библиотек и фреймворков.",
        "codingSites" : "Создание сайтов",
        "codingApp" : "Создание приложений",
        "data" : "Работа с данными",
        "creativity" : "Креативность",
        "design" : "Создание дизайна",
        "websites" : "Мои работы",
        "certificates" : "Сертификаты",
        "contactMe" : "Свяжитесь со мной",
        "way" : "Любым удобным для вас способом:",
        "myself" : "Или оставьте ваши данные и я сама вам напишу:",
        "yourName" : "Ваше имя",
        "yourEmail" : "Ваша почта",
        "yourMessage" : "Ваше сообщение",
        "send" : "Отправить",
        "agreement" : "Я согласен(а) с ",
        "confidential" : "политикой конфиденциальности"
    },
    "en" : {
        "name" : "My name is Aigerim Zinullina",
        "country" : "I am a web-developer from Italy",
        "portfolio" : "Portfolio",
        "aboutMe" : "About Me",
        "social" : "Social Network",
        "experience" : "Experience",
        "skills" : "Skills",
        "contacts" : "Contacts",
        "firstName" : "My name is Aigerim",
        "about" : "I am an actively growing frontend developer. I have been doing what I love since 2020. I embody the layout received from a designer as accurately as possible. My main services are layout of multi-page sites, company websites, business sites, online store sites, landing pages. I will perform an adaptive, valid layout of the site according to your design. My skills:",
        "nativeJS" : "Native JavaScript",
        "cross" : "I code adaptive and try to be cross-browser friendly",
        "layout" : "Code designs of any complexity",
        "education": "Education",
        "useful" : "How I will be useful",
        "degree" : "Bachelor's degree | Beijing (2012-2017)",
        "degreeDescr" : "I studied in Beijing at the Department of International Trade and Economics for five years, the studying was in Chinese. As a result, I know Chinese and English perfectly.",
        "udemy" : "Web Development Courses (2021-2021)",
        "udemyDescr" : "I began my training in web development in 2020 with Ivan Petrichenko, a practicing Full Stack developer. I also studied front-end development at the Johns Hopkins University in parallel.",
        "professionalism" : "Professionalism",
        "adaptive" : " Adaptive Web Design",
        "adaptiveDescr" : "Each site will be adapted for all mobile devices.",
        "quality" : "Quality",
        "qualityDescr" : "High-quality display of your site in any browser.",
        "coding" : "Coding website layout of any complexity",
        "codingDescr" : "Multi-page websites, company websites, business websites, online store pages, landing pages.",
        "use" : "What I use at work",
        "html" : "HTML creates the skeleton of your site or application, and the fifth version will allow me to create a more SEO-optimized structure of your product.",
        "css" : "A language that is responsible for describing the appearance of an HTML document. The vast majority of modern websites are based on a combination of HTML + CSS.",
        "JS" : "This programming language allows you to bring anything to life: sliders, windows, tooltips, tabs, getting data from the server and much more.",
        "other" : "And many more",
        "otherDescr" : "Many other libraries and frameworks",
        "codingSites" : "Website development",
        "codingApp" : "App development",
        "data" : "Work with Data",
        "creativity" : "Creativity",
        "design" : "Design creation",
        "websites" : "Examples of my work",
        "certificates" : "Certificates",
        "contactMe" : "Get in touch with me",
        "way" : "In any way convenient for you:",
        "myself" : "Or simply leave your details and I will contact you myself:",
        "yourName" : "Your Name",
        "yourEmail" : "Your Email",
        "yourMessage" : "Message",
        "send" : "Send",
        "agreement" : "I agree with",
        "confidential" : "the privacy policy"
    }
};

$(function() {
    $('.language__button').click(function() {
        let lang = $(this).attr('id');

        $('.lang').each(function(index, item) {
            $(this).text(langArr[lang][$(this).attr('key')]);
        });
    });
});