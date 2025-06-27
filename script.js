function checkGrade(score) {
    if (score >= 70) {
      console.log("A");
    } else if (score >= 60 && score <= 69) {
      console.log("B");
    } else if (score >= 50 && score <= 59) {
      console.log("C");
    } else {
      console.log("F");
    }
  }

  function login(username, password) {
    if (username === "admin" && password === "1234") {
      console.log("Login successful");
    } else {
      console.log("Login failed");
    }
  }

  function convertToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    console.log(fahrenheit);
  }

  function canVote(age) {
    if (age >= 18) {
      console.log("You can vote.");
    } else {
      console.log("You cannot vote yet.");
    }
  }
  

function temperatureStatus(temp) {
    if (temp < 0) {
      console.log("Freezing");
    } else if (temp >= 0 && temp <= 15) {
      console.log("Cold");
    } else if (temp >= 16 && temp <= 25) {
      console.log("Cool");
    } else {
      console.log("Warm");
    }
  }

 