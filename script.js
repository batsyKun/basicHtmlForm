// document.addEventListener("DOMContentLoaded", function() {
//     const form = document.querySelector("form");
  
//     form.addEventListener("submit", function(event) {
//       event.preventDefault(); 
  
//       const formData = new FormData(form);
  
//       console.log("Form Data:");
//       for (const [name, value] of formData.entries()) {
//         console.log(name + ": " + value);
//       }
//     });
//   });
  
  document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("form");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const formData = new FormData(form);
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    fetch("https://api-generator.retool.com/4bmT4I/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formDataObject)
    })
      .then(response => response.json())
      .then(data => {
        console.log("Response Data:", data);
      })
      .catch(error => {
        console.error("Error:", error);
      });
  });
});
  
  
  
  
