function startApp() {
  // Your entire app should not necessarily be coded inside this 
  // single function (though there's no penalty for that), 
  // so create and use/call additional functions from here

  // pls remove the below and make some magic in here!

  let inputElement = document.querySelector("#telephone");
  inputElement.addEventListener("input", validateNumber)

  let spanElement = document.querySelector(".image");

  let btnElement = document.querySelector("#btn");

  let form = document.querySelector("#formy");

  let mtn_logo = document.querySelector(".image > #mtn");

  function validateNumber() {
    let inputValue = inputElement.value

    let zeroFirst = inputValue.slice(0, 1)
    if (zeroFirst == 0) {
      var sliced = Number(inputValue.slice(1, 4));
    }
    else {
      sliced = Number(inputValue.slice(0, 3));
    }

    let string_length = inputValue.length;
    
    checkNetwork()
    function checkNetwork() {
      let MTN = [803, 806, 703, 706, 813, 816, 810, 814, 903, 906]
      let airtel = [802, 808, 708, 812, 701, 902, 907, 901]
      let GLO = [805, 807, 705, 815, 811, 905]
      let _9mobile = [809, 818, 817, 909, 908]


      if(MTN.includes(sliced) && string_length >= 11) {
        
      spanElement.innerHTML = "MTN"
      }
      else if(airtel.includes(sliced) && string_length >= 11) {
      spanElement.innerHTML = "Airtel"
      }
      else if (GLO.includes(sliced) && string_length >= 11) {
      spanElement.innerHTML = "GLO"
      }
      else if (_9mobile.includes(sliced) && string_length >= 11) {
      spanElement.innerHTML = "9mobile"
      }
      else {
      spanElement.innerHTML = "Unknown number"
      }
    }
  }

  btnElement.addEventListener("click", () => {
    form.reset();
    spanElement.innerHTML = "";
  })
};



// ======= DO NOT EDIT ============== //
export default startApp;
  // ======= EEND DO NOT EDIT ========= //