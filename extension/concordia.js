chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(sender.tab ?
            "from a content script:" + sender.tab.url :
            "from the extension");
        var nameValue = request.nameValue
        var surnameValue = request.surnameValue
        var peselValue = request.peselValue
        var kilometersValue = request.kilometersValue
        var zipValue = request.zipCodeValue
        var carNrValue = request.carNrValue
        sendResponse({response: "Received the message!"});
        document.getElementsByClassName('inputWidget')[0].value=nameValue
        document.getElementById('owner-lastName').value=surnameValue
        document.getElementById('owner-pesel').value=peselValue
        document.getElementById('mileage').value=kilometersValue
        document.getElementById('owner-postcode').value=zipValue
        document.getElementById('registrationNumber').value=carNrValue

        // var findAllInputs = document.querySelectorAll('input')
        // findAllInputs.value = inputValue
    });