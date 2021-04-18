const btn = document.querySelector('#btn');

const overlay = document.querySelector('#overlay');



btn.addEventListener('click', function() {
    overlay.style.display = "block";

    const modal = document.createElement('div');
    modal.classList.add('modal-wrapper');
    modal.style.opacity = '1';
    overlay.appendChild(modal);

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal__content');
    modalContent.innerHTML = "Hello World";

    const closeModal = document.createElement('a');
    closeModal.classList.add('modal__close');
    closeModal.textContent = "x";

    closeModal.addEventListener('click', function() {
        overlay.style.display = "none";
    });

    overlay.addEventListener('click', e => {
        if (e.target === overlay) {
            overlay.style.display = "none";
        };  
    });


    modal.appendChild(modalContent);
    modal.appendChild(closeModal);
    
});

