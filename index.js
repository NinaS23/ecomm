/* eslint-disable linebreak-style */
/* eslint-disable no-tabs */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */

import dotenv from "dotenv";
import chalk from "chalk";
import app from "./src/app.js";

dotenv.config();

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`${chalk.magenta("iniciando ecomm em: ")}http://localhost:${port}`);
});
