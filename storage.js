class Storage{
    constructor() {
        this.state;
        this.defaultState = 'Bucharest';
    }

    getLocationData() {
        if(localStorage.getItem('state') === null) {
            this.state = this.defaultState;
        } else {
            this.state = localStorage.getItem('state');
        }

        return {
            state: this.state
        }
    }

    setLocationData(state) {
        localStorage.setItem('state', state);
    }
}