const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');


const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public")) //  to use css 

var fruit_list = [];

app.get('/', (req, res) => {
  const d = new Date();
  res.render('index', { display_date: d.toDateString(), fruit_list });
});

app.post('/', (req, res) => {
  const c1 = req.body.fruitInput;
  fruit_list.push(c1);
  res.redirect('/');
});

app.post('/delete/:index', (req, res) => {
  const index = req.params.index;
  fruit_list.splice(index, 1);
  res.redirect('/');
});

app.listen(3000, () => {
  console.log('Server Started at port 3000');
});
