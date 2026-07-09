# Midterm Program README



#### \#Course Task Tracker API Program

This program is a Express API that manages course tasks using in-memory and not a database



\##Features

\- Health check endpoint

\- Create tasks

\- List all tasks

\- Get one task by id

\- Replace a task

\- Partially update a task

\- Delete a task

\- Request logging middleware

\- Task validation middleware

\- OpenAPI documentation



\##Program Structure

src/

&#x20; server.js

&#x20; routes/

&#x20;   tasks.js

&#x20; middleware/

&#x20;   logger.js

&#x20;   errorHandler.js

&#x20;   validation.js

client.js

openapi.yaml

answers.md

package.json

README.md



\##Setup/Run and Tests



\#Setup

npm install



\#Run the server

npm start:



\#Tests

Health check:

curl http://localhost:3000/health



Get all the tasks:

curl http://localhost:3000/api/tasks



Create a task:

Invoke-RestMethod `

\-Uri http://localhost:3000/api/tasks `

\-Method Post `

\-ContentType "application/json" `

\-Body '{

"title":"Study for Midterm",

"course":"CS453",

"completed":true

}'



Get one Task:

curl http://localhost:3000/api/tasks/1



Update part of a task:

Invoke-RestMethod `

\-Uri http://localhost:3000/api/tasks/1 `

\-Method Patch `

\-ContentType "application/json" `

\-Body '{

"completed":false

}'



Delete a task:

curl -X DELETE http://localhost:3000/api/tasks/1



Run the client:

node client.js





\##OpenAPI Documentation

Located in: openapi.yaml

