const http = require('http');
const app = require('./app');

// Визначаємо номер порта зі змінних середовища (якщо задано) або по дефолту 5000
const PORT = process.env.PORT || 5000;

// Створюємо сервер і призначаємо у якості обробника app
const httpServer = http.createServer(app);

// Запускаємо сервер на прослуховування порту 5000
httpServer.listen(PORT, () => {
  console.log(`Server is listening http://localhost:${PORT}`);
});
