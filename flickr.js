


// function render(data) {
//     var photos = data.items;
//     console.log(data);
//     for (var i = 0; i < photos.length; i++) {
//         // var thumbURL = photos[i].[???];
//         var photoURL = 'http://farm' + item.farm + '.static.flickr.com/' + item.server + '/' + item.id + '_' + item.secret + '_m.jpg';
//         $('.results').append('<li>' + '<img src= "' + thumbURL + '" >').wrap('<a href="' + photoURL + '" >');
//     }
// }




// function init() {

//     var search = $('.query').val();
//     var apiKey = '9212a18bf4d01a1af48dad5c36f655a5';
//     var photoID = 'item.id'
//     var data = {
//         url: 'https://api.flickr.com/services/rest/?&amp;method=flickr.photos.search',
//         data: {
//             apiKey: '9212a18bf4d01a1af48dad5c36f655a5',
//             dataType: 'jsonp',
//             tags: search, 
//             format: 'json'
//         }
//     }
//     $.ajax(data).done(render);

// }


// $('button').on('click', function(){
//   init();

// })



$('.results').hide();
$('.header').hide();
$('.top').hide();

function render(data) {
  
$('body').vegas('destroy');  
$('ul').empty();

    var photos = data.photos.photo;
    console.log(photos);


for(var i = 0; i < photos.length; i ++) {
    
  var $template = $('<li><a><img></a></li>');
  var photo = photos[i];
  var url = 'http://farm' + photo.farm + '.static.flickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '_b.jpg';
    
  $template
       .find('a')
       .attr({
        'href' : url,
        'data-lightbox': 'roadtrip'
      })
      .find('img')
      .attr({
        'src': url,
        'class': 'thumbnail'
      });

  $('.results').show().append($template);
    
}




    // for (var i = 0; i < photos.length; i++) {



    //     var photo = photos[i];
    //     var photoURL = 'http://farm' + photo.farm + '.static.flickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '_c.jpg';
    //     var IMG = $('<a href="' + photoURL + '" >')
    //     .attr('data-lightbox','roadtrip')
    //     .append('<img class="thumbnail" src="' + photoURL + '" >');

    //     console.log(IMG);

    //     $('.results').show().append('<li>' + IMG);

    // }


  if( $('.results').is(':empty') ) {
   $('.results').text("No results have been found. Try searching for something different!").addClass('error'); 
  }
}

function search() {

    var options = {
        url: 'https://api.flickr.com/services/rest/?&method=flickr.photos.search&nojsoncallback=1',
        data: {
            api_key: '9212a18bf4d01a1af48dad5c36f655a5',
            dataType: 'jsonp',
            tags: $('.tags').val(),
            text: $('.query').val(),
            format: 'json',
            safe_search: '1',
            privacy_filter: '1',
            sort: 'interestingness-desc',
            secret: 'd2d8386333f099af'
        }
    };

    $.ajax(options).done(render);
  
}



// randomizes main input placeholder


setInterval(function() {
 
  var list = ['Chicago...', 'New York...', 'Spain...', 'Greece...', 'Johannesburg...', 'Cape Town...', 'Rio de Janeiro...'];
  var r = Math.floor(Math.random() * list.length);
  $('.query').prop('placeholder', list[r]);
  
}, 2000);



// randomizes tag input placeholder


setInterval(function() {
 
  var list = ['Niagra Falls...', 'Disney World...', 'Notre Dame Cathedrals...', 'Great Wall of China...', 'Sydney Opera House...'];
  var r = Math.floor(Math.random() * list.length);
  $('.tags').prop('placeholder', list[r]);
  
}, 2000);




// empty search container and display results big with new search bar now at the top

function emptyNew () {
  $('.container').slideUp("slow");

  setTimeout(function(){
    $('.header').show();
    $('#stuff_logo').hide();
    $('.stuff').appendTo($('.header')).show().removeClass('stuff');
    $('.h1').hide();
    $('.top').show();
      }, 1000);




}




// run button click

$('button').on('click', function() {
    $('.results').empty();
    search();
    emptyNew();

});





// vegas background slider

$("body").vegas({
    slides: [
        { src: "beach.jpeg" },
        { src: "country.jpeg" },
        { src: "forrest.jpeg" },
        { src: "greece.jpeg" },
        { src: "paris.jpg" },
        { src: "sanfran.jpg" },
        { src: "seattle.jpeg" }
    ]
});
