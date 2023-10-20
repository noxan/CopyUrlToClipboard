document.addEventListener("DOMContentLoaded", function () {
  const copyButton = document.getElementById("copy-button");
  const extensionIcon = document.getElementById("extension-icon");

  // Function to copy the URL to the clipboard
  function copyURL() {
    browser.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const url = tabs[0].url;
      navigator.clipboard.writeText(url).then(function () {
        console.log("URL copied to clipboard: " + url);
      });
    });
  }

  copyButton.addEventListener("click", copyURL);

  // Add an event listener to the extension icon
  extensionIcon.addEventListener("click", copyURL);

  // Register a command listener to trigger the copyURL function with the keyboard shortcut
  browser.commands.onCommand.addListener(function (command) {
    if (command === "copy-url-to-clipboard") {
      copyURL();
    }
  });
});
