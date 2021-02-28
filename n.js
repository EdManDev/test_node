const express = require("express");
const app = express();
const axios = require("axios");

// ----------------------------------------------------------------------
axios
	.get("http://localhost:8000/api/category/5fd574fc06b93967b9f6f9db")
	.then(function (res) {
		console.log(JSON.stringify(res.data));
	})
	.catch(function (error) {
		console.log(error);
	});
// ----------------------------------------------------------------------

app.get("/", (req, res) => {
	res.send({ data: "Hellos World!" });
});

const port = 3000;
app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
