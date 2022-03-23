import React,{useState, useEffect} from 'react';
const SmsService={

    
    sendMessage:function({cellphone,message})
    {

        const fetchAPI = async () => {
              const url = `http://192.168.20.126/cgi/WebCGI?1500101=account=apiuser&password=apipass&port=1&destination=${cellphone}&content=${message}`;
              const res = await fetch(url);
              const result = await res.json();
              if(result.cod === "404") {
                  alert('error')
              } 
        }
        fetchAPI();
    },
    sender:function(message){
        const cellphoneList=JSON.parse(sessionStorage.getItem("nums"))
        const size=(cellphoneList['data'].length-1)
        for (var i = size; i >=0 ; i--) {
            const cellphone=(cellphoneList['data'][i][0])
            this.sendMessage({cellphone:cellphone,message:message})
    }
    }
};
    
export default SmsService;