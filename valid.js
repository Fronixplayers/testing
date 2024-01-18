	//Validtion Code For Inputs

	function checkPassword() {
		var password = document.getElementById("password").value;
		if (password === "sran@1234") {
		  window.location.href = "video.html";
		} else {
		  document.getElementById("message").innerHTML = "Incorrect code. Please try again.";
		}
	  }
	  