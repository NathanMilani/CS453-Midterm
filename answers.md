# **PART 1 of Midterm Answers:**



1. ###### Socket vs. HTTP

   * A raw TCP socket server is the way a TCP client has a direct way to communicate with a TCP server as it is responsible to send and receive messages of byte code. Then the server will receive the clients request, process it, then send a response back. A HTTP server is a layer higher above TCP and behaves like a TCP Socket Server but it uses different methods to process a request to the server from the client. Methods like POST, GET, PUT, and DELETE have clear responsibilities and can upon request process the clients request easily and clearly. That's why the clear winner for web APIs between these is HTTP because it uses TCP to transport data and defines a standard format for those bytes using requests, responses, headers, and status codes.
2. ###### Request/Response

   * The Request part is when a client sends a byte message to the server to receive, then the server takes and reads and processes the request then sends back a response to the client. However, there are different protocols that handle this behavior. TCP uses a command server to make a synchronous or asynchronous connection to the client and server where the client sends a discrete command like hello TOUPPER to the server and then the server waits to receive the request and then send the client a corresponding result of HELLO back. HTTP API on the other hand will use method commands to send the server over a network connection, and then the server will process the request and then returns a HTTP formatted response. So if you wanted to get the ID of a employee to give them a promotion, you will search/fetch the ID by using the GET method, and then you could use the PATCH method to make a change to the state of the employees job title. An express route handler is where a request (req) object in the code contains the information sent by the client and then the response (res) sends data a status code like 200 to tell the client the request was good. So a GET method could look for ID 5 and will send back a response of good/bad in the format of code 200 or 404 saying ok or not found respectfully.
3. ###### Stateless

   * Stateless means that a server has no memory or way to refer back to a previous request or response that was made prior by the client to the server. This means that each request must be made independently from one another but with enough information for the server to process the clients requests. One of the advantages about a server being stateless is that you don't need to rely on one request to build upon another request to get a desired response from the server. However, However, the disadvantage is that the client must send all of the required information with every request because the server does not remember previous requests. Take a online very basic calculator for example. IF you want to do 1 + 1, you can do so. But, the client must send the complete calculation every time because the server doesn't remember the previous answer.
4. ###### HTTP Status Codes

   * A new resource was successfully created: 201

     * This means that a resource in the API was created like a new ID in the database.
   * The client requested an item that does not exist: 404

     * This means that what the client sent to be searched is nowhere in the API.
   * The client sent JSON missing a required field: 400

     * This means that the API needs more information to process the request of the server.
   * The server had an unexpected error: 500

     * This mean that the server had a error processing a request from the client.
   * A successful request returns JSON data: 200

     * This tells the client that the request was successful.





# PART 2 - API Design



1. ###### Resources URI's

   * Getting all tasks: GET /tasks
   * Getting one task by id: GET /tasks/:id
   * Creating a task: POST /tasks
   * Replacing a task: PUT /tasks/:id
   * Partially updating a task: PATCH /tasks/:id
   * Deleting a task: DELETE /tasks/:id
2. ###### Method Semantics

   * GET /tasks:

     * This route is safe because you don't change the servers data. This will read through the servers current state of data and see if the clients request has a match. However, this can be idempotent because if the client request the same data over and over again, then it will keep sending the same result until a change has been made to the id or it is deleted.
   * GET /tasks/:id

     * This route is also safe because you are talking about getting a id per a specific task. However, if client asks for the same id without changing the task, the same response will be sent to the client which makes this also idempotent.
   * POST /tasks

     * Since this route creates a new task, this is a neither because it creates a new resource, so it changes the server and sending the same request multiple times can create multiple resources.
   * PUT /tasks/:id

     * This route is idempotent because replacing the same task with the same data multiple times leaves it in the same final state. It is not safe because it modifies the server's data.
   * PATCH /tasks/:id

     * This route is neither because it will modify part of a task and repeating the method may or may not end up producing the same result when the task updates. That's why this is neither.
   * DELETE /tasks/:id

     * This route is idempotent because once a task has been deleted, sending the same DELETE request again leaves the server in the same final state. It is not safe because it modifies the server by deleting data.
3. ###### JSON Representation

For this problem, here is a valid example that will create a new task in a JSON file:



{

&#x20;   "title": "Working On My Midterm Tonight",

&#x20;   "course": "CS453",

&#x20;   "completed": true

}





# PART 4 - Middleware



1. Middleware allows the program to reuse the same functionality for different routes instead of having to rewrite the same code for each route in the program. For instance, the logger middleware in this midterm program records information about every request, such as the HTTP method, path, response status, and the time it took to process the request. The validation middleware checks what the client sends and determines whether the data is valid before allowing the request to continue to the route handler. With both of these middleware components, we save developer time and avoid writing duplicate code for the same functionality. This also makes the code more readable, cleaner, and easier to maintain.





# PART 7 - Reflection

1. Code vs. Contract

   * The code that runs on the server and gets processed and sent back to the client is called the Express route implementation. This uses methods like GET, POST, PUT, PATCH, and DELETE that tell the server what the client is requesting it to do. On the other hand, the documentation, or otherwise known as the contract, is done through an OpenAPI specification. Instead of containing the implementation code, it describes how the API should behave by documenting the available routes, request bodies, responses, parameters, and status codes. This provides a contract between the client and the server so developers know how the API is expected to work.
2. Drift

   * There are different ways that code and OpenAPI documentation can drift but the overarching biggest drift is when a programmer makes a change in the express code and doesn't update the OpenAPI documentation to match those changes. One example of this is when you are changing the route /api/tasks to /api/tasks/courseTasks, or a second example is when the code returns a new status code after changing the state of the field. If the programmer makes any changes one side without making changes to the other like in the two examples given, then the program will not function as expected because the code and the OpenAPI are expecting two totally different outcomes.
3. Client Impact

   * The reason why there could be problems is because the client may send a request to the wrong route, use an incorrect request body, or expect a different response than what the server actually returns. This is a common reason client applications will crash, return errors, or give back different results than what was anticipated. Encountering these kinds of problems make maintainability, development, debugging, and other factors harder to communicate with the client and API.



