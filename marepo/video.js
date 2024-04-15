function switchVideo(videoId) {
  // Find the closest common ancestor ('.row') of the clicked button
  var container = document.getElementById(videoId).closest('.row');
  
  // Find all video elements within this container
  var videos = container.querySelectorAll('video');
  
  // Hide all videos in this specific container
  videos.forEach(function(video) {
    video.style.display = 'none';
  });
  
  // Show the selected video
  var selectedVideo = container.querySelector('#' + videoId);
  if (selectedVideo) {
    selectedVideo.style.display = 'block';
  } else {
    console.error('Selected video not found:', videoId);
  }
}

function copyToClipboard(selector) {
  // Find the element
  const elem = document.querySelector(selector);
  if (elem) {
    // Create a range and selection to select the text inside the element
    const range = document.createRange();
    const selection = window.getSelection();
    range.selectNodeContents(elem);
    selection.removeAllRanges(); // Clear any current selection
    selection.addRange(range); // Select the text content of the element
    
    try {
      // Copy the selected text to the clipboard
      navigator.clipboard.writeText(selection.toString()).then(() => {
        console.log('Citation copied to clipboard.');
        // Optionally, provide feedback to the user that copying was successful.
      }, (err) => {
        console.error('Could not copy text: ', err);
      });
    } catch (err) {
      console.error('Error copying to clipboard: ', err);
    }
    
    selection.removeAllRanges(); // Clear the selection after copying
  } else {
    console.error('Element to copy not found');
  }
}