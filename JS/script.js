// Menunggu hingga seluruh konten halaman HTML dimuat sebelum menjalankan skrip
document.addEventListener('DOMContentLoaded', function() {

    // --- LOGIKA KALKULATOR LUAS SEGITIGA ---

    // Mengambil elemen-elemen form untuk kalkulator luas
    const luasForm = document.getElementById('luas-form');
    const alasInput = document.getElementById('alas');
    const tinggiInput = document.getElementById('tinggi');
    const hasilLuasContainer = document.getElementById('hasil-luas');
    const langkahLuas = document.getElementById('langkah-luas');
    const jawabanLuas = document.getElementById('jawaban-luas');

    // Menambahkan event listener untuk event 'submit' pada form luas
    luasForm.addEventListener('submit', function(event) {
        // Mencegah perilaku default form (yang akan me-reload halaman)
        event.preventDefault();

        // Mengambil nilai dari input dan mengubahnya menjadi angka (float)
        const alas = parseFloat(alasInput.value);
        const tinggi = parseFloat(tinggiInput.value);

        // Validasi: Memastikan input adalah angka yang valid dan positif
        if (isNaN(alas) || isNaN(tinggi) || alas <= 0 || tinggi <= 0) {
            alert('Harap masukkan nilai alas dan tinggi yang valid (angka positif).');
            return; // Menghentikan eksekusi jika validasi gagal
        }

        // Melakukan perhitungan luas
        const luas = 0.5 * alas * tinggi;

        // Menampilkan hasil perhitungan
        hasilLuasContainer.style.display = 'block'; // Membuat kontainer hasil terlihat
        langkahLuas.textContent = `L = 1/2 x ${alas} x ${tinggi}`;
        jawabanLuas.textContent = `Luas = ${luas}`;
    });

    // Menambahkan event listener untuk event 'reset' pada form luas
    luasForm.addEventListener('reset', function() {
        // Menyembunyikan kembali kontainer hasil saat form di-reset
        hasilLuasContainer.style.display = 'none';
    });


    // --- LOGIKA KALKULATOR KELILING SEGITIGA ---

    // Mengambil elemen-elemen form untuk kalkulator keliling
    const kelilingForm = document.getElementById('keliling-form');
    const sisi1Input = document.getElementById('sisi1');
    const sisi2Input = document.getElementById('sisi2');
    const sisi3Input = document.getElementById('sisi3');
    const hasilKelilingContainer = document.getElementById('hasil-keliling');
    const langkahKeliling = document.getElementById('langkah-keliling');
    const jawabanKeliling = document.getElementById('jawaban-keliling');

    // Menambahkan event listener untuk event 'submit' pada form keliling
    kelilingForm.addEventListener('submit', function(event) {
        // Mencegah perilaku default form
        event.preventDefault();

        // Mengambil nilai dari setiap sisi dan mengubahnya menjadi angka (float)
        const sisi1 = parseFloat(sisi1Input.value);
        const sisi2 = parseFloat(sisi2Input.value);
        const sisi3 = parseFloat(sisi3Input.value);

        // Validasi: Memastikan semua input sisi adalah angka yang valid dan positif
        if (isNaN(sisi1) || isNaN(sisi2) || isNaN(sisi3) || sisi1 <= 0 || sisi2 <= 0 || sisi3 <= 0) {
            alert('Harap masukkan nilai panjang untuk semua sisi yang valid (angka positif).');
            return; // Menghentikan eksekusi jika validasi gagal
        }

        // Melakukan perhitungan keliling
        const keliling = sisi1 + sisi2 + sisi3;

        // Menampilkan hasil perhitungan
        hasilKelilingContainer.style.display = 'block'; // Membuat kontainer hasil terlihat
        langkahKeliling.textContent = `K = ${sisi1} + ${sisi2} + ${sisi3}`;
        jawabanKeliling.textContent = `Keliling = ${keliling}`;
    });

    // Menambahkan event listener untuk event 'reset' pada form keliling
    kelilingForm.addEventListener('reset', function() {
        // Menyembunyikan kembali kontainer hasil saat form di-reset
        hasilKelilingContainer.style.display = 'none';
    });

});
