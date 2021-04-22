app.use(express.json());

app.use(express.static('public'));

app.use(require('./routes/apiRoutes'));
app.use(require('./routes/htmlRoutes'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// Starts the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
