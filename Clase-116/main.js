function preload(){
classifier=ml5.imageClassifier("DoodleNet") 
}
function setup(){
Canvas=createCanvas(280, 280)
Canvas.center()
background("white")
Canvas.mouseReleased(classifyCanvas)
synth = window.speechSynthesis;
}
function draw(){
strokeWeight(15)
stroke(0)
if (mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX. mouseY)

} 
}
function classifyCanvas(){
    classifier.classify(Canvas, gotResult)
}
function gotResult (error, results){
    if (error){
        console.error(error)
    } else{
        console.log(results)
        document.getElementById("label").innerHTML=results[0].label
        document.getElementById("confidence").innerHTML=results[0].confidence
    }
}