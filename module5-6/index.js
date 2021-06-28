

var workingDays = [5,2,3,1]
function validateStep1 () {


  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var form = document.getElementById('step1')
    
      var cont = true;
      if (!form.checkValidity()) {
        var cont = false;

        form.classList.add('was-validated')
        return
      }

      
      form.classList.add('was-validated')
      console.log(form)
        $("div[id='modal1']").modal('hide');
        $("div[id='modal2']").modal('show');

}



function validateStep2 () {


  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var form = document.getElementById('step2')
    

      if (!form.checkValidity()) {


        form.classList.add('was-validated')
        return
      }

      
      form.classList.add('was-validated')
    
        $("div[id='modal2']").modal('hide');


}

function goto1 () {


  // Fetch all the forms we want to apply custom Bootstrap validation styles to
        $("div[id='modal2']").modal('hide');
        $("div[id='modal1']").modal('show');

}

function goto2 () {

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
        $("div[id='modal3']").modal('hide');
        $("div[id='modal2']").modal('show');
}
function setPro(n) {
  pro = n;  
}


var pro = null;


$(document).ready(function(){
  $('#phone').mask('(000) 000-0000');
});

$(document).ready(function(){
  $('#cc').mask('0000 0000 0000 0000');
});

function noDay(date){
  console.log(pro)
  var pres = new Date();
  pres.setDate(pres.getDate()-1);


  if (date.getDay() === 0 || date.getDay() === 6 || date.getDay() === parseInt(pro))  
        return [ false, "Fermé", "" ]
  else if (date < pres) {
    return [ false, "", "" ]
  }
        return [ true, "", "" ]
}



$(function() {
  $( "#date" ).datepicker({
    beforeShowDay: noDay
  });
  
})

