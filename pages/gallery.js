var overLay = $('.me-overlay');
var galleryFrame = $('.me-gallery-frame');
var frame = $('.me-frame');
var frameImage = $('.me-frame-image');
var thumbImage = $('.me-thumb-image');
var closeGallery = $('.me-toggle-gallery');
var btnNext = $('.me-next');
var btnPrev = $('.me-prev');
var currCounter = $('.me-current-slide');
var totalCounter = $('.me-total-slide');

const getImageSrc = function () {
    thumbImage.click(function () {
        var imgSrc = $(this).prop('src');
        var imgDataItem = $(this).data('item');
        frameImage.attr('src', imgSrc);
        frameImage.data('frame', imgDataItem);
        overLay.addClass('me-contactinfo-open');
        galleryFrame.addClass('me-contactinfo-open');

        totalCounter.html($('.me-thumb-image').length);
        currCounter.html(imgDataItem);
        

    });
}

closeGallery.click(function () {
    overLay.removeClass('me-contactinfo-open');
    galleryFrame.removeClass('me-contactinfo-open');
})

getImageSrc();

//fazer o next e slide funcionar
var nextItem = function () {
    var currImage = frameImage.data('frame');
    var nextImage = parseInt(currImage) + 1;
    var $nextThumbImage = thumbImage.eq(nextImage - 1);
    var nextSrc = $nextThumbImage.prop('src');
    var nextFrame = $nextThumbImage.data('item');
    frameImage.data('frame', nextFrame);
    frameImage.attr('src', nextSrc);

    currCounter.html(nextFrame);

}

btnNext.on('click', function () {
    nextItem();
});

/*var currImage = frameImage.data('frame');
    var window.nextImage = parseInt(currImage) + 1;
    thumbImage.each(function(){
        if ($(this).data('item') == window.nextImage) {
            var nextSrc = $(this).prop('src');
            var nexFrame = $(this).data('item');
    
            frameImage.attr('src', nextSrc);
            frameImage.data('frame', nextImage);
        }
    });*/

var prevItem = function () {
    var currImage = frameImage.data('frame');
    var prevImage = parseInt(currImage) - 1;
    console.log(prevImage);
    if (currImage == 1) {
        return;
    }
    var $prevThumbImage = thumbImage.eq(prevImage - 1);
    var prevSrc = $prevThumbImage.prop('src');
    var prevFrame = $prevThumbImage.data('item');
    frameImage.data('frame', prevFrame);
    frameImage.attr('src', prevSrc);

    currCounter.html(prevFrame);
}

btnPrev.on('click', function () {
    prevItem();
});