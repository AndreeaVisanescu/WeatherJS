class Weather {
    constructor (state) {
      this.apiKey = '';
      this.state = state;
    }
  
    async getWeather() {
      const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${this.state}&aqi=yes`)

      const responseData = await response.json();
    
      return responseData;
    }
  
    changeLocation(state) {
      this.state = state;
    }
  }