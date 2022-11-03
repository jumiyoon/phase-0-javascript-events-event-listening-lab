function addingEventListener() {
    const input = document.getElementById('button');
    function alerting() {
        alert ('I have been invoked!')
    }
    input.addEventListener ('click', alerting)
}


