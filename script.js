const input = document.querySelector('input[name="myinput"]');
const select = document.getElementById("chang");
const output = document.getElementById("outPut");
const button = document.querySelector("button");

function manipulateText() {
  const inputValue = input.value.trim();
  const selectedOption = select.value;
  let manipulatedValue;

  switch (selectedOption) {
    case "uppercase":
      manipulatedValue = inputValue.charAt(0).toUpperCase() + inputValue.slice(1).toLowerCase();
      break;
    case "firstName":
      manipulatedValue = inputValue.split(" ")[0];
      break;
    case "firstNameLength":
      manipulatedValue = inputValue.split(" ")[0].length;
      break;
    case "middelName":
      const names = inputValue.split(" ");
      const middleIndex = Math.floor(names.length / 2);
      manipulatedValue = `Start index: ${inputValue.indexOf(names[middleIndex])}, End index: ${inputValue.indexOf(names[middleIndex]) + names[middleIndex].length}, Name: ${names[middleIndex]}`;
      break;
    case "filName":
      manipulatedValue = inputValue.endsWith(".png") || inputValue.endsWith(".jpg");
      break;
    case "passWord":
      manipulatedValue = "*".repeat(inputValue.length);
      break;
    case "thirdCapitalized":
      manipulatedValue = inputValue.slice(0, 2) + inputValue.charAt(2).toUpperCase() + inputValue.slice(3);
      break;
    case "anyCharUpper":
      manipulatedValue = inputValue.replace(/(?:^|\s|-)([a-z])/g, (match, group1) => group1.toUpperCase());
      break;
    default:
      manipulatedValue = "Invalid option selected";
  }

  output.textContent = manipulatedValue;
}

button.addEventListener("click", manipulateText);
