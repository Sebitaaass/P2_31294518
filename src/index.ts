import express, { Request, Response } from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

// Carpeta pública
app.use(express.static(path.join(__dirname, '../public')));

// Configurar vistas
app.use(express.static(path.join(__dirname, '../public')));
app.set('view engine', 'ejs');

// Ruta principal
app.get('/', (req: Request, res: Response) => {
  res.render('index');
});

// Servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
