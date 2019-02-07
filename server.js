const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;

var app = express();

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', ()=>{
return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text)=>{
return text.toUpperCase();
});

app.get('/', (req, res)=>{
  //res.send('<h1>Hello express</h1>');
  res.render('home.hbs', {
    pageTitle: 'About Page',
    welcomeMessage: 'Welcome to our awesome website!',
    

  });
});

app.get('/about', (req, res) =>{
  res.render('about.hbs', {
    pageTitle: 'About Page',
    
  });
});

app.get('/project', (req, res) =>{
  res.render('project.hbs', {
    pageTitle: 'Projects',
    
  });
});

app.get('/sam', (req, res) =>{
  res.render('sam.hbs', {
    pageTitle: 'Samalo',
    
  });
});

app.get('/bad', (req, res)=>{
  res.send({
  errorMessage: 'Unable to handle the request!'
  });
})

app.listen(port, () => {
 console.log(`Server is up on port ${port}`);
});