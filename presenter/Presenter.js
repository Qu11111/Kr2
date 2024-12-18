export default class WorkoutPresenter {
    constructor(model, headerView, formView, filterView, listView) {
        this.model = model;
        this.headerView = headerView;
        this.formView = formView;
        this.filterView = filterView;
        this.listView = listView;

        this.updateView();
        this.formView.bindAddWorkout(this.handleAddWorkout);
        this.listView.bindDeleteWorkout(this.handleDeleteWorkout);
        this.filterView.bindFilters(this.handleFilters);
    }

    updateView(filteredWorkouts = null) {
        const workouts = filteredWorkouts || this.model.getWorkouts(); 
        this.listView.displayWorkouts(workouts);
        this.headerView.displayTotalWorkouts(this.model.getWorkouts().length); 
    }

    handleAddWorkout = (workout) => {
        if (!workout.sport || !workout.duration || !workout.intensity || !workout.date) {
            alert('Пожалуйста, заполните все поля!');
            return;
        }
        this.model.addWorkout(workout);  
        this.formView.clearForm();  
        this.filterView.resetSportFilter();  
        this.updateView();  
    };

    handleDeleteWorkout = (index) => {
        this.model.deleteWorkout(index); 
        this.updateView(); 
    };

    handleFilters = () => {
        const { sport, date } = this.filterView.getFilterValues();  
        const filteredWorkouts = this.model.filterWorkouts({ sport, date }); 
        this.updateView(filteredWorkouts); 
    };
}
