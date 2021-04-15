


// 1-homework

var ism = prompt('Ismingizni kiriting?')
if(ism == 'Xurshidbek'){
    alert('Hello Boss')   
}
else{
   alert('Hello guest')   
}


// 2-homework

var  yosh = prompt('Yoshingizni kiriting')
if( yosh <= 0){
    alert("Nimadir notog'ri ketib qoldi")   
}
else if(0 <= yosh,yosh <= 18){
    alert("Yoshsiz. O'qishingiz kerak")   
}
else if(   18 < yosh, yosh <= 50){
    alert("Ishlashingiz kerak")   
}
else if(   50 < yosh, yosh <= 59){
    alert("Yaqinda pensiyaga chiqasiz")   
}
else if(   59 < yosh, yosh <= 150){
    alert("Pensiyanerga o'xshaysiz, hali tirik bo'lsangiz")   
}
else  {
   alert("Nimadir notog'ri ketib qoldi")   
}


// 3-homework

var a = +prompt("1-soni kiriting") 
var b = +prompt("2-soni kiriting") 
var c = +prompt("3-soni kiriting") 
    
if (b  > a && a > c ) {
    alert("O'rta qiymat "+a) 
}     
else  if (b  < a && a < c ){
    alert("O'rta qiymat "+a) 
}
else  if (a > b && b > c ) {
    alert("O'rta qiymat "+b) 
  }    
else  if ( a < b && b < c ) {
    alert("O'rta qiymat "+b) 
  }    
else if (b > c && c > a) {
    alert("O'rta qiymat "+c) 
}
else if ( b < c && c < a) {
    alert("O'rta qiymat "+c) 
}


// 4-homework

var son=+prompt("Son kiriting")
k=0
while(k <= son){
c=k
console.log(c);
k=c+1
}
alert("Rosa asabni buzadigan narsa ekan torisi");




