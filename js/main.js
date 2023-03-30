


for (let i=1; i <=100; i++){
    if(i  %  3 == 0  && i % 5 == 0){
     console.log('FizzBuzz')
     document.getElementById("container-for-squares").innerHTML += `
     <div class="squarefizzbuzz">
         <p>"Fizzbuzz"</p>
     </div>
     `;
   }else if(i  %  3 == 0){
     console.log('Fizz')
     document.getElementById("container-for-squares").innerHTML += `
     <div class="squarefizz">
         <p>"Fizz"</p>
     </div>
     `;
   }else if(i % 5 == 0){
     console.log('Buzz')
     document.getElementById("container-for-squares").innerHTML += `
     <div class="squarebuzz">
         <p>"Buzz"</p>
     </div>
     `;
   }else{
    console.log(i)
    document.getElementById("container-for-squares").innerHTML += `
    <div class="square">
        <p>${i}</p>
    </div>
    `;
    }
   }    


