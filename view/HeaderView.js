export default class WorkoutHeaderView {
    constructor() {
        this.totalWorkoutsElement = document.getElementById('total-workouts');
    }

    displayTotalWorkouts(total) {
        this.totalWorkoutsElement.textContent = total;
    }
}
