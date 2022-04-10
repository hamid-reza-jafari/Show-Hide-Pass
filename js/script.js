 // Functions for select elems with id & class
 var $ = document;
 function _id(id_name) {
   return $.getElementById(id_name);
 }

 function _class(class_name) {
   return $.getElementsByClassName(class_name);
 }

 // Select Elems

 var togglePassword = $.querySelector(".togglepassword");
 var passwordField = _id("passwordfield");

 // Fire click event on eye icon
 togglePassword.addEventListener("click", function () {

   if (passwordField.type == "text") {
     passwordField.type = "password";
     togglePassword.classList.add("active");
   } else {
     passwordField.type = "text";
     togglePassword.classList.remove("active");
   }
 })