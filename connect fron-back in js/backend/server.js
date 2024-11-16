import express from 'express';

const app = express();

app.get('/', (req, res)=>{
    res.send('Server is ready')
});

// api calls --- get a list of 5 jokes
app.get('/jokes', (req, res)=>{
    const jokes = [
        { 
            id: 1,
            title: "singh",
            content: "this is me"
        },
        { 
            id: 2,
            title: "singh",
            content: "this is me"
        },
        { 
            id: 3,
            title: "singh",
            content: "this is me"
        },
        { 
            id: 4,
            title: "singh",
            content: "this is me"
        },
        { 
            id: 5,
            title: "singh",
            content: "this is me"
        }
    ];
    res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Server at http://localhost:${port}`);
});