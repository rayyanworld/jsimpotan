function product_1(){
    var name=document.getElementById("pro_2").value;
    var rayyan=document.getElementById("text")
    if(name=="IPHONE"){
        document.getElementById("img_1").src="download (1).jpg"
        rayyan.innerHTML="<li>Price:- 15500000 </li>"
    }
    else if(name=="REALME"){
        document.getElementById("img_1").src="download (2).jpg"
        rayyan.innerHTML="<li>Price:- 8158500 </li>"
    }
    else{
        alert("ERROR")
    }
}
function product_3(){
    var name=document.getElementById("pro_5").value;
    var ARIF=document.getElementById("textR")
    if(name=="infinix"){
        document.getElementById("img_5").src="infinix.jpg"
                ARIF.innerHTML="<li>Price:- 8000 </li>"
    }
    else if(name=="oppo"){
        document.getElementById("img_5").src="DJBSD.jpg"
                ARIF.innerHTML="<li>Price:- 20000 </li>"

    }
    else{
        alert("ERROR")
    }
}
