let baseClassTestElement = document.querySelector("#base-class-test")
let derivedClassTestElement = document.querySelector("#drived-class-test")
let derivedClass2TestElement = document.querySelector("#derived-class-2-test")

//wrap everything in try catch since they won't have classes to begin with
try {
    let v = new Vehicle("Jord J-051")
    if(v.model === "Jord J-051"){
        baseClassTestElement.textContent = " Passed"
        baseClassTestElement.style.color = "green"
    }
} catch (error) {
    console.log("some tests have failed error:", error)
}