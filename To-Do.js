(function (){


  var itemsLeft = $('.incomplete-items');
  var listArticle = $('<article>');

// create new li

$("form").submit(function(event) {

  event.preventDefault();


  var newTodo = $('.new-todo').val();
  var listInput = $('<p>').text(newTodo);
  var checkMark = $('<button>').attr('class','check');
  var listArticle = $('<article>');
  var newLi = $('<li>');
  var itemList = $('.items');
  var deleteButton = $('<button>').attr('class', 'delete').text('X');
  var editItem = $('<input>').attr({type: 'text', class: 'edit-todo', value: newTodo});


      listArticle.append(checkMark)
                 .append(listInput)
                 .append(deleteButton)
                 .append(editItem);
      newLi.append(listArticle);
      itemList.append( newLi);
      itemsLeft.text(Number(itemsLeft.text()) + 1);


});

// toggle complete and incomplete-items


$('ul').on('click', 'p', function() {
    $(this).closest('article').toggleClass('editing');
  });

$('ul').on('keyup', '.edit-todo', function (event){

    if(event.keyCode === 13){
      $(this).closest('article').find('p').text($(this).val());
      $(this).closest('article').toggleClass('editing');
    }
})


$('ul').on('click', '.check', function() {

    if ($(this).closest('article').hasClass('completed')){
      (itemsLeft.text(Number(itemsLeft.text()) + 1));

    }else {
      itemsLeft.text(Number(itemsLeft.text()) - 1);
    }

    $(this).closest('article').toggleClass('completed')

  });

// Delete item from li

$('ul').on('click', '.delete', function() {
  $(this).closest('li').remove();
  itemsLeft.text(Number(itemsLeft.text()) - 1)

});

$('.clear').on('click', function() {
  $(this).closest('main').find('.completed').closest('li').remove();



});

// footer buttons

$('.show-all').on('click', function(){
      $('article').closest('li').css('display', 'block');
      $('.show-all').addClass('active');
      $('.show-active').removeClass('active');
      $('.show-completed').removeClass('active');
});

$('.show-active').on('click', function(){
    $('.completed').closest('li').css('display', 'none');
    $('article').not('.completed').closest('li').css('display', 'block');
    $('.show-active').addClass('active');
    $('.show-all').removeClass('active');
    $('.show-completed').removeClass('active');
});
  $('.show-completed').on('click', function(){
    $('article').not('.completed').closest('li').css('display', 'none');
    $('.show-completed').addClass('active');
    $('.show-all').removeClass('active');
    $('.show-active').removeClass('active');
    $('.completed').closest('li').css('display', 'block');

});

})();
