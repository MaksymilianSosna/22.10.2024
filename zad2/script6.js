function ObliczCeneBrutto(CenaNetto){
    Vat = CenaNetto * 0.23;

    return  CenaNetto + Vat;
    
}

console.log(ObliczCeneBrutto(100))