const express = require('express');
const app = express();

app.get('/', (request, response) => response.send('Hello world'));

// parameter: 검색어와 이미지 파일을 받아서 text detection
// return: 4개의 꼭지점 좌표 -> 이것을 이용해서 화면에서 그린다.
app.post('/locations', (request, response) => {

    const vertices = new Array(4);
    vertices[0] = "{1, 1}";
    vertices[1] = "{2, 2}";
    vertices[2] = "{3, 3}";
    vertices[3] = "{4, 4}";

    response.send(vertices);
});

app.listen(3000, () => console.log('App listening on port 3000'));