function calculated() {
    const scan = document.getElementById('total').value
    const profit = document.getElementById('profit').value
    const price = document.getElementById('price').value
     
    const slot = addCommas(scan * profit)
    const duaslot = addCommas((scan / 2) * profit)
    const totalHasil = addCommas(price * scan)
     
    document.getElementById('slot-label').innerHTML = 'Hasil per slot: '
    document.getElementById('duaslot-label').innerHTML = 'Hasil per 2 slot: '
    document.getElementById('total-label').innerHTML = 'Total uang masuk: '
    document.getElementById('slot').innerHTML = `Rp.${slot}`
    document.getElementById('duaslot').innerHTML = `Rp.${duaslot}`
    document.getElementById('hasil-total').innerHTML = `Rp.${totalHasil}`
}

function addCommas(nStr) {
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}