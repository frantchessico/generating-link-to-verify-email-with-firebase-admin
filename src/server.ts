import app from './app/app'


const port = process.env.PORT || 3033;
app.listen(port, () => {
  console.log(`Server on http://localhost:${port}`)
});
