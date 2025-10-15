'use client';

import { useState, useEffect } from 'react';

type EasterEggKey = 'yangbisadiketik' | 'apadi' | 'yahsatupi';

type EasterEggSourceFile = {
  fileName: string;
  code: string;
};

type EasterEggDetails = {
  heading: string;
  description: string;
  files: EasterEggSourceFile[];
};

const yangbisadiketikSources: EasterEggSourceFile[] = [
  {
    fileName: 'kalkulator.md',
    code: String.raw`<!DOCTYPE html>
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
</html>`
  },
  {
    fileName: 'kalkulator.md',
    code: String.raw`<!DOCTYPE html>
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
</html>`
  },
  {
    fileName: 'kalkuInput.md',
    code: String.raw`<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Kalkulator Manual</title>
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
      width: 260px;
    }

    h3 {
      text-align: center;
      margin-bottom: 15px;
    }

    input, select, button {
      width: 100%;
      height: 35px;
      font-size: 16px;
      margin-bottom: 10px;
      padding: 5px;
    }

    p {
      font-size: 18px;
      text-align: center;
      font-weight: bold;
    }
  </style>
</head>
<body>

  <div class="kotak">
    <h3>Kalkulator Manual</h3>

    <input id="angka1" type="number" placeholder="Angka pertama">
    <select id="operator">
      <option value="+">+</option>
      <option value="-">−</option>
      <option value="*">×</option>
      <option value="/">÷</option>
    </select>
    <input id="angka2" type="number" placeholder="Angka kedua">

    <button onclick="hitung()">Hitung</button>

    <p id="hasil"></p>
  </div>

  <script>
    function hitung() {
      let a = parseFloat(document.getElementById("angka1").value);
      let b = parseFloat(document.getElementById("angka2").value);
      let op = document.getElementById("operator").value;
      let hasil = 0;

      if (isNaN(a) || isNaN(b)) {
        document.getElementById("hasil").innerText = "Isi dulu kedua angka!";
        return;
      }

      if (op === "+") hasil = a + b;
      else if (op === "-") hasil = a - b;
      else if (op === "*") hasil = a * b;
      else if (op === "/") {
        if (b === 0) {
          document.getElementById("hasil").innerText = "Tidak bisa dibagi 0!";
          return;
        }
        hasil = a / b;
      }

      document.getElementById("hasil").innerText = "Hasil: " + hasil;
    }
  </script>

</body>
</html>
`
  },
  {
    fileName: 'diskon.md',
    code: String.raw`<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Kalkulator Diskon Validasi</title>
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
      width: 260px;
    }

    h3 {
      text-align: center;
      margin-bottom: 15px;
    }

    input, button {
      width: 100%;
      height: 35px;
      margin-bottom: 10px;
      font-size: 16px;
      padding: 5px;
    }

    button {
      cursor: pointer;
    }

    p {
      text-align: center;
      font-size: 18px;
      font-weight: bold;
    }
  </style>
</head>
<body>

  <div class="kotak">
    <h3>Kalkulator Diskon</h3>

    <input id="harga" type="number" placeholder="Harga asli">
    <input id="diskon" type="number" placeholder="Diskon (%)">
    <button onclick="hitungDiskon()">Hitung</button>
    <p id="hasil"></p>
  </div>

  <script>
    function hitungDiskon() {
      let harga = parseFloat(document.getElementById("harga").value);
      let diskon = parseFloat(document.getElementById("diskon").value);
      let hasil = document.getElementById("hasil");

      // validasi input kosong
      if (isNaN(harga) || isNaN(diskon)) {
        hasil.innerText = "Isi semua kolom terlebih dahulu!";
        return;
      }

      // validasi harga > 0
      if (harga <= 0) {
        hasil.innerText = "Harga harus lebih dari 0!";
        return;
      }

      // validasi diskon tidak boleh lebih dari 100
      if (diskon < 0 || diskon > 100) {
        hasil.innerText = "Diskon harus antara 0% sampai 100%!";
        return;
      }

      // hitung potongan dan total
      let potongan = (harga * diskon) / 100;
      let total = harga - potongan;

      hasil.innerText = 
        "Harga setelah diskon: Rp " + total.toFixed(2);
    }
  </script>

</body>
</html>
`
  },
  {
    fileName: 'todo.md',
    code: String.raw`<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>To Do List Lengkap</title>
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
      width: 300px;
    }

    h3 {
      text-align: center;
      margin-bottom: 10px;
    }

    input {
      width: 100%;
      height: 35px;
      padding: 5px;
      margin-bottom: 10px;
      font-size: 16px;
    }

    button {
      width: 100%;
      height: 35px;
      font-size: 16px;
      cursor: pointer;
      margin-bottom: 10px;
    }

    ul {
      list-style: none;
      padding: 0;
    }

    li {
      background: #eee;
      margin-bottom: 5px;
      padding: 8px;
      border-radius: 5px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    li.selesai {
      text-decoration: line-through;
      color: gray;
    }

    .hapus {
      background: red;
      color: white;
      border: none;
      padding: 3px 6px;
      border-radius: 4px;
      cursor: pointer;
    }

    .edit {
      background: orange;
      color: white;
      border: none;
      padding: 3px 6px;
      border-radius: 4px;
      margin-right: 5px;
      cursor: pointer;
    }

    .aksi {
      display: flex;
      gap: 5px;
    }
  </style>
</head>
<body>

  <div class="kotak">
    <h3>To Do List</h3>
    <input id="tugas" type="text" placeholder="Tulis tugas...">
    <button onclick="tambahTugas()">Tambah</button>
    <ul id="daftar"></ul>
  </div>

  <script>
    function tambahTugas() {
      let input = document.getElementById("tugas");
      let teks = input.value.trim();
      if (teks === "") return;

      let li = document.createElement("li");
      let span = document.createElement("span");
      span.textContent = teks;

      let editBtn = document.createElement("button");
      editBtn.textContent = "Edit";
      editBtn.className = "edit";
      editBtn.onclick = function() {
        let baru = prompt("Ubah tugas:", span.textContent);
        if (baru !== null && baru.trim() !== "") {
          span.textContent = baru;
        }
      };

      let hapusBtn = document.createElement("button");
      hapusBtn.textContent = "X";
      hapusBtn.className = "hapus";
      hapusBtn.onclick = function() {
        li.remove();
      };

      span.onclick = function() {
        li.classList.toggle("selesai");
      };

      let divAksi = document.createElement("div");
      divAksi.className = "aksi";
      divAksi.appendChild(editBtn);
      divAksi.appendChild(hapusBtn);

      li.appendChild(span);
      li.appendChild(divAksi);
      document.getElementById("daftar").appendChild(li);

      input.value = "";
    }
  </script>

</body>
</html>`
  },
  {
    fileName: 'todoLocal.md',
    code: String.raw`<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>To Do List dengan LocalStorage</title>
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
      width: 300px;
    }

    h3 {
      text-align: center;
      margin-bottom: 10px;
    }

    input {
      width: 100%;
      height: 35px;
      padding: 5px;
      margin-bottom: 10px;
      font-size: 16px;
    }

    button {
      cursor: pointer;
      border: none;
      border-radius: 4px;
      height: 30px;
    }

    ul {
      list-style: none;
      padding: 0;
    }

    li {
      background: #eee;
      margin-bottom: 5px;
      padding: 8px;
      border-radius: 5px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    li.selesai {
      text-decoration: line-through;
      color: gray;
      background: #dcdcdc;
    }

    .hapus {
      background: red;
      color: white;
      padding: 0 6px;
    }

    .edit {
      background: orange;
      color: white;
      padding: 0 6px;
    }

    .centang {
      background: green;
      color: white;
      padding: 0 6px;
    }

    .aksi {
      display: flex;
      gap: 5px;
    }
  </style>
</head>
<body>

  <div class="kotak">
    <h3>To Do List</h3>
    <input id="tugas" type="text" placeholder="Tulis tugas...">
    <button onclick="tambahTugas()">Tambah</button>
    <ul id="daftar"></ul>
  </div>

  <script>
    let daftar = [];


    window.onload = function() {
      let data = localStorage.getItem("tugas");
      if (data) {
        daftar = JSON.parse(data);
        render();
      }
    };

    function simpan() {
      localStorage.setItem("tugas", JSON.stringify(daftar));
    }

    function tambahTugas() {
      let input = document.getElementById("tugas");
      let teks = input.value.trim();
      if (teks === "") return;

      daftar.push({ teks: teks, selesai: false });
      input.value = "";
      simpan();
      render();
    }

    function hapusTugas(index) {
      daftar.splice(index, 1);
      simpan();
      render();
    }

    function editTugas(index) {
      let baru = prompt("Ubah tugas:", daftar[index].teks);
      if (baru !== null && baru.trim() !== "") {
        daftar[index].teks = baru.trim();
        simpan();
        render();
      }
    }

    function toggleSelesai(index) {
      daftar[index].selesai = !daftar[index].selesai;
      simpan();
      render();
    }

    function render() {
      let list = document.getElementById("daftar");
      list.innerHTML = "";
      daftar.forEach((item, i) => {
        let li = document.createElement("li");
        if (item.selesai) li.classList.add("selesai");

        let span = document.createElement("span");
        span.textContent = item.teks;

   
        let centangBtn = document.createElement("button");
        centangBtn.textContent = "✅";
        centangBtn.className = "centang";
        centangBtn.onclick = () => toggleSelesai(i);

        let editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.className = "edit";
        editBtn.onclick = () => editTugas(i);

        let hapusBtn = document.createElement("button");
        hapusBtn.textContent = "X";
        hapusBtn.className = "hapus";
        hapusBtn.onclick = () => hapusTugas(i);

        let divAksi = document.createElement("div");
        divAksi.className = "aksi";
        divAksi.appendChild(centangBtn);
        divAksi.appendChild(editBtn);
        divAksi.appendChild(hapusBtn);

        li.appendChild(span);
        li.appendChild(divAksi);
        list.appendChild(li);
      });
    }
  </script>

</body>
</html>
`
  }
];
const apadiSources: EasterEggSourceFile[] = [
  {
    fileName: 'kalkulator.md',
    code: String.raw`if (harga === 0 || diskon === 0) {
  alert("Harga dan diskon tidak boleh bernilai 0!");
  return;
}

`
  },
  {
    fileName: 'diskon.md',
    code: String.raw`<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Kalkulator Diskon</title>
  <style>
    * {
      box-sizing: border-box;
      font-family: "Poppins", sans-serif;
    }

    body {
      background: linear-gradient(135deg, #1e1f29, #2d2f3a);
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
    }

    .container {
      text-align: center;
    }

    .card {
      background: #2c2f3f;
      padding: 25px;
      border-radius: 15px;
      box-shadow: 0 8px 20px rgba(0,0,0,0.4);
      width: 320px;
      margin: 20px auto;
    }

    h1 {
      margin-bottom: 10px;
      font-size: 1.8rem;
    }

    label {
      display: block;
      text-align: left;
      margin-top: 15px;
      margin-bottom: 5px;
      font-size: 0.95rem;
    }

    input {
      width: 100%;
      padding: 10px;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      outline: none;
      background: #1c1d26;
      color: #00ff99;
    }

    button {
      width: 100%;
      background: #00b894;
      border: none;
      color: white;
      font-size: 1.1rem;
      padding: 12px;
      border-radius: 10px;
      margin-top: 20px;
      cursor: pointer;
      transition: 0.2s;
    }

    button:hover {
      background: #00d3aa;
    }

    .hasil {
      background: #1c1d26;
      margin-top: 20px;
      padding: 15px;
      border-radius: 10px;
      text-align: left;
    }

    .hasil p {
      margin: 5px 0;
      font-size: 1rem;
    }

    span {
      color: #00ff99;
      font-weight: 600;
    }
  </style>
</head>
<body>

  <div class="container">
    <h1>💸 Kalkulator Diskon</h1>
    <div class="card">
      <label for="harga">Harga Barang (Rp)</label>
      <input type="number" id="harga">

      <label for="diskon">Diskon (%)</label>
      <input type="number" id="diskon">

      <button onclick="hitungDiskon()">Hitung</button>

      <div class="hasil" id="hasil">
        <p>Harga Setelah Diskon: <span id="hargaSetelah">Rp 0</span></p>
      </div>
    </div>
  </div>

  <script>
    function hitungDiskon() {
      const harga = parseFloat(document.getElementById("harga").value);
      const diskon = parseFloat(document.getElementById("diskon").value);

      if (isNaN(harga) || isNaN(diskon)) {
        alert("Harap isi semua kolom dengan angka yang valid!");
        return;
      }

      const hargaSetelah = harga - (harga * diskon / 100);

      document.getElementById("hargaSetelah").textContent =
        "Rp " + hargaSetelah.toLocaleString("id-ID");
    }
  </script>

</body>
</html>

`
  },
  {
    fileName: 'TodoList.md',
    code: String.raw`<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>To-Do List dengan Edit</title>
  <style>
    * {
      box-sizing: border-box;
      font-family: "Poppins", sans-serif;
    }

    body {
      background: linear-gradient(135deg, #1e1f29, #2d2f3a);
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
    }

    .todo-container {
      background: #2c2f3f;
      padding: 25px;
      border-radius: 15px;
      box-shadow: 0 8px 20px rgba(0,0,0,0.4);
      width: 380px;
    }

    h1 {
      text-align: center;
      margin-bottom: 20px;
      font-size: 1.8rem;
      color: #00ff99;
    }

    .input-area {
      display: flex;
      gap: 10px;
      margin-bottom: 20px;
    }

    input {
      flex: 1;
      padding: 10px;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      outline: none;
      background: #1c1d26;
      color: #808080;
    }

    button {
      background: #00b894;
      border: none;
      color: white;
      font-size: 1rem;
      padding: 10px 15px;
      border-radius: 8px;
      cursor: pointer;
      transition: 0.2s;
    }

    button:hover {
      background: #00d3aa;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    li {
      background: #1c1d26;
      padding: 10px 12px;
      margin-bottom: 10px;
      border-radius: 8px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: 0.2s;
    }

    li.done {
      text-decoration: line-through;
      color: #777;
    }

    .task-text {
      flex: 1;
      cursor: pointer;
    }

    .action-buttons {
      display: flex;
      gap: 6px;
    }

    .edit-btn, .delete-btn, .save-btn {
      border: none;
      border-radius: 5px;
      padding: 5px 8px;
      cursor: pointer;
      transition: 0.2s;
      color: white;
    }

    .edit-btn { background: #ff9500; }
    .edit-btn:hover { background: #ffad33; }

    .delete-btn { background: #d63031; }
    .delete-btn:hover { background: #ff4d4d; }

    .save-btn { background: #00b894; }
    .save-btn:hover { background: #00d3aa; }

    .edit-input {
      width: 100%;
      padding: 5px;
      border: none;
      border-radius: 5px;
      background: #2c2f3f;
      color: #3c3c3c;
      font-size: 1rem;
    }
  </style>
</head>
<body>

  <div class="todo-container">
    <h1> To Do List</h1>

    <div class="input-area">
      <input type="text" id="taskInput" placeholder="Tambahkan tugas...">
      <button onclick="addTask()">Tambah</button>
    </div>

    <ul id="taskList"></ul>
  </div>

  <script>
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    function addTask() {
      const text = taskInput.value.trim();
      if (text === "") {
        alert("Masukkan tugas terlebih dahulu!");
        return;
      }

      const li = document.createElement("li");

      const span = document.createElement("span");
      span.textContent = text;
      span.classList.add("task-text");
      span.addEventListener("click", () => {
        li.classList.toggle("done");
      });

      const actionDiv = document.createElement("div");
      actionDiv.classList.add("action-buttons");

      const editBtn = document.createElement("button");
      editBtn.textContent = "Edit";
      editBtn.classList.add("edit-btn");
      editBtn.addEventListener("click", () => editTask(li, span, editBtn));

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Hapus";
      deleteBtn.classList.add("delete-btn");
      deleteBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        li.remove();
      });

      actionDiv.appendChild(editBtn);
      actionDiv.appendChild(deleteBtn);

      li.appendChild(span);
      li.appendChild(actionDiv);
      taskList.appendChild(li);

      taskInput.value = "";
    }

    function editTask(li, span, editBtn) {
      const currentText = span.textContent;
      const inputEdit = document.createElement("input");
      inputEdit.value = currentText;
      inputEdit.classList.add("edit-input");

      li.replaceChild(inputEdit, span);
      editBtn.textContent = "Simpan";
      editBtn.classList.remove("edit-btn");
      editBtn.classList.add("save-btn");

      editBtn.onclick = () => {
        const newText = inputEdit.value.trim();
        if (newText === "") {
          alert("Teks tidak boleh kosong!");
          return;
        }
        span.textContent = newText;
        li.replaceChild(span, inputEdit);
        editBtn.textContent = "Edit";
        editBtn.classList.remove("save-btn");
        editBtn.classList.add("edit-btn");
        editBtn.onclick = () => editTask(li, span, editBtn);
      };
    }

    taskInput.addEventListener("keypress", function(e) {
      if (e.key === "Enter") addTask();
    });
  </script>

</body>
</html>


`
  },
  
];
const yahsatupiSources: EasterEggSourceFile[] = [
  {
    fileName: 'kalkulator.md',
    code: String.raw`<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Kalkulator Modern</title>
  <style>

    * {
      box-sizing: border-box;
      font-family: "Poppins", sans-serif;
    }

    body {
      margin: 0;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #1f1c2c, #928dab);
      color: #fff;
    }


    .kalkulator {
      width: 340px;
      background: rgba(255, 255, 255, 0.12);
      border-radius: 20px;
      backdrop-filter: blur(10px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
      padding: 25px 30px;
      text-align: center;
      animation: fadeIn 0.7s ease;
    }

    .kalkulator h2 {
      margin-bottom: 20px;
      font-weight: 600;
      letter-spacing: 1px;
      color: #ffe985;
      text-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
    }


    .input-box {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    input[type="number"] {
      padding: 12px;
      border: none;
      border-radius: 12px;
      outline: none;
      font-size: 16px;
      text-align: center;
      color: #333;
      background: #fff;
      transition: all 0.2s ease-in-out;
    }

    input[type="number"]:focus {
      box-shadow: 0 0 8px #ffe985;
      transform: scale(1.03);
    }


    .tombol {
      margin-top: 20px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
    }

    button {
      background: #ffe985;
      color: #222;
      border: none;
      border-radius: 10px;
      padding: 12px 0;
      font-size: 18px;
      cursor: pointer;
      font-weight: 600;
      transition: all 0.2s ease;
    }

    button:hover {
      background: #fff7b0;
      transform: translateY(-3px);
      box-shadow: 0 4px 10px rgba(255, 255, 255, 0.3);
    }


    .hasil {
      margin-top: 25px;
      background: rgba(0, 0, 0, 0.3);
      padding: 12px;
      border-radius: 10px;
      font-size: 18px;
      min-height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.3s;
    }

    .hasil strong {
      color: #84fab0;
    }

    .error {
      color: #ff8b8b;
    }

    
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes pop {
      0% { transform: scale(1); }
      50% { transform: scale(1.1); }
      100% { transform: scale(1); }
    }
  </style>
</head>
<body>

  <div class="kalkulator">
    <h2>🧮 Kalkulator Modern</h2>

    
    <div class="input-box">
      <input type="number" id="angka1" placeholder="Masukkan angka pertama">
      <input type="number" id="angka2" placeholder="Masukkan angka kedua">
    </div>

    
    <div class="tombol">
      <button onclick="hitung('+')">+</button>
      <button onclick="hitung('-')">−</button>
      <button onclick="hitung('*')">×</button>
      <button onclick="hitung('/')">÷</button>
    </div>

    
    <div id="hasil" class="hasil">Hasil akan muncul di sini</div>
  </div>


   
  <script>
    function hitung(op) {
      const angka1 = parseFloat(document.getElementById("angka1").value);
      const angka2 = parseFloat(document.getElementById("angka2").value);
      const hasilBox = document.getElementById("hasil");

      
      if (isNaN(angka1) || isNaN(angka2)) {
        hasilBox.innerHTML = "<span class='error'>⚠️ Harap isi kedua angka dengan benar!</span>";
        return;
      }

      let hasil;

      switch (op) {
        case '+':
          hasil = angka1 + angka2;
          break;
        case '-':
          hasil = angka1 - angka2;
          break;
        case '*':
          hasil = angka1 * angka2;
          break;
        case '/':
          if (angka2 === 0) {
            hasilBox.innerHTML = "<span class='error'>❌ Tidak bisa dibagi dengan nol!</span>";
            return;
          }
          hasil = angka1 / angka2;
          break;
      }

      hasilBox.innerHTML = \`✅ Hasil: <strong>\${hasil}</strong>\`;
      hasilBox.style.animation = "pop 0.3s ease";
      setTimeout(() => hasilBox.style.animation = "", 300);
    }
  </script>

</body>
</html>

`
  },
  {
    fileName: 'diskon.md',
    code: String.raw`<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0">
<title>Aplikasi Perhitungan Diskon</title>
<style>
  
  * { box-sizing: border-box; font-family: "Poppins", sans-serif; }
  body {
    background: linear-gradient(135deg, #232526, #414345);
    height: 100vh;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  
  .card {
    background: #ffffff15;
    backdrop-filter: blur(8px);
    width: 330px;
    border-radius: 16px;
    padding: 30px 25px;
    box-shadow: 0 6px 20px rgba(0,0,0,0.4);
    color: #fff;
    text-align: center;
  }

  .card h2 {
    margin-bottom: 20px;
    font-size: 20px;
    color: #ffe98a;
  }

  
  input {
    width: 100%;
    padding: 10px;
    margin: 8px 0;
    border: none;
    border-radius: 8px;
    font-size: 15px;
    text-align: center;
    outline: none;
  }

  input:focus {
    box-shadow: 0 0 5px #ffe98a;
  }

  button {
    width: 100%;
    margin-top: 10px;
    padding: 10px;
    border: none;
    border-radius: 8px;
    background-color: #ffe98a;
    font-weight: 600;
    cursor: pointer;
    transition: 0.2s;
  }

  button:hover {
    background-color: #fff3b0;
  }

  
  .hasil {
    margin-top: 20px;
    background: rgba(0,0,0,0.3);
    border-radius: 8px;
    padding: 12px;
    min-height: 60px;
    font-size: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .error { color: #ff8a8a; }
  .success { color: #b6f7b0; }
</style>
</head>
<body>

  
  <div class="card">
    <h2>💰 Aplikasi Perhitungan Diskon</h2>

    
    <input type="number" id="harga" placeholder="Masukkan harga barang (Rp)">

    
    <input type="number" id="diskon" placeholder="Masukkan diskon (%)">

    
    <button onclick="hitungDiskon()">Hitung</button>

    
    <div id="hasil" class="hasil">Hasil akan muncul di sini</div>
  </div>

  
  <script>
    function hitungDiskon() {
      const harga = parseFloat(document.getElementById("harga").value);
      const diskon = parseFloat(document.getElementById("diskon").value);
      const hasil = document.getElementById("hasil");

      
      if (isNaN(harga) || isNaN(diskon)) {
        hasil.innerHTML = "<span class='error'>⚠️ Isi harga dan diskon dengan benar!</span>";
        return;
      }
      if (harga <= 0) {
        hasil.innerHTML = "<span class='error'>⚠️ Harga harus lebih dari 0!</span>";
        return;
      }
      if (diskon < 0 || diskon > 100) {
        hasil.innerHTML = "<span class='error'>⚠️ Diskon harus antara 0 - 100%!</span>";
        return;
      }

      /
      const potongan = harga * (diskon / 100);
      const total = harga - potongan;

      
      hasil.innerHTML = \`
        <span class='success'>💸 Diskon: Rp \${potongan.toFixed(2)}</span>
        <span class='success'>✅ Total Bayar: Rp \${total.toFixed(2)}</span>
      \`;
    }
  </script>

</body>
</html>


`
  },
  {
    fileName: 'TodoList.md',
    code: String.raw`<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Aplikasi To-Do List</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <div class="container">
    <h1>📝 To-Do List Harian</h1>

    <div class="input-area">
      <input type="text" id="taskName" placeholder="Masukkan nama tugas...">
      <input type="date" id="taskDate">
      <select id="taskPriority">
        <option value="belum selesai">belum selesai</option>
        <option value="Sedang kerja">Sedang kerja</option>
        <option value="selesai">selesai</option>
      </select>
      <button onclick="addTask()">Tambah</button>
    </div>

    <ul id="taskList"></ul>
  </div>
<style>
  body {
    font-family: "Poppins", sans-serif;
    background: linear-gradient(135deg, #2c5364, #203a43, #0f2027);
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    margin: 0;
  }

  .container {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    box-shadow: 0 0 15px rgba(0, 255, 255, 0.2);
    padding: 25px;
    margin-top: 50px;
    width: 90%;
    max-width: 600px;
    backdrop-filter: blur(10px);
  }

  h1 {
    text-align: center;
    color: #00ffff;
    text-shadow: 0 0 10px #00ffff;
    margin-bottom: 20px;
  }

  .input-area {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
    flex-wrap: wrap;
  }

  .input-area input,
  .input-area select {
    flex: 1;
    padding: 10px;
    border: none;
    border-radius: 8px;
    outline: none;
  }

  button {
    padding: 10px 20px;
    background: #00bcd4;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    color: #fff;
    font-weight: bold;
    transition: 0.3s;
  }

  button:hover {
    background: #0097a7;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  .task {
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid #00ffff33;
    border-radius: 10px;
    margin-bottom: 10px;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 0.2s;
  }

  .task:hover {
    background: rgba(0, 0, 0, 0.5);
  }

  .task.done {
    text-decoration: line-through;
    opacity: 0.6;
  }

  .task-info {
    flex: 1;
  }

  .task small {
    display: block;
    color: #ccc;
  }

  .task button {
    margin-left: 10px;
    background: #f44336;
  }

  .task button.edit {
    background: #ff9800;
  }

  .task button.done-btn {
    background: #4caf50;
  }

  footer {
    margin-top: 20px;
    font-size: 0.9em;
    opacity: 0.8;
  }
</style>
 
<script>
  // Data tugas disimpan di array
  let tasks = [];

  function addTask() {
    const name = document.getElementById("taskName").value.trim();
    const date = document.getElementById("taskDate").value;
    const priority = document.getElementById("taskPriority").value;

    if (name === "") {
      alert("Nama tugas tidak boleh kosong!");
      return;
    }

    const newTask = {
      name,
      date,
      priority,
      done: false,
    };

    tasks.push(newTask);
    document.getElementById("taskName").value = "";
    renderTasks();
  }

  function renderTasks() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    if (tasks.length === 0) {
      list.innerHTML = "<p style='text-align:center; color:gray;'>Belum ada tugas</p>";
      return;
    }

    tasks.forEach((task, index) => {
      const li = document.createElement("li");
      li.className = "task" + (task.done ? " done" : "");

      li.innerHTML = \`
        <div class="task-info">
          <strong>\${task.name}</strong>
          <small>Prioritas: \${task.priority} | Tanggal: \${task.date || "-"}</small>
        </div>
        <div class="buttons">
          <button class="done-btn" onclick="toggleDone(\${index})">✔</button>
          <button class="edit" onclick="editTask(\${index})">✎</button>
          <button onclick="deleteTask(\${index})">🗑</button>
        </div>
      \`;

      list.appendChild(li);
    });
  }

  function toggleDone(index) {
    tasks[index].done = !tasks[index].done;
    renderTasks();
  }

  function deleteTask(index) {
    if (confirm("Yakin ingin menghapus tugas ini?")) {
      tasks.splice(index, 1);
      renderTasks();
    }
  }

  function editTask(index) {
    const newName = prompt("Ubah nama tugas:", tasks[index].name);
    if (newName && newName.trim() !== "") {
      tasks[index].name = newName.trim();
      renderTasks();
    }
  }
</script>

</body>
</html>
`
  },
  
];

const easterEggSourceMap: Record<EasterEggKey, EasterEggDetails> = {
  yangbisadiketik: {
    heading: '🔓 SECRET SOURCE CODE UNLOCKED! 🔓',
    description: '⚠️ Rahasia: Kode ini adalah kumpulan source code rahasia versi HTML & JS untuk kalkulator, kalkulator diskon, dan to-do list. Simpan baik-baik ya! 🗺️✨',
    files: yangbisadiketikSources,
  },
  apadi: {
    heading: '🧩 Easter Egg "apadi"',
    description: 'Source code untuk easter egg ini belum tersedia. Nantikan update berikutnya! 🚧',
    files: apadiSources,
  },
  yahsatupi: {
    heading: '🧩 Easter Egg "yahsatupi"',
    description: 'Source code rahasia akan segera hadir di update berikutnya! ✨',
    files: yahsatupiSources,
  },
};

const isEasterEggInput = (value: string): value is EasterEggKey =>
  value === 'yangbisadiketik' || value === 'apadi' || value === 'yahsatupi';

export default function Home() {
  const [destination, setDestination] = useState('');
  const [email, setEmail] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Easter Egg State - Source Code Rahasia
  const [activeEasterEgg, setActiveEasterEgg] = useState<EasterEggKey | null>(null);

  // Check for Easter Egg
  useEffect(() => {
    const input = destination.toLowerCase().trim();

    if (isEasterEggInput(input)) {
      if (activeEasterEgg !== input) {
        setActiveEasterEgg(input);
      }
    } else if (activeEasterEgg !== null) {
      setActiveEasterEgg(null);
    }
  }, [destination, activeEasterEgg]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const input = destination.toLowerCase().trim();
    
    if (isEasterEggInput(input)) {
      // Easter egg sudah ditrigger, jangan alert
      return;
    }
    
    alert(`Mencari destinasi: ${destination} 🔍`);
  };

  const handleBooking = (packageName: string) => {
    setSelectedPackage(packageName);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };



  return (
    <div className="min-h-screen transition-all duration-500 bg-gradient-to-b from-black-400 to-gray-600">
      {/* Header */}
      <header className="bg-black/95 backdrop-blur-sm shadow-md sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-3xl"></span>
            <span className="text-2xl font-bold text-gray-600">Jelajah Nusantara</span>
          </div>
          <div className="hidden md:flex gap-8 text-gray-700 font-medium">
            <a href="#destinations" className="hover:text-gray-600 transition">Destinasi</a>
            <a href="#packages" className="hover:text-gray-600 transition">Paket Tour</a>
            <a href="#testimonials" className="hover:text-gray-600 transition">Testimoni</a>
            <a href="#contact" className="hover:text-gray-600 transition">Kontak</a>
          </div>
          <button className="bg-black-600 text-black px-6 py-2 rounded-full hover:bg-gray-700 transition font-semibold">
            Login
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl text-black md:text-7xl font-bold text-gray mb-6 drop-shadow-lg">
          Jelajahi Keindahan
          <br />
          <span className="text-black">Indonesia</span>
        </h1>
        <p className="text-xl md:text-2xl text-black/95 mb-12 max-w-3xl mx-auto">
          Temukan destinasi impian Anda! Dari pantai eksotis hingga gunung menawan, 
          kami siap mengantarkan petualangan tak terlupakan.
        </p>

        {/* Search Box */}
        <div className="bg-black rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto mb-12 relative">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            🔍 Cari Destinasi Impian Anda
          </h2>
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Mau kemana? (contoh: Bali, Raja Ampat, Bromo...)"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="flex-1 px-6 py-4 rounded-lg border-2 border-black-300 focus:border-black-500 focus:outline-none text-gray-800 text-lg"
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-black-600 to-gray-500 text-black font-bold py-4 px-8 rounded-lg hover:from-black-700 hover:to-gray-600 transition transform hover:scale-105 whitespace-nowrap"
            >
              Cari Sekarang 🚀
            </button>
          </form>
          
          {/* Easter Egg - Source Code Collection */}
          {activeEasterEgg && (
            <div className="mt-6 animate-fade-in">
              <div className="bg-gradient-to-r from-black-600 to-gray-600 rounded-lg p-4 mb-4">
                <p className="text-gray font-bold text-center text-lg">
                  {easterEggSourceMap[activeEasterEgg].heading}
                </p>
              </div>

              {easterEggSourceMap[activeEasterEgg].files.length > 0 ? (
                <div className="space-y-4">
                  {easterEggSourceMap[activeEasterEgg].files.map(({ fileName, code }) => (
                    <div
                      key={fileName}
                      className="bg-gray-900 rounded-lg p-6 shadow-2xl border-2 border-gray-500 max-h-96 overflow-y-auto"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-gray-400 font-mono text-sm">� {fileName}</span>
                        <button
                          onClick={() => {
                            navigator.clipboard.writeText(code);
                            alert(`Source code dari ${fileName} telah disalin! 📋`);
                          }}
                          className="bg-gray-600 hover:bg-gray-700 text-black px-3 py-1 rounded text-xs font-semibold transition"
                        >
                          Copy Code
                        </button>
                      </div>
                      <pre className="text-amber-700 font-mono text-xs leading-relaxed overflow-x-auto">
                        <code>{code}</code>
                      </pre>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded">
                  <p className="text-yellow-800 text-sm">
                    {easterEggSourceMap[activeEasterEgg].description}
                  </p>
                </div>
              )}

              {easterEggSourceMap[activeEasterEgg].files.length > 0 && (
                <div className="mt-4 bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded">
                  <p className="text-yellow-800 text-sm">
                    {easterEggSourceMap[activeEasterEgg].description}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6 text-white">
            <p className="text-4xl font-bold mb-2">500+</p>
            <p className="text-sm">Destinasi</p>
          </div>
          <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6 text-white">
            <p className="text-4xl font-bold mb-2">50K+</p>
            <p className="text-sm">Traveler</p>
          </div>
          <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6 text-white">
            <p className="text-4xl font-bold mb-2">4.9⭐</p>
            <p className="text-sm">Rating</p>
          </div>
          <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6 text-white">
            <p className="text-4xl font-bold mb-2">24/7</p>
            <p className="text-sm">Support</p>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section id="destinations" className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            🌴 Destinasi Populer
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Pilihan favorit para traveler
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Destination 1 */}
            <div className="bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition">
              <div className="h-48 flex items-center justify-center text-8xl">
                🏖️
              </div>
              <div className="bg-white p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Bali Paradise</h3>
                <p className="text-gray-600 mb-4">
                  Pantai indah, budaya kaya, dan sunset yang memukau
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">Rp 2.5 Jt</span>
                  <span className="text-sm text-gray-500">3D2N</span>
                </div>
                <button className="w-full mt-4 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
                  Lihat Detail
                </button>
              </div>
            </div>

            {/* Destination 2 */}
            <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition">
              <div className="h-48 flex items-center justify-center text-8xl">
                🏔️
              </div>
              <div className="bg-white p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Bromo Adventure</h3>
                <p className="text-gray-600 mb-4">
                  Sunrise spektakuler di atas awan gunung berapi
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">Rp 1.8 Jt</span>
                  <span className="text-sm text-gray-500">2D1N</span>
                </div>
                <button className="w-full mt-4 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
                  Lihat Detail
                </button>
              </div>
            </div>

            {/* Destination 3 */}
            <div className="bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition">
              <div className="h-48 flex items-center justify-center text-8xl">
                🐠
              </div>
              <div className="bg-white p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Raja Ampat</h3>
                <p className="text-gray-600 mb-4">
                  Surga bawah laut dengan keanekaragaman hayati terbaik
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">Rp 8.5 Jt</span>
                  <span className="text-sm text-gray-500">5D4N</span>
                </div>
                <button className="w-full mt-4 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
                  Lihat Detail
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Packages */}
      <section id="packages" className="bg-gradient-to-br from-purple-500 to-indigo-600 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
            🎒 Paket Tour Spesial
          </h2>
          <p className="text-center text-white/90 mb-12 text-lg">
            Pilih paket sesuai budget dan gaya liburan Anda
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Package 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="text-center mb-6">
                <span className="text-5xl mb-4 block">🎒</span>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Backpacker</h3>
                <p className="text-4xl font-bold text-blue-600 mb-2">Rp 1.5 Jt</p>
                <p className="text-gray-500">per orang</p>
              </div>
              <ul className="space-y-3 mb-8 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Transportasi lokal</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Homestay/Hostel</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Tour guide</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Breakfast included</span>
                </li>
              </ul>
              <button
                onClick={() => handleBooking('Backpacker')}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
              >
                Booking Sekarang
              </button>
            </div>

            {/* Package 2 - Popular */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 shadow-2xl transform scale-105 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-blue-900 px-4 py-1 rounded-full text-sm font-bold">
                  PALING LARIS
                </span>
              </div>
              <div className="text-center mb-6 text-white">
                <span className="text-5xl mb-4 block">⭐</span>
                <h3 className="text-2xl font-bold mb-2">Comfort</h3>
                <p className="text-4xl font-bold mb-2">Rp 3.5 Jt</p>
                <p className="text-white/80">per orang</p>
              </div>
              <ul className="space-y-3 mb-8 text-white">
                <li className="flex items-start gap-2">
                  <span className="font-bold">✓</span>
                  <span>Private car AC</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">✓</span>
                  <span>Hotel bintang 3-4</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">✓</span>
                  <span>Professional guide</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">✓</span>
                  <span>All meals included</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">✓</span>
                  <span>Travel insurance</span>
                </li>
              </ul>
              <button
                onClick={() => handleBooking('Comfort')}
                className="w-full bg-white text-blue-600 py-3 rounded-lg hover:bg-gray-100 transition font-semibold"
              >
                Booking Sekarang
              </button>
            </div>

            {/* Package 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="text-center mb-6">
                <span className="text-5xl mb-4 block">💎</span>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Luxury</h3>
                <p className="text-4xl font-bold text-blue-600 mb-2">Rp 7.5 Jt</p>
                <p className="text-gray-500">per orang</p>
              </div>
              <ul className="space-y-3 mb-8 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Private luxury car</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Hotel bintang 5</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>VIP tour guide</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Fine dining experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Premium insurance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Spa & wellness</span>
                </li>
              </ul>
              <button
                onClick={() => handleBooking('Luxury')}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
              >
                Booking Sekarang
              </button>
            </div>
          </div>

          {isSubmitted && (
            <div className="mt-8 bg-green-500 text-white text-center py-4 rounded-lg max-w-2xl mx-auto font-semibold">
              ✅ Terima kasih! Paket {selectedPackage} berhasil dipilih. Tim kami akan menghubungi Anda!
            </div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            💬 Kata Mereka
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Pengalaman nyata dari para traveler
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  A
                </div>
                <div>
                  <p className="font-bold text-gray-800">Andi Pratama</p>
                  <p className="text-sm text-gray-500">Jakarta</p>
                </div>
              </div>
              <div className="text-yellow-400 mb-2">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700">
                &quot;Trip ke Bromo sangat berkesan! Guide-nya ramah dan profesional. 
                Sunrise-nya luar biasa indah. Highly recommended!&quot;
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  S
                </div>
                <div>
                  <p className="font-bold text-gray-800">Siti Nurhaliza</p>
                  <p className="text-sm text-gray-500">Bandung</p>
                </div>
              </div>
              <div className="text-yellow-400 mb-2">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700">
                &quot;Paket Bali-nya worth it banget! Hotel bagus, makanan enak, 
                dan itinerary-nya pas. Pasti bakal booking lagi!&quot;
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-cyan-50 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  B
                </div>
                <div>
                  <p className="font-bold text-gray-800">Budi Santoso</p>
                  <p className="text-sm text-gray-500">Surabaya</p>
                </div>
              </div>
              <div className="text-yellow-400 mb-2">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700">
                &quot;Raja Ampat memang surga dunia! Terima kasih Jelajah Nusantara 
                sudah mengatur semuanya dengan sempurna. Best experience ever!&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="contact" className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            📧 Dapatkan Promo Spesial!
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            Subscribe newsletter kami dan dapatkan diskon hingga 30% untuk trip pertama Anda
          </p>
          <form className="max-w-2xl mx-auto flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Masukkan email Anda..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 rounded-lg text-gray-800 text-lg focus:outline-none focus:ring-4 focus:ring-yellow-300"
              required
            />
            <button
              type="submit"
              className="bg-yellow-400 text-blue-900 font-bold py-4 px-8 rounded-lg hover:bg-yellow-300 transition transform hover:scale-105 whitespace-nowrap"
            >
              Subscribe Sekarang 🎁
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">🏝️</span>
                <span className="text-xl font-bold">Jelajah Nusantara</span>
              </div>
              <p className="text-gray-400">
                Platform booking tour terpercaya untuk menjelajahi keindahan Indonesia
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Destinasi</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Bali</a></li>
                <li><a href="#" className="hover:text-white transition">Lombok</a></li>
                <li><a href="#" className="hover:text-white transition">Raja Ampat</a></li>
                <li><a href="#" className="hover:text-white transition">Bromo</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-white transition">Karir</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Partnership</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Hubungi Kami</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📞 +62 812-3456-7890</li>
                <li>📧 info@jelajahnusantara.com</li>
                <li>📍 Jakarta, Indonesia</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2024 Jelajah Nusantara. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
