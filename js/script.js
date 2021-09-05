

const hour = document.querySelector('.h');
const min = document.querySelector('.m');
const sec = document.querySelector('.s');
const hoursNumber = document.querySelector('.hours');
const minutesNumber = document.querySelector('.minutes');


function clock() {
     
 let time = new Date();
 let second = time.getSeconds() * 6;
 let minutes = time.getMinutes() * 6;
 let hou = time.getHours() * 30;

 
 sec.style = `transform: rotate(${second}deg)`;
 min.style = `transform: rotate(${minutes}deg)`;
 hour.style = `transform: rotate(${hou}deg)`;
 
 // innerHTML;
 
 
 hoursNumber.innerHTML = time.getHours();
 minutesNumber.innerHTML = time.getMinutes();
 
 setTimeout(()=> clock(), 1000);
 
}   

clock();

/* ////////////////  clock end   /////////////////// */

/* ////////////////  tab start   /////////////////// */

const tabsContentItem = document.querySelectorAll('.tabsContentItem');
const tabsItem = document.querySelectorAll('.tabsItem');

for(let i = 0; i < tabsItem.length; i++){
   /*  console.log(tabsItem[i]); */
    tabsItem[i].addEventListener('click', function() {
        
        for(let ix = 0; ix < tabsItem.length; ix++){
            tabsItem[ix].classList.remove('active');
            tabsContentItem[ix].classList.remove('active');
        }
        tabsNew(this, tabsContentItem[i]);
    })
    
}

function tabsNew(tabsItem, tabsContentItem ) {
    tabsItem.classList.add('active');
    tabsContentItem.classList.add('active');
}

/* /////////////////////////////////////////////////////////////////// */

const watchBtn = document.querySelector('.stopwatch__btn');
const hoursWatch = document.querySelector('.stopwatch__hours');
const minutesWatch = document.querySelector('.stopwatch__minutes');
const secundWatch = document.querySelector('.stopwatch__seconds');
const spanInfoWatch = document.querySelector('.tabsLink__span');


watchBtn.addEventListener('click', function() {
 
    if(this.innerHTML == 'start'){
        this.innerHTML = 'stop';
        spanInfoWatch.classList.add('active');
        let i = 0;
        stopWatch(this, i);
    }
    
    else if(this.innerHTML == 'stop'){
        this.innerHTML = 'clear';
        spanInfoWatch.classList.remove('active');
        spanInfoWatch.classList.add('active_clear');
    }
    
    else{
        spanInfoWatch.classList.remove('active_clear');
        this.innerHTML = 'start';
        minutesWatch.innerHTML= 0;
        secundWatch.innerHTML= 0;
        hoursWatch.innerHTML= 0;
    }
    
});

function stopWatch(el, i) {
    
    if(el.innerHTML == 'stop'){
        
        if(i == 3){
            i = 0;
            secundWatch.innerHTML = i;
             
            if(minutesWatch.innerHTML == 3){
                minutesWatch.innerHTML = 0;
                hoursWatch.innerHTML++;
            }
            else{
                minutesWatch.innerHTML++;
            }
           
        }
        
        else{
           i++;
           secundWatch.innerHTML = i;
        }
        setTimeout(() => stopWatch(el, i), 1000 );
    }
    
    
}



