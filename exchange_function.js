//AX-BX-CX-DX-------------------------------------------------------------------//

function xchg(){

    var exch = "0";

    if(document.getElementById("rax1").checked)
    {

        if(document.getElementById("rax2").checked)
        {   
            exch = getElementById("ax").value;
            document.getElementById("ax").value = document.getElementById("ax").value;
            document.getElementById("ax").value = exch;
        }

        if(document.getElementById("rbx2").checked)
        {
            exch = document.getElementById("ax").value;
            document.getElementById("ax").value = document.getElementById("bx").value;
            document.getElementById("bx").value = exch;
        }

        if(document.getElementById("rcx2").checked)
        {
            exch = document.getElementById("ax").value;
            document.getElementById("ax").value = document.getElementById("cx").value; 
            document.getElementById("cx").value = exch;
        }

        if(document.getElementById("rdx2").checked)
        {
            exch = document.getElementById("ax").value;
            document.getElementById("ax").value = document.getElementById("dx").value;
            document.getElementById("dx").value = exch;
        }
    }




    if(document.getElementById("rbx1").checked)
    {
        if(document.getElementById("rax2").checked)
        {
            exch = document.getElementById("bx").value;
            document.getElementById("bx").value = document.getElementById("ax").value;
            document.getElementById("ax").value = exch;
        }

        if(document.getElementById("rbx2").checked)
        {
            exch = document.getElementById("bx").value;
            document.getElementById("bx").value = document.getElementById("bx").value;
            document.getElementById("bx").value = exch;
        }

        if(document.getElementById("rcx2").checked)
        {
            exch = document.getElementById("bx").value;
            document.getElementById("bx").value = document.getElementById("cx").value;
            document.getElementById("cx").value = exch;
        }

        if(document.getElementById("rdx2").checked)
        {
            exch = document.getElementById("bx").value;
            document.getElementById("bx").value = document.getElementById("dx").value;
            document.getElementById("dx").value = exch;
        }
    }




    if(document.getElementById("rcx1").checked)
    {
        if(document.getElementById("rax2").checked)
        {
            exch = document.getElementById("cx").value;
            document.getElementById("cx").value = document.getElementById("ax").value;
            document.getElementById("ax").value = exch;
        }

        if(document.getElementById("rbx2").checked)
        {
            exch = document.getElementById("cx").value;
            document.getElementById("cx").value = document.getElementById("bx").value;
            document.getElementById("bx").value = exch;
        }

        if(document.getElementById("rcx2").checked)
        {
            exch = document.getElementById("cx").value;
            document.getElementById("cx").value = document.getElementById("cx").value;
            document.getElementById("cx").value = exch;
        }

        if(document.getElementById("rdx2").checked)
        {
            exch = document.getElementById("cx").value;
            document.getElementById("cx").value = document.getElementById("dx").value;
            document.getElementById("dx").value = exch;
        }
    }




    if(document.getElementById("rdx1").checked)
    {
        if(document.getElementById("rax2").checked)
        {
            exch = document.getElementById("dx").value;
            document.getElementById("dx").value = document.getElementById("ax").value;
            document.getElementById("ax").value = exch;
        }

        if(document.getElementById("rbx2").checked)
        {
            exch = document.getElementById("dx").value;
            document.getElementById("dx").value = document.getElementById("bx").value;
            document.getElementById("bx").value = exch;
        }

        if(document.getElementById("rcx2").checked)
        {
            exch = document.getElementById("dx").value;
            document.getElementById("dx").value = document.getElementById("cx").value;
            document.getElementById("cx").value = exch;
        }

        if(document.getElementById("rdx2").checked)
        {
            exch = document.getElementById("dx").value;
            document.getElementById("dx").value = document.getElementById("dx").value;
            document.getElementById("dx").value = exch;
        }
    }




    //AH------------------------------------------------------------------------------//




    if(document.getElementById("rah1").checked)
    {
        if(document.getElementById("rah2").checked)
        {
            exch = document.getElementById("ah").value;
            document.getElementById("ah").value = document.getElementById("ah").value;
            document.getElementById("ah").value = exch;
        }

        if(document.getElementById("ral2").checked)
        {
            exch = document.getElementById("ah").value;
            document.getElementById("ah").value = document.getElementById("al").value;
            document.getElementById("al").value = exch;
        }

        if(document.getElementById("rbh2").checked)
        {
            exch = document.getElementById("ah").value;
            document.getElementById("ah").value = document.getElementById("bh").value;
            document.getElementById("bh").value = exch;
        }

        if(document.getElementById("rbl2").checked)
        {
            exch = document.getElementById("ah").value;
            document.getElementById("ah").value = document.getElementById("bl").value;
            document.getElementById("bl").value = exch;
        }

        if(document.getElementById("rch2").checked)
        {
            exch = document.getElementById("ah").value;
            document.getElementById("ah").value = document.getElementById("ch").value;
            document.getElementById("ch").value = exch;
        }

        if(document.getElementById("rcl2").checked)
        {
            exch = document.getElementById("ah").value;
            document.getElementById("ah").value = document.getElementById("cl").value;
            document.getElementById("cl").value = exch;
        }

        if(document.getElementById("rdh2").checked)
        {
            exch = document.getElementById("ah").value;
            document.getElementById("ah").value = document.getElementById("dh").value;
            document.getElementById("dh").value = exch;
        }

        if(document.getElementById("rdl2").checked)
        {
            exch = document.getElementById("ah").value;
            document.getElementById("ah").value = document.getElementById("dl").value;
            document.getElementById("dl").value = exch;
        }
    }




    if(document.getElementById("ral1").checked)
    {
        if(document.getElementById("rah2").checked)
        {
            exch = document.getElementById("al").value;
            document.getElementById("al").value = document.getElementById("ah").value;
            document.getElementById("ah").value = exch;
        }

        if(document.getElementById("ral2").checked)
        {
            exch = document.getElementById("al").value;
            document.getElementById("al").value = document.getElementById("al").value;
            document.getElementById("al").value = exch;
        }

        if(document.getElementById("rbh2").checked)
        {
            exch = document.getElementById("al").value;
            document.getElementById("al").value = document.getElementById("bh").value;
            document.getElementById("bh").value = exch;
        }

        if(document.getElementById("rbl2").checked)
        {
            exch = document.getElementById("al").value;
            document.getElementById("al").value = document.getElementById("bl").value;
            document.getElementById("bl").value = exch;
        }

        if(document.getElementById("rch2").checked)
        {
            exch = document.getElementById("al").value;
            document.getElementById("al").value = document.getElementById("ch").value;
            document.getElementById("ch").value = exch;
        }

        if(document.getElementById("rcl2").checked)
        {
            exch = document.getElementById("al").value;
            document.getElementById("al").value = document.getElementById("cl").value;
            document.getElementById("cl").value = exch;
        }

        if(document.getElementById("rdh2").checked)
        {
            exch = document.getElementById("al").value;
            document.getElementById("al").value = document.getElementById("dh").value;
            document.getElementById("dh").value = exch;
            
        }

        if(document.getElementById("rdl2").checked)
        {
            exch = document.getElementById("al").value;
            document.getElementById("al").value = document.getElementById("dl").value;
            document.getElementById("dl").value = exch;
        }
    }




    if(document.getElementById("rbh1").checked)
    {
        if(document.getElementById("rah2").checked)
        {
            exch = document.getElementById("bh").value;
            document.getElementById("bh").value = document.getElementById("ah").value;
            document.getElementById("ah").value = exch;
        }

        if(document.getElementById("ral2").checked)
        {
            exch = document.getElementById("bh").value;
            document.getElementById("bh").value = document.getElementById("al").value;
        }

        if(document.getElementById("rbh2").checked)
        {
            exch = document.getElementById("bh").value;
            document.getElementById("bh").value = document.getElementById("bh").value;
            document.getElementById("bh").value = exch;
        }

        if(document.getElementById("rbl2").checked)
        {
            exch = document.getElementById("bh").value;
            document.getElementById("bh").value = document.getElementById("bl").value;
            document.getElementById("bl").value = exch;
        }

        if(document.getElementById("rch2").checked)
        {
            exch = document.getElementById("bh").value;
            document.getElementById("bh").value = document.getElementById("ch").value;
            document.getElementById("ch").value = exch;
        }

        if(document.getElementById("rcl2").checked)
        {
            exch = document.getElementById("bh").value;
            document.getElementById("bh").value = document.getElementById("cl").value;
            document.getElementById("cl").value = exch;
        }

        if(document.getElementById("rdh2").checked)
        {
            exch = document.getElementById("bh").value;
            document.getElementById("bh").value = document.getElementById("dh").value;
            document.getElementById("dh").value = exch;
        }

        if(document.getElementById("rdl2").checked)
        {
            exch = document.getElementById("bh").value;
            document.getElementById("bh").value = document.getElementById("dl").value;
            document.getElementById("dl").value = exch;
        }
    }
    



    if(document.getElementById("rbl1").checked)
    {
        if(document.getElementById("rah2").checked)
        {
            exch = document.getElementById("bl").value;
            document.getElementById("bl").value = document.getElementById("ah").value;
            document.getElementById("ah").value = exch;
        }

        if(document.getElementById("ral2").checked)
        {
            exch = document.getElementById("bl").value;
            document.getElementById("bl").value = document.getElementById("al").value;
            document.getElementById("al").value = exch;
        }

        if(document.getElementById("rbh2").checked)
        {
            exch = document.getElementById("bl").value;
            document.getElementById("bl").value = document.getElementById("bh").value;
            document.getElementById("bh").value = exch;
        }

        if(document.getElementById("rbl2").checked)
        {
            exch = document.getElementById("bl").value;
            document.getElementById("bl").value = document.getElementById("bl").value;
            document.getElementById("bl").value = exch;
        }

        if(document.getElementById("rch2").checked)
        {
            exch = document.getElementById("bl").value;
            document.getElementById("bl").value = document.getElementById("ch").value;
            document.getElementById("ch").value = exch;
        }

        if(document.getElementById("rcl2").checked)
        {
            exch = document.getElementById("bl").value;
            document.getElementById("bl").value = document.getElementById("cl").value;
            document.getElementById("cl").value = exch;
        }

        if(document.getElementById("rdh2").checked)
        {
            exch = document.getElementById("bl").value;
            document.getElementById("bl").value = document.getElementById("dh").value;
            document.getElementById("dh").value = exch;
        }

        if(document.getElementById("rdl2").checked)
        {
            exch = document.getElementById("bl").value;
            document.getElementById("bl").value = document.getElementById("dl").value;
            document.getElementById("dl").value = exch;
        }
    }




    if(document.getElementById("rch1").checked)
    {
        if(document.getElementById("rah2").checked)
        {
            exch = document.getElementById("ch").value;
            document.getElementById("ch").value = document.getElementById("ah").value;
            document.getElementById("ah").value = exch;
        }

        if(document.getElementById("ral2").checked)
        {
            exch = document.getElementById("ch").value;
            document.getElementById("ch").value = document.getElementById("al").value;
            document.getElementById("al").value = exch;
        }

        if(document.getElementById("rbh2").checked)
        {
            exch = document.getElementById("ch").value;
            document.getElementById("ch").value = document.getElementById("bh").value;
            document.getElementById("bh").value = exch;
        }

        if(document.getElementById("rbl2").checked)
        {
            exch = document.getElementById("ch").value;
            document.getElementById("ch").value = document.getElementById("bl").value;
            document.getElementById("bl").value = exch;
        }

        if(document.getElementById("rch2").checked)
        {
            exch = document.getElementById("ch").value;
            document.getElementById("ch").value = document.getElementById("ch").value;
            document.getElementById("ch").value = exch;
        }

        if(document.getElementById("rcl2").checked)
        {
            exch = document.getElementById("ch").value;
            document.getElementById("ch").value = document.getElementById("cl").value;
            document.getElementById("cl").value = exch;
        }

        if(document.getElementById("rdh2").checked)
        {
            exch = document.getElementById("ch").value;
            document.getElementById("ch").value = document.getElementById("dh").value;
            document.getElementById("dh").value = exch;
        }

        if(document.getElementById("rdl2").checked)
        {
            exch = document.getElementById("ch").value;
            document.getElementById("ch").value = document.getElementById("dl").value;
            document.getElementById("dl").value = exch;
        }
    }




    if(document.getElementById("rcl1").checked)
    {
        if(document.getElementById("rah2").checked)
        {
            exch = document.getElementById("cl").value;
            document.getElementById("cl").value = document.getElementById("ah").value;
            document.getElementById("ah").value = exch;
        }

        if(document.getElementById("ral2").checked)
        {
            exch = document.getElementById("cl").value;
            document.getElementById("cl").value = document.getElementById("al").value;
            document.getElementById("al").value = exch;
        }

        if(document.getElementById("rbh2").checked)
        {
            exch = document.getElementById("cl").value;
            document.getElementById("cl").value = document.getElementById("bh").value;
            document.getElementById("bh").value = exch;
        }

        if(document.getElementById("rbl2").checked)
        {
            exch = document.getElementById("cl").value;
            document.getElementById("cl").value = document.getElementById("bl").value;
            document.getElementById("bl").value = exch;
        }

        if(document.getElementById("rch2").checked)
        {
            exch = document.getElementById("cl").value;
            document.getElementById("cl").value = document.getElementById("ch").value;
            document.getElementById("ch").value = exch;
        }

        if(document.getElementById("rcl2").checked)
        {
            exch = document.getElementById("cl").value;
            document.getElementById("cl").value = document.getElementById("cl").value;
            document.getElementById("cl").value = exch;
        }

        if(document.getElementById("rdh2").checked)
        {
            exch = document.getElementById("cl").value;
            document.getElementById("cl").value = document.getElementById("dh").value;
            document.getElementById("dh").value = exch;
        }

        if(document.getElementById("rdl2").checked)
        {
            exch = document.getElementById("cl").value;
            document.getElementById("cl").value = document.getElementById("dl").value;
            document.getElementById("dl").value = exch;
        }
    }




    if(document.getElementById("rdh1").checked)
    {
        if(document.getElementById("rah2").checked)
        {
            exch = document.getElementById("dh").value;
            document.getElementById("dh").value = document.getElementById("ah").value;
            document.getElementById("ah").value = exch;
        }

        if(document.getElementById("ral2").checked)
        {
            exch = document.getElementById("dh").value;
            document.getElementById("dh").value = document.getElementById("al").value;
            document.getElementById("al").value = exch;
        }

        if(document.getElementById("rbh2").checked)
        {
            exch = document.getElementById("dh").value;
            document.getElementById("dh").value = document.getElementById("bh").value;
            document.getElementById("bh").value = exch;
        }

        if(document.getElementById("rbl2").checked)
        {
            exch = document.getElementById("dh").value;
            document.getElementById("dh").value = document.getElementById("bl").value;
            document.getElementById("bl").value = exch;
        }

        if(document.getElementById("rch2").checked)
        {
            exch = document.getElementById("dh").value;
            document.getElementById("dh").value = document.getElementById("ch").value;
            document.getElementById("ch").value = exch;
        }

        if(document.getElementById("rcl2").checked)
        {
            exch = document.getElementById("dh").value;
            document.getElementById("dh").value = document.getElementById("cl").value;
            document.getElementById("cl").value = exch;
        }

        if(document.getElementById("rdh2").checked)
        {
            exch = document.getElementById("dh").value;
            document.getElementById("dh").value = document.getElementById("dh").value;
            document.getElementById("dh").value = exch;
        }

        if(document.getElementById("rdl2").checked)
        {
            exch = document.getElementById("dh").value;
            document.getElementById("dh").value = document.getElementById("dl").value;
            document.getElementById("dl").value = exch;
        }
    }




    if(document.getElementById("rdl1").checked)
    {
        if(document.getElementById("rah2").checked)
        {
            exch = document.getElementById("dl").value;
            document.getElementById("dl").value = document.getElementById("ah").value;
            document.getElementById("ah").value = exch;
        }

        if(document.getElementById("ral2").checked)
        {
            exch = document.getElementById("dl").value;
            document.getElementById("dl").value = document.getElementById("al").value;
            document.getElementById("al").value = exch;
        }

        if(document.getElementById("rbh2").checked)
        {
            exch = document.getElementById("dl").value;
            document.getElementById("dl").value = document.getElementById("bh").value;
            document.getElementById("bh").value = exch;
        }

        if(document.getElementById("rbl2").checked)
        {
            exch = document.getElementById("dl").value;
            document.getElementById("dl").value = document.getElementById("bl").value;
            document.getElementById("bl").value = exch;
        }

        if(document.getElementById("rch2").checked)
        {
            exch = document.getElementById("dl").value;
            document.getElementById("dl").value = document.getElementById("ch").value;
            document.getElementById("ch").value = exch;
        }

        if(document.getElementById("rcl2").checked)
        {
            exch = document.getElementById("dl").value;
            document.getElementById("dl").value = document.getElementById("cl").value;
            document.getElementById("cl").value = exch;
        }

        if(document.getElementById("rdh2").checked)
        {
            exch = document.getElementById("dl").value;
            document.getElementById("dl").value = document.getElementById("dh").value;
            document.getElementById("dh").value = exch;
        }

        if(document.getElementById("rdl2").checked)
        {
            exch = document.getElementById("dl").value;
            document.getElementById("dl").value = document.getElementById("dl").value;
            document.getElementById("dl").value = exch;
        }
    }
    
}