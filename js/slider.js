$(document).ready( function(){

  var elementWidth = $('.slider ul li').width()
  var elementsAmount = $('.slider ul li').length

  var landscapeWidth = parseInt(elementWidth) * elementsAmount

  $('.slider ul').css('width', landscapeWidth+'px')

  var sliderInit = function(current){
    current++
    if(current >= elementsAmount) current = 0
    $('.slider ul').animate({
      left : (current * elementWidth) * -1 + 'px'
    }, 500)
    setTimeout( function(){
      sliderInit(current)
    }, 5000)


  }

  sliderInit(-1)


})
