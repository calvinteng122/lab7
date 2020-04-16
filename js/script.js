function init(){	
	var name = document.getElementsByClassName("center")[1];
        var input = document.getElementById('entryinput');
        var output = document.getElementById('textoutput');
        alert(name.textContent + ": " + input.value);
        output.innerHTML = input.value;
}

var button = document.getElementById('entrybutton');
button.addEventListener('click', init);
