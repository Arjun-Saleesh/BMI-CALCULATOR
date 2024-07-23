var age=document.getElementById('age');
var male=document.getElementById('male');
var female=document.getElementById('female');
var height=document.getElementById('height');
var weight=document.getElementById('weight');
let resultArea = document.querySelector(".comment");



function calculate(){
    if(age.value=='' || height.value=='' || weight.value=='' || (!male.checked && !female.checked)){
        alert('Please enter all fields');
    }else{
        calculatebmi();
    }
}



function calculatebmi(){
    var array=[age.value, height.value , weight.value];
    if(male.checked){
        array.push("male")
    }else if(female.checked){
        array.push("female")
    }
    var bmi=Number(array[2])/(Number(array[1])/100*Number(array[1])/100);
    var result='';
    
    if(bmi<18.5){
        result = 'Underweight' ;
    }else if(18.5<=bmi&&bmi<=24.9){
        result = 'Healthy';
    }else if(25<=bmi&&bmi<=29.9){
        result = 'Overweight';
    }else if(30<=bmi&&bmi<=34.9){
        result = 'Obese';
    }else if(35<=bmi){
        result = 'Extremely obese';
    }
    document.getElementById('result').innerHTML = bmi.toFixed(2);
    document.getElementById('sum').value = result;
}
