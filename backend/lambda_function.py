import json
import boto3
from decimal import Decimal

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('ResumeCounter')

def lambda_handler(event, context):
    
    response = table.update_item(
        Key={'id': 'resume'}, 
        UpdateExpression='ADD #count :inc',
        ExpressionAttributeNames={'#count': 'count'},
        ExpressionAttributeValues={':inc': 1},
        ReturnValues='UPDATED_NEW' 
    )

    new_count = response['Attributes']['count']
    
    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Origin': '*', 
            'Content-Type': 'application/json'
        },
        'body': json.dumps({'count': str(new_count)})
    }