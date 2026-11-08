function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        
        const clockElement = document.getElementById('digital-clock');
        if (clockElement) {
            clockElement.textContent = `${hours}:${minutes}:${seconds}`;
        }
    }

    // Jalankan jam secara periodik setiap 1 detik
    updateClock();
    setInterval(updateClock, 1000);

    /* ==========================================================
       2. ACTIVE NAVIGATION HIGHLIGHT (Tanda Menu Aktif)
       ========================================================== */
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.navigasi a, .navigasi-kiri a, .navigasi-kanan a');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.style.color = '#75866A';
            link.style.fontWeight = 'bold';
            link.style.borderBottom = '2px solid #75866A';
        }
    });

    /* ==========================================================
       3. CONTACT FORM VALIDATION & ALERT (Halaman Contact)
       ========================================================== */
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            alert(`Terima kasih ${name}, pesan kamu telah terkirim! Kami akan segera menghubungi kamu.`);
            contactForm.reset();
        });
    }

    /* ==========================================================
       4. ORDER FORM VALIDATION & CONFIRMATION (Halaman Order)
       ========================================================== */
    const orderForm = document.querySelector('.order-form');
    if (orderForm) {
        orderForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const fullname = document.getElementById('fullname').value;
            const menu = document.getElementById('menu').value;
            const quantity = document.getElementById('quantity').value;
            
            alert(`Pesanan Berhasil!\n\nNama: ${fullname}\nMenu: ${menu} (${quantity}x)\n\nTerima kasih telah memesan di Mivatcha! 🍵`);
            orderForm.reset();
        });
    }

    /* ==========================================================
       5. SMOOTH SCROLL (Efek Scroll Halus)
       ========================================================== */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

});