const dataBerita = [
    {
        id: 1,
        gambar: "assets/WhatsApp Image 2026-10-29 at 10.30.17 AM sayuran.jpeg",
        kategori: "Nutrisi",
        waktuBaca: "5 mnt baca",
        judul: "5 Langkah memulai pola makan sehat tanpa diet menyiksa",
        deskripsi: "Pelajari cara menyeimbangkan porsi karbohidrat, protein, dan serat harian secara bertahap tanpa perlu rasa lapar berlebihan.",
        isi: "Memulai pola makan sehat tidak harus berarti menahan lapar atau menghindari semua makanan favorit. Perubahan kecil yang konsisten lebih mudah dijalani dan memberi manfaat jangka panjang.",
        bagian: [
            ["Terapkan Prinsip Piring Sehat", "Isi setengah piring dengan sayuran dan buah, seperempat dengan protein seperti ikan, telur, tahu, atau tempe, dan seperempat sisanya dengan karbohidrat seperti nasi, kentang, atau jagung."],
            ["Jangan Lewatkan Sarapan Bergizi", "Pilih sarapan dengan protein dan serat, misalnya telur dengan roti gandum atau oatmeal dengan buah. Kombinasi ini membantu Anda merasa kenyang lebih lama."],
            ["Cukupi Kebutuhan Air", "Minum air secara teratur sepanjang hari. Sediakan botol minum di dekat Anda agar kebiasaan ini mudah dilakukan."],
            ["Gunakan Aturan Fleksibilitas 80/20", "Utamakan makanan bernutrisi sebagian besar waktu, sambil tetap memberi ruang untuk menikmati makanan kesukaan tanpa rasa bersalah."],
            ["Pantau Asupan dengan Santai", "Gunakan Wellora untuk mengenali kebiasaan makan Anda. Fokus pada pola yang berkelanjutan, bukan perubahan ekstrem dalam waktu singkat."]
        ]
    },
    {
        id: 2,
        gambar: "assets/WhatsApp Image 2026-10-29 at 10.30.17 AM jalan kaki.jpeg",
        kategori: "Kebugaran",
        waktuBaca: "4 mnt baca",
        judul: "Berapa Langkah Kaki yang Sebenarnya Dibutuhkan Tubuh?",
        deskripsi: "Kupas tuntas mitos 10.000 langkah dan fakta ilmiah tentang kebutuhan gerak harian untuk menjaga kesehatan jantung dan stamina.",
        isi: "Jumlah langkah yang dibutuhkan setiap orang bisa berbeda. Bergerak lebih banyak dari kebiasaan sebelumnya adalah awal yang baik untuk kesehatan.",
        bagian: [
            ["Mulai dari Kebiasaan Saat Ini", "Catat jumlah langkah harian Anda selama beberapa hari. Gunakan angka tersebut sebagai titik awal, lalu tingkatkan secara bertahap sesuai kemampuan."],
            ["Pecah Gerakan Sepanjang Hari", "Berjalan sebentar setelah makan, memilih tangga, atau melakukan peregangan saat jeda kerja membantu menambah aktivitas tanpa harus menyediakan waktu olahraga yang panjang."],
            ["Utamakan Konsistensi", "Target 10.000 langkah bukan aturan yang cocok untuk semua orang. Jadikan target pribadi yang realistis dan tingkatkan perlahan."],
            ["Dengarkan Tubuh Anda", "Pilih sepatu yang nyaman dan istirahat bila tubuh terasa sakit atau terlalu lelah. Jika memiliki kondisi kesehatan tertentu, sesuaikan aktivitas bersama tenaga kesehatan."]
        ]
    },
    {
        id: 3,
        gambar: "assets/WhatsApp Image 2026-10-29 at 10.30.16 AM kucing tidur.jpeg",
        kategori: "Pola Tidur",
        waktuBaca: "6 mnt baca",
        judul: "rahasia tidur nyenyak demi produktifitas maksimal",
        deskripsi: "Kualitas tidur menentukan metabolisme tubuh. Terapkan 4 kebiasaan malam ini untuk bangun dengan energi penuh keesokan hari.",
        isi: "Tidur yang cukup membantu tubuh memulihkan energi dan mendukung fokus sepanjang hari. Rutinitas malam yang sederhana dapat membantu tidur lebih teratur.",
        bagian: [
            ["Jaga Jadwal Tidur Teratur", "Usahakan tidur dan bangun pada waktu yang sama setiap hari, termasuk akhir pekan, agar tubuh terbiasa dengan ritme yang konsisten."],
            ["Kurangi Cahaya Layar Sebelum Tidur", "Beri jeda dari ponsel dan komputer menjelang waktu tidur. Pilih kegiatan yang menenangkan seperti membaca atau mendengarkan musik lembut."],
            ["Buat Kamar Nyaman", "Jaga kamar tetap gelap, tenang, dan sejuk. Gunakan tempat tidur terutama untuk beristirahat."],
            ["Batasi Kafein di Sore Hari", "Kopi, teh, dan minuman berkafein dapat mengganggu waktu tidur. Perhatikan respons tubuh dan hindari mengonsumsinya terlalu dekat dengan waktu istirahat."]
        ]
    }
]
const daftarKartu = document.getElementById("daftar-kartu");
const template = document.getElementById("template");
if (daftarKartu && template) {
dataBerita.forEach(({ id, gambar, kategori, waktuBaca, judul, deskripsi }) => {
    const templateclone = template.content.cloneNode(true);

    const kartu = templateclone.querySelector(".kartu");
    kartu.href = `detail-berita.html?id=${id}`;

    if (gambar) {
        const ilustrasi = document.createElement("img");
        ilustrasi.src = gambar;
        ilustrasi.alt = `Ilustrasi: ${judul}`;
        ilustrasi.className = "gambar-kartu";
        kartu.prepend(ilustrasi);
    }

    const meta = document.createElement("div");
    meta.className = "meta-kartu";
    meta.innerHTML = `<span class="kategori-kartu"></span><span class="waktu-kartu"></span>`;
    meta.querySelector(".kategori-kartu").textContent = kategori;
    meta.querySelector(".waktu-kartu").textContent = waktuBaca;
    kartu.querySelector(".judul").before(meta);

    kartu.querySelector(".judul").textContent = judul;
    kartu.querySelector(".deskripsi").textContent = deskripsi;

    const baca = document.createElement("span");
    baca.className = "baca-kartu";
    baca.innerHTML = 'Baca Selengkapnya <i class="fa-solid fa-arrow-right"></i>';
    kartu.appendChild(baca);

    daftarKartu.appendChild(kartu);

});
}

const detailBerita = document.getElementById("detail-berita");
if (detailBerita) {
    const parameter = new URLSearchParams(window.location.search);

    const idBerita = parameter.get("id");

    const berita = dataBerita.find((item) => item.id === parseInt(idBerita));

    if (berita) {
        document.title = `${berita.judul} | Wellora`;
        detailBerita.querySelector(".hero").src = berita.gambar;
        detailBerita.querySelector(".hero").alt = berita.judul;
        detailBerita.querySelector(".chip").textContent = berita.kategori;
        detailBerita.querySelector(".waktu-detail").textContent = berita.waktuBaca;
        detailBerita.querySelector("h1").textContent = berita.judul;
        detailBerita.querySelector(".lead").textContent = berita.isi;

        const isiArtikel = detailBerita.querySelector(".isi-artikel");
        berita.bagian.forEach(([subjudul, paragraf], index) => {
            const section = document.createElement("section");
            const heading = document.createElement("h2");
            const text = document.createElement("p");
            heading.textContent = `${index + 1}. ${subjudul}`;
            text.textContent = paragraf;
            section.append(heading, text);
            isiArtikel.appendChild(section);
        });

        const terkait = document.getElementById("artikel-terkait");
        dataBerita.forEach((item) => {
            const link = document.createElement("a");
            link.className = "rcard";
            link.href = `detail-berita.html?id=${item.id}`;
            const image = document.createElement("img");
            image.src = item.gambar;
            image.alt = item.judul;
            const body = document.createElement("div");
            body.className = "rbody";
            const meta = document.createElement("div");
            meta.className = "rmeta";
            meta.textContent = `${item.kategori} • ${item.waktuBaca}`;
            const title = document.createElement("h3");
            title.textContent = item.judul;
            const more = document.createElement("span");
            more.className = "more";
            more.textContent = "Baca Artikel Ini →";
            body.append(meta, title, more);
            link.append(image, body);
            terkait.appendChild(link);
        });

        detailBerita.hidden = false;
    } else {
        window.location.replace("index.html#artikel");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const formBmi = document.getElementById("form-bmi");
    if (!formBmi) return;

    const tinggiInput = document.getElementById("tinggi-bmi");
    const beratInput = document.getElementById("berat-bmi");
    const hasilBmi = document.getElementById("hasil-bmi");
    let satuan = "metrik";

    document.querySelectorAll("[data-satuan]").forEach((tombolSatuan) => {
        tombolSatuan.addEventListener("click", () => {
            const satuanBaru = tombolSatuan.dataset.satuan;
            if (satuanBaru === satuan) return;

            if (tinggiInput.value) {
                tinggiInput.value = (satuan === "metrik"
                    ? Number(tinggiInput.value) / 2.54
                    : Number(tinggiInput.value) * 2.54).toFixed(1);
            }
            if (beratInput.value) {
                beratInput.value = (satuan === "metrik"
                    ? Number(beratInput.value) * 2.20462
                    : Number(beratInput.value) / 2.20462).toFixed(1);
            }

            satuan = satuanBaru;
            const imperial = satuan === "imperial";
            document.querySelectorAll("[data-satuan]").forEach((button) => {
                const aktif = button.dataset.satuan === satuan;
                button.classList.toggle("aktif", aktif);
                button.setAttribute("aria-pressed", String(aktif));
            });
            document.getElementById("label-tinggi-bmi").textContent = imperial ? "Tinggi badan" : "Tinggi badan";
            document.getElementById("label-berat-bmi").textContent = imperial ? "Berat badan" : "Berat badan";
            document.querySelector("#tinggi-bmi + span").textContent = imperial ? "in" : "cm";
            document.querySelector("#berat-bmi + span").textContent = imperial ? "lb" : "kg";
            tinggiInput.min = imperial ? "39.4" : "100";
            tinggiInput.max = imperial ? "98.4" : "250";
            tinggiInput.placeholder = imperial ? "Contoh: 65" : "Contoh: 165";
            beratInput.min = imperial ? "44" : "20";
            beratInput.max = imperial ? "770" : "350";
            beratInput.placeholder = imperial ? "Contoh: 132" : "Contoh: 60";
            hasilBmi.hidden = true;
        });
    });

    formBmi.addEventListener("submit", (event) => {
        event.preventDefault();
        if (!formBmi.reportValidity()) return;

        const tinggiMeter = Number(tinggiInput.value) * (satuan === "metrik" ? 0.01 : 0.0254);
        const beratKg = Number(beratInput.value) * (satuan === "metrik" ? 1 : 1 / 2.20462);
        const bmi = beratKg / (tinggiMeter * tinggiMeter);
        let kategori;
        let pesan;

        if (bmi < 18.5) {
            kategori = "Berat badan kurang";
            pesan = "BMI berada di bawah rentang sehat. Pertimbangkan membahas hasil ini dengan tenaga kesehatan.";
        } else if (bmi < 25) {
            kategori = "Rentang berat badan sehat";
            pesan = "BMI berada dalam rentang sehat untuk orang dewasa. BMI tetap perlu dilihat bersama faktor kesehatan lainnya.";
        } else if (bmi < 30) {
            kategori = "Berat badan berlebih";
            pesan = "BMI berada di atas rentang sehat. Pengukuran ini adalah skrining dan bukan diagnosis.";
        } else if (bmi < 35) {
            kategori = "Obesitas kelas I";
            pesan = "BMI berada dalam rentang obesitas kelas I. Tenaga kesehatan dapat membantu menilai kesehatan secara menyeluruh.";
        } else if (bmi < 40) {
            kategori = "Obesitas kelas II";
            pesan = "BMI berada dalam rentang obesitas kelas II. Pertimbangkan mendiskusikan hasil ini dengan tenaga kesehatan.";
        } else {
            kategori = "Obesitas kelas III";
            pesan = "BMI berada dalam rentang obesitas kelas III. Tenaga kesehatan dapat membantu memberi penilaian dan dukungan.";
        }

        const beratMinimumKg = 18.5 * tinggiMeter * tinggiMeter;
        const beratMaksimumKg = 24.9 * tinggiMeter * tinggiMeter;
        const faktorTampilan = satuan === "metrik" ? 1 : 2.20462;
        const labelSatuan = satuan === "metrik" ? "kg" : "lb";
        document.getElementById("angka-bmi").textContent = bmi.toFixed(1);
        document.getElementById("kategori-bmi").textContent = kategori;
        document.getElementById("pesan-bmi").textContent = pesan;
        document.getElementById("rentang-bmi").textContent =
            `${(beratMinimumKg * faktorTampilan).toFixed(1)}–${(beratMaksimumKg * faktorTampilan).toFixed(1)} ${labelSatuan}`;
        const posisi = Math.min(100, Math.max(0, ((bmi - 15) / 25) * 100));
        document.getElementById("penanda-bmi").style.left = `${posisi}%`;
        hasilBmi.hidden = false;
    });

    document.getElementById("reset-bmi").addEventListener("click", () => {
        formBmi.reset();
        hasilBmi.hidden = true;
        tinggiInput.focus();
    });
});
