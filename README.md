# node_jwt_token



REGISTER API

curl --location --request POST 'http://localhost:8080/register' \
--header 'Content-Type: application/json' \
--data-raw '{
	"id":"1234",
	"password":"abcd"
}
'


LOGIN API

curl --location --request GET 'http://localhost:8080/login' \
--header 'x-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzQiLCJpYXQiOjE1ODUzOTU2MTYsImV4cCI6MTU4NTM5NTY0Nn0.vpU6yz0pFGPJShGtwjj6sbZrqEPnnsfZuwPcUHWeZEs'