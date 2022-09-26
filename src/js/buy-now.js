(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-buynow-open]"),
    openedModalBtn: document.querySelector("[data-buymenu-open]"),
    closeModalBtn: document.querySelector("[data-buynow-close]"),
    modal: document.querySelector("[data-buynow]"),
  };
  refs.openedModalBtn.addEventListener("click", toggleModal);
  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle("buynow-hidden");
  }
})();