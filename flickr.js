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

        var query = $('.query').val();
        var tags = $('.tags').val();
        if (query == '' || tags == '') {
        alert('Please enter a location.')
          $( this ).abort(function(){
        $('.itemInput').val('');
        $('.priceInput').val('');         
          })
      }

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
        { src: "beach.jpg" },
        { src: "city.jpg" },
        { src: "forrest.jpg" },
        { src: "greece.jpg" },
        { src: "paris.jpg" },
        { src: "swiss.jpg" },
        { src: "valley.jpg" }
    ]
});
