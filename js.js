function zero(){
    document.getElementById("ah").value = "00";
    document.getElementById("bh").value = "00";
    document.getElementById("ch").value = "00";
    document.getElementById("dh").value = "00";

    document.getElementById("al").value = "00";
    document.getElementById("bl").value = "00";
    document.getElementById("cl").value = "00";
    document.getElementById("dl").value = "00";

    document.getElementById("ax").value = document.getElementById("ah").value + document.getElementById("al").value;
    document.getElementById("bx").value = document.getElementById("bh").value + document.getElementById("bl").value;
    document.getElementById("cx").value = document.getElementById("ch").value + document.getElementById("cl").value;
    document.getElementById("dx").value = document.getElementById("dh").value + document.getElementById("dl").value;
}

function duplicate(){
    document.getElementById("ax").value = document.getElementById("ah").value + document.getElementById("al").value;
    document.getElementById("bx").value = document.getElementById("bh").value + document.getElementById("bl").value;
    document.getElementById("cx").value = document.getElementById("ch").value + document.getElementById("cl").value;
    document.getElementById("dx").value = document.getElementById("dh").value + document.getElementById("dl").value;
}

function duplicate2(){
    var ax = document.getElementById("ax").value;
    document.getElementById("ah").value = ax.slice(0,2);
    document.getElementById("al").value = ax.slice(2,4);

    var bx = document.getElementById("bx").value;
    document.getElementById("bh").value = bx.slice(0,2);
    document.getElementById("bl").value = bx.slice(2,4);

    var cx = document.getElementById("cx").value;
    document.getElementById("ch").value = cx.slice(0,2);
    document.getElementById("cl").value = cx.slice(2,4);

    var dx = document.getElementById("dx").value;
    document.getElementById("dh").value = dx.slice(0,2);
    document.getElementById("dl").value = dx.slice(2,4);
}

function random_hex(){
    var h = (Math.random() * 0xfffff * 1000000).toString(16);
    return h.slice(0, 2);
  };

function random_variables(){

    document.getElementById("ah").value = random_hex();
    document.getElementById("al").value = random_hex();
    document.getElementById("bh").value = random_hex();
    document.getElementById("bl").value = random_hex();
    document.getElementById("ch").value = random_hex();
    document.getElementById("cl").value = random_hex();
    document.getElementById("dh").value = random_hex();
    document.getElementById("dl").value = random_hex();

    document.getElementById("ax").value = document.getElementById("ah").value + document.getElementById("al").value;
    document.getElementById("bx").value = document.getElementById("bh").value + document.getElementById("bl").value;
    document.getElementById("cx").value = document.getElementById("ch").value + document.getElementById("cl").value;
    document.getElementById("dx").value = document.getElementById("dh").value + document.getElementById("dl").value;
}

zero();