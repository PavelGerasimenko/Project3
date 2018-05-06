const app = require('./server');

const server = app.listen(process.env.PORT || 3001, () => {
  console.log('💪🌎 The beast is alive!');
  console.log(`  👉 Please visit localhost:${server.address().port}`);
});
