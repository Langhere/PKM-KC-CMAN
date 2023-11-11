let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};

const sr = ScrollReveal({
  distance: "65px",
  duration: 450,
  delay: 450,
  reset: true,
});

sr.reveal(".hero-text", { delay: 500, origin: "top" });
sr.reveal(".hero-img", { delay: 750, origin: "top" });
sr.reveal(".icons", { delay: 500, origin: "left" });
sr.reveal(".scroll-down", { delay: 500, origin: "right" });

// for download logic
document.addEventListener("DOMContentLoaded", function () {
  const guideBookLink = document.querySelector(".guide");
  const appLink = document.querySelector(".ctaa");

  guideBookLink.addEventListener("click", function (event) {
    event.preventDefault();
    // Mendownload file PDF GUIDE BOOK
    const guideBookFile = "guide_book.pdf"; // Ganti dengan path file PDF GUIDE BOOK
    const link = document.createElement("a");
    link.href = guideBookFile;
    link.download = "GUIDE_BOOK.pdf";
    link.click();
  });

  appLink.addEventListener("click", function (event) {
    event.preventDefault();
    // Mendownload file .apk
    const appFile = "app-release.apk"; // Ganti dengan path file aplikasi .apk
    const link = document.createElement("a");
    link.href = appFile;
    link.download = "C-MAN.apk";
    link.click();
  });
});
