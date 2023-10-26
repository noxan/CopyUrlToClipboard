// Put all the javascript code here, that you want to execute in background.

// Function to copy the URL to the clipboard
function copyURL() {
  browser.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const url = tabs[0].url;
    navigator.clipboard.writeText(url).then(function () {
      console.log("URL copied to clipboard: " + url);
    });
  });
}

// Register a command listener to trigger the copyURL function with the keyboard shortcut
browser.commands.onCommand.addListener(function (command) {
  if (command === "copy-url-to-clipboard") {
    copyURL();
  }
});

browser.action.onClicked.addListener(function () {
  copyURL();
});
