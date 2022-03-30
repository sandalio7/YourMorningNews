let campoRequerido = (dato)=>{
    if(dato.trim().length > 0){
        return true;
    }else{
        return false;
    }
    }
    
    let rangoLetras = (dato)=>{
        if(dato.trim().length > 0 && dato.trim().length < 10000){
            return true
        }else{
            return false
        }
    }
    
    export {campoRequerido, rangoLetras}