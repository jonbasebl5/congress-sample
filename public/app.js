var xhr = new XMLHttpRequest();
xhr.open('GET', '/yo');
xhr.send(null);

xhr.onreadystatechange = function () {
  var DONE = 4; // readyState 4 means the request is done.
  var OK = 200; // status 200 is a successful return.
  if (xhr.readyState === DONE) {
    if (xhr.status === OK) {
      document.getElementById('merp').innerHTML = xhr.responseText; // 'This is the returned text.'
    } else {
      console.log('Error: ' + xhr.status); // An error occurred during the request.
    }
  }
}
