document.addEventListener("DOMContentLoaded", function () {
 
    fetch('./data/data.json')
      .then(response => response.json())
      .then(items => {
        const $wrapper = document.querySelector(".feedback-wrapper");
  
        items.forEach(function (item) {
          const $card = document.createElement("div");
          $card.classList.add("card");
  
          const $info = document.createElement("div");
          $info.classList.add("info");
  
          const $image = document.createElement("img");
          $image.src = item.logo;
          $image.alt = item.name;
  
          const $details = document.createElement("div");
          $details.classList.add("details");
  
          const $name = document.createElement("h2");
          $name.textContent = item.name;
  
          const $description = document.createElement("p");
          $description.textContent = item.description;
  
          const $action = document.createElement("div");
          $action.classList.add("extensions-action");
  
          const $removeItem = document.createElement("li");
          $removeItem.textContent = "remove";
          $removeItem.addEventListener("click", () => {
            $card.remove();
          });
  
          const $switchLabel = document.createElement("label");
          $switchLabel.classList.add("switch");
  
          const $toggleBtn = document.createElement("input");
          $toggleBtn.type = "checkbox";
          $toggleBtn.checked = false;
  
          const $slider = document.createElement("span");
          $slider.classList.add("slider");
  
          $toggleBtn.addEventListener("change", () => {
          });
  
          $switchLabel.appendChild($toggleBtn);
          $switchLabel.appendChild($slider);
  
          $info.appendChild($image);
          $info.appendChild($details);
          $details.appendChild($name);
          $details.appendChild($description);
  
          $action.appendChild($removeItem);
          $action.appendChild($switchLabel);
  
          $card.appendChild($info);
          $card.appendChild($action);
  
          $wrapper.appendChild($card);
        });
      })
      .catch(error => console.error("Erreur lors du chargement du JSON :", error));
  });