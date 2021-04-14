
$(function () {
    var btnContact = $('.me-btn-contact');

    btnContact.click(function () {
        $('.me-contactinfo').toggleClass('me-contactinfo-open');
        $(this).toggleClass('me-change-icon');
    });

    $(window).on("load", function () {
        var pagePreloader = $('.me-preloader-container');
        pagePreloader.addClass('me-anim-preloader');

        setTimeout(function () {
            pagePreloader.css('display', 'none');
        }, 3000);

    });
    
    $('.me-toggle-modal').click(function () {
        $('.me-overlay').toggleClass('me-contactinfo-open');
        $('#me-modal-orcamento').toggleClass('me-contactinfo-open');
        $('#me-modal-orcamento').toggleClass('me-anim-modal');
    });

    var MyScrollDown = document.querySelector('.container-scroll-down');
    var waypoint = new Waypoint({
        element: MyScrollDown,
        handler: function () {
            MyScrollDown.classList.toggle('me-anim-fadeout')
        },
        offset: '80%'
    });

    $('.me-btn-menu-mob').click(function () {
        $('.me-menu-mob').toggleClass('me-menu-mob-open');
        $('.me-overlay-menu').toggleClass('me-contactinfo-open');
    
        if ($('#close-menu-mob').attr('name') =='menu-outline') {
            $('#close-menu-mob').attr('name', 'close-outline');
        }else {
            $('#close-menu-mob').attr('name', 'menu-outline');
        }

    });
    
});
