function myfunction(){
            document.getElementById( "call us").innerHTML= " try again";
}    
    
   myfunction();

function userwant() {
    
        var userwant= prompt('what do u want to buy  desktop or laptop ?') ;
        while( userwant !== 'desktop'&& userwant !=='laptop'){
            userwant = prompt('what do you want order desktop or laptop');
        }
        var ordernumber = prompt('how many items you wanna order?')
       for( var i=0; i<ordernumber;i++){
           if (userwant === 'laptop'){
               document.write( '<p> order is '+ ordernumber +'laptops </p>');
               
           }else if (userwant === 'desktop'){
           document.write( '<p>order is '+ordernumber+'desktops </p>');
        }

       }
        }




userwant();
