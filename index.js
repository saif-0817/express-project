const express = require('express');
const app = express();
const posts = require('./routes/posts');
const logger = require('./middleware/logger')
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(logger);

app.use('/api/posts', posts);

app.listen(port, () => {
    console.log('Server is running on Port number', port);
});
