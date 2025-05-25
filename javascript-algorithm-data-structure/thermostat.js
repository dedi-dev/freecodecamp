class Thermostat {
  constructor(fahrenheit) {
    this._fahrenheit = fahrenheit;
  }

  get temperature() {
    const celcius = 5/9 * (this._fahrenheit - 32);
    return celcius;
  }

  set temperature(celcius) {
    this._fahrenheit = celcius * 9.0 / 5 + 32;
  }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius