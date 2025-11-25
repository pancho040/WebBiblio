"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const MultaRouter_1 = __importDefault(require("./Routes/MultaRouter"));
const ReservaRouter_1 = __importDefault(require("./Routes/ReservaRouter"));
const AutorRouter_1 = __importDefault(require("./Routes/AutorRouter"));
const PersonaRoutes_1 = __importDefault(require("./Routes/PersonaRoutes"));
const authRouter_1 = __importDefault(require("./Routes/authRouter"));
const LibroRouter_1 = __importDefault(require("./Routes/LibroRouter"));
const AdministradorRouter_1 = __importDefault(require("./Routes/AdministradorRouter"));
const ClienteRouter_1 = __importDefault(require("./Routes/ClienteRouter"));
const StockRouter_1 = __importDefault(require("./Routes/StockRouter"));
const signUpRouter_1 = __importDefault(require("./Routes/signUpRouter"));
const LibroAutorRouter_1 = __importDefault(require("./Routes/LibroAutorRouter"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
app.use((0, cors_1.default)({
    origin: process.env.FRONTEND_URL || '*'
}));
app.use(express_1.default.json());
app.use('/api/persona', PersonaRoutes_1.default);
app.use('/api/multa', MultaRouter_1.default);
app.use('/api/reserva', ReservaRouter_1.default);
app.use('/api/administrador', AdministradorRouter_1.default);
app.use('/api/cliente', ClienteRouter_1.default);
app.use('/api/autor', AutorRouter_1.default);
app.use('/api/auth', authRouter_1.default);
app.use('/api/libro', LibroRouter_1.default);
app.use('/api/signup', signUpRouter_1.default);
app.use('/api/stock', StockRouter_1.default);
app.use('/api/LA', LibroAutorRouter_1.default);
console.log("Ruta /api/stock cargada correctamente");
app.get('/api', (_req, res) => {
    res.json({ message: "Hola desde Express!" });
});
//parte cambiada para configurar vagrant
// app.listen(PORT, () => {
//   console.log(`Servidor corriendo en http://localhost:${PORT}`);
// });
app.listen(5000, '0.0.0.0', () => {
    console.log("Servidor corriendo en http://localhost:5000");
});
