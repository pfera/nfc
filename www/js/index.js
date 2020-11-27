document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady () {
    // Cordova is now initialized. Have fun!
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
    nfc.enabled(nfcok, nfcnok);

}

function nfcok(){
	console.log("Success NFC")
	nfc.addTagDiscoveredListener(read_nfc)
}

function nfcnok(){
    console.log("Failed NFC")
}

function read_nfc(nfcEvent){
	console.log("Ecoute NFC")
     // display the tag as JSON
	alert(JSON.stringify(nfcEvent));
	console.log(JSON.stringify(nfcEvent.tag.id));
	var monId = nfcEvent.tag.id;
    alert(monId);
	if (monId == "74,-51,-5,-52") {
	    alert("Nike ta mère");
	}else{
	    alert("♥");
	}
}