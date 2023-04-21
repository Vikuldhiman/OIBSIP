document.getElementById('convert').onclick=tempConvert;
document.getElementById('clear').onclick=clearForm;
function tempConvert(){
    var fah=document.getElementById("fah").value;
    var cel=document.getElementById("cel").value;
    if(fah != ''){
        cel=(parseFloat(fah)-32)/1.8;
    }
    else{
        fah=(parseFloat(cel)*1.8)+32;
    }
    document.getElementById('fah').value=parseFloat(fah).toFixed(1);
    document.getElementById('cel').value=parseFloat(cel).toFixed(1);
}
function clearForm(){
    document.getElementById('fah').value='';
    document.getElementById('cel').value='';

}