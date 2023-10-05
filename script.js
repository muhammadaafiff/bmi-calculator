const btnHitung = document.getElementById("btn-hitung");

btnHitung.addEventListener("click", (event) => {
  event.preventDefault();

  btnHitung.onclick = hitungBMI();

function hitungBMI() {
  let beratBadan = parseFloat(document.getElementById("berat-badan").value);
  let tinggiBadan = parseFloat(document.getElementById("tinggi-badan").value);

  let skorBMI = beratBadan / Math.pow(tinggiBadan / 100, 2);
  
  let kategori;

  if (skorBMI >= 0 && skorBMI < 18.5) {
    kategori = "underweight";
  } else if (skorBMI >= 18.5 && skorBMI <= 24.9) {
    kategori = "normal weight";
  } else if (skorBMI >= 25 && skorBMI <= 29.9) {
    kategori = "overweight";
  } else if (skorBMI >= 30) {
    kategori = "obesity";
  } else {
    kategori = "invalid score";
  }

  const hasilBMI = document.getElementById("hasil");
  hasilBMI.innerHTML = `Weight : ${beratBadan} kg, Height : ${tinggiBadan} cm <br>
  Your BMI is ${skorBMI.toFixed(2)} (${kategori})`;

  document.getElementById("berat-badan").value = "";
  document.getElementById("tinggi-badan").value = "";
}
});
