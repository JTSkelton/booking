$(document).ready(function(){
$("form#appt-form").submit(function(event){
  event.preventDefault();
  let name2 = $("input#name1").val();
  let description2 = $("textarea#description1").val();
  let date = $("input#appt-date").val();
  let time2 = $("input#time1").val();
  let result = name2 + " " + description2 + " " + String(date) + " " + String(time2);
  $("#output").text("Thank you for booking! " + result);
  $("#output").show();
  console.log(name2);
});
});