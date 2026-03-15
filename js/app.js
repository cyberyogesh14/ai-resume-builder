function generateResume() {
  document.getElementById("p-name").innerText =
    document.getElementById("name").value || "Your Name";

  document.getElementById("p-role").innerText =
    document.getElementById("role").value || "Job Role";

  document.getElementById("p-summary").innerText =
    document.getElementById("summary").value ||
    "Your summary will appear here.";

  const skills = document.getElementById("skills").value;

  document.getElementById("p-skills").innerText =
    skills ? skills.split(",").join(" • ") : "HTML • CSS • JavaScript";
}