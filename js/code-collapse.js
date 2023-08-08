function toggleCodeBox(element) {
  var collapsed = element.querySelector('.collapsed');
  
  if (collapsed.style.maxHeight === '150px') {
    collapsed.style.maxHeight = 'none';
  } else {
    collapsed.style.maxHeight = '150px';
    var boundingRect = element.getBoundingClientRect();
    var scrollOffset = boundingRect.top - 80; // Subtract x number of pixels
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.scrollBy(0, scrollOffset);
  }
}