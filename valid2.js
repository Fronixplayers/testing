	//Validtion Code For Inputs

	function checkPassword() {
		var password = document.getElementById("password").value;
		if (password === "frnp@9") {
		  window.location.href = "d1.html";
		} else {
		  document.getElementById("message").innerHTML = "Incorrect Password. Its Mean You'r Not a Part of FRNP.";
		}
	  }
	  