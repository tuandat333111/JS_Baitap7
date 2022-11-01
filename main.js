function Kiemtrasoduong(num){    
    if (num>=0){
        return true;
    }
    else{
        return false;
    }
}
document.getElementById("btnTotalPossitive").onclick=function(){
    var number1=document.getElementById("number1").value*1;
    var number2=document.getElementById("number2").value*1;
    var number3=document.getElementById("number3").value*1;
    var number4=document.getElementById("number4").value*1;
    var number5=document.getElementById("number5").value*1;
    var numbers=new Array(number1,number2,number3,number4,number5);
    var sum=0;
    for(var i=0;i<numbers.length;i++){
        if(Kiemtrasoduong(numbers[i])===true){
            sum+=numbers[i];
        }
    }
    var result="<p>Tổng các số dương là: "+sum+"</p>"
    document.getElementById("result").innerHTML=result;

}

document.getElementById("btnCountPossitive").onclick=function(){
    var number1=document.getElementById("number1").value*1;
    var number2=document.getElementById("number2").value*1;
    var number3=document.getElementById("number3").value*1;
    var number4=document.getElementById("number4").value*1;
    var number5=document.getElementById("number5").value*1;
    var numbers=new Array(number1,number2,number3,number4,number5);
    var count=0;
    for(var i=0;i<numbers.length;i++){
        if(Kiemtrasoduong(numbers[i])===true){
            count++;
        }
    }
    var result="<p>Tổng số các số dương là: "+count+"</p>"
    document.getElementById("result").innerHTML=result;
}

document.getElementById("btnFindMinumum").onclick=function(){
    var number1=document.getElementById("number1").value*1;
    var number2=document.getElementById("number2").value*1;
    var number3=document.getElementById("number3").value*1;
    var number4=document.getElementById("number4").value*1;
    var number5=document.getElementById("number5").value*1;
    var numbers=new Array(number1,number2,number3,number4,number5);
    var min=number1;
    for(var i=0;i<numbers.length;i++){
        if(min>numbers[i]){
            min=numbers[i];
        }
    }
    var result="<p>Số nhỏ nhất trong mảng là: "+min+"</p>"
    document.getElementById("result").innerHTML=result;
}

document.getElementById("btnFindMinumumPossitive").onclick=function(){
    var number1=document.getElementById("number1").value*1;
    var number2=document.getElementById("number2").value*1;
    var number3=document.getElementById("number3").value*1;
    var number4=document.getElementById("number4").value*1;
    var number5=document.getElementById("number5").value*1;
    var numbers=new Array(number1,number2,number3,number4,number5);
    var min;
    
    for(var i=0;i<numbers.length;i++){
        if(Kiemtrasoduong(numbers[i])===true){
            min=numbers[i];
            break;
        }
        
    }
    for(var i=0;i<numbers.length;i++){
        if(Kiemtrasoduong(numbers[i])===true&&min>numbers[i]){
            min=numbers[i];
        }
        
    }
    var result="";
    if (min===undefined){
        result+="<p>Mảng không có số dương</p>"
    }
    else{
        result="<p>Số dương nhỏ nhất là: "+min+"</p>"
    }
    
    document.getElementById("result").innerHTML=result;
}

document.getElementById("btnFindFinalEven").onclick=function(){
    var number1=document.getElementById("number1").value*1;
    var number2=document.getElementById("number2").value*1;
    var number3=document.getElementById("number3").value*1;
    var number4=document.getElementById("number4").value*1;
    var number5=document.getElementById("number5").value*1;
    var numbers=new Array(number1,number2,number3,number4,number5);
    var possitive;
    var result="";
    for(var i=0;i<numbers.length;i++){
        if(Kiemtrasoduong(numbers[i])===true){
            possitive=numbers[i];
        }
    }
    if(possitive===undefined){
        result+="<p>Mảng không có số dương</p>"
    }
    else{
        result="<p>Số dương cuối cùng của mảng là: "+possitive+"</p>"
    }
    
    document.getElementById("result").innerHTML=result;
}