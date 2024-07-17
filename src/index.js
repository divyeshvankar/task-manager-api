// src/index.js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('../models'); // Ensure correct import
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerRouter = require('./swagger'); // Your Swagger configuration file

app.use(express.json());
app.use(bodyParser.json()); 

// Sync database
sequelize.sync({ force: false })
    .then(() => {
        console.log('Database synced');
    })
    .catch(err => {
        console.error('Error syncing database:', err);
    });


// Serve Swagger UI
app.use('/', swaggerRouter);


// const { specs, swaggerUi } = require('./swagger');
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
// const setupSwagger = require('./swagger');
// setupSwagger(app);


// Connect Task Routes to the Application:
const taskRoutes = require('./routes/taskRoutes');
app.use('/api', taskRoutes);

// Connect User Routes to the Application:
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

// Connect Error Handling Middleware:
const errorHandler = require('./middleware/errorHandler');
app.use(errorHandler);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


