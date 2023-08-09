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
  let userID 
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
        userID = data.id
      })
      .catch(error => {
        console.error("Error:", error);
      });
  });
});
  viewButton.addEventListener("click", function() {
    fetch("https://api-generator.retool.com/4bmT4I/data")
      .then(response => response.json())
      .then(data => {
        const submittedData = data[userID-1];
        console.log("View Submitted Data:", submittedData);
      })
      .catch(error => {
        console.error("Error:", error);
      });
  });
  
  
  
