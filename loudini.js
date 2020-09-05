function validation(){
  var name= document.getElementById("name").value;
   var phone= document.getElementById("phone").value;
   var email= document.getElementById("email").value;
    var password= document.getElementById("password").value;
    var message= document.getElementById("message").value;
     var error_message= document.getElementById("error_message");
     var text;
  error_message.style.padding ="10px";

    if(name.length <5) {
       text="Please Enter Valid Name"
       error_message.innerHTML = text;
       return false;
    }
      if(isNaN (phone)||phone.length! =10) {
       text="Please Enter Valid Phone Number";

       error_message.innerHTML = text;
       return false; }

        if(email.indexOF("@")== -1|| email.length <7) {
       text="Please Enter Valid email"
       error_message.innerHTML = text;
       return false;}

        if(message.length<=140) {
       text="Please Enter more than 140"
       error_message.innerHTML = text;
       return false; }

    if(name.length<1 || email.length<1 || phone.length<1 || message.length<1){
       	return false;
       }
   alert("form subbmitted successfully! ")
     return true;
  

}