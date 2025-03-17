
function addRecommendation() {
  // Get the message of the new recommendation
  let recommendation = document.getElementById("new_recommendation");
  // If the user has left a recommendation, display a pop-up
  if (recommendation.value != null && recommendation.value.trim() != "") {
    console.log("New recommendation added");
    //Call showPopup here
    showPopup(true);

    // Create a new 'recommendation' element and set it's value to the user's message
    var element = document.createElement("div");
    element.setAttribute("class", "recommendation");
    element.innerHTML = "\<span\>&#8220;\</span\>" + recommendation.value + "\<span\>&#8221;\</span\>";
    // Add this element to the end of the list of recommendations
    document.getElementById("all_recommendations").appendChild(element);

    // Reset the value of the textarea
    recommendation.value = "";
  }
}

function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible'
  } else {
    document.getElementById('popup').style.visibility = 'hidden'
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const skills = document.querySelectorAll('.skill');

  skills.forEach(skill => {
    const experienceText = skill.querySelector('p').textContent;
    const years = parseInt(experienceText.split(' ')[0]); // Extract the number of years

    if (!isNaN(years)) {
      let starsDiv = skill.querySelector('.stars');
      if (!starsDiv) {
        starsDiv = document.createElement('div');
        starsDiv.classList.add('stars');
        skill.appendChild(starsDiv);
      }
      for (let i = 0; i < years; i++) {
        const star = document.createElement('i');
        star.classList.add('fas', 'fa-star'); // Assuming you're using Font Awesome
        starsDiv.appendChild(star);
      }
    }
  });
});
