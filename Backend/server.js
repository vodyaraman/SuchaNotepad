import app from './app.js';

const PORT = process.env.PORT || 10101;
const HOST = 'localhost';

app.listen(PORT, HOST, (err) => {
    if(err) console.log("Server Error", err);
    else console.log(`Server is running on http://${HOST}:${PORT}/`);
});

