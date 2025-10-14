<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Kalkulator</title>
  <style>
    body {
      font-family: Arial;
      background: #f3f3f3;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    .kalkulator {
      background: white;
      padding: 15px;
      border-radius: 10px;
      box-shadow: 0 0 8px rgba(0,0,0,0.2);
      width: 210px;
    }

    input {
      width: 100%;
      height: 40px;
      text-align: right;
      font-size: 20px;
      margin-bottom: 10px;
      padding: 5px;
    }

    .baris {
      display: flex;
      justify-content: space-between;
      margin-bottom: 5px;
    }

    button {
      width: 45px;
      height: 45px;
      font-size: 18px;
      cursor: pointer;
    }
  </style>
</head>
<body>

  <div class="kalkulator">
    <input type="text" id="layar" readonly>

    <div class="baris">
      <button onclick="hapus()">C</button>
      <button onclick="tambah('/')">÷</button>
      <button onclick="tambah('*')">×</button>
      <button onclick="tambah('-')">−</button>
    </div>

    <div class="baris">
      <button onclick="tambah('7')">7</button>
      <button onclick="tambah('8')">8</button>
      <button onclick="tambah('9')">9</button>
      <button onclick="tambah('+')">+</button>
    </div>

    <div class="baris">
      <button onclick="tambah('4')">4</button>
      <button onclick="tambah('5')">5</button>
      <button onclick="tambah('6')">6</button>
      <button onclick="hitung()">=</button>
    </div>

    <div class="baris">
      <button onclick="tambah('1')">1</button>
      <button onclick="tambah('2')">2</button>
      <button onclick="tambah('3')">3</button>
      <button onclick="tambah('0')">0</button>
    </div>
  </div>

  <script>
    let layar = document.getElementById("layar");

    function tambah(isi) {
      layar.value += isi;
    }

    function hapus() {
      layar.value = "";
    }

    function hitung() {
      try {
        layar.value = eval(layar.value);
      } catch {
        layar.value = "Error";
      }
    }
  </script>

</body>
</html>
