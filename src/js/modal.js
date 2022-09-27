(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      openedModalBtn: document.querySelector("[data-coffee-open]"),
      openingModalBtn: document.querySelector("[data-milkshakes-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.openedModalBtn.addEventListener("click", toggleModal);
    refs.openingModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle("is-hidden");
    }
  })();

