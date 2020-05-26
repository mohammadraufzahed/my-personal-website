function sendMail(){
    let subject = document.getElementById('subject').value;
    let mail = document.getElementById('mail'.value);
    let message = document.getElementById('message').value;
    window.open(`mailto:${mail}?subject=${subject}&body=${message}`);
}