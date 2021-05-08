var memory_tab = ["FFAA", "00AA", "0001", "FA56", "AABB"];

function move_memory(memory_tab)
{
//Z pamięci do rejestru-------------------------------------------------------------------//
    if(document.getElementById("zpdr").checked){

//Indexowy-------------------------------------------------------------------//

        if(document.getElementById("i").checked)
        {

//SI -> AX-BX-CX-DX-------------------------------------------------------------------//

            if(document.getElementById("rsi1").checked)
            {
                if(document.getElementById("rax_2").checked)
                {
                    if(memory_tab.length <= 0)
                    {
                        alert("Błąd pamięci.")
                    }
                    else
                    {
                        si = parseInt(document.getElementById("si",).value, 16);
                        
                        document.getElementById("ax").value =  parseInt(parseInt(memory_tab.pop(), 16) + si, 16);
                        document.getElementById("disp").value = memory_tab[memory_tab.length-1];
                    }
                }

                if(document.getElementById("rbx_2").checked)
                {
                    if(memory_tab.length <= 0)
                    {
                        alert("Błąd pamięci.")
                    }
                    else
                    {
                        si = parseInt(document.getElementById("si",).value, 16);
                        
                        document.getElementById("bx").value =  parseInt(parseInt(memory_tab.pop(), 16) + si, 16);
                        document.getElementById("disp").value = memory_tab[memory_tab.length-1];
                    }
                }

                if(document.getElementById("rcx_2").checked)
                {
                    if(memory_tab.length <= 0)
                    {
                        alert("Błąd pamięci.")
                    }
                    else
                    {
                        si = parseInt(document.getElementById("si",).value, 16);
                        
                        document.getElementById("cx").value =  parseInt(parseInt(memory_tab.pop(), 16) + si, 16);
                        document.getElementById("disp").value = memory_tab[memory_tab.length-1];
                    }
                }

                if(document.getElementById("rdx_2").checked)
                {
                    if(memory_tab.length <= 0)
                    {
                        alert("Błąd pamięci.")
                    }
                    else
                    {
                        si = parseInt(document.getElementById("si",).value, 16);
                        
                        document.getElementById("dx").value =  parseInt(parseInt(memory_tab.pop(), 16) + si, 16);
                        document.getElementById("disp").value = memory_tab[memory_tab.length-1];
                    }
                }
            }

//DI -> AX-BX-CX-DX-------------------------------------------------------------------//

            if(document.getElementById("rdi1").checked)
            {
                if(document.getElementById("rax_2").checked)
                {
                    if(memory_tab.length <= 0)
                    {
                        alert("Błąd pamięci.")
                    }
                    else
                    {
                        si = parseInt(document.getElementById("di",).value, 16);
                        
                        document.getElementById("ax").value =  parseInt(parseInt(memory_tab.pop(), 16) + si, 16);
                        document.getElementById("disp").value = memory_tab[memory_tab.length-1];
                    }
                }

                if(document.getElementById("rbx_2").checked)
                {
                    if(memory_tab.length <= 0)
                    {
                        alert("Błąd pamięci.")
                    }
                    else
                    {
                        si = parseInt(document.getElementById("di",).value, 16);
                        
                        document.getElementById("bx").value =  parseInt(parseInt(memory_tab.pop(), 16) + si, 16);
                        document.getElementById("disp").value = memory_tab[memory_tab.length-1];
                    }
                }

                if(document.getElementById("rcx_2").checked)
                {
                    if(memory_tab.length <= 0)
                    {
                        alert("Błąd pamięci.")
                    }
                    else
                    {
                        si = parseInt(document.getElementById("di",).value, 16);
                        
                        document.getElementById("cx").value =  parseInt(parseInt(memory_tab.pop(), 16) + si, 16);
                        document.getElementById("disp").value = memory_tab[memory_tab.length-1];
                    }
                }

                if(document.getElementById("rdx_2").checked)
                {
                    if(memory_tab.length <= 0)
                    {
                        alert("Błąd pamięci.")
                    }
                    else
                    {
                        si = parseInt(document.getElementById("di",).value, 16);
                        
                        document.getElementById("dx").value =  parseInt(parseInt(memory_tab.pop(), 16) + si, 16);
                        document.getElementById("disp").value = memory_tab[memory_tab.length-1];
                    }
                }
            }
        }

//Bazowy-------------------------------------------------------------------//

        if(document.getElementById("b").checked)
        {

//BX -> AX-BX-CX-DX-------------------------------------------------------------------//

            if(document.getElementById("rbx_x").checked)
            {
                if(document.getElementById("rax_2").checked)
                {
                    if(memory_tab.length <= 0)
                    {
                        alert("Błąd pamięci.")
                    }
                    else
                    {
                        si = parseInt(document.getElementById("bx",).value, 16);
                        
                        document.getElementById("ax").value =  parseInt(parseInt(memory_tab.pop(), 16) + si, 16);
                        document.getElementById("disp").value = memory_tab[memory_tab.length-1];
                    }
                }

                if(document.getElementById("rbx_2").checked)
                {
                    if(memory_tab.length <= 0)
                    {
                        alert("Błąd pamięci.")
                    }
                    else
                    {
                        si = parseInt(document.getElementById("bx",).value, 16);
                        
                        document.getElementById("bx").value =  parseInt(parseInt(memory_tab.pop(), 16) + si, 16);
                        document.getElementById("disp").value = memory_tab[memory_tab.length-1];
                    }
                }

                if(document.getElementById("rcx_2").checked)
                {
                    if(memory_tab.length <= 0)
                    {
                        alert("Błąd pamięci.")
                    }
                    else
                    {
                        si = parseInt(document.getElementById("bx",).value, 16);
                        
                        document.getElementById("cx").value =  parseInt(parseInt(memory_tab.pop(), 16) + si, 16);
                        document.getElementById("disp").value = memory_tab[memory_tab.length-1];
                    }
                }

                if(document.getElementById("rdx_2").checked)
                {
                    if(memory_tab.length <= 0)
                    {
                        alert("Błąd pamięci.")
                    }
                    else
                    {
                        si = parseInt(document.getElementById("bx",).value, 16);
                        
                        document.getElementById("dx").value =  parseInt(parseInt(memory_tab.pop(), 16) + si, 16);
                        document.getElementById("disp").value = memory_tab[memory_tab.length-1];
                    }
                }
            }

//BP -> AX-BX-CX-DX-------------------------------------------------------------------//

            if(document.getElementById("rbp1").checked)
            {
                if(document.getElementById("rax_2").checked)
                {
                    if(memory_tab.length <= 0)
                    {
                        alert("Błąd pamięci.")
                    }
                    else
                    {
                        si = parseInt(document.getElementById("bp",).value, 16);
                        
                        document.getElementById("ax").value =  parseInt(parseInt(memory_tab.pop(), 16) + si, 16);
                        document.getElementById("disp").value = memory_tab[memory_tab.length-1];
                    }
                }

                if(document.getElementById("rbx_2").checked)
                {
                    if(memory_tab.length <= 0)
                    {
                        alert("Błąd pamięci.")
                    }
                    else
                    {
                        si = parseInt(document.getElementById("bp",).value, 16);
                        
                        document.getElementById("bx").value =  parseInt(parseInt(memory_tab.pop(), 16) + si, 16);
                        document.getElementById("disp").value = memory_tab[memory_tab.length-1];
                    }
                }

                if(document.getElementById("rcx_2").checked)
                {
                    if(memory_tab.length <= 0)
                    {
                        alert("Błąd pamięci.")
                    }
                    else
                    {
                        si = parseInt(document.getElementById("bp",).value, 16);
                        
                        document.getElementById("cx").value =  parseInt(parseInt(memory_tab.pop(), 16) + si, 16);
                        document.getElementById("disp").value = memory_tab[memory_tab.length-1];
                    }
                }

                if(document.getElementById("rdx_2").checked)
                {
                    if(memory_tab.length <= 0)
                    {
                        alert("Błąd pamięci.")
                    }
                    else
                    {
                        si = parseInt(document.getElementById("bp",).value, 16);
                        
                        document.getElementById("dx").value =  parseInt(parseInt(memory_tab.pop(), 16) + si, 16);
                        document.getElementById("disp").value = memory_tab[memory_tab.length-1];
                    }
                }
            }
        }


//Indexowo Bazowy-------------------------------------------------------------------//

        if(document.getElementById("ib").checked)
        {

//SI I BX -> AX-BX-CX-DX-------------------------------------------------------------------//

            if(document.getElementById("siibx").checked)
            {
                if(document.getElementById("rax_2").checked)
                {
                    if(memory_tab.length <= 0)
                    {
                        alert("Błąd pamięci.")
                    }
                    else
                    {
                        si = parseInt(document.getElementById("si",).value, 16);
                        bx = parseInt(document.getElementById("bx",).value, 16);
                        
                        document.getElementById("ax").value =  parseInt(parseInt(memory_tab.pop(), 16) + bx + si, 16);
                        document.getElementById("disp").value = memory_tab[memory_tab.length-1];
                    }
                }

                if(document.getElementById("rbx_2").checked)
                {
                    if(memory_tab.length <= 0)
                    {
                        alert("Błąd pamięci.")
                    }
                    else
                    {
                        si = parseInt(document.getElementById("si",).value, 16);
                        bx = parseInt(document.getElementById("bx",).value, 16);
                        
                        document.getElementById("bx").value =  parseInt(parseInt(memory_tab.pop(), 16) + bx + si, 16);
                        document.getElementById("disp").value = memory_tab[memory_tab.length-1];
                    }
                }

                if(document.getElementById("rcx_2").checked)
                {
                    if(memory_tab.length <= 0)
                    {
                        alert("Błąd pamięci.")
                    }
                    else
                    {
                        si = parseInt(document.getElementById("si",).value, 16);
                        bx = parseInt(document.getElementById("bx",).value, 16);
                        
                        document.getElementById("cx").value =  parseInt(parseInt(memory_tab.pop(), 16) + bx + si, 16);
                        document.getElementById("disp").value = memory_tab[memory_tab.length-1];
                    }
                }

                if(document.getElementById("rdx_2").checked)
                {
                    if(memory_tab.length <= 0)
                    {
                        alert("Błąd pamięci.")
                    }
                    else
                    {
                        si = parseInt(document.getElementById("si",).value, 16);
                        bx = parseInt(document.getElementById("bx",).value, 16);
                        
                        document.getElementById("dx").value =  parseInt(parseInt(memory_tab.pop(), 16) + bx + si, 16);
                        document.getElementById("disp").value = memory_tab[memory_tab.length-1];
                    }
                }
            }

//DI I BX -> AX-BX-CX-DX-------------------------------------------------------------------//

            if(document.getElementById("diibx").checked)
            {
                if(document.getElementById("rax_2").checked)
                {
                    if(memory_tab.length <= 0)
                    {
                        alert("Błąd pamięci.")
                    }
                    else
                    {
                        si = parseInt(document.getElementById("di",).value, 16);
                        bx = parseInt(document.getElementById("bx",).value, 16);
                        
                        document.getElementById("ax").value =  parseInt(parseInt(memory_tab.pop(), 16) + bx + si, 16);
                        document.getElementById("disp").value = memory_tab[memory_tab.length-1];
                    }
                }

                if(document.getElementById("rbx_2").checked)
                {
                    if(memory_tab.length <= 0)
                    {
                        alert("Błąd pamięci.")
                    }
                    else
                    {
                        si = parseInt(document.getElementById("di",).value, 16);
                        bx = parseInt(document.getElementById("bx",).value, 16);
                        
                        document.getElementById("bx").value =  parseInt(parseInt(memory_tab.pop(), 16) + bx + si, 16);
                        document.getElementById("disp").value = memory_tab[memory_tab.length-1];
                    }
                }

                if(document.getElementById("rcx_2").checked)
                {
                    if(memory_tab.length <= 0)
                    {
                        alert("Błąd pamięci.")
                    }
                    else
                    {
                        si = parseInt(document.getElementById("di",).value, 16);
                        bx = parseInt(document.getElementById("bx",).value, 16);
                        
                        document.getElementById("cx").value =  parseInt(parseInt(memory_tab.pop(), 16) + bx + si, 16);
                        document.getElementById("disp").value = memory_tab[memory_tab.length-1];
                    }
                }

                if(document.getElementById("rdx_2").checked)
                {
                    if(memory_tab.length <= 0)
                    {
                        alert("Błąd pamięci.")
                    }
                    else
                    {
                        si = parseInt(document.getElementById("di",).value, 16);
                        bx = parseInt(document.getElementById("bx",).value, 16);
                        
                        document.getElementById("dx").value =  parseInt(parseInt(memory_tab.pop(), 16) + bx + si, 16);
                        document.getElementById("disp").value = memory_tab[memory_tab.length-1];
                    }
                }
            }


//SI I BP -> AX-BX-CX-DX-------------------------------------------------------------------//

            if(document.getElementById("siibp").checked)
            {
                if(document.getElementById("rax_2").checked)
                {
                    if(memory_tab.length <= 0)
                    {
                        alert("Błąd pamięci.")
                    }
                    else
                    {
                        si = parseInt(document.getElementById("si",).value, 16);
                        bx = parseInt(document.getElementById("bp",).value, 16);
                        
                        document.getElementById("ax").value =  parseInt(parseInt(memory_tab.pop(), 16) + bx + si, 16);
                        document.getElementById("disp").value = memory_tab[memory_tab.length-1];
                    }
                }

                if(document.getElementById("rbx_2").checked)
                {
                    if(memory_tab.length <= 0)
                    {
                        alert("Błąd pamięci.")
                    }
                    else
                    {
                        si = parseInt(document.getElementById("si",).value, 16);
                        bx = parseInt(document.getElementById("bp",).value, 16);
                        
                        document.getElementById("bx").value =  parseInt(parseInt(memory_tab.pop(), 16) + bx + si, 16);
                        document.getElementById("disp").value = memory_tab[memory_tab.length-1];
                    }
                }

                if(document.getElementById("rcx_2").checked)
                {
                    if(memory_tab.length <= 0)
                    {
                        alert("Błąd pamięci.")
                    }
                    else
                    {
                        si = parseInt(document.getElementById("si",).value, 16);
                        bx = parseInt(document.getElementById("bp",).value, 16);
                        
                        document.getElementById("cx").value =  parseInt(parseInt(memory_tab.pop(), 16) + bx + si, 16);
                        document.getElementById("disp").value = memory_tab[memory_tab.length-1];
                    }
                }

                if(document.getElementById("rdx_2").checked)
                {
                    if(memory_tab.length <= 0)
                    {
                        alert("Błąd pamięci.")
                    }
                    else
                    {
                        si = parseInt(document.getElementById("si",).value, 16);
                        bx = parseInt(document.getElementById("bp",).value, 16);
                        
                        document.getElementById("dx").value =  parseInt(parseInt(memory_tab.pop(), 16) + bx + si, 16);
                        document.getElementById("disp").value = memory_tab[memory_tab.length-1];
                    }
                }
            }



//DI I BP -> AX-BX-CX-DX-------------------------------------------------------------------//

            if(document.getElementById("diibp").checked)
            {
                if(document.getElementById("rax_2").checked)
                {
                    if(memory_tab.length <= 0)
                    {
                        alert("Błąd pamięci.")
                    }
                    else
                    {
                        si = parseInt(document.getElementById("di",).value, 16);
                        bx = parseInt(document.getElementById("bp",).value, 16);
                        
                        document.getElementById("ax").value =  parseInt(parseInt(memory_tab.pop(), 16) + bx + si, 16);
                        document.getElementById("disp").value = memory_tab[memory_tab.length-1];
                    }
                }

                if(document.getElementById("rbx_2").checked)
                {
                    if(memory_tab.length <= 0)
                    {
                        alert("Błąd pamięci.")
                    }
                    else
                    {
                        si = parseInt(document.getElementById("di",).value, 16);
                        bx = parseInt(document.getElementById("bp",).value, 16);
                        
                        document.getElementById("bx").value =  parseInt(parseInt(memory_tab.pop(), 16) + bx + si, 16);
                        document.getElementById("disp").value = memory_tab[memory_tab.length-1];
                    }
                }

                if(document.getElementById("rcx_2").checked)
                {
                    if(memory_tab.length <= 0)
                    {
                        alert("Błąd pamięci.")
                    }
                    else
                    {
                        si = parseInt(document.getElementById("di",).value, 16);
                        bx = parseInt(document.getElementById("bp",).value, 16);
                        
                        document.getElementById("cx").value =  parseInt(parseInt(memory_tab.pop(), 16) + bx + si, 16);
                        document.getElementById("disp").value = memory_tab[memory_tab.length-1];
                    }
                }

                if(document.getElementById("rdx_2").checked)
                {
                    if(memory_tab.length <= 0)
                    {
                        alert("Błąd pamięci.")
                    }
                    else
                    {
                        si = parseInt(document.getElementById("di",).value, 16);
                        bx = parseInt(document.getElementById("bp",).value, 16);
                        
                        document.getElementById("dx").value =  parseInt(parseInt(memory_tab.pop(), 16) + bx + si, 16);
                        document.getElementById("disp").value = memory_tab[memory_tab.length-1];
                    }
                }
            }
        }
    }












    //Z pamięci do rejestru-------------------------------------------------------------------//
    if(document.getElementById("zpdr").checked){

        //Indexowy-------------------------------------------------------------------//
        
                if(document.getElementById("i").checked)
                {
        
        //SI -> AX-BX-CX-DX-------------------------------------------------------------------//
        
                    if(document.getElementById("rsi1").checked)
                    {
                        if(document.getElementById("rax_2").checked)
                        {
                            if(memory_tab.length >= 32768)
                            {
                                alert("Błąd pamięci.")
                            }
                            else
                            {
                                si = parseInt(document.getElementById("si",).value, 16);
                                
                                document.getElementById("ax").value =  parseInt(parseInt(memory_tab.pop(), 16) + si, 16);
                                document.getElementById("disp").value = memory_tab[memory_tab.length-1];
                            }
                        }
        
                        if(document.getElementById("rbx_2").checked)
                        {
                            if(memory_tab.length >= 32768)
                            {
                                alert("Błąd pamięci.")
                            }
                            else
                            {
                                si = parseInt(document.getElementById("si",).value, 16);
                                
                                document.getElementById("bx").value =  parseInt(parseInt(memory_tab.pop(), 16) + si, 16);
                                document.getElementById("disp").value = memory_tab[memory_tab.length-1];
                            }
                        }
        
                        if(document.getElementById("rcx_2").checked)
                        {
                            if(memory_tab.length >= 32768)
                            {
                                alert("Błąd pamięci.")
                            }
                            else
                            {
                                si = parseInt(document.getElementById("si",).value, 16);
                                
                                document.getElementById("cx").value =  parseInt(parseInt(memory_tab.pop(), 16) + si, 16);
                                document.getElementById("disp").value = memory_tab[memory_tab.length-1];
                            }
                        }
        
                        if(document.getElementById("rdx_2").checked)
                        {
                            if(memory_tab.length >= 32768)
                            {
                                alert("Błąd pamięci.")
                            }
                            else
                            {
                                si = parseInt(document.getElementById("si",).value, 16);
                                
                                document.getElementById("dx").value =  parseInt(parseInt(memory_tab.pop(), 16) + si, 16);
                                document.getElementById("disp").value = memory_tab[memory_tab.length-1];
                            }
                        }
                    }
        
        //DI -> AX-BX-CX-DX-------------------------------------------------------------------//
        
                    if(document.getElementById("rdi1").checked)
                    {
                        if(document.getElementById("rax_2").checked)
                        {
                            if(memory_tab.length >= 32768)
                            {
                                alert("Błąd pamięci.")
                            }
                            else
                            {
                                si = parseInt(document.getElementById("di",).value, 16);
                                
                                document.getElementById("ax").value =  parseInt(parseInt(memory_tab.pop(), 16) + si, 16);
                                document.getElementById("disp").value = memory_tab[memory_tab.length-1];
                            }
                        }
        
                        if(document.getElementById("rbx_2").checked)
                        {
                            if(memory_tab.length >= 32768)
                            {
                                alert("Błąd pamięci.")
                            }
                            else
                            {
                                si = parseInt(document.getElementById("di",).value, 16);
                                
                                document.getElementById("bx").value =  parseInt(parseInt(memory_tab.pop(), 16) + si, 16);
                                document.getElementById("disp").value = memory_tab[memory_tab.length-1];
                            }
                        }
        
                        if(document.getElementById("rcx_2").checked)
                        {
                            if(memory_tab.length >= 32768)
                            {
                                alert("Błąd pamięci.")
                            }
                            else
                            {
                                si = parseInt(document.getElementById("di",).value, 16);
                                
                                document.getElementById("cx").value =  parseInt(parseInt(memory_tab.pop(), 16) + si, 16);
                                document.getElementById("disp").value = memory_tab[memory_tab.length-1];
                            }
                        }
        
                        if(document.getElementById("rdx_2").checked)
                        {
                            if(memory_tab.length >= 32768)
                            {
                                alert("Błąd pamięci.")
                            }
                            else
                            {
                                si = parseInt(document.getElementById("di",).value, 16);
                                
                                document.getElementById("dx").value =  parseInt(parseInt(memory_tab.pop(), 16) + si, 16);
                                document.getElementById("disp").value = memory_tab[memory_tab.length-1];
                            }
                        }
                    }
                }
        
        //Bazowy-------------------------------------------------------------------//
        
                if(document.getElementById("b").checked)
                {
        
        //BX -> AX-BX-CX-DX-------------------------------------------------------------------//
        
                    if(document.getElementById("rbx_x").checked)
                    {
                        if(document.getElementById("rax_2").checked)
                        {
                            if(memory_tab.length >= 32768)
                            {
                                alert("Błąd pamięci.")
                            }
                            else
                            {
                                si = parseInt(document.getElementById("bx",).value, 16);
                                
                                document.getElementById("ax").value =  parseInt(parseInt(memory_tab.pop(), 16) + si, 16);
                                document.getElementById("disp").value = memory_tab[memory_tab.length-1];
                            }
                        }
        
                        if(document.getElementById("rbx_2").checked)
                        {
                            if(memory_tab.length >= 32768)
                            {
                                alert("Błąd pamięci.")
                            }
                            else
                            {
                                si = parseInt(document.getElementById("bx",).value, 16);
                                
                                document.getElementById("bx").value =  parseInt(parseInt(memory_tab.pop(), 16) + si, 16);
                                document.getElementById("disp").value = memory_tab[memory_tab.length-1];
                            }
                        }
        
                        if(document.getElementById("rcx_2").checked)
                        {
                            if(memory_tab.length >= 32768)
                            {
                                alert("Błąd pamięci.")
                            }
                            else
                            {
                                si = parseInt(document.getElementById("bx",).value, 16);
                                
                                document.getElementById("cx").value =  parseInt(parseInt(memory_tab.pop(), 16) + si, 16);
                                document.getElementById("disp").value = memory_tab[memory_tab.length-1];
                            }
                        }
        
                        if(document.getElementById("rdx_2").checked)
                        {
                            if(memory_tab.length >= 32768)
                            {
                                alert("Błąd pamięci.")
                            }
                            else
                            {
                                si = parseInt(document.getElementById("bx",).value, 16);
                                
                                document.getElementById("dx").value =  parseInt(parseInt(memory_tab.pop(), 16) + si, 16);
                                document.getElementById("disp").value = memory_tab[memory_tab.length-1];
                            }
                        }
                    }
        
        //BP -> AX-BX-CX-DX-------------------------------------------------------------------//
        
                    if(document.getElementById("rbp1").checked)
                    {
                        if(document.getElementById("rax_2").checked)
                        {
                            if(memory_tab.length >= 32768)
                            {
                                alert("Błąd pamięci.")
                            }
                            else
                            {
                                si = parseInt(document.getElementById("bp",).value, 16);
                                
                                document.getElementById("ax").value =  parseInt(parseInt(memory_tab.pop(), 16) + si, 16);
                                document.getElementById("disp").value = memory_tab[memory_tab.length-1];
                            }
                        }
        
                        if(document.getElementById("rbx_2").checked)
                        {
                            if(memory_tab.length >= 32768)
                            {
                                alert("Błąd pamięci.")
                            }
                            else
                            {
                                si = parseInt(document.getElementById("bp",).value, 16);
                                
                                document.getElementById("bx").value =  parseInt(parseInt(memory_tab.pop(), 16) + si, 16);
                                document.getElementById("disp").value = memory_tab[memory_tab.length-1];
                            }
                        }
        
                        if(document.getElementById("rcx_2").checked)
                        {
                            if(memory_tab.length >= 32768)
                            {
                                alert("Błąd pamięci.")
                            }
                            else
                            {
                                si = parseInt(document.getElementById("bp",).value, 16);
                                
                                document.getElementById("cx").value =  parseInt(parseInt(memory_tab.pop(), 16) + si, 16);
                                document.getElementById("disp").value = memory_tab[memory_tab.length-1];
                            }
                        }
        
                        if(document.getElementById("rdx_2").checked)
                        {
                            if(memory_tab.length >= 32768)
                            {
                                alert("Błąd pamięci.")
                            }
                            else
                            {
                                si = parseInt(document.getElementById("bp",).value, 16);
                                
                                document.getElementById("dx").value =  parseInt(parseInt(memory_tab.pop(), 16) + si, 16);
                                document.getElementById("disp").value = memory_tab[memory_tab.length-1];
                            }
                        }
                    }
                }
        
        
        //Indexowo Bazowy-------------------------------------------------------------------//
        
                if(document.getElementById("ib").checked)
                {
        
        //SI I BX -> AX-BX-CX-DX-------------------------------------------------------------------//
        
                    if(document.getElementById("siibx").checked)
                    {
                        if(document.getElementById("rax_2").checked)
                        {
                            if(memory_tab.length >= 32768)
                            {
                                alert("Błąd pamięci.")
                            }
                            else
                            {
                                si = parseInt(document.getElementById("si",).value, 16);
                                bx = parseInt(document.getElementById("bx",).value, 16);
                                
                                document.getElementById("ax").value =  parseInt(parseInt(memory_tab.pop(), 16) + bx + si, 16);
                                document.getElementById("disp").value = memory_tab[memory_tab.length-1];
                            }
                        }
        
                        if(document.getElementById("rbx_2").checked)
                        {
                            if(memory_tab.length >= 32768)
                            {
                                alert("Błąd pamięci.")
                            }
                            else
                            {
                                si = parseInt(document.getElementById("si",).value, 16);
                                bx = parseInt(document.getElementById("bx",).value, 16);
                                
                                document.getElementById("bx").value =  parseInt(parseInt(memory_tab.pop(), 16) + bx + si, 16);
                                document.getElementById("disp").value = memory_tab[memory_tab.length-1];
                            }
                        }
        
                        if(document.getElementById("rcx_2").checked)
                        {
                            if(memory_tab.length >= 32768)
                            {
                                alert("Błąd pamięci.")
                            }
                            else
                            {
                                si = parseInt(document.getElementById("si",).value, 16);
                                bx = parseInt(document.getElementById("bx",).value, 16);
                                
                                document.getElementById("cx").value =  parseInt(parseInt(memory_tab.pop(), 16) + bx + si, 16);
                                document.getElementById("disp").value = memory_tab[memory_tab.length-1];
                            }
                        }
        
                        if(document.getElementById("rdx_2").checked)
                        {
                            if(memory_tab.length >= 32768)
                            {
                                alert("Błąd pamięci.")
                            }
                            else
                            {
                                si = parseInt(document.getElementById("si",).value, 16);
                                bx = parseInt(document.getElementById("bx",).value, 16);
                                
                                document.getElementById("dx").value =  parseInt(parseInt(memory_tab.pop(), 16) + bx + si, 16);
                                document.getElementById("disp").value = memory_tab[memory_tab.length-1];
                            }
                        }
                    }
        
        //DI I BX -> AX-BX-CX-DX-------------------------------------------------------------------//
        
                    if(document.getElementById("diibx").checked)
                    {
                        if(document.getElementById("rax_2").checked)
                        {
                            if(memory_tab.length >= 32768)
                            {
                                alert("Błąd pamięci.")
                            }
                            else
                            {
                                si = parseInt(document.getElementById("di",).value, 16);
                                bx = parseInt(document.getElementById("bx",).value, 16);
                                
                                document.getElementById("ax").value =  parseInt(parseInt(memory_tab.pop(), 16) + bx + si, 16);
                                document.getElementById("disp").value = memory_tab[memory_tab.length-1];
                            }
                        }
        
                        if(document.getElementById("rbx_2").checked)
                        {
                            if(memory_tab.length >= 32768)
                            {
                                alert("Błąd pamięci.")
                            }
                            else
                            {
                                si = parseInt(document.getElementById("di",).value, 16);
                                bx = parseInt(document.getElementById("bx",).value, 16);
                                
                                document.getElementById("bx").value =  parseInt(parseInt(memory_tab.pop(), 16) + bx + si, 16);
                                document.getElementById("disp").value = memory_tab[memory_tab.length-1];
                            }
                        }
        
                        if(document.getElementById("rcx_2").checked)
                        {
                            if(memory_tab.length >= 32768)
                            {
                                alert("Błąd pamięci.")
                            }
                            else
                            {
                                si = parseInt(document.getElementById("di",).value, 16);
                                bx = parseInt(document.getElementById("bx",).value, 16);
                                
                                document.getElementById("cx").value =  parseInt(parseInt(memory_tab.pop(), 16) + bx + si, 16);
                                document.getElementById("disp").value = memory_tab[memory_tab.length-1];
                            }
                        }
        
                        if(document.getElementById("rdx_2").checked)
                        {
                            if(memory_tab.length >= 32768)
                            {
                                alert("Błąd pamięci.")
                            }
                            else
                            {
                                si = parseInt(document.getElementById("di",).value, 16);
                                bx = parseInt(document.getElementById("bx",).value, 16);
                                
                                document.getElementById("dx").value =  parseInt(parseInt(memory_tab.pop(), 16) + bx + si, 16);
                                document.getElementById("disp").value = memory_tab[memory_tab.length-1];
                            }
                        }
                    }
        
        
        //SI I BP -> AX-BX-CX-DX-------------------------------------------------------------------//
        
                    if(document.getElementById("siibp").checked)
                    {
                        if(document.getElementById("rax_2").checked)
                        {
                            if(memory_tab.length >= 32768)
                            {
                                alert("Błąd pamięci.")
                            }
                            else
                            {
                                si = parseInt(document.getElementById("si",).value, 16);
                                bx = parseInt(document.getElementById("bp",).value, 16);
                                
                                document.getElementById("ax").value =  parseInt(parseInt(memory_tab.pop(), 16) + bx + si, 16);
                                document.getElementById("disp").value = memory_tab[memory_tab.length-1];
                            }
                        }
        
                        if(document.getElementById("rbx_2").checked)
                        {
                            if(memory_tab.length >= 32768)
                            {
                                alert("Błąd pamięci.")
                            }
                            else
                            {
                                si = parseInt(document.getElementById("si",).value, 16);
                                bx = parseInt(document.getElementById("bp",).value, 16);
                                
                                document.getElementById("bx").value =  parseInt(parseInt(memory_tab.pop(), 16) + bx + si, 16);
                                document.getElementById("disp").value = memory_tab[memory_tab.length-1];
                            }
                        }
        
                        if(document.getElementById("rcx_2").checked)
                        {
                            if(memory_tab.length >= 32768)
                            {
                                alert("Błąd pamięci.")
                            }
                            else
                            {
                                si = parseInt(document.getElementById("si",).value, 16);
                                bx = parseInt(document.getElementById("bp",).value, 16);
                                
                                document.getElementById("cx").value =  parseInt(parseInt(memory_tab.pop(), 16) + bx + si, 16);
                                document.getElementById("disp").value = memory_tab[memory_tab.length-1];
                            }
                        }
        
                        if(document.getElementById("rdx_2").checked)
                        {
                            if(memory_tab.length >= 32768)
                            {
                                alert("Błąd pamięci.")
                            }
                            else
                            {
                                si = parseInt(document.getElementById("si",).value, 16);
                                bx = parseInt(document.getElementById("bp",).value, 16);
                                
                                document.getElementById("dx").value =  parseInt(parseInt(memory_tab.pop(), 16) + bx + si, 16);
                                document.getElementById("disp").value = memory_tab[memory_tab.length-1];
                            }
                        }
                    }
        
        
        
        //DI I BP -> AX-BX-CX-DX-------------------------------------------------------------------//
        
                    if(document.getElementById("diibp").checked)
                    {
                        if(document.getElementById("rax_2").checked)
                        {
                            if(memory_tab.length >= 32768)
                            {
                                alert("Błąd pamięci.")
                            }
                            else
                            {
                                si = parseInt(document.getElementById("di",).value, 16);
                                bx = parseInt(document.getElementById("bp",).value, 16);
                                
                                document.getElementById("ax").value =  parseInt(parseInt(memory_tab.pop(), 16) + bx + si, 16);
                                document.getElementById("disp").value = memory_tab[memory_tab.length-1];
                            }
                        }
        
                        if(document.getElementById("rbx_2").checked)
                        {
                            if(memory_tab.length >= 32768)
                            {
                                alert("Błąd pamięci.")
                            }
                            else
                            {
                                si = parseInt(document.getElementById("di",).value, 16);
                                bx = parseInt(document.getElementById("bp",).value, 16);
                                
                                document.getElementById("bx").value =  parseInt(parseInt(memory_tab.pop(), 16) + bx + si, 16);
                                document.getElementById("disp").value = memory_tab[memory_tab.length-1];
                            }
                        }
        
                        if(document.getElementById("rcx_2").checked)
                        {
                            if(memory_tab.length >= 32768)
                            {
                                alert("Błąd pamięci.")
                            }
                            else
                            {
                                si = parseInt(document.getElementById("di",).value, 16);
                                bx = parseInt(document.getElementById("bp",).value, 16);
                                
                                document.getElementById("cx").value =  parseInt(parseInt(memory_tab.pop(), 16) + bx + si, 16);
                                document.getElementById("disp").value = memory_tab[memory_tab.length-1];
                            }
                        }
        
                        if(document.getElementById("rdx_2").checked)
                        {
                            if(memory_tab.length >= 32768)
                            {
                                alert("Błąd pamięci.")
                            }
                            else
                            {
                                si = parseInt(document.getElementById("di",).value, 16);
                                bx = parseInt(document.getElementById("bp",).value, 16);
                                
                                document.getElementById("dx").value =  parseInt(parseInt(memory_tab.pop(), 16) + bx + si, 16);
                                document.getElementById("disp").value = memory_tab[memory_tab.length-1];
                            }
                        }
                    }
                }
            }
}

function last_byte(memory_tab)
{
    document.getElementById("disp").value = memory_tab[memory_tab.length-1];
}

last_byte(memory_tab);