//creating variables to manipulate elements(div, img and p) and appending those elements 

var $overlay = $('<div class="overlay"></div>');

var $image = $('<img>');
var $p = $('<p>');

//Appending image and its text over the overlay
$overlay.append($image);
$overlay.append($p);

//Appending and hiding overlay over the page

$('body').append($overlay);
$overlay.hide();


//creating an event to append overlay if clicked on overlay

$overlay.on('click', function () {
        $overlay.fadeOut(100);
});

//determining and setting what is going in the <img> and the <p>

$('ul li img').on('click', function() {
    var $currentImage = $(this);
    var imageSource = $currentImage.attr('src');
    var textSource = $currentImage.attr('alt');
    
    $image.attr('src', imageSource);
    $p.text(textSource);
    $overlay.fadeIn(100);
    
    
});