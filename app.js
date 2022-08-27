// function bmiCalculator (weight, height) {
//     let interpretation = weight/Math.pow(height, 2);
//     interpretation = Math.round(interpretation);
//     if (interpretation < 18.5) {
//       return "Your BMI is " + interpretation + "," + " so you are underweight."
//     }
//     else if (interpretation > 18.5 && interpretation <= 24.9) {
//       return "Your BMI is " + interpretation + "," + " so you have a normal weight."
//     }
//     else
//       return "Your BMI is " + interpretation + "," + " so you are overweight."
//   }
//   bmiCalculator(prompt("Introduce tu peso"), prompt("Introduce tu altura en metros"));

function bmiCalculator (weight, height) {
    let interpretation = weight/Math.pow(height, 2);
    interpretation = Math.round(interpretation);
    if (interpretation < 18.5) {
      alert("Your BMI is " + interpretation + "," + " so you are underweight.");
    }
    else if (interpretation > 18.5 && interpretation <= 24.9) {
      alert("Your BMI is " + interpretation + "," + " so you have a normal weight.");
    }
    else
      alert("Your BMI is " + interpretation + "," + " so you are overweight.");
  }
  bmiCalculator(prompt("Introduce tu peso"), prompt("Introduce tu altura en metros"));
  
  