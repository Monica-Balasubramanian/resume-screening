// Dummy backend simulation for demo purposes
function processResumes() {
  const jobDesc = document.getElementById("jobDesc").value;
  const files = document.getElementById("resumeUpload").files;

  if (!jobDesc || files.length === 0) {
    alert("⚠️ Please enter a job description and upload resumes.");
    return;
  }

  // Simulate results (replace with real backend call)
  const sampleResults = Array.from(files).map((file, index) => ({
    name: file.name,
    skills: ["Python", "SQL", "AWS"].slice(0, (index % 3) + 1),
    score: (Math.random() * 100).toFixed(2)
  }));

  populateResults(sampleResults);
}

function populateResults(results) {
  const tableBody = document.getElementById("resultsTable").querySelector("tbody");
  tableBody.innerHTML = "";

  results
    .sort((a, b) => b.score - a.score)
    .forEach(result => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${result.name}</td>
        <td>${result.skills.join(", ")}</td>
        <td>${result.score}%</td>
      `;
      tableBody.appendChild(row);
    });
}

