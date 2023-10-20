document.addEventListener("DOMContentLoaded", function () {
  const copyButton = document.getElementById("copy-button");

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

  // Register a command listener to trigger the copyURL function with the keyboard shortcut
  browser.commands.onCommand.addListener(function (command) {
    if (command === "_execute_browser_action") {
      copyURL();
    }
  });
});
