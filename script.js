(function () {
    // Your code goes here
  
    // Updated array of names
    var names = ["John", "Jane", "Bob", "Alice", "Jack", "David", "Jed", "Alain", "Solange", "James", "Sabaoth"];
  
    for (var i = 0; i < names.length; i++) {
      // Your conditional statements go here
      var name = names[i];
      var greetingMessage;
  
      // Check if the name starts with 'J' or 'j'
      if (name.charAt(0).toLowerCase() === 'j') {
        greetingMessage = "Goodbye " + name;
      } else {
        greetingMessage = "Hello " + name;
      }
  
      // Log to the console
      console.log(greetingMessage);
  
      // Display in the browser
      var messageElement = document.createElement("p");
      messageElement.textContent = greetingMessage;
      document.body.appendChild(messageElement);
    }
  })();
  