document.getElementById("get-started").addEventListener("click", function() {
    const popup = document.createElement("div");
    popup.classList.add("popup");
  
    const heading = document.createElement("h2");
    heading.textContent = "I'm a:";
    popup.appendChild(heading);
  
    const options = document.createElement("div");
    options.classList.add("options");
  
    const traveler = document.createElement("button");
    traveler.textContent = "Traveler";
    traveler.addEventListener("click", function() {
      // Link to traveler popup JavaScript file
      const script = document.createElement("script");
      script.src = "next-script.js";
      document.body.appendChild(script);
    });
    options.appendChild(traveler);
  
    const newCitizen = document.createElement("button");
    newCitizen.textContent = "New Citizen";
    newCitizen.addEventListener("click", function() {
      // Link to new citizen popup JavaScript file
      const script = document.createElement("script");
      script.src = "new-citizen.js";
      document.body.appendChild(script);
    });
    options.appendChild(newCitizen);
  
    const localCitizen = document.createElement("button");
    localCitizen.textContent = "Local Citizen";
    localCitizen.addEventListener("click", function() {
      // Link to local citizen popup JavaScript file
      const script = document.createElement("script");
      script.src = "local-citizen-popup.js";
      document.body.appendChild(script);
    });
    options.appendChild(localCitizen);
  
    popup.appendChild(options);
  
    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";
    cancelButton.addEventListener("click", function() {
      popup.remove();
    });
    popup.appendChild(cancelButton);
  
    const nextButton = document.createElement("button");
    nextButton.textContent = "Next";
    nextButton.addEventListener("click", function() {
      // Do nothing if no option is selected
    });
    popup.appendChild(nextButton);
  
    document.body.appendChild(popup);
  });
  