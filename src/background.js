chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create('page.html', {
      'outerBounds': {
        'width': 767,
        'height': 540
      }
    });
  });