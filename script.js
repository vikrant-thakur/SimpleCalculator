function displayOperator(val){
	text = document.getElementById("disp").value
	if((text[text.length - 1]==".") && val=="."){
		document.getElementById("disp").value = document.getElementById("disp").value;
	}
	else if((text[text.length - 1]=="*" || text[text.length - 1]=="/") && val=="-"){
		document.getElementById("disp").value += val; 
	}
	else if(text[text.length - 1]=="+" || text[text.length - 1]=="-" || text[text.length - 1]=="*" || text[text.length - 1]=="/" || text[text.length - 1]=="%"){
		document.getElementById("disp").value = text.substr(0,text.length-1) + val;
	}
	else{
		document.getElementById("disp").value += val; 
	}
}

function backspace(){
	text = document.getElementById("disp").value
	document.getElementById("disp").value = text.substr(0,text.length-1);
}