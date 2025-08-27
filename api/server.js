require('dotenv').config();
const app = require("./src/infra/web/app");

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
