function validateLogin() {
    const user = document.getElementById('userInput').value;
    const pass = document.getElementById('passInput').value;
    const alertMsg = document.getElementById('alertMsg');

    // Password harus 'soshum', username bebas
    if (user.trim() !== "" && pass === "soshum") {
        document.getElementById('loginSection').style.transform = "translateY(-100%)";
        setTimeout(() => {
            document.getElementById('loginSection').classList.add('hidden');
            document.getElementById('contentSection').classList.remove('hidden');
            window.scrollTo(0, 0);
        }, 800);
    } else {
        alertMsg.innerText = "Akses Ditolak! Gunakan password bidang soshum.";
    }
}

function toggleDropdown() {
    const dropdown = document.getElementById("myDropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

function doLogout() {
    location.reload(); // Refresh halaman untuk kembali ke login
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Menutup dropdown otomatis jika klik di luar area
window.onclick = function(event) {
    if (!event.target.matches('.dots-icon')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            dropdowns[i].style.display = "none";
        }
    }
}
