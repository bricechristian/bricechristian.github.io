


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


$('.container').slideDown("slow");
$('.results').hide();
$('.header').hide();
$('.top').hide();

function render(data) {
  
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
  $('body').vegas('destroy');
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
        { src: "http://traveloregon.com/content/uploads/2012/05/cannon-beach-heeb.jpg" },
        { src: "https://www.canon.com.au/-/media/images/canon/carousels/powershot-g1-x-mark-ii/powershot-g1-x-mark-ii-sample-image-1.ashx" },
        { src: "http://40.media.tumblr.com/5e6948eabab4b629987c55ee85e6b7c0/tumblr_nvucdgyMof1tgoy1wo3_1280.jpg" },
        { src: "https://cdn.munplanet.com/storage/uploads/52209627db7c13603b000001/topic/background_image/54c3ba73db7c1355c2002b03/Santorini-Greece-5.jpg" },
        { src: "http://40.media.tumblr.com/bcc0f5315ce21ddb6db4e47e7eaccb5d/tumblr_o1lxt6T4Uz1qdvvaoo1_1280.jpg" },
        { src: "http://dgmanila.com/wp-content/uploads/2017/04/swiss_20.jpg" },
        { src: "https://www.cinema5d.com/wp-content/uploads/2013/06/scot_landscape_4.jpg" }
    ]
});
