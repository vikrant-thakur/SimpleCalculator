function displayOperator(val){                       					  // Covers cases of multiple operator pressing
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

function backspace(){                               					  // One backspace at a time 
	text = document.getElementById("disp").value
	document.getElementById("disp").value = text.substr(0,text.length-1);
}


function express() {													  // Evaluates the expression
    var str = document.getElementById("disp").value; 
    var res = str.match(/[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)/g);          // REGEX to match signed floats
    for (i=0;i<res.length;i++){
    	str = str.replace(res[i],"N");
    }
    var ops = str.split("N")                                              // Operators array
    var i=-1;var n=-1;
    while (n < ops.length-1){
    	i+=1;n+=1;
        if (ops[n]=="*"){
        	var store = parseFloat(res[i-1])*parseFloat(res[i]);
            res.splice(i-1,1); res.splice(i-1,1);
            res.splice(i-1,0,store.toString());
            i-=1;
        }
        if (ops[n]=="/"){
        	var store = parseFloat(res[i-1])/parseFloat(res[i]);
            res.splice(i-1,1); res.splice(i-1,1);
            res.splice(i-1,0,store.toString());
            i-=1;
        }
    }
    var ans = []; var result=0;
    for (j=0;j<res.length;j++){											 // Parsing to floats
    	ans.push(parseFloat(res[j]));
    }
    for (k=0;k<ans.length;k++){											 // Adding final results
    	result+=ans[k];
    }
    return result.toFixed(8);
}    