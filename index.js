const express = require('express');
const router = require('./routes/user.routes');

const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use('/api', router);

app.listen(PORT, () => {
  console.log(`🚀 Server listening at ${PORT}`);
});
