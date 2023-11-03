//function for randon number 
function randToRpsInt(n){
    return Math.floor(Math.random() * n);
}

//function for checking the number
function check(n){
    if(n==btn_n){
        document.getElementById("check").innerText="correct";   
        document.getElementById("next").innerHTML="<button class='btn btn-warning' onclick=location.reload()>Next</button>" ;  
    }else 
        document.getElementById("check").innerText="incorrect";
        document.getElementById("next").innerHTML="<button class='btn btn-warning' onclick=location.reload()>Next</button>" ;  
}

var firn=randToRpsInt(100);
var secn=randToRpsInt(100);


document.getElementById("firn").innerText=firn;
document.getElementById("secn").innerText=secn;

//var ans= firn+secn;
var ans = operation(firn, secn);
//operation function 
function operation(firn , secn){
var operation = document.getElementById("operation").innerText;
if(operation == "+"){
    return firn+secn;
}else if(operation == "-"){
    return firn-secn;
}else if(operation == "*"){
    return firn*secn;
}
};

var btn_n = randToRpsInt(3);
if(btn_n==0){
    document.getElementById("gfir").innerText=ans;
    document.getElementById("gsec").innerText=ans+1+randToRpsInt(10);
    document.getElementById("gthi").innerText=ans-1-randToRpsInt(10);
}else if(btn_n==1){
    document.getElementById("gfir").innerText=ans+1+randToRpsInt(10);
    document.getElementById("gsec").innerText=ans;
    document.getElementById("gthi").innerText=ans-1-randToRpsInt(10);
}else if(btn_n==2){
    document.getElementById("gfir").innerText=ans-1-randToRpsInt(10);
    document.getElementById("gsec").innerText=ans+1+randToRpsInt(10);
    document.getElementById("gthi").innerText=ans;
}
function make(ope){
    if(ope == 1){
    document.getElementById("operation").innerText="+";
    }else if(ope == 2){
    document.getElementById("operation").innerText="-";
    }else if(ope == 3){
    document.getElementById("operation").innerText="*";
    }
}