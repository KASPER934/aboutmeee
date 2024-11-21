document.querySelector("#copyButton").addEventListener("click", function() {
    navigator.clipboard.writeText(document.querySelector("#UID").innerText).then(function() {
        console.log('Text copied to clipboard');
    }).catch(function(error) {
        console.error('Error:', error);
    });
});