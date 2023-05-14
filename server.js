const express = require('express');
const mongoose = require('mongoose');
const artRouter = require('./routes/article');
const app = express();
port = 5000;

app.set('view engine', 'ejs');

app.use('/articles', artRouter)
app.use(express.urlencoded({ extended: false }));

mongoose.connect('mongodb://127.0.0.1/blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.get('/', (req, res)=> {
    const articles = [{
        title: 'Test Article',
        createdAt: new Date(),
        description: 'Test Article Description'
    },
    {
        title: 'Test Article 2',
        createdAt: new Date(),
        description: 'Test Article Description 2'
    }
    ]
    res.render('articles/index', { articles: articles });
})

app.listen(port, ()=>{
    console.log(`Server listening on ${port}`);
})