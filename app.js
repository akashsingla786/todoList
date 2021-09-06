const input=document.querySelector('input');
const list=document.getElementById('list');
const add=document.querySelector('button');

add.addEventListener('click',(e)=>{
    console.log(e);
  
       const addtext=input.value;
       const remove=document.createElement('button');
       const update=document.createElement('button');
       const moveup=document.createElement('button');
       const movedown=document.createElement('button');
       const spn=document.createElement('div');
       spn.className="content-spn";
    //    spn.style.border='2px solid black';
       const li=document.createElement('li');
        spn.style.display='inline-block';
        spn.style.width="20vw";
        
        // spn.style.overflowX='scroll';
        spn.innerHTML=addtext;
        li.append(spn);
       li.style.listStyle='none';
       list.append(li);


       window.localStorage.setItem('li',li.innerHTML);
       const divv=document.createElement('div');
       

       li.style.fontSize="20px";
     li.style.marginTop="20px";
    
        list.style.justifyContent="center";  
       remove.innerHTML="REMOVE";
       remove.style.marginLeft="10px";  
       remove.style.borderRadius="20px"
       
       update.innerHTML="UPDATE";
       update.style.marginLeft="10px";
       update.style.borderRadius="20px"  

       moveup.innerHTML="MOVE UP";
       moveup.style.marginLeft="10px";  
       moveup.style.borderRadius="20px"

       movedown.innerHTML="MOVE DOWN";
       movedown.style.marginLeft="10px";
       movedown.style.borderRadius="20px" 
       
       
      
        input.value="";
        li.append(divv);
        divv.append(movedown);
        divv.append(moveup);
        divv.append(update);
        divv.append(remove);
         
         
    li.style.display='flex';
    li.style.flexWrap='wrap';
        var btn = document.querySelectorAll( ' li button' );
        for ( var counter =0 ; counter <btn.length; counter++)
        {
            btn[counter].className="btn btn-outline-secondary";
            btn[counter].style.fontSize="15px";
            btn[counter].style.border="2px solid gray";
         //   btn[counter].style.backgroundColor="#ffb4a2";
            btn[counter].style.boxShadow="1px 1px 2px red"; 
            btn[counter].style.float="right";    
            btn[counter].id='allbtns';       
            btn[counter].style.height='40px';
           
        }
      
       
        
        remove.addEventListener('click',(e)=>{
            li.remove();
        })
    

        update.addEventListener('click',(e)=>{
            const inp=document.createElement('input');
            inp.setAttribute("placeholder","Update your To Do and press Enter");
            inp.setAttribute("type","text");
            inp.className="form-control";
            inp.style.width="50%"

            inp.style.marginTop="10px";
            li.append(inp);
            inp.addEventListener('keypress',(e)=>{
                console.log(e);
                if(e.code==="Enter"){
                    const value=inp.value;
                    spn.innerHTML=value;
                    li.append(spn);
                    li.append(divv);
                    divv.append(movedown);
                    divv.append(moveup);
                    divv.append(update);
                    divv.append(remove);
                     
                     
                    
                    inp.remove();


                    
            
                }
               
               
            })
          
          
        })
       
        moveup.addEventListener('click',()=>{
     
      
        var up = li;

        if (up.previousElementSibling)
            up.parentNode.insertBefore(up, up.previousElementSibling);

        })



        movedown.addEventListener('click',()=>{
            var dl = li;

			if (dl.nextElementSibling)
			    dl.parentNode.insertBefore(dl.nextElementSibling, dl);
        })
        
});


