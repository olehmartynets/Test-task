# Test task

It is a node.js server with one GET endpoint "http://localhost:3000/". You can pass an integer number  in query params as "number" and get the next responses:

 - If the integer is a multiple of 3, it should return "G".

 - If the integer is a multiple of 5, it should return "N".

 - If the integer is a multiple of both 3 and 5, then both "GN" should be displayed.

 - Otherwise the provided integer should be returned.

Example of request: "http://localhost:3000/?number=15", response: {"response":"GN"}

# Installation:

1. install node.js version 14+

2. Clone project

3. npm install

3. npm start

# Testing:

 - run "npm test"