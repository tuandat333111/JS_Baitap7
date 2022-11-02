var numbers=[];
document.getElementById("btnAddNumber").onclick=function(){
    var num=document.getElementById("number").value*1;
    numbers.push(num);
    document.getElementById("number").value="";
    var resultArray="Mảng: ";
    for(var i=0;i<numbers.length;i++){
        resultArray+=" "+numbers[i];
    }
    document.getElementById("resultArray").innerHTML=resultArray;
}
var css=document.getElementById("result");
    css.style.height="auto";
    css.style.width="auto";
    css.style.backgroundColor="gray";    
    css.style.border="1px solid transparent";
    css.style.borderRadius="10px";
    css.style.textAlign="center";
    

function Kiemtrasoduong(num){    
    if (num>=0){
        return true;
    }
    else{
        return false;
    }
}
function Kiemtrachanle(num){
    if(num%2===0){
        return true;
    }
    else{
        return false;
    }
}
function Kiemtrasonguyento(num){
    var count=0;
    for(var i=1;i<=num;i++)
    {
        if (num%i==0){
            count++;
        }
    }
    if(count===2){
        return true;
    }
    else{
        return false;
    }
}
function Kiemtrasonguyen(num){
    if (num%1===0){
        return true;
    
    }
    else{
        return false;
    }
}
//Bài 1
document.getElementById("btnTotalPossitive").onclick=function(){      
    var sum=0;
    for(var i=0;i<numbers.length;i++){
        if(Kiemtrasoduong(numbers[i])===true){
            sum+=numbers[i];
        }
    }
    var result="<p>Tổng các số dương là: "+sum+"</p>"
    css.innerHTML=result;
}
//Bài 2
document.getElementById("btnCountPossitive").onclick=function(){
    var count=0;
    for(var i=0;i<numbers.length;i++){
        if(Kiemtrasoduong(numbers[i])===true){
            count++;
        }
    }
    var result="<p>Tổng số các số dương là: "+count+"</p>"
    css.innerHTML=result;
}
//Bài 3
document.getElementById("btnFindMinumum").onclick=function(){
    var min=numbers[0];
    for(var i=0;i<numbers.length;i++){
        if(min>numbers[i]){
            min=numbers[i];
        }
    }
    var result="<p>Số nhỏ nhất trong mảng là: "+min+"</p>"
    document.getElementById("result").innerHTML=result;
}
//Bài 4
document.getElementById("btnFindMinumumPossitive").onclick=function(){
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
//Bài 5
document.getElementById("btnFindFinalEven").onclick=function(){
    var evennumber=-1;
    var result="";
    for(var i=0;i<numbers.length;i++){
        if(Kiemtrachanle(numbers[i])===true){
            evennumber=numbers[i];
        }
        
    }
    if(evennumber===-1){
        result+="<p>Mảng không có số chẵn</p>"
    }
    else{
        result="<p>Số chẵn cuối cùng của mảng là: "+evennumber+"</p>"
    }
    
    document.getElementById("result").innerHTML=result;
}
//Bài 6
document.getElementById("btnChangePosition").onclick=function(){
    var position1=document.getElementById("position1").value*1;
    var position2=document.getElementById("position2").value*1;
    var result="Mảng mới là: ";   
    var temp=numbers[position1-1];
    numbers[position1-1]=numbers[position2-1];
    numbers[position2-1]=temp;
    for (var i=0;i<numbers.length;i++){
        result+=" "+numbers[i];
    }
    document.getElementById("result").innerHTML=result;
}

//Bài 7
document.getElementById("btnArrangeAscending").onclick=function(){
    var result="Mảng mới tăng dần là: ";
    
    for (var i=0;i<numbers.length-1;i++){
        for(var j=i+1;j<numbers.length;j++){
            if(numbers[i]>numbers[j]){
                var temp=numbers[i];
                numbers[i]=numbers[j];
                numbers[j]=temp;
            }
            
        }
    }
    for (var i=0;i<numbers.length;i++){
        result+=" "+numbers[i];
    }   
    console.log(result);
    document.getElementById("result").innerHTML=result;
}
//Bài 8
document.getElementById("btnFirstPrime").onclick=function(){
    var result="Số nguyên tố đầu tiên là: ";
    var primeNumber=-1;
    for (var i=0;i<numbers.length;i++){
       if(Kiemtrasonguyento(numbers[i])===true){
            primeNumber=numbers[i];
            break;
        }           
    }
    if(primeNumber===-1){
        result="Không có số nguyên tố";
    }
    else{
        result+=primeNumber;
    }
    document.getElementById("result").innerHTML=result;
}
//Bai 9
document.getElementById("btnAddNumber1").onclick=function(){
    var num=document.getElementById("number1").value*1;
    numbers.push(num);
    document.getElementById("number1").value="";
    var resultArray="Mảng: ";
    for(var i=0;i<numbers.length;i++){
        resultArray+=" "+numbers[i];
    }
    document.getElementById("resultArray").innerHTML=resultArray;
}
document.getElementById("btnCountInteger").onclick=function(){
    var result="";
    var count=0;
    for(var i=0;i<numbers.length;i++){
        if (Kiemtrasonguyen(numbers[i])===true){
            count++;
        }
    }
    result+="Tổng số nguyên trong mảng là: "+count;
    document.getElementById("result").innerHTML=result;
}
//Bài 10
document.getElementById("btnCompare").onclick=function(){
    var result="";
    var countPlus=0;
    var countMinus=0;
    for(var i=0;i<numbers.length;i++){
        if (numbers[i]>=0){
            countPlus++;
        }
        else{
            countMinus++;
        }
    }
    if(countPlus>countMinus){
        result="Số các số dương nhiều hơn số các số âm";
    }
    else if(countPlus==countMinus){
        result="Số các số dương bằng số các số âm";
    }
    else{
        result="Số các số dương nhỏ hơn số các số âm";
    }
    
    css.innerHTML=result;
}