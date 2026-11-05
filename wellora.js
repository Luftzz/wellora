const dataBerita = [
    {
        id: 1,
        gambar: "assets/WhatsApp Image 2026-10-29 at 10.30.17 AM sayuran.jpeg",
        kategori: "Nutrisi",
        waktuBaca: "5 mnt baca",
        judul: "5 Langkah memulai pola makan sehat tanpa diet menyiksa",
        deskripsi: "Pelajari cara menyeimbangkan porsi karbohidrat, protein, dan serat harian secara bertahap tanpa perlu rasa lapar berlebihan.",
        isi: "DOM (Document Object Model) adalah antarmuka pemrograman untuk dokumen HTML dan XML. Dengan DOM, kita dapat mengakses dan memanipulasi elemen-elemen dalam halaman web secara dinamis."
    },
    {
        id: 2,
        gambar: "assets/WhatsApp Image 2026-10-29 at 10.30.17 AM jalan kaki.jpeg",
        kategori: "Kebugaran",
        waktuBaca: "4 mnt baca",
        judul: "Berapa Langkah Kaki yang Sebenarnya Dibutuhkan Tubuh?",
        deskripsi: "Kupas tuntas mitos 10.000 langkah dan fakta ilmiah tentang kebutuhan gerak harian untuk menjaga kesehatan jantung dan stamina.",
        isi: "Dengan menggunakan DOM Javascript, kita dapat membuat website yang interaktif dengan menambahkan elemen-elemen dinamis, menangani event pengguna, dan memperbarui konten halaman secara real-time."
    },
    {
        id: 3,
        gambar: "assets/WhatsApp Image 2026-10-29 at 10.30.16 AM kucing tidur.jpeg",
        kategori: "Pola Tidur",
        waktuBaca: "6 mnt baca",
        judul: "rahasia tidur nyenyak demi produktifitas maksimal",
        deskripsi: "Kualitas tidur menentukan metabolisme tubuh. Terapkan 4 kebiasaan malam ini untuk bangun dengan energi penuh keesokan hari.",
        isi: "DOM Javascript memungkinkan kita untuk memanipulasi elemen-elemen HTML dengan mudah. Kita dapat menambahkan elemen baru, menghapus elemen yang tidak diperlukan, atau mengubah atribut dan konten elemen sesuai kebutuhan."
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

    if(berita){
        const judulBerita = document.querySelector(".judul-berita");
        const deskripsiBerita = document.querySelector(".deskripsi-berita");
        const isiBerita = document.querySelector(".isi-berita");

        judulBerita.textContent = berita.judul;
        deskripsiBerita.textContent = berita.deskripsi;
        isiBerita.textContent = berita.isi;

        detailBerita.hidden = false;
    }
}
