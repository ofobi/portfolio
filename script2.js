function handleGeoProblemSubmit(event) {
  event.preventDefault();

  const nameEl = document.getElementById("c-name");
  const emailEl = document.getElementById("c-email");
  const problemEl = document.getElementById("c-problem");
  const intro = document.getElementById("c-approach-intro");
  const stepsList = document.getElementById("c-approach-steps");

  const name = nameEl ? nameEl.value.trim() : "";
  const fromEmail = emailEl ? emailEl.value.trim() : "";
  const problem = problemEl ? problemEl.value.trim() : "";

  if (!problem) {
    intro.textContent =
      "Please describe your geospatial / ML challenge so I can outline a tailored GeoAI approach.";
    stepsList.innerHTML = "";
    return;
  }

  const displayName = name || "your team";

  intro.textContent = `Here is how I would begin approaching this for ${displayName}:`;

  const problemSnippet =
    problem.length > 120 ? problem.slice(0, 117).trim() + "..." : problem;

  const steps = [
    `Frame the specific geospatial question behind “${problemSnippet}” and define success metrics (e.g., accuracy, spatial resolution, lead time).`,
    "Inventory relevant EO/GIS inputs: satellite sensors (e.g., Sentinel, Landsat), in‑situ observations, and ancillary data (elevation, land use, hydrology).",
    "Design a preprocessing chain: reprojection, resampling, cloud/shadow masking, temporal compositing, and normalization across scenes.",
    "Engineer features or image stacks suitable for ML/DL (spectral indices, texture, temporal metrics, or patch‑based inputs for CNN/segmentation models).",
    "Select and prototype appropriate models (e.g., tree‑based ML, CNNs, U‑Net‑style architectures), with spatial cross‑validation and hyperparameter tuning.",
    "Evaluate performance with spatially aware metrics, perform error analysis by region/class, and iterate on data and model choices.",
    "Produce decision‑ready outputs (maps, risk layers, time series) with clear visualizations and document a reproducible pipeline for deployment or scaling."
  ];

  stepsList.innerHTML = "";
  steps.forEach((text) => {
    const li = document.createElement("li");
    li.textContent = text;
    stepsList.appendChild(li);
  });

  const subject = encodeURIComponent(
    `GeoAI contact: ${problemSnippet || "Geospatial / ML challenge"}`
  );
  const bodyLines = [
    `Name: ${displayName}`,
    `Email: ${fromEmail || "not provided"}`,
    "",
    "Message / challenge:",
    problem,
    "",
    "---",
    "Sent from the GeoAI portfolio contact form.",
  ];
  const body = encodeURIComponent(bodyLines.join("\n"));

  window.location.href = `mailto:austinaborah62@gmail.com?subject=${subject}&body=${body}`;
}

const filterButtons = document.querySelectorAll(".filter-btn");
const labCards = document.querySelectorAll(".lab-card");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.getAttribute("data-filter");

    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    labCards.forEach((card) => {
      const category = card.getAttribute("data-category");
      if (filter === "all" || category === filter) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  });
});


