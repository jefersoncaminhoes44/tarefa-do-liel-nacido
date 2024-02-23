document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });

    const form = document.getElementById('profileForm');
    form.addEventListener('submit', function(event) {
        const nameInput = document.getElementById('name');
        const descriptionInput = document.getElementById('description');
        if (nameInput.value.trim() === '' || descriptionInput.value.trim() === '') {
            alert('Por favor, preencha todos os campos obrigatórios.');
            event.preventDefault();
        }
    });
});