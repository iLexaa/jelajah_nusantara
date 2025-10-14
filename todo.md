<!DOCTYPE html>
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
</html>
