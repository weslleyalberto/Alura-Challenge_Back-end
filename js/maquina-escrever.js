
                        function typeWrite(elemento) {
                            const textArray = elemento.innerHTML.split('');
                            elemento.innerHTML = ' ';
                            textArray.forEach(function (letra, i) {
                                setTimeout(function () {
                                    elemento.innerHTML += letra;
                                }, 65 * i)
                            });
                        }
                        const titulo = document.querySelector('#label-text');
                        const titulo2 = document.querySelector('#title-text');
                        typeWrite(titulo);
                        typeWrite(titulo2);
                     
                  