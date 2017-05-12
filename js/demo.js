

$(function () {
  // 'use strict'

  // Load demo images from flickr:
  $.ajax({
    // Flickr API is SSL only:
    // https://code.flickr.net/2014/04/30/flickr-api-going-ssl-only-on-june-27th-2014/
    url: 'https://api.flickr.com/services/rest/',
    data: {
      format: 'json',
      method: 'flickr.people.getPublicPhotos',
      api_key: 'bf5ec2d88cc0ea4b96c69dfd70536885', // jshint ignore:line
      // photoset_id:'72157669308506681',
      user_id: '143393980@N04'
    },
    dataType: 'jsonp',
    jsonp: 'jsoncallback'
  }).done(function (result) {
    var carouselLinks = []
    var linksContainer = $('#links')
    var baseUrl
    // Add the demo images as links with thumbnails to the page:
    $.each(result.photos.photo, function (index, photo) {
      baseUrl = 'https://farm' + photo.farm + '.static.flickr.com/' +
      photo.server + '/' + photo.id + '_' + photo.secret
      $('<a/>')
        .append($('<img>').prop('src', baseUrl + '_s.jpg'))
        .prop('href', baseUrl + '_b.jpg')
        .prop('title', photo.title)
        .attr('data-gallery', '')
        .appendTo(linksContainer)
      carouselLinks.push({
        href: baseUrl + '_c.jpg',
        title: photo.title
      })
    })
    // Initialize the Gallery as image carousel:
    blueimp.Gallery(carouselLinks, {
      container: '#blueimp-image-carousel',
      carousel: true
    })
  })
})




$(window).load(function(){

  $('.show-file').on("click",function(){
    $('.flipbook-viewport').show();
    $('body').css('overflow','hidden');
});


$('.flipbook-bg').on("click",function(){
    $('.flipbook-viewport').hide();
    $('body').css('overflow','scroll');
});

});