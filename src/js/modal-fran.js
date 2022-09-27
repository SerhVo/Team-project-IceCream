(() => {
    const refs = {
    
      openModalBtn: document.querySelector("[data-contacts-fran-open]"),
      closeModalBtn: document.querySelector("[data-contacts-fran-close]"),
      modal: document.querySelector("[data-contacts-fran]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
        document.body.classList.toggle("modal-open");
          refs.modal.classList.toggle("contacts-fran-hidden");
    }
  })();