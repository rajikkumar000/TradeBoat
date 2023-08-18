// popup.js

document.getElementById("extractButton").addEventListener("click", function() {
    // Send a message to the content script to initiate data extraction
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                function: () => {
                    // Function executed in the context of the content script
                    return { action: "extractAlerts" };
                },
            },
            function(result) {
                // Handle extracted alerts
                const extractedAlerts = result[0].result.alerts;
                displayAlerts(extractedAlerts);
            }
        );
    });
});

function displayAlerts(alerts) {
    const alertsContainer = document.getElementById("alerts");

    // Clear previous alerts
    alertsContainer.innerHTML = "";

    // Display extracted alerts
    for (const alert of alerts) {
        const alertElement = document.createElement("div");
        alertElement.textContent = alert;
        alertsContainer.appendChild(alertElement);
    }
}