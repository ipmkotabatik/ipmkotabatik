const toggle = document.getElementById('burger');

const nav = document.querySelector('.nav');
document.querySelector('#burger').onclick = () => {
  nav.classList.toggle('active');
};

// fathul = document.getElementById('fathul')
// fathul.onclick = () => {
//   confirm ('download file ini?');
// };


function tampilkanPopup() {
  const popup = document.createElement('div');
  popup.className = 'popup';
  popup.innerHTML = `
     <div class="popup-content">
        <span class="popup-close"
        onclick="tutupPopup()">&times;</span>
             <button class="tombol-beli">Beli Sekarang</button>

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