let page = document.getElementById('buttonDiv');
const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];

function constructOptions(kButtonColors) {
  for (let btnColor of kButtonColors) {
    let button = document.createElement('button');
    button.style.backgroundColor = btnColor;
    
    button.addEventListener('click', function() {
      chrome.storage.sync.set({color: btnColor}, function() {
        console.log('color is ' + btnColor);
      })
    });
    
    page.appendChild(button);
  }
}

constructOptions(kButtonColors);
