function init(){	
	var input = document.getElementById("entryinput");
        var button = document.getElementById("entrybutton");
	var output = document.getElementById("textoutput");
	alert(name.textContent + ": " + input.value);
	output.innerHTML = input.value;
}

window.addEventListener("click", init);
