function copyText(event, element) {
    event.preventDefault(); // Запобігаємо переходу за посиланням
    const originalText = element.innerText; // Зберігаємо початковий текст
    const text = originalText; // Отримуємо текст
    navigator.clipboard.writeText(text).then(() => {
        element.innerText = 'Текст скопійовано';
        setTimeout(() => {
            element.innerText = originalText;
        }, 2000);
    }).catch(err => {
        console.error('Помилка копіювання', err);
    });
}