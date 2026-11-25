// src/server.js - liga o servidor na porta 3000
import app from "./app.js";

const PORTA = 3000;
app.listen(PORTA, () => {
    console.log(`Delivery no ar: http://localhost:${PORTA}`);
});