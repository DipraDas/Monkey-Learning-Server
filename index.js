const express = require('express')
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())

const courses = require('./data/courses-name.json')
const courseDetails = require('./data/courses-details.json')

app.get('/', (req, res) => {
    res.send('Monkey API running');
});

app.get('/courses', (req, res) => {
    res.send(courses);
})

app.get('/course', (req, res) => {
    res.send(courseDetails);
})

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selectCourse = courseDetails.find(n => n._id === id);
    res.send(selectCourse);
})
app.listen(port, () => {
    console.log('Monkey Learning on this port', port);
})