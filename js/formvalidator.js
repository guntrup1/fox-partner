let inputs = document.querySelectorAll('input[data-rule]');
let invalidMessage = document.querySelector('.invalid-message');

for (let input of inputs){
  input.addEventListener('blur', function() {
    let rule =  this.dataset.rule;
    let value = this.value;
    var constButton = document.querySelector('.popup__form-btn ');
    switch(rule){
      case 'name':
        checkName = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/.test(value);
      break;
      case 'phone':
        checkPhone = /^\+380\d{3}\d{2}\d{2}\d{2}$/.test(value) |  /^\+48\d{3}\d{3}\d{3}$/.test(value) ;
      break;
    }
    if(checkName){
      this.classList.remove("invalid");
      this.classList.add("valid");
    }else{
      this.classList.add("invalid");
      this.classList.remove("valid");
    };

    if(checkPhone){
      invalidMessage.classList.remove('active');
      this.classList.remove("invalid");
      this.classList.add("valid");
    }else{
      invalidMessage.classList.add('active');
 
      
      this.classList.add("invalid");
      this.classList.remove("valid");
    }

    $(".checkboxes").on("click", function () {
      if ($(this).prop("checked") && $('.checkbox_second').prop("checked") === true) {
        if (checkName && checkPhone){
          constButton.removeAttribute("disabled");
        }else{
          constButton.setAttribute("disabled", "disabled");
        }
      }else{
        constButton.setAttribute("disabled", "disabled");
      }
    })
    

    

    
      
  });
}