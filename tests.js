let baseClassTestElement = document.querySelector("#base-class-test")
let derivedClassTestElement = document.querySelector("#derived-class-test")
let derivedClass2TestElement = document.querySelector("#derived-class-2-test")
baseClassTestElement.style.color = "red"
derivedClassTestElement.style.color = "red"
derivedClass2TestElement.style.color = "red"
//wrap everything in try catch since they won't have classes to begin with
try {
    //Base Class tests
    let v = new Vehicle("Jord J-051")
    if(v.model === "Jord J-051" && v.drive() === "Jord J-051 drives"){
        baseClassTestElement.textContent = "Passed"
        baseClassTestElement.style.color = "green"
    }
} catch (error) {
    
    console.log("some base class tests have failed error:", error)
}

try {
    //Derived Class tests
    let sedanPasses = false
    let sedan = new Sedan("Jexus", true)
    if(sedan.model === "Jexus" && sedan.drive() === "Jexus drives" && sedan.backupCamera === true){
        sedanPasses = true
    }
    let suvPasses = false
    let suv = new Suv("Jahoe", true)
    if(suv.model === "Jahoe" && suv.drive() === "Jahoe drives" && suv.offroadPackage === true){
        suvPasses = true
    }
    let truckPasses = false
    let truck = new Truck("Jord J-051", 50000)
    if(truck.model === "Jord J-051" && truck.drive() === "Jord J-051 drives" && truck.towingCapacity === 50000){
        truckPasses = true
    }
    //all dervied tests pass?
    if(sedanPasses && suvPasses && truckPasses){
        derivedClassTestElement.textContent = "Passed"
        derivedClassTestElement.style.color = "green"
    }
} catch (error) {
    
    console.log("some derived class tests have failed error:", error)
}

try {
    let jesla = new ElectricSedan ("Jesla", true)

    if (jesla.model === "Jesla" && jesla.drive() === "Jesla drives" && jesla.recharge() === "Jesla recharges"){
        derivedClass2TestElement.textContent = "Passed"
        derivedClass2TestElement.style.color = "green"
    }
} catch (error) {
    
    console.log("some derived class 2 tests have failed error:", error)
}