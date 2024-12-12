// const modal = document.querySelector('#make_request');

// makeRequestModal.showModal();
// makeRequestModal.close();

class MakeRequestModal {
    constructor(modalSelector, closeSelector, accordionModalSelector, buttonSelector) {
        this.modal = document.querySelector(modalSelector);
        this.button = document.querySelector(buttonSelector);
        this.closeElem = document.querySelector(closeSelector);
        this.accordionsModal = document.querySelector(accordionModalSelector);
        this.options = {
            root: null,
            rootMargin: "0px",
            threshold: 0
        };
        this.prevRatio = 0;
        this.initObserver();
        this.button.addEventListener("click", () => {
            this.showModal();
        });
        this.closeElem.addEventListener("click", () => {
            this.close();
        });
    }

    showModal() {
        this.modal.classList.add("active");
        document.body.classList.add("blocked");
        localStorage.setItem('modalWasOpened', "true"); // Устанавливаем флаг после открытия
    }

    close() {
        this.modal.classList.remove("active");
        document.body.classList.remove("blocked");
    }

    handleIntersect = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && localStorage.getItem('modalWasOpened') !== "true") {
                this.showModal();
            }
            this.prevRatio = entry.intersectionRatio;
        });
    };

    initObserver() {
        this.observer = new IntersectionObserver(this.handleIntersect, this.options);
        if (this.accordionsModal) { // Проверка на существование элемента
            this.observer.observe(this.accordionsModal);
        }
    }

    // async makeRequest(event, formData) {
    //     event.preventDefault();
    
    //     try {
    //         const response = await fetch("https://fakestoreapi.com/products/", { // Замените на ваш API endpoint
    //             method: "POST",
    //             body: formData // Отправляем данные с помощью FormData
    //         });
    
    //         if (!response.ok) {
    //             const errorMessage = `Ошибка HTTP: ${response.status} ${response.statusText}`;
    //             throw new Error(errorMessage);
    //         }
    
    //         const responseData = await response.json(); // Получаем ответ от сервера
    //         console.log('Успешная отправка данных:', responseData);
    //         // Здесь обработайте ответ от сервера
    //     } catch (error) {
    //         console.error("Ошибка при отправке данных:", error);
    //         alert(`Ошибка: ${error.message}`);
    //     }
    // }
}

// Пример использования:
// const myModal = new MakeRequestModal('#my-modal', '#close-modal', '#myAccordionModal');



const modal = new MakeRequestModal(".make_request", ".close", ".faq", ".openModal");

class accordion {
    constructor(accordionQuerySelector) {
        this.accordion = document.querySelector(accordionQuerySelector);
        this.switchStatusAccordion();
    }

    switchStatusAccordion() {
        this.accordion.addEventListener('click', () => {
            this.accordion.classList.toggle("active");
        });
    }
}

const accordionsQuerySelector = [".accordion1", ".accordion2"];

accordionsQuerySelector.forEach((accordionQuerySelector) =>{
    const accordionElem = new accordion(accordionQuerySelector);
});