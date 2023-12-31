const modal = document.querySelector('.modal');
const modalTrigger = document.querySelector('#btn-get');
const modalCloseButton = document.querySelector('.modal_close');

let modalShown = false;

const openModal = () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    modalShown = true; // Устанавливаем флаг в true, когда модальное окно отображается
};

const closeModal = () => {
    modal.style.display = 'none';
    document.body.style.overflow=''
};

modalTrigger.onclick = () => {
    openModal();
};

modalCloseButton.onclick = () => closeModal();

modal.onclick = (event) => {
    if (event.target === modal) {
        closeModal();
    }
};

const checkModal = () => {
    // Проверяем, было ли уже отображено модальное окно
    if (!modalShown) {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        if (scrollPosition + windowHeight >= documentHeight) {
            openModal();
        }
    }
};

window.addEventListener('scroll', checkModal)
setTimeout(()=>openModal(),2000)