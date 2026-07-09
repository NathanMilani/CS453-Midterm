const BASE_URL = "http://localhost:3000";

async function main() {
    try {
        console.log("1. Calling /health");
        const healthResponse = await fetch(`${BASE_URL}/health`);
        const healthData = await healthResponse.json();
        console.log(healthData);

        console.log("\n2. Creating a task");
        const createResponse = await fetch(`${BASE_URL}/api/tasks`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: "Study for Midterm",
                course: "CS453",
                completed: false
            })
        });

        const createdTask = await createResponse.json();
        console.log(createdTask);

        console.log("\n3. Listing all tasks");
        const listResponse = await fetch(`${BASE_URL}/api/tasks`);
        const tasks = await listResponse.json();
        console.log(tasks);

        console.log("\n4. Getting one task by id");
        const getResponse = await fetch(`${BASE_URL}/api/tasks/${createdTask.id}`);
        const oneTask = await getResponse.json();
        console.log(oneTask);

        console.log("\n5. Updating a task");
        const updateResponse = await fetch(`${BASE_URL}/api/tasks/${createdTask.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                completed: true
            })
        });

        const updatedTask = await updateResponse.json();
        console.log(updatedTask);

        console.log("\n6. Deleting a task");
        const deleteResponse = await fetch(`${BASE_URL}/api/tasks/${createdTask.id}`, {
            method: "DELETE"
        });

        console.log(`Delete status: ${deleteResponse.status}`);

    } catch (error) {
        console.error("Client error:", error.message);
    }
}

main();