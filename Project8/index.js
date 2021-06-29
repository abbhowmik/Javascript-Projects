console.log("this is a calculator project");
let screen = document.getElementById("inputScreen");
let buttons = document.querySelectorAll("button");
let totalScreenValue = "";
// console.log(inputScreen, button);
for (item of buttons) {
  item.addEventListener("click", (e) => {
    let buttonText = e.target.innerText;
    console.log(buttonText);
    if (buttonText == "X") {
      buttonText = "*";
      totalScreenValue += buttonText;
      screen.value = totalScreenValue;
    } else if (buttonText == "Clr") {
      totalScreenValue = "";
      screen.value = totalScreenValue;
      screen.nodeValue = totalScreenValue;
    } else if (buttonText == "=") {
      screen.value = eval(totalScreenValue);
    } else if (buttonText == "Del") {
      // deleting the last element of the input screen
      let str = totalScreenValue.substr(0, totalScreenValue.length - 1);
      totalScreenValue = str;
      screen.value = totalScreenValue;

      console.log(str);
    } else {
      totalScreenValue += buttonText;
      screen.value = totalScreenValue;
    }
  });
}
