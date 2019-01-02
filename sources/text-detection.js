const vision = require('@google-cloud/vision')
const { createCanvas, loadImage } = require('canvas')
const canvas = createCanvas(300,500)
const ctx = canvas.getContext('2d')

const client = new vision.ImageAnnotatorClient()

const fileName = '../resources/books.jpg'

const textDetection = async function() {
    const [result] = await client.textDetection(fileName)
    const detections = result.textAnnotations
    console.log('Text:')
    detections.forEach(text => {
        // console.log(text);
        if (text.description == 'Java') {
            console.log(text.boundingPoly.vertices[0].x)
            console.log(text.boundingPoly.vertices[0].y)
            console.log(text.boundingPoly.vertices[1])
            console.log(text.boundingPoly.vertices[2])
            console.log(text.boundingPoly.vertices[3])
        }
    });
}

textDetection()

ctx.strokeStyle = 'rgba(0,0,0,0.5)'
ctx.beginPath()
ctx.lineTo(50, 102)
ctx.lineTo(50, 102)
ctx.stroke()

loadImage(fileName).then((image) => {
    ctx.drawImage(image, 50, 0, 70, 70)
    console.log('<img src="' + canvas.toDataURL() + '" />')
})
