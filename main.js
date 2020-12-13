var student_array=[]
function submit(){
for (x=1; x<=5; x++){
  var student=document.getElementById("input"+x).value
  student_array.push(student)
}
console.log(student_array)
var displayarray=[]
for(y=0; y<student_array.length; y++){
  displayarray.push("<h4>"+student_array[y]+"</h4>")
}
document.getElementById("output").innerHTML=displayarray
var array_without_commas=displayarray.join(" ")
document.getElementById("output_without_commas").innerHTML=array_without_commas
  document.getElementById("sort").style.display="inline-block"
  document.getElementById("submit").style.display="none"
}
function sort(){
    student_array.sort()
    var SAWC=[]
    for(z=0; z<student_array.length; z++){
 SAWC.push("<h4>"+student_array[z]+"</h4>")
}
    document.getElementById("output").innerHTML=SAWC
    var FArray=SAWC.join(" ")
    document.getElementById("output_without_commas").innerHTML=FArray
    }