document.addEventListener('DOMContentLoaded', () => {
    const services = document.querySelectorAll('.service');
    const resetButton = document.querySelector('.reset');
    const finalResult = document.getElementById('final-result');

    services.forEach(service => {
        const incrementButton = service.querySelector('.increment');
        const decrementButton = service.querySelector('.decrement');
        const quantityElement = service.querySelector('.quantity');
        const resultElement = service.querySelector('.result');
        const price = parseInt(quantityElement.dataset.price);

        incrementButton.addEventListener('click', () => {
            let quantity = parseInt(quantityElement.textContent);
            quantity++;
            quantityElement.textContent = quantity;
            resultElement.textContent = `== ${quantity * price} грн`;
            updateFinalResult();
        });

        decrementButton.addEventListener('click', () => {
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 0) {
                quantity--;
                quantityElement.textContent = quantity;
                resultElement.textContent = `== ${quantity * price} грн`;
                updateFinalResult();
            }
        });
    });

    function updateFinalResult() {
        let total = 0;
        services.forEach(service => {
            const quantity = parseInt(service.querySelector('.quantity').textContent);
            const price = parseInt(service.querySelector('.quantity').dataset.price);
            total += quantity * price;
        });
        finalResult.textContent = total;
    }

    resetButton.addEventListener('click', () => {
        services.forEach(service => {
            service.querySelector('.quantity').textContent = '0';
            service.querySelector('.result').textContent = '== 0 грн';
        });
        finalResult.textContent = '0';
    });
});
