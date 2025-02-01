let screen = document.querySelector("#displayOutput");
let history = document.querySelector("#displayHistory");
history.value = "";
let btn = document.querySelectorAll('.btn');
for(item of btn){
    item.addEventListener('click',(e) => {
        btntext = e.target.innerText;  
        if(btntext=='=') {
            try {
                if(screen.value.includes('C')){
                    let idx = screen.value.indexOf('C');
                    let num3 = parseInt(screen.value.slice(0,idx));
                    let num4 = parseInt(screen.value.slice(idx+1));
                    history.value = screen.value;
                    screen.value = comb(num3,num4).toString();
                } else if(screen.value.includes('P')){
                    let idx = screen.value.indexOf('P');
                    let num3 = parseInt(screen.value.slice(0,idx));
                    let num4 = parseInt(screen.value.slice(idx+1));
                    history.value = screen.value;
                    screen.value = perm(num3,num4).toString();
                } else if(screen.value.includes('e')){
                    let idx = screen.value.indexOf('e');
                    let num = parseInt(screen.value.slice(idx+1));
                    history.value = `e^${num}`;
                    screen.value = Math.pow(Math.E,num).toString();
                } else if(screen.value.includes('10^')){
                    let idx = screen.value.indexOf('10^');
                    let num = parseInt(screen.value.slice(idx+3));
                    history.value = `10^${num}`;
                    screen.value = Math.pow(10,num).toString();
                } else if(screen.value.includes('^')){
                    let idx = screen.value.indexOf('^');
                    let num3 = parseInt(screen.value.slice(0,idx));
                    let num4 = parseInt(screen.value.slice(idx+1));
                    history.value = `${num3}^${num4}`;
                    screen.value = Math.pow(num3,num4).toString();
                } else {                     
                    history.value = screen.value;
                    screen.value = eval(screen.value);
                }
            } catch {
                screen.value = "Error";
            }
        } else if(btntext=='AC'){ 
            history.value = "";
            screen.value = "";
        } else if(btntext=='Del') screen.value = screen.value.slice(0,-1);
        else if(btntext=="sin") {
            history.value = `sin(${screen.value})`;
            screen.value = Math.sin(parseFloat(screen.value) * Math.PI / 180).toString();
        } else if(btntext=="cos") {            
            history.value = `cos(${screen.value})`;
            screen.value = Math.cos(parseFloat(screen.value) * Math.PI / 180).toString();
        } else if(btntext=="tan") {
            history.value = `tan(${screen.value})`;
            screen.value = Math.tan(parseFloat(screen.value) * Math.PI / 180).toString();
        } else if(btntext=="cosec") {
            history.value = `cosec(${screen.value})`;
            screen.value = (1/Math.sin(parseFloat(screen.value) * Math.PI / 180)).toString();
        } else if(btntext=="sec") {
            history.value = `sec(${screen.value})`;
            screen.value = (1/Math.cos(parseFloat(screen.value) * Math.PI / 180)).toString();
        } else if(btntext=="cot") {
            history.value = `cot(${screen.value})`;
            screen.value = (1/Math.tan(parseFloat(screen.value) * Math.PI / 180)).toString();
        } else if(btntext=="x2") {            
            history.value = `${screen.value}^2`;
            screen.value = Math.pow(parseFloat(screen.value),2).toString();
        } else if(btntext=="x3") {
            history.value = `${screen.value}^3`;
            screen.value = Math.pow(parseFloat(screen.value),3).toString();
        } else if(btntext=="√x") {
            history.value = `√${screen.value}`;
            screen.value = Math.sqrt(parseFloat(screen.value)).toString();
        } else if(btntext=="∛x") {
            history.value = `∛${screen.value}`;
            screen.value = Math.cbrt(parseFloat(screen.value)).toString();
        } else if(btntext=="log") {
            history.value = `log(${screen.value})`;
            screen.value = Math.log10(parseFloat(screen.value)).toString();
        } else if(btntext=="ln") {
            history.value = `ln(${screen.value})`;
            screen.value = Math.log(parseFloat(screen.value)).toString();
        } else if(btntext=="1/x") {            
            history.value = `1/${screen.value}`;
            screen.value = (1/parseFloat(screen.value)).toString();
        } else if(btntext=="X!") {            
            history.value = `${screen.value}!`;
            screen.value = fact(parseInt(screen.value)).toString();
        } else if(btntext=="Rad") {
            history.value = `${screen.value}°`
            screen.value = (parseFloat(screen.value)*Math.PI/180).toString();
        } else if(btntext=="|x|") {
            history.value = `|${screen.value}|`
            screen.value = (Math.abs(parseFloat(screen.value))).toString();
        } else if(btntext=="sin-1") {
            history.value = `sin-1(${screen.value})`;
            screen.value = (Math.asin(parseFloat(screen.value))*180/Math.PI).toString()+'°';
        } else if(btntext=="cos-1") {
            history.value = `cos-1(${screen.value})`;
            screen.value = (Math.acos(parseFloat(screen.value))*180/Math.PI).toString()+'°';
        } else if(btntext=="tan-1") {
            history.value = `tan-1(${screen.value})`;
            screen.value = (Math.atan(parseFloat(screen.value))*180/Math.PI).toString()+'°';
        } else {
            if(btntext=='×') btntext = '*';
            else if(btntext=='÷') btntext = '/';
            else if(btntext=='nPr') btntext = 'P';
            else if(btntext=='nCr') btntext = 'C';
            else if(btntext=='ex') btntext = 'e';
            else if(btntext=='10x') btntext = '10^';
            else if(btntext=='xy') btntext = '^';
            else if(btntext=='π') btntext = Math.PI.toString();
            else if(btntext=='e') btntext = Math.E.toString();
            screen.value+=btntext;
        }
    });
}

function fact(num){
    return (num==0 || num==1) ? 1 : num*fact(num-1);
}

function comb(num1 ,num2){
    return fact(num1)/(fact(num2)*fact(num1-num2));
}
function perm(num1 ,num2){
    return fact(num1)/fact(num1-num2);
}