


   var fruits = [ 'Mangue', 'Raisin', 'Figue', 'Kiwi' ];
   console.log(fruits);
   document.getElementById("result").innerHTML = fruits;







   function verifier() 
   {
    var bool=false;
    text=document.getElementById("input").value;
       

    for (index = 0; index < fruits.length; index++) 
    {
    
            if(text.toUpperCase()==fruits[index].toUpperCase())
            {
                console.log(" fruits "+fruits[index]);
                console.log("text "+text);

                fruits.splice(index,1);
                bool=true;
    
            }

    }
            if(bool==true)
            {
            alert("ok"); 
            }
            else
            {
            alert("indisponible"); 
            }

            console.log(fruits);
            document.getElementById("result").innerHTML = fruits;
}





   
