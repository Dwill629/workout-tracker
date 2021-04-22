app.use(express.json());

app.use(express.static('public'));

app.use(require('./routes/apiRoutes'));
app.use(require('./routes/htmlRoutes'));