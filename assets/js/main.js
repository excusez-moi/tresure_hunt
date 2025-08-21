// Mandatory console log
console.log("Congrats, you’re closer to the password! 🚀");

// On load, change <h1> to "Welcome, [Team Name]!"
// Replace [Team Name] in the variable below without altering the literal required output format.
const TEAM_NAME = "Contoso"; // <-- set your team name

window.addEventListener("DOMContentLoaded", () => {
  const heading = document.getElementById("team-heading");
  if (heading) heading.textContent = `Welcome, ${TEAM_NAME}!`;
});
