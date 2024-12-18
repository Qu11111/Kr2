export default class WorkoutFilterView {
    constructor() {
        const filterContainer = document.getElementById('filter-container');
        filterContainer.innerHTML = `
            <h2>Фильтры</h2>
            <select id="sport-filter">
                <option value="">Все виды спорта</option>
                <option value="Бег">Бег</option>
                <option value="Велосипед">Велосипед</option>
                <option value="Плавание">Плавание</option>
                <option value="Зал">Тренажерный зал</option>
            </select>
            <input type="date" id="date-filter">
        `;

        this.sportFilter = document.getElementById('sport-filter');
        this.dateFilter = document.getElementById('date-filter');
    }

    getFilterValues() {
        return {
            sport: this.sportFilter.value,
            date: this.dateFilter.value,
        };
    }

    bindFilters(handler) {
        this.sportFilter.addEventListener('change', handler);
        this.dateFilter.addEventListener('input', handler);
    }

    resetSportFilter() {
        this.sportFilter.value = "";
    }
}
