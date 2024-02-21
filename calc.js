let screen=document.querySelector('#display')

function display(num)
{
    if(screen.value==="NaN" || screen.value==="Invalid Input"|| screen.value==="Infinity")
    
    
   
}
function Clear() 
{
    screen.value=""
}
function Delete()
{
    screen.value = screen.value.slice(0,-1)
}
function calc()
{
    try{
        screen.value = eval(screen.value)
    }
    catch(err)
    {
        screen.value = "Invalid Input"
    }
}