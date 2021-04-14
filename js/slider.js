//LARGURA DINÂMICA ((SLIDER))

//declarando as variáveis
var sliderContainer = $('.me-slider-container');
var sliderList = $('.me-slider-list');
var sliderItem = $('.me-slider-item');
const sliderTotalItem = sliderItem.length;
var sliderListWidth = 0;
var containerWidth = sliderContainer.parent().innerWidth(); //capturando larguras dinâmicas
var slideNext = $('.me-next');    //animção slide
var slidePrev = $('.me-prev');    //  
var slidePosition = 0;            //
var currentslide = $('.me-current-slide');
var slidetotal = $('.me-total-slide');
var currentCounter = 1;
var MeNavItems = $('#me-nav-items a');
var MeCounter = $('.me-counter p');

var funcslidenext = function () {

    var lastItem = sliderListWidth - containerWidth;
    console.log(slidePosition, lastItem)
    if ((-1 * (slidePosition) >= lastItem)) {
       return;
    }

    slidePosition -= containerWidth;

    anime({
        targets: '.me-slider-list',
        translateX: slidePosition ,
        easing: 'cubicBezier(0,1.01,.32,1)'
    });
}

var funcslideprev = function () {
    console.log(slidePosition);
    if (slidePosition >= 0) {
        return;
    }

    slidePosition += containerWidth;

    anime({
        targets: '.me-slider-list',
        translateX: slidePosition ,
        easing: 'cubicBezier(0,1.01,.32,1)'
    });
}

//counter
var counterformat = function (n) {
    if (n < 10) {
        return '0' + n;
    } else {
        return n;
    }
}

var currentCounterNext = function () {

    if ((currentCounter > 0) && (currentCounter < sliderTotalItem)) {
        currentCounter++;
        currentslide.html(counterformat(currentCounter));
    }
}

var currentCounterPrev = function () {

    if ((currentCounter > 1) && (currentCounter <= sliderTotalItem)) {
        currentCounter--;
        currentslide.html(counterformat(currentCounter));
    }
}

//counter active
var SetNavCounter = function () {
    MeNavItems.each(function () {
        var myNavNum = parseInt($(this).data('nav'));
        if (myNavNum === currentCounter) {
            $(this).addClass('me-nav-active');

            anime({
                targets: '.me-nav-active',
                width: 90
            });

            MeCounter.html(counterformat(currentCounter));
        }
    });

}

//anim slide
var SetSliderAnim = function () {
    sliderItem.each(function () {
        var mySlideNum = parseInt($(this).data('slide'));
        if (mySlideNum === currentCounter) {
            $(this).addClass('me-slide-active');
            $(this).find('.me-thumb-box').addClass('me-anim-slide');
            $(this).find('.me-thumb img').addClass('me-anim-slideImg');


        }
    });

}

var changeActive = function () {

    MeNavItems.removeClass('me-nav-active');
    sliderItem.removeClass('me-slide-active');
    sliderItem.find('.me-thumb-box').removeClass('me-anim-slide');
    sliderItem.find('.me-thumb img').removeClass('me-anim-slideImg');

    
    anime({
        targets: '#me-nav-items a',
        width: 20
    });

    MeCounter.html(counterformat(currentCounter));

    SetNavCounter();
    SetSliderAnim();
}


//passando larguras dinâmicas
sliderContainer.css('width', containerWidth + 'px');

sliderItem.css('width', containerWidth + 'px');

sliderItem.each(function () {

    sliderListWidth += $(this).innerWidth();
});

sliderList.css('width', sliderListWidth + 'px');

anime({
    targets: '.me-nav-active',
    width: '95px'
});

//AÇÕES //
slidetotal.html(counterformat(sliderTotalItem));

slideNext.click(function () {
    funcslidenext();
    currentCounterNext();
    changeActive();
});

slidePrev.click(function () {
    funcslideprev();
    currentCounterPrev();
    changeActive();
});
