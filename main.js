function hasil() {
    var gol = parseInt(document.getElementById('golongan').value);
    var lembur = parseInt(document.getElementById('lembur').value);
    var nomorInduk = (document.getElementById('nik').value);
    var name = (document.getElementById('nama').value);
    var jenis_kel = (document.getElementById('jk').value);
    var state = (document.getElementById('status').value);
    var gapok;
    var tunjangan;
    var potongan;
    var total_gaji;

    if (gol == 1) {
        gapok = 3000000;
        potongan = 100000;
    } else if (gol == 2) {
        gapok = 4000000;
        potongan = 200000;
    } else if (gol == 3) {
        gapok = 5000000;
        potongan = 400000;
    } else if (gol == 4) {
        gapok = 6000000;
        potongan = 600000;
    }

    if (state == 1 || 3) {
        tunjangan = gapok / 5;
    } else {
        tunjangan = 0;
    }

    if (lembur == 1) {
        upah_lembur = 50000;
    } else if (lembur == 2) {
        upah_lembur = 100000;
    } else if (lembur == 3) {
        upah_lembur = 150000;
    } else if (lembur == 4) {
        upah_lembur = 200000;
    } else if (lembur == 5) {
        upah_lembur = 250000;
    } else if (lembur < 1) {
        upah_lembur = 0;
    }

    document.getElementById('total_gapok').innerHTML = 'Rp. ' + gapok;
    document.getElementById('total_tunjangan').innerHTML = 'Rp. ' + tunjangan;
    document.getElementById('total_potongan').innerHTML = 'Rp. ' + potongan;
    document.getElementById('output_nik').innerHTML = nomorInduk;
    document.getElementById('output_nama').innerHTML = name;
    document.getElementById('output_jk').innerHTML = jenis_kel;
    document.getElementById('output_status').innerHTML = state;
    document.getElementById('output_gol').innerHTML = gol;
    document.getElementById('output_lembur').innerHTML = 'Rp. ' + upah_lembur;
    total_gaji = (gapok + tunjangan + upah_lembur) - potongan;
    document.getElementById('total').innerHTML = 'Rp. ' + total_gaji;
}