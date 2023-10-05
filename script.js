const btnHitung = document.getElementById("btn-hitung");

btnHitung.addEventListener("click", (event) => {
  event.preventDefault();

  btnHitung.onclick = hitungBMI();

function hitungBMI() {
  let beratBadan = parseFloat(document.getElementById("berat-badan").value);
  let tinggiBadan = parseFloat(document.getElementById("tinggi-badan").value);

  let hasilBMI = beratBadan / Math.pow(tinggiBadan / 100, 2);
  console.log(hasilBMI);

  let kategori;

  if (hasilBMI >= 0 && hasilBMI < 18.5) {
    kategori = "underweight";
  } else if (hasilBMI >= 18.5 && hasilBMI <= 24.9) {
    kategori = "Normal weight";
  } else if (hasilBMI >= 25 && hasilBMI <= 29.9) {
    kategori = "Overweight";
  } else if (hasilBMI >= 30) {
    kategori = "Obesity";
  } else {
    kategori = "This score is invalid";
  }

  const outputBMI = document.getElementById("output");
  outputBMI.innerHTML = `Your BMI is ${hasilBMI.toFixed(2)} (${kategori})`;

  document.getElementById("berat-badan").value = "";
  document.getElementById("tinggi-badan").value = "";
}
});
