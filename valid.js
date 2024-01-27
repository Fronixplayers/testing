	//Validtion Code For Inputs

	function checkPassword() {
		var password = document.getElementById("password").value;
		if (password === "pbx1") {
		  window.location.href = "video.html";
		} else {
		  document.getElementById("message").innerHTML = "Incorrect code. Please take code or pay for code.";
		}
	  }
	  