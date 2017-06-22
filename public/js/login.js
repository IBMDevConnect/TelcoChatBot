var Login = (function() {

  // Publicly accessible methods defined
  return {
    login:login
  };

  function login(event, inputBox) {
  	if (event.keyCode === 13 && inputBox.value) {
  		sessionStorage.userName = inputBox.value;
  		Api.validate(inputBox.value);
  	}
  }

}());
