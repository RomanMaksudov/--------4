class Device {
  constructor(name) {
    this.name = name;
  
  }
  electricDeviceWork() {
    let work = false;
    if (this.electric && this.switchon) {
      work = true;
    } else {
      work = false;
    }
    return (work);
  }
}

 
class ElectricDevice {
  constructor(name, power, electric, switchon) {
    this.name = name;
    this.power = power;
    this.electric = electric;
    this.switchon = switchon;
    this.showPower = function () {
      console.log(power);
    };
  }
}
  
ElectricDevice.prototype = new Device();

let sumPower = function(){
    let sum = 0;
   for(let value of ElDiv){
    if (value.electricDeviceWork()){
        sum += value.power;
    }else{
        sum;
    }    

  }
  return sum;
 

}

const lamp = new ElectricDevice(name = "lampa", power = 30, electric = true, switchon = true);
const pc = new ElectricDevice(name = "computer", power = 20, electric = true, switchon = true);
const ac = new ElectricDevice(name = "conditioner", power = 10, electric = true, switchon = false);
let ElDiv = [lamp, pc, ac];

console.log(lamp.electricDeviceWork());

console.log(sumPower(ElDiv));
lamp.showPower();
pc.showPower();