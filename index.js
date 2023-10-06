class Vehicle{
  constructor(model){
    this.model =model
  }
    drive(){
        return this.model +"" + "drives"

    }
}
class Sedan extends Vehicle{
    constructor(model, backupCamera){
        super(model)
        this.model = model
        this.backupCamera = backupCamera
    }
    drive(){
        return this.model+"" +"drives"
    }
}

class Suv extends Vehicle{
    constructor(model,offroadPackage){
        super(model)
        this.model = model
        this.offroadPackage = offroadPackage
    }
    drive(){
        return this.model +""+ "drives"
    }
}

class Truck extends Vehicle{
    constructor(model,towingCapacity){
        super(model)
        this.model = model
        this.towingCapacity = towingCapacity
    }
    drive(){
        return this.model+"" +"drives"
    }
}

class ElectricSedan extends Vehicle{
    constructor(model){
        super(model)
        this.model = model
    }
    drive(){
        return this.model +""+ "drives"
    }
    recharge(){
        return this.model + recharges
    }
}