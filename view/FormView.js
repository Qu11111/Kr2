export default class WorkoutFormView {
    constructor() {
        const formContainer = document.getElementById('workout-form-container');
        formContainer.innerHTML = `
            <h2>Добавить тренировку</h2>
            <form id="workout-form">
                <select id="sport">
                    <option value="">Выберите вид спорта</option>
                    <option value="Бег">Бег</option>
                    <option value="Велосипед">Велосипед</option>
                    <option value="Плавание">Плавание</option>
                    <option value="Зал">Тренажерный зал</option>
                </select>
                <input type="number" id="duration" placeholder="Длительность (мин)" required min="1" max="240">
                <select id="intensity">
                    <option value="">Интенсивность</option>
                    <option value="Низкая">Низкая</option>
                    <option value="Средняя">Средняя</option>
                    <option value="Высокая">Высокая</option>
                </select>
                <input type="date" id="date">
                <button type="submit">Добавить тренировку</button>
            </form>
        `;

        this.form = document.getElementById('workout-form');
        this.sportInput = document.getElementById('sport');
        this.durationInput = document.getElementById('duration');
        this.intensityInput = document.getElementById('intensity');
        this.dateInput = document.getElementById('date');
    }

    getFormData() {
        return {
            sport: this.sportInput.value,
            duration: this.durationInput.value,
            intensity: this.intensityInput.value,
            date: this.dateInput.value,
        };
    }

    clearForm() {
        this.sportInput.value = '';
        this.durationInput.value = '';
        this.intensityInput.value = '';
        this.dateInput.value = '';
    }

    bindAddWorkout(handler) {
        this.form.addEventListener('submit', (event) => {
            event.preventDefault();
            handler(this.getFormData());
        });
    }
}
