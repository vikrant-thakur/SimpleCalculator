
// Evaluates the expression
function express() {													  	
    var str = document.getElementById("disp").value; 
    var signed_floats = str.match(/[+-]?(\d+([.]\d*)?|[.]\d+)/g);	// REGEX to match signed floats
    for (i=0;i<signed_floats.length;i++){
    	str = str.replace(signed_floats[i],"N");							// Replacing all matches with "N"
    }
    var ops = str.split("N")                                              	// Operators array (stores only '*' and '/')
    // Carries out multiplication and division in place
    var i=-1;          														// index looping floats array                 
    var n=-1;																// index looping operators array
    while (n < ops.length-1){
    	i+=1;n+=1;
        if (ops[n]=="*"){
        	var store = parseFloat(signed_floats[i-1])*parseFloat(signed_floats[i]);
            signed_floats.splice(i-1,1); signed_floats.splice(i-1,1);       // Removes two floats operated on  
            signed_floats.splice(i-1,0,store.toString());					// Inserts the product of two floats in there place
            i-=1;
        }
        if (ops[n]=="/"){
        	var store = parseFloat(signed_floats[i-1])/parseFloat(signed_floats[i]);
            signed_floats.splice(i-1,1); signed_floats.splice(i-1,1);
            signed_floats.splice(i-1,0,store.toString());
            i-=1;
        }
    }
    // Ading up all final floats
    var result=0;
    for (j=0;j<signed_floats.length;j++){									
    	result+=parseFloat(signed_floats[j]);
    }  
    return result.toFixed(8);
}    

// Covers cases of pressing multiple operators one after other
function displayOperator(val){                       					  	
	text = document.getElementById("disp").value
	if((text[text.length - 1]==".") && val=="."){                          				// Checks for simultaneous dots
		document.getElementById("disp").value = document.getElementById("disp").value;
	}
	else if((text[text.length - 1]=="*" || text[text.length - 1]=="/") && val=="-"){    // Checks for negative floats 
		document.getElementById("disp").value += val;			 
	}
	else if (["+","-","*","/"].indexOf(text[text.length - 1]) != -1){					// Checks for operator on last character
		document.getElementById("disp").value = text.substr(0,text.length-1) + val;
	}
	else{
		document.getElementById("disp").value += val; 
	}
}

// Deleting a selection or single backspace
function backspace(){                   
	if (window.getSelection() != "undefined"){
		var s = window.getSelection();
		var x = document.getElementById("disp").value ;
		document.getElementById("disp").value = x.replace(s,"");
	} 
	else{         					  	 
		text = document.getElementById("disp").value
		document.getElementById("disp").value = text.substr(0,text.length-1);
	}
}
