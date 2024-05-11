const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e) {
	// Remove all show and border classes
	removeBorder();
	removeShow();
	// Add border to current tab item
	this.classList.add('tab-border');
	// Grab content item from DOM
	const tabContentItem = document.querySelector(`#${this.id}-content`);
	// Add show class
	tabContentItem.classList.add('show');
}

// Remove bottom borders from all tab items
function removeBorder() {
	tabItems.forEach(item => {
		item.classList.remove('tab-border');
	});
}

// Remove show class from all content items
function removeShow() {
	tabContentItems.forEach(item => {
		item.classList.remove('show');
	});
}

// Listen for tab item click
tabItems.forEach(item => {
	item.addEventListener('click', selectItem);
});

$(document).ready(function(){
    $('#showTab3').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#tab-3").offset().top
        }, 1000); 
        document.getElementById('tab-3').click();
    });
});
$(document).ready(function(){
    $('.scroll-link').click(function(e){
        e.preventDefault();
        var targetId = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(targetId).offset().top
        }, 1000); 
    });
});
function validateLogin() {
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;
  
	if (username === 'Admin' && password === '123') {
	  alert('Успешный вход!');
	  window.location.href = 'hall.html';
	} else {
	  alert('Неправильный логин или пароль!');
	}
  }


// Элементы поиска и результатов
const searchInput = document.getElementById('searchInput');
const resultsList = document.getElementById('results');

// Обработчик события ввода в поле поиска
searchInput.addEventListener('input', function() {
    const searchQuery = this.value.trim().toLowerCase(); // Получаем текст запроса и приводим его к нижнему регистру
    if (searchQuery.length < 2) {
        resultsList.innerHTML = ''; // Очищаем результаты, если запрос слишком короткий
        return;
    }
    performSearch(searchQuery); // Выполняем поиск
});

// Функция для выполнения поиска
function performSearch(query) {
    resultsList.innerHTML = ''; // Очищаем результаты перед началом нового поиска
    // Проходим по всем элементам на странице
    document.querySelectorAll('p, h1, h2, h3, h4, h5, h6').forEach(function(element) {
        // Проверяем, содержит ли текст элемента запрос
        if (element.textContent.trim().toLowerCase().includes(query)) {
            // Если содержит, создаем новый элемент списка и добавляем его к результатам
            const resultItem = document.createElement('li');
            resultItem.textContent = element.textContent.trim();
            resultsList.appendChild(resultItem);
        }
    });
}

// Функция для выполнения поиска
function performSearch(query) {
    resultsList.innerHTML = ''; // Очищаем результаты перед началом нового поиска
    // Проходим по всем элементам на странице
    document.querySelectorAll('p, h1, h2, h3, h4, h5, h6').forEach(function(element) {
        // Проверяем, содержит ли текст элемента запрос
        if (element.textContent.trim().toLowerCase().includes(query)) {
            // Если содержит, создаем новый элемент списка и добавляем его к результатам
            const resultItem = document.createElement('li');
            resultItem.textContent = element.textContent.trim();
            resultItem.addEventListener('click', function() {
                // При клике на результат поиска прокручиваем страницу к соответствующему элементу
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
            resultItem.addEventListener('mouseenter', function() {
                // При наведении на результат поиска меняем курсор
                this.style.cursor = 'pointer';
            });
            resultItem.addEventListener('mouseleave', function() {
                // При уводе курсора с результат поиска возвращаем обычный курсор
                this.style.cursor = 'default';
            });
            resultsList.appendChild(resultItem);
        }
    });
}





  


  