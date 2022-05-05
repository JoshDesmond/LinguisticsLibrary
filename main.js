/*
 * This is a temporary reference file based on a tutorial from:
 * https://attacomsian.com/blog/nodejs-mongodb-local-connection
 */ 
const MongoClient = require('mongodb').MongoClient;

// Connect URL
const url = 'mongodb://127.0.0.1:27017';

// Connec to MongoDB
MongoClient.connect(url, {
	useNewUrlParser: true,
	useUnifiedTopology: true
}, (err, client) => {
	if (err) {
		return console.log(err);
	}

	// Specify database you want to access
	const db = client.db('school');


	const courses = db.collection('courses');

	courses.insertOne({ name: 'Web Security' }, (err, result) => { });

	courses.insertMany([
		{ name: 'Web Design' },
		{ name: 'Distributed Database' },
		{ name: 'Artificial Intelligence' }
	], (err, results) => {
		console.error(err);
	});

	courses.find().toArray((err, results) => {
		console.log(results);
	});
	console.log(`MongoDB Connected: ${url}`);
});

