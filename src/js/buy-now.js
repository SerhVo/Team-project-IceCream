(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-buynow-open]"),
    closeModalBtn: document.querySelector("[data-buynow-close]"),
    modal: document.querySelector("[data-buynow]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle("buynow-hidden");
  }
})();