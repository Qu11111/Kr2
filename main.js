import WorkoutModel from './model/Model.js';
import WorkoutFormView from './view/FormView.js';
import WorkoutFilterView from './view/FilterView.js';
import WorkoutListView from './view/ListView.js';
import WorkoutHeaderView from './view/HeaderView.js';
import WorkoutPresenter from './presenter/Presenter.js';

const workoutModel = new WorkoutModel();
const workoutHeaderView = new WorkoutHeaderView();
const workoutFormView = new WorkoutFormView();
const workoutFilterView = new WorkoutFilterView();
const workoutListView = new WorkoutListView();

const workoutPresenter = new WorkoutPresenter(
    workoutModel,
    workoutHeaderView,
    workoutFormView,
    workoutFilterView,
    workoutListView
);
