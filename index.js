const express = require('express');
const app = express();
const PORT = 8080;

// apply middleware.. the express.json middleware
// now every request will go thru this middleware which will convert body to json, then making it available in our post callback as json
app.use(express.json())

app.listen(
	PORT,
	() => { console.log(`it's alive on http://localhost:${PORT}`)
})

app.get('/tshirt', (req, res) => {
	res.status(200).send({
		tshirt: '👕',
		size: 'larger'
	});

});

app.post('/tshirt/:id', (req, res) => {
	const { id } = req.params;
	const { logo } = req.body;

	if (!logo) {
	res.status(418).send({ message: "We need a logo!"})
	}

	res.send({
		tshirt: `👕 with your ${logo} and ID of ${id}`,
})



})