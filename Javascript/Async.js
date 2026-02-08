//   Assync programming

const fun = () => {
  console.log("I love Javascript");
};
// setTimeout(() => {
//      fun()
// }, (1000));

// setInterval(() => {
//     fun()
// }, 1000);

// setTimeout(fun , 1000)
// setInterval(fun , 1000)

{
  // Promises

  let promise = new Promise((resolve, reject) => {
    let result = true;
    if (result) {
      resolve("The result is true");
    } else {
      reject("result is not true");
    }
  });

  promise.then((result) => {
    console.log(result);
  });
}


{

    let container = document.getElementById("container")
    // Handle api using promise
  let url = fetch("https://jsonplaceholder.typicode.com/users")
  url.then((response)=>{
    return  response.json()
  }).then((data)=>{
   showdata(data)
  })

  function showdata(data){
    data.forEach(element => {
        let div = document.createElement("div")
        div.style.display = "flex"
        div.style.gap = "10px"
        let p1 = document.createElement("p")
        p1.innerText = element.id
        let p = document.createElement("p")
        p.innerText = element.name
        div.append(p1 , p)
        container.append(div)
    });
  }
}



const fetchData = async()=>{
    let response = await fetch("https://jsonplaceholder.typicode.com/users")
    let data =await response.json()
    console.log(data)
    
}
fetchData()