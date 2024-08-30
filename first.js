let display = document.getElementById("display");

function addtodisplay(char){
    display.value+=char;
}

function cleardisplay(){
    display.value="";
}

function calculate(){
try{
    display.value=eval(display.value);
    }
    

    catch(error)
    {
        display.value="Error";
    }
}

