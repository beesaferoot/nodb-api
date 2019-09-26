
const express = require('express');
const routes = require('./routers/api/routes');
const path = require('path');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use('/api/employees', routes);
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
    console.log(`Server up and runing on port ${PORT}`);
})

