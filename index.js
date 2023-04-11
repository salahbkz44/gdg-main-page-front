

let query=window.matchMedia("(max-width:767px)");
if(query.matches)
{
    $('.home').click(function () {
        $('.click').animate({ left: '4.5vw', bottom: '-0.7vw' })
        home()
    })
    $('.event').click(function () {
        $('.click').animate({ left: '19.5vw', bottom: '-0.7vw' })
        events()

    })
    $('.contact').click(function () {
        $('.click').animate({ left: '34.5vw', bottom: '-0.7vw' })

        contact()

    })
    $('.heart').click(function () {
        $('.click').animate({ left: '49.5vw',bottom:'-0.7vw'})
        heart()

    })
    function home() {
        $('.home').attr("class", "clicked home nav-links");
        $('.heart').attr("class", "heart nav-links");
        $('.event').attr("class", "event nav-links");
        $('.contact').attr("class", "contact nav-links");
        $('.home img').attr("src", "images/home-icon-white.png")
        $('.event img').attr("src", "images/event-icon-blue.png")
        $('.contact img').attr("src", "images/contact-icon-blue.png")
        $('.heart img').attr("src", "images/heart-icon-blue.png")
    }
    function events() {
        $('.event').attr("class", "clicked event nav-links");
        $('.heart').attr("class", "heart nav-links");
        $('.contact').attr("class", "contact nav-links");
        $('.home').attr("class", "home nav-links");
        $('.home img').attr("src", "images/home-icon-blue.png")
        $('.event img').attr("src", "images/event-icon-white.png")
        $('.contact img').attr("src", "images/contact-icon-blue.png")
        $('.heart img').attr("src", "images/heart-icon-blue.png")
    }

    function contact() {
        $('.contact').attr("class", "clicked contact nav-links");
        $('.heart').attr("class", "heart nav-links");
        $('.event').attr("class", "event nav-links");
        $('.home').attr("class", "home nav-links");
        $('.home img').attr("src", "images/home-icon-blue.png")
        $('.event img').attr("src", "images/event-icon-blue.png")
        $('.contact img').attr("src", "images/contact-icon-white.png")
        $('.heart img').attr("src", "images/heart-icon-blue.png")
    }

    function heart() {
        $('.heart').attr("class", "clicked heart nav-links");
        $('.event').attr("class", "event nav-links");
        $('.contact').attr("class", "contact nav-links");
        $('.home').attr("class", "home nav-links");
        $('.home img').attr("src", "images/home-icon-blue.png")
        $('.event img').attr("src", "images/event-icon-blue.png")
        $('.contact img').attr("src", "images/contact-icon-blue.png")
        $('.heart img').attr("src", "images/heart-icon-white.png")
    }
}else{
    $('.home').click(function () {
        $('.click').animate({ top: '203px', height: '50px', width: '50px', left: '25px' })
        home()
    })
    $('.event').click(function () {
        $('.click').animate({ top: '300px', height: '50px', width: '50px', left: '25px' })
        events()

    })
    $('.contact').click(function () {
        $('.click').animate({ top: '390px', height: '60px', width: '60px', left: '20px' })

        contact()

    })
    $('.heart').click(function () {
        $('.click').animate({ top: '486px', height: '60px', width: '60px', left: '20px' })
        heart()

    })
    function home() {
        $('.home').attr("class", "clicked home nav-links");
        $('.heart').attr("class", "heart nav-links");
        $('.event').attr("class", "event nav-links");
        $('.contact').attr("class", "contact nav-links");
        $('.home img').attr("src", "images/home-icon-white.png")
        $('.event img').attr("src", "images/event-icon-blue.png")
        $('.contact img').attr("src", "images/contact-icon-blue.png")
        $('.heart img').attr("src", "images/heart-icon-blue.png")
    }
    function events() {
        $('.event').attr("class", "clicked event nav-links");
        $('.heart').attr("class", "heart nav-links");
        $('.contact').attr("class", "contact nav-links");
        $('.home').attr("class", "home nav-links");
        $('.home img').attr("src", "images/home-icon-blue.png")
        $('.event img').attr("src", "images/event-icon-white.png")
        $('.contact img').attr("src", "images/contact-icon-blue.png")
        $('.heart img').attr("src", "images/heart-icon-blue.png")
    }

    function contact() {
        $('.contact').attr("class", "clicked contact nav-links");
        $('.heart').attr("class", "heart nav-links");
        $('.event').attr("class", "event nav-links");
        $('.home').attr("class", "home nav-links");
        $('.home img').attr("src", "images/home-icon-blue.png")
        $('.event img').attr("src", "images/event-icon-blue.png")
        $('.contact img').attr("src", "images/contact-icon-white.png")
        $('.heart img').attr("src", "images/heart-icon-blue.png")
    }

    function heart() {
        $('.heart').attr("class", "clicked heart nav-links");
        $('.event').attr("class", "event nav-links");
        $('.contact').attr("class", "contact nav-links");
        $('.home').attr("class", "home nav-links");
        $('.home img').attr("src", "images/home-icon-blue.png")
        $('.event img').attr("src", "images/event-icon-blue.png")
        $('.contact img').attr("src", "images/contact-icon-blue.png")
        $('.heart img').attr("src", "images/heart-icon-white.png")
    }
}
