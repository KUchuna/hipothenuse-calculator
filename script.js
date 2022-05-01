let sideA;
let sideB;
let sideC;


document.getElementById("submit").onclick = function(){

    sideA = Math.pow(document.getElementById("side-a").value,2);
    sideA = Number(sideA);

    sideB = Math.pow(document.getElementById("side-b").value,2);
    sideB = Number(sideB);

    sideC = Math.pow(document.getElementById("side-c").value,2);
    sideC = Number(sideC);

    if(sideC == ""){
        sideC = Math.sqrt(sideA + sideB);
        document.getElementById("answer").innerHTML = sideC;
        console.log(sideC);
    }if(sideA == ""){
        sideA = Math.sqrt(sideC - sideB);
        document.getElementById("answer").innerHTML = sideA;
        console.log(sideA);
    }if(sideB == ""){
        sideB = Math.sqrt(sideC - sideA);
        document.getElementById("answer").innerHTML = sideB;
        console.log(sideB);
    }

    document.getElementById("side-a").value = "";
    document.getElementById("side-b").value = "";
    document.getElementById("side-c").value = "";

    


}
