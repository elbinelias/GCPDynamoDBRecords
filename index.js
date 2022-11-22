const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();
console.log('Loading function');

exports.handler = function(event, context) {
    console.log(JSON.stringify(event, null, 2));
	var params = {
	TableName : 'gcp-table-dev',
	FilterExpression : 'userId = :search_param',
	ExpressionAttributeValues : {':search_param' :event.gcpid.toString()}
	};
	
	var documentClient = new AWS.DynamoDB.DocumentClient();
	
	documentClient.scan(params, function(err, data) {
	   if (err) console.log(err);
	   else console.log(data);
	});
   
};
