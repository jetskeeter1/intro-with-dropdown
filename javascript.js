const on = document.getElementById("arrow-down");
const off = document.getElementById("arrow-up");
const addstylef = document.getElementById('featureL');
        
function toggleDiv()
{
    if(on.style.display == 'block')
    {
        on.style.display = 'none';
        off.style.display = 'block';
        addstylef.classList.add('height-feature')
    }
    else
    {  
        off.style.display = 'none';
        on.style.display = 'block'
        addstylef.classList.remove('height-feature')
    }
}  

const ona = document.getElementById("arrow-down1");
const offa = document.getElementById("arrow-up1");
const addstyle = document.getElementById('cl');
        
function toggleDiva()
  {
    if(ona.style.display == 'block')
    {
        ona.style.display = 'none';
        offa.style.display = 'block';
        addstyle.classList.add('height-company')
    }
    else
    {  
        offa.style.display = 'none';
        ona.style.display = 'block'
        addstyle.classList.remove('height-company')
    }
  }  

const widthOpen = document.getElementById("openmenu");
const widthClose = document.getElementById("closemenu");
const mobNavbar = document.getElementById("mobilenav");

widthOpen.addEventListener('click', function(){
    mobNavbar.classList.add('sidebaropen');
});
widthClose.addEventListener('click', ()=>{
    mobNavbar.classList.remove('sidebaropen');
});