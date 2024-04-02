const form = document.querySelector(".second-page-form");
const storage = "feedback-form-state";

const storageItem = JSON.parse(localStorage.getItem(storage));

if(localStorage.getItem(storage)){
  form.elements.firstname.value=storageItem.firstname;
  form.elements.secondname.value = storageItem.secondname;
  form.elements.email.value=storageItem.email;
  form.elements.feedback.value = storageItem.feedback;
  form.elements.rating.value = storageItem.rating;
}
else{
  form.elements.firstname.value="";
  form.elements.secondname.value="";
  form.elements.email.value="";
  form.elements.feedback.value="";
  form.elements.rating.value="";
}


form.addEventListener("input", () =>{
  localStorage.setItem(storage, JSON.stringify({firstname:form.elements.firstname.value.trim(), secondname:form.elements.secondname.value.trim(), email:form.elements.email.value.trim(), feedback:form.elements.feedback.value.trim(), rating:form.elements.rating.value.trim()}))
})

form.addEventListener("submit", event=> {
  event.preventDefault();
  if(form.elements.feedback.value.trim()===""||form.elements.email.value.trim()===""){
    alert("Email and feedback must be filled");
    return;
  }
  console.log(localStorage.getItem(storage))
  localStorage.removeItem(storage);
  form.reset();
})