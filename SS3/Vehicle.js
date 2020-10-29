export class Vehicle {
  name;
  speed;
  brand;
  constructor(name, speed, brand) {
    this.name = name;
    this.speed = speed;
    this.brand = brand;
  }
  about() {
    console.log(`Phương tiện ${this.name} chạy với tốc độ ${this.speed}`);
  }
}
