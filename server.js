const express = require('express');
const artRouter = require('./routes/article');
const app = express();
port = 5000;

app.set('view engine', 'ejs');

app.use('/articles', artRouter)

app.get('/', (req, res)=> {
    const articles = [{
        title: 'Test Article',
        createdAt: Date.now(),
        description: 'Test Article Description'
    }]
    res.render('index', { articles: articles });
})

app.listen(port, ()=>{
    console.log(`Server listening on ${port}`);
})