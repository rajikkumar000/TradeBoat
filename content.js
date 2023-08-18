// content.js

// Function to extract TradingView alert data
function extractData() {
    const alerts = [];

    // Modify this part to extract alerts from the TradingView page
    // For example, use DOM manipulation to locate and extract the alerts

    return alerts;
}

// Send extracted alerts to the popup
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "extractAlerts") {
        const extractedAlerts = extractData();
        sendResponse({ alerts: extractedAlerts });
    }
});