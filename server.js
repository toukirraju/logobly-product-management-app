const app = require("./app/app");
const connectDatabase = require("./app/config/db");
const { serverPort } = require("./app/utils/secret");

app.listen(serverPort, async () => {
  console.log(`server is running at http://localhost:${serverPort}`);

  await connectDatabase();
});
