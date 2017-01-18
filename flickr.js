

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







$('.header').hide();

function render(data) {
  
  $('ul').empty();

    var photos = data.photos.photo;
    console.log(photos);


    for (var i = 0; i < photos.length; i++) {

        var photo = photos[i];

        var photoURL = 'http://farm' + photo.farm + '.static.flickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '_m.jpg';
        $('.results').append('<li><a href="' + photoURL + '" ><img class="thumbnail" src= "' + photoURL + '" >');
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
            privacy_filter: '1' 
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
  $('.surround').slideUp("slow");

  setTimeout(function(){
    $('.header').show();
    $('.stuff').appendTo($('.header')).show().removeClass('stuff').addClass('block');
    $('.h1').hide();
    $('#stuff_logo').hide();
      }, 1000);




}




// run button click

$('button').on('click', function() {
    search();
    emptyNew();

});




