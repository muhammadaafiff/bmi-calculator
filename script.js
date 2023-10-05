const beratBadan = Number(document.getElementById("berat-badan").value)
const tinggiBadan = Number(document.getElementById("tinggi-badan").value)

function hitungBMI () {
    const hasilBMI = beratBadan/Math.pow(tinggiBadan/100, 2)
    console.log(hasilBMI)

    let kategori

    if(hasilBMI >= 0 && hasilBMI < 18.5){
        kategori = "underweight"
    }

    else if (hasilBMI >= 18.5 && hasilBMI <= 24.9){
        kategori = "Normal weight"
    }
    else if (hasilBMI >= 25 && hasilBMI <= 29.9){
        kategori = "Overweight"
    }
    else if (hasilBMI >= 30){
        kategori = "Obesity"
    }
    else {
        kategori = "The result is invalid"
    }
    
    const outputBMI = document.getElementById("output")
    outputBMI.innerHTML = `Your BMI is ${hasilBMI}. Which means you are ${kategori}`
}


