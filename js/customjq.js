//Run collapse function on pageload and resize.
$(document).ready(function() {
    $(window).resize(collapse);
})

/**
* @description Check screensize and collapse / show
* specified ID
*/
function collapse() {
    if (window.matchMedia('(max-width: 768px)').matches) {
        $('#collapseExample').removeClass('show');
    } else {
        $('#collapseExample').addClass('show');
    }
}

/**
* @description Get thumbnail url from wikipedia page
* @param {title} title of wikipedia page
*/
/*Using .ajax to allow for non async request as
otherwise getting function return as undefined followed by
* actual result
*/
function getPhoto(title) {
    let url = `https://en.wikipedia.org/w/api.php?action=query&titles=` + title +
        `&redirects&prop=pageimages&piprop=thumbnail&pithumbsize=200&format=json&formatversion=2&origin=*`

    $.ajax({
        dataType: "json",
        async: false,
        url: url,
        success: function(data) {
            result = data.query.pages[0].thumbnail.source;
        }
    });
    return result;
}

/**
* @description Get first 400 characters of text from wikipedia page
* @param {title} title of wikipedia page
*/
/*Using .ajax to allow for non async request as
otherwise getting function return as undefined followed by
* actual result
*/

function getInfo(title) {
    let url = `https://en.wikipedia.org/w/api.php?action=query&titles=` + title +
        `&redirects&prop=extracts&exintro=&explaintext=&format=json&formatversion=2&origin=*`

    $.ajax({
        dataType: "json",
        async: false,
        url: url,
        success: function(data) {
            result = data.query.pages[0].extract.slice(0, 400);
        }
    });
    return result;

}

/**
* @description Get url of article on wikipedia
* @param {title} title of wikipedia page
*/
/*Using .ajax to allow for non async request as
otherwise getting function return as undefined followed by
* actual result
*/
function getUrl(title) {
    let url = `https://en.wikipedia.org/w/api.php?action=query&titles=` + title +
        `&redirects&format=json&formatversion=2&origin=*`

    $.ajax({
        dataType: "json",
        async: false,
        url: url,
        success: function(data) {
            result = data.query.pages[0].pageid;
            outputurl = `https://en.wikipedia.org/?curid=${result}`
        }
    });

    return outputurl;

}
