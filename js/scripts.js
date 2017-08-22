//Business Logic
function Ticket(age, title, time){
  this.title = title;
  this.time = time;
  this.rating = age;
  this.price = 15;
}

Ticket.prototype.translation = function(time){
  if (time === 1){
    return "Afternoon Matinee"
  }else if (time === 2){
    return "Evening Show"
  }else {
    return "Late Night Showing"
  }
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
  }return ticketCost += price;
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
    $(".panel").show();

    var nameInput = $("input#name").val();
    var ageInput = parseInt($("input#age").val());
    var titleInput = $("#movie-title").val();
    var timeInput = parseInt($("#movie-times").val());

    var newTicket = new Ticket(ageInput, titleInput, timeInput);

    var cost = newTicket.calculation(ageInput, timeInput, newTicket.price);
    newTicket.price = cost;

    var showing = newTicket.translation(timeInput);

    $(".name").text(nameInput);
    $("#ticket").append(`<li>${titleInput}</li>`);
    $("#ticket").append(`<li>${showing}</li>`);
    $("#ticket").append(`<li>$${cost}</li>`);

    $(".return").click(function(){
      $("#ticketInput").show();
      $(".panel").hide();
    });

    resetFields();
  });
});
