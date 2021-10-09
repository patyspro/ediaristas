export const ValidationService={
    cep(cep=''): boolean{
       return cep.replace(/\D/g,'').length===8;//encontra os números que não são díg
        
    }
}