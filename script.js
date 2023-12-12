(function () {
    // Your code goes here
  
    // Updated array of names
    var names = ["John", "Jane", "Bob", "Alice", "Jack", "David", "Jed", "Alain", "Solange", "James", "Sabaoth"];
  
    for (var i = 0; i < names.length; i++) {
      // Your conditional statements go here
      var name = names[i];
  
      // Check if the name starts with 'J' or 'j'
      if (name.charAt(0).toLowerCase() === 'j') {
        console.log("Goodbye " + name);
      } else {
        console.log("Hello " + name);
      }
    }
  })();
  