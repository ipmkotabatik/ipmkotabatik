function tampilkanPopup(namaFile, formatFile) {
  const popup = document.createElement('div');
  popup.className = 'popup';
  popup.innerHTML = `
     <div class="popup-content">
      <div class="teks">
        <p>ingin mendownload file "${namaFile}"?</p>
      </div>
      <div class="tombol">
        <button class="popup-close"
      onclick="tutupPopup()">Batal</button>
       <a href="materi/${formatFile}"><button class="tombol-download"
       onclick="kembali()">Download</button></a>
      </div>
      
      

      </div>
      `;
      // Tambahkan notifikasi/popup kebody
      document.body.appendChild(popup);
}

function tutupPopup() {
  const popup = document.querySelector('.popup');
  if (popup) {
      document.body.removeChild(popup);
  }
}

function kembali() {
  alert ("file berhasil didownload");
  const popup = document.querySelector('.popup');
  if (popup) {
      document.body.removeChild(popup);
  }
}