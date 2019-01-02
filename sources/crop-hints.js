const vision = require('@google-cloud/vision');

const client = new vision.ImageAnnotatorClient();

const fileName = '../resources/books.jpg';

client
  .cropHints(fileName)
  .then(results => {
    const cropHints = results[0].cropHintsAnnotation;

    cropHints.cropHints.forEach((hintBounds, hintIdx) => {
      console.log(`Crop Hint ${hintIdx}:`);
      hintBounds.boundingPoly.vertices.forEach((bound, boundIdx) => {
        console.log(`  Bound ${boundIdx}: (${bound.x}, ${bound.y})`);
      });
    });
  })
  .catch(err => {
    console.error('ERROR:', err);
  });