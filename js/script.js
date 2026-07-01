async function updateVisitorCount() {
    try {
        const response = await fetch("https://7y3g41lcy2.execute-api.us-east-1.amazonaws.com/VisitorCounterFunction");

        const data = await response.json();

        document.getElementById("visitor-count").innerText = data.count;
    } catch (error) {
        console.error("Error fetching visitor count:", error);
        document.getElementById("visitor-count").innerText = "Error";
    }
}

updateVisitorCount();