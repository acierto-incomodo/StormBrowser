const input = document.getElementById('fake-search');
input.focus();
input.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    let val = this.value.trim();
    if (val) {
      if (val.startsWith('http://') || val.startsWith('https://') || val.startsWith('file://')) {
        window.location.href = val;
      } else if (val.includes('.') && !val.includes(' ')) {
        window.location.href = 'https://' + val;
      } else {
        window.location.href = 'https://www.google.com/search?q=' + encodeURIComponent(val);
      }
    }
  }
});