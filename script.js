function changeContent() {
    const heading = document.getElementById("main-heading");
    const description = document.getElementById("description");

    heading.textContent = "Hello from Sylvia's JavaScript!";
    description.textContent = "The content and style were changed dynamically.";

    // Modify CSS styles via JS
    heading.style.color = "purple";
    description.style.fontWeight = "bold";
    description.style.fontSize = "18px";
}

function toggleElement() {
    const container = document.getElementById("box-container");
    const existingBox = document.getElementById("box");

    if (existingBox) {
        container.removeChild(existingBox);
    } else {
        const newBox = document.createElement("div");
        newBox.id = "box";
        container.appendChild(newBox);
    }
}
