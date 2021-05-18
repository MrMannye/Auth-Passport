
// INSTALL JASONWEBTOKEN 
// npm install jsonwebtoken 

const jwt = require('jsonwebtoken'); 

const [, ,option, secret, nombreorToken] = process.argv; //RECIBE 3 ARGUMENTOS EN LA LINEA DE COMANDOS

if(!option || !secret || !nombreorToken){ 
    return console.log("Missing arguments"); 
}

function signToken(payload, secret){ //GENERA UN TOKEN PARA EL USUARIO
    return jwt.sign(payload, secret); // PAYLOAD = OBJETO QUE QUEREMOS CODIFICAR
}

function verifyToken(token, secret){ // DECODIFICA EL TOKEN GENERADO POR UN USUARIO
    return jwt.verify(token, secret);  // SECRET = NOMBRE DE USUARIO
}

if(option == "sign"){
    console.log(signToken({sub: nombreorToken}, secret));
} else if(option == 'verify'){
    console.log(verifyToken(nombreorToken, secret))
} else{ 
    console.log("Options denied"); 
}