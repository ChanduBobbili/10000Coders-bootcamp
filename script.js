function Submit(){
  var Name = document.getElementById('name').value;
  if ( Name === "" ){
    alert("enter full name");
  }
  
  var ele = document.getElementsByName('gender');
  
  if(ele[0].checked){
    alert("male is selected");
  }
  else if(ele[1].checked){
    alert("female is selected");
  }
  
}
