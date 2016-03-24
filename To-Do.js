function todo (){

$("form").submit(function(event) {
  var newTodo = $(".new-todo").val();
  var listInput = $("p").text(newTodo);
  var checkMark = $('<button>').attr('class','check');

  var listArticle = $('<article>').append(checkMark)
                                  .append($("p").text(newTodo))
  var newLi = $('<li>').append(listArticle);


  $('.items').append( newLi);
  //
  // $('.design-selection ul')
  //        .append( newItem );




  console.log("working");



  event.preventDefault();
})






}

// <li>
//     <article>
//         <button class='check'></button>
//         <p>learn html</p>
//         <input type='text' class='edit-todo' value='learn html'>
//         <button class='delete'>X</button>
//     </article>
// </li>















todo();
