let AWS = require('aws-sdk');
const sns = new AWS.SNS();
exports.handler = function (event, context, callback) {


	callback(null, 'Successfully executed');
	console.log("published to the subscribers");


	sns.publish({
		Message: 'Publish this message to the subscriber _ Send triggering Lambda...',
		Subject: 'message to topic_um',
		MessageAttributes: {},
		MessageStructure: 'String',
		TopicArn: 'arn:aws:sns:us-east-1:480964559519:topicum'
	}).promise()
		.then(data => {
			// your code goes here'
			console.log("message pulished");

		})
		.catch(err => {
			// error handling goes here
			console.log("Error Encountered");
		});

}