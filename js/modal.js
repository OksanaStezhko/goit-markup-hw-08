(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }

  const inputs = document.querySelectorAll('input[type=checkbox]');
  const button = document.querySelector('.form-modal__submit');
  function check() {
    button.disabled = true;
    inputs.forEach(input => {
      if (input.checked) button.disabled = false;
      else {
        button.disabled = true;
      }
    });
  }
  inputs.forEach(input => input.addEventListener('change', check));
})();
