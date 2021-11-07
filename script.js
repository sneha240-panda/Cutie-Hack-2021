
//  function submit(e)
// {
//     let input = document.getElementById("user-input").value;
//     localStorage.setItem("data", input);
//     localStorage.getItem("data");
//     console.log(input);
//     return false;
// }
function submit(){
    let input = document.getElementById("user-input").value;
    let previousData = localStorage.getItem('dataa');
    if(!previousData) previousData = [];
    else previousData = JSON.parse(previousData);
  
    previousData.push(input);
    localStorage.setItem('dataa', JSON.stringify(previousData));
  
    for(let i = 0; i < previousData.length; i++){
      console.log(previousData[i]);
    }
  }