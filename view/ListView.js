export default class WorkoutListView {
    constructor() {
        this.workoutsContainer = document.getElementById('workouts-container');
    }

    clearWorkouts() {
        this.workoutsContainer.innerHTML = '';
    }

    displayWorkouts(workouts) {
        this.clearWorkouts();
        workouts.forEach((workout, index) => {
            const workoutItem = document.createElement('div');
            workoutItem.className = 'workout-item';
            workoutItem.innerHTML = `
                <p>Вид спорта: ${workout.sport}</p>
                <p>Длительность: ${workout.duration} мин</p>
                <p>Интенсивность: ${workout.intensity}</p>
                <p>Дата: ${workout.date}</p>
                <button class="delete-button" data-index="${index}">Удалить</button>
            `;
            this.workoutsContainer.appendChild(workoutItem);
        });
    }

    bindDeleteWorkout(handler) {
        this.workoutsContainer.addEventListener('click', (event) => {
            if (event.target.classList.contains('delete-button')) {
                const index = event.target.dataset.index;
                handler(index);
            }
        });
    }
}
