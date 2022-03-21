import React,{useState, useEffect} from 'react';
const SmsService={

    
    prueba:function({numero,valor})
    {
        const consultarAPI = async () => {
              const url = `http://192.168.20.126/cgi/WebCGI?1500101=account=apiuser&password=apipass&port=1&destination=${numero}&content=${valor}`;
              const respuesta = await fetch(url);
              const resultado = await respuesta.json();
              if(resultado.cod === "404") {
                  alert('error')
              } 
        }
        consultarAPI();
    },
    prueba2:function(valor){
        const lista=JSON.parse(sessionStorage.getItem("nums"))
        const tamano=(lista['data'].length-1)
        for (var i = tamano; i >=0 ; i--) {
            const telefono=(lista['data'][i][0])
            this.prueba({numero:telefono,valor:valor})
    }
    }
};
    
export default SmsService;