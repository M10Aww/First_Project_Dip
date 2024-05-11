// Функция для открытия диалогового окна выбора файла
function openFileInput() {
    document.getElementById('fileInput').click();
}

// Функция для обработки выбранного файла и отображения его как новой аватарки
function changeAvatar(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function() {
        const img = document.getElementById('userAvatar');
        img.src = reader.result;
    };
    reader.readAsDataURL(file);
}


document.getElementById('fileInput').addEventListener('change', changeAvatar);
function goBack() {
    window.history.back()
}