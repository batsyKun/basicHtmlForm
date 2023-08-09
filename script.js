document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault(); 
  
      const formData = new FormData(form);
  
      console.log("Form Data:");
      for (const [name, value] of formData.entries()) {
        console.log(name + ": " + value);
      }
    });
  });
  
  
  
  
  
  