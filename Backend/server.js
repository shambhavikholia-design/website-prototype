const express = require('express');
const cors = require('cors');

const homeRoutes = require('./Routes/home');
const aboutRoutes = require('./Routes/about');
const contactRoutes = require('./Routes/contact');
const resourcesRoutes = require('./Routes/resources');
const standardsRoutes = require('./Routes/standards');

const app = express();
const PORT = 5000;


app.use(cors());
app.use(express.json());


app.use('/api/home', homeRoutes);
app.use('/api/about', aboutRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/resources', resourcesRoutes);
app.use('/api/standards', standardsRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'MDRConnects API is running!', status: 'OK' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
