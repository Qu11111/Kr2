export default class WorkoutModel {
    constructor() {
        this.workouts = [];
    }

    addWorkout(workoutData) {
        const newWorkout = { ...workoutData, id: Date.now() };
        this.workouts.push(newWorkout);
    }

    getWorkouts() {
        return this.workouts;
    }

    filterWorkouts(filters) {
        return this.workouts.filter(workout => {
            const matchesSport = filters.sport ? workout.sport === filters.sport : true;
            const matchesDate = filters.date ? workout.date === filters.date : true;
            return matchesSport && matchesDate;
        });
    }

    deleteWorkout(index) {
        this.workouts.splice(index, 1);
    }
}
