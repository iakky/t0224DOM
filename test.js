function BMIcalculate(){
    var weight = document.querySelector('#weight').value;

    var height = document.querySelector('#height').value;

    var BMI = document.querySelector('#BMI');
    var ans = document.querySelector('#ans');
    BMI.innerHTML = BMIfun(weight,height);
    ans.innerHTML = BMIans(BMIfun(weight,height));
}

function BMIfun (weight,height){
    BMI = weight / (height*height);
    console.log(BMI);
    BMI = BMI.toFixed(2);
    return BMI;
}

function BMIans(BMI){
    if(BMI>=18 && BMI<=24){
        return "normal la";
    }
    else if(BMI<18){
        return "eat much please";
    }
    else{
        return "fatty";
    }
}