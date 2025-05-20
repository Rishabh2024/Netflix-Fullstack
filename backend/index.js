require("dotenv").config();

const app = require("./app.js");

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
