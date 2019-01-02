const vision = require('@google-cloud/vision');

const client = new vision.ImageAnnotatorClient();

client
    .labelDetection('../resources/demo-image.jpg')
    .then(results => {
        const labels = results[0].labelAnnotations;

        console.log('Lables:');
        labels.forEach(label => console.log(label.description));
    })
    .catch(err => {
        console.error('Error:', err);
    });