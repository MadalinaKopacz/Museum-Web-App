const express = require('express');
const fs = require('fs');
const cors = require('cors');
const { uuid } = require('uuidv4');

const readJSONFile = (file) => {
    const rawData = fs.readFileSync(file);
    const parsedData = JSON.parse(rawData);
    return parsedData;
}

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));

app.get('/rezervari', (req, res) => {
    const data = readJSONFile('./rezervari.json');
    res.send(data);
});

app.get('/rezervari/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const data = readJSONFile('./rezervari.json');
    const question = data.find(question => question.id === id);
    if (!question) {
        res.sendStatus(404);
        return;
    }

    res.send(question);
});

app.post('/rezervari', (req, res) => {
    const newQuestion = req.body;
    console.log(newQuestion);

    const data = readJSONFile('./rezervari.json');
    newQuestion.id = uuid();

    data.push(newQuestion);

    fs.writeFileSync('./rezervari.json', JSON.stringify(data));

    res.send(newQuestion);
});

app.post('/rezervari/:id', (req, res) => {
    const id = req.params.id;
    const data = readJSONFile('./rezervari.json');
    const question = data.find(question => question.id === id);
    const newData = data.filter(question => question.id !== id);
    console.log(`red ${req.body.reducere}`);
    question.reducere = req.body.reducere;
    newData.push(question);

    fs.writeFileSync('./rezervari.json', JSON.stringify(newData));

    res.send();
});


app.listen(5000, () => {
    console.log('server is running on port 5000');
});