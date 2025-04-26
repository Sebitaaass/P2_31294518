"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Carpeta pública
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
// Configurar vistas
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
app.set('view engine', 'ejs');
// Ruta principal
app.get('/', (req, res) => {
    res.render('index');
});
// Servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
