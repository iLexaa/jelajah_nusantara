<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Kalkulator Diskon</title>
  <style>
    body {
      font-family: Arial;
      background: #f3f3f3;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    .kotak {
      background: white;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 0 8px rgba(0,0,0,0.2);
      width: 250px;
    }

    input {
      width: 100%;
      height: 35px;
      margin-bottom: 10px;
      font-size: 16px;
      padding: 5px;
    }

    button {
      width: 100%;
      height: 40px;
      font-size: 16px;
      cursor: pointer;
      margin-top: 5px;
    }

    p {
      font-size: 18px;
      text-align: center;
    }
  </style>
</head>
<body>

  <div class="kotak">
    <h3>Kalkulator Diskon</h3>
    <input id="harga" type="number" placeholder="Harga Asli">
    <input id="diskon" type="number" placeholder="Diskon (%)">
    <button onclick="hitungDiskon()">Hitung</button>
    <p id="hasil"></p>
  </div>

  <script>
    function hitungDiskon() {
      let harga = document.getElementById("harga").value;
      let diskon = document.getElementById("diskon").value;

      if (harga === "" || diskon === "") {
        document.getElementById("hasil").innerText = "Isi dulu semua kolom!";
        return;
      }

      let potongan = (harga * diskon) / 100;
      let total = harga - potongan;

      document.getElementById("hasil").innerText =
        "Harga setelah diskon: Rp " + total;
    }
  </script>

</body>
</html>
