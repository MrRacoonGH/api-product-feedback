document.addEventListener("DOMContentLoaded", function () {

    const $formSearch = document.querySelector(".btn")

    
    $formSearch.addEventListener("click", () => {
        console.log("sa marche")
    });

 
    fetch('./data/data.json')
      .then(response => response.json())
      .then(items => {
        const $wrapper = document.querySelector(".feedback-wrapper");
  
        items.forEach(function (item) {
          const $feddbackItem = document.createElement("div");
          $feddbackItem.classList.add("feedback-item");

          const $feedbackVote = document.createElement("div");
          $feedbackVote.classList.add("feedback-item-votes")

          const $svgArrow = document.createElement("svg")

  
          const $textRegular = document.createElement("span");
          $textRegular.textContent = $description

          const $feedbackItemText = document.createElement("div")
          $feedbackItemText.classList.add("feedback-item-text")

          const $heading = document.createElement("h3")
          $heading.classList.add("heading-3")

          const $paragraph = document.createElement("p")

          const $feedbackChip = document.createElement("div")
          $feedbackChip.classList.add("feedback-chip")
          $feedbackChip.classList.add("text-regular-3")

          const $feedbackComments = document.createElement("div")
          $feedbackComments.classList.add("feedback-item-comments")

          const $bold = document.createElement("span")
          $bold.classList.add("bold")

          $feddbackItem.appendChild($feedbackVote)
          $feedbackVote.appendChild($textRegular)
          $textRegular.appendChild($feedbackItemText)
          $feedbackItemText.appendChild($heading)
          $heading.appendChild($paragraph)
          $paragraph.appendChild($feedbackChip)
          $feedbackChip.appendChild($feedbackComments)
          $feedbackComments.appendChild($bold)

        });
      })
      .catch(error => console.error("Erreur lors du chargement du JSON :", error));
  });