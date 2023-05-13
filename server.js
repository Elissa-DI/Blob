const express = require('express');
const artRouter = require('./routes/article');
const app = express();
port = 5000;

app.set('view engine', 'ejs');

app.use('/articles', artRouter)

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