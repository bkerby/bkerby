$(document).ready(() => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        document.getElementById('pdf').style.display = 'none';
    }
});
