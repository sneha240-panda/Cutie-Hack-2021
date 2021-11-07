function generate(){
    let previousData = JSON.parse(localStorage.getItem("dataa"));
    for(let i = 0; i < previousData.length; i++){
        // let input = document.getElementById("user-input").value;
        // <td>
        //      document.write(new Date().toLocaleDateString()); 
        // </td>
        document.getElementById("table").innerHTML += `<p>${new Date().toDateString()} ${previousData[i]}</p>`
      }
    // let x = 4;
    // document.getElementById("table").innerHTML += `<p>${x} pies</p>`
    // document.getElementById("table").innerHTML += `<p>${x + 5} pies</p>`
}