const dataBerita = [
    {
        id: 1,
        judul: "Belajar DOM Javascript",
        deskripsi: "Belajar DOM Javascript adalah hal yang sangat penting untuk pengembangan web. Dengan memahami DOM, kita dapat memanipulasi elemen HTML secara dinamis.",
        isi: "DOM (Document Object Model) adalah antarmuka pemrograman untuk dokumen HTML dan XML. Dengan DOM, kita dapat mengakses dan memanipulasi elemen-elemen dalam halaman web secara dinamis."
    },
    {
        id: 2,
        judul: "Website Interaktif",
        deskripsi: "membuat website interaktif dengan menggunakan DOM Javascript memungkinkan pengguna untuk berinteraksi dengan halaman web secara real-time, meningkatkan pengalaman pengguna.",
        isi: "Dengan menggunakan DOM Javascript, kita dapat membuat website yang interaktif dengan menambahkan elemen-elemen dinamis, menangani event pengguna, dan memperbarui konten halaman secara real-time."
    },
    {
        id: 3,
        judul: "Manipulasi Elemen HTML",
        deskripsi: "Dengan DOM Javascript, kita dapat menambahkan, menghapus, atau mengubah elemen HTML sesuai kebutuhan, memberikan fleksibilitas dalam pengembangan web.",
        isi: "DOM Javascript memungkinkan kita untuk memanipulasi elemen-elemen HTML dengan mudah. Kita dapat menambahkan elemen baru, menghapus elemen yang tidak diperlukan, atau mengubah atribut dan konten elemen sesuai kebutuhan."
    },
    {
        id: 4,
        judul: "Event Handling",
        deskripsi: "DOM Javascript memungkinkan kita untuk menangani berbagai event seperti klik, hover, dan input, sehingga kita dapat membuat aplikasi web yang responsif dan interaktif.",
        isi: "Dengan DOM Javascript, kita dapat menangani berbagai event yang terjadi pada elemen-elemen HTML. Kita dapat menambahkan event listener untuk menangani klik, hover, input, dan banyak lagi, sehingga aplikasi web menjadi lebih responsif dan interaktif."
    },
    {
        id: 5,
        judul: "Membuat Animasi",
        deskripsi: "Dengan DOM Javascript, kita dapat membuat animasi yang menarik dan interaktif pada halaman web, meningkatkan daya tarik visual dan pengalaman pengguna.",
        isi: "DOM Javascript memungkinkan kita untuk membuat animasi yang menarik dengan memanipulasi elemen-elemen HTML secara dinamis. Kita dapat mengubah posisi, ukuran, warna, dan efek visual lainnya untuk menciptakan pengalaman pengguna yang lebih menarik."
    },
    {
        id: 6,
        judul: "Validasi Formulir",
        deskripsi: "DOM Javascript memungkinkan kita untuk melakukan validasi formulir secara real-time, memberikan umpan balik langsung kepada pengguna dan meningkatkan kualitas data yang dikirimkan.",
        isi: "DOM Javascript memungkinkan kita untuk melakukan validasi formulir secara real-time, memberikan umpan balik langsung kepada pengguna dan meningkatkan kualitas data yang dikirimkan."
    }
];

const daftarKartu = document.getElementById("daftar-kartu");
const template = document.getElementById("template");
if (daftarKartu && template) {
dataBerita.forEach(({ id, judul, deskripsi }) => {
    const templateclone = template.content.cloneNode(true);

    const kartu = templateclone.querySelector(".kartu");
    kartu.href = `detail-berita.html?id=${id}`;

    kartu.querySelector(".judul").textContent = judul;
    kartu.querySelector(".deskripsi").textContent = deskripsi;

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
    document.querySelector(".salin-tautan")?.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(window.location.href);
        document.querySelector(".salin-tautan").setAttribute("aria-label", "Tautan berhasil disalin");
      } catch (error) {
        window.prompt("Salin tautan artikel ini:", window.location.href);
      }
    });
    document.querySelector('a[aria-label="Bagikan lewat WhatsApp"]')?.addEventListener("click", (event) => {
      event.currentTarget.href = `https://wa.me/?text=${encodeURIComponent(document.title + " " + window.location.href)}`;
    });
    document.querySelector('a[aria-label="Bagikan lewat Telegram"]')?.addEventListener("click", (event) => {
      event.currentTarget.href = `https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(document.title)}`;
    });