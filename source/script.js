function showContact() {
  document.getElementById("contact").classList.remove("hidden");
  window.scrollTo({
    top: document.getElementById("contact").offsetTop,
    behavior: "smooth"
  });
}
