// Ключ для localStorage
const STORAGE_KEY = 'feedback-form-state';

// Об’єкт із початковими значеннями
let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

// 🔹 1. Відновлення даних зі сховища при завантаженні
const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  formData = JSON.parse(savedData);
  form.elements.email.value = formData.email || '';
  form.elements.message.value = formData.message || '';
}

// 🔹 2. Делегування події input
form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// 🔹 3. Обробка сабміту
form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log('Submitted form data:', formData);

  // Очистка
  formData = { email: '', message: '' };
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});
