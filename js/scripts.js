//Business Logic
function Ticket(age, title, time){
  this.rating = age;
  this.title = title;
  this.time = time;
  this.price = 15;
}

Ticket.prototype.translationValue = function(time){
  switch(time){
    case 1:
    return "Afternoon Matinee";
    case 2:
    return "Evening Show";
    case 3:
    return "Late Night Showing";
    // no default really required
  }
  // if (time === 1){
  //   return "Afternoon Matinee"
  // }else if (time === 2){
  //   return "Evening Show"
  // }else {
  //   return "Late Night Showing"
  // }
}

Ticket.prototype.calculation = function(age, time, price) {
  var ticketCost = 0;
  if (age <= 17){
    price -= 5;
  }else if ((age >= 18) && (age <= 64)){
    price;
  }else {
    price -= 7;
  }if (time === 1) {
    price -= 2;
  }else {
    price;
  }return `$${ticketCost += price}`;
}

function appendToTicket(listId, listItems){
  listItems.forEach(function(item){
    $(listId).append(`<li>${item}</li>`);
  });
}

function resetFields() {
  $("input#name").val("");
  $("input#age").val("")
}

//User Interface Logic
$(document).ready(function(){
  $("#ticketInput").submit(function(event){
    event.preventDefault();

    $("#ticketInput").hide();
    $(".panel, .return").show();

    var nameInput = $("input#name").val();
    var ageInput = parseInt($("input#age").val());
    var titleInput = $("#movie-title").val();
    var timeInput = parseInt($("#movie-times").val());

    var newTicket = new Ticket(ageInput, titleInput, timeInput);

    var cost = newTicket.calculation(ageInput, timeInput, newTicket.price);
    newTicket.price = cost;

    var showing = newTicket.translationValue(timeInput);

    $(".name").text(nameInput);
    var ticketItems = [titleInput, showing, cost];
    appendToTicket("#ticket", ticketItems);

    // $("#ticket").append(`<li>${titleInput}</li>`);
    // $("#ticket").append(`<li>${showing}</li>`);
    // $("#ticket").append(`<li>$${cost}</li>`);

    $(".return").click(function(){
      $("#ticketInput").show();
      $(".panel, .return").hide();
      $("ul").empty();
    });

    resetFields();
  });
});
