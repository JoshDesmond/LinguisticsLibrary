const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://127.0.0.1:27017';
const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true
};

const words = ["hello", "hi", "howdy"];

MongoClient.connect(url, options, (err, client) => {
	if (err) { return console.error(err); }

	const db = client.db('words');

	const collection = db.collection('gloveWords');

	for (const word of words) {
		collection.insertOne({ name: word}, (err, result) => {
			console.error(err);
		});
	}

	collection.find().toArray((err, results) => {
		console.log(results);
	});
});

