const btn = document.querySelector('#btn');

const overlay = document.querySelector('#overlay');
const wrapper = document.querySelector('#wrapper');

btn.addEventListener('click', function() {
    overlay.style.display = "block";

    const modal = document.createElement('div');
    modal.classList.add('modal-wrapper');

    wrapper.appendChild(modal);

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal__content');
    modalContent.innerHTML = "Hello World";

    const closeModal = document.createElement('a');
    closeModal.classList.add('modal__close');
    closeModal.textContent = "x";

    closeModal.addEventListener('click', function() {
        overlay.style.display = "none";
        wrapper.removeChild(modal);
    });

    overlay.addEventListener('click', e => {
        if (e.target === overlay) {
            overlay.style.display = "none";
            wrapper.removeChild(modal);
        };  
    });


    modal.appendChild(modalContent);
    modal.appendChild(closeModal);
    
});

