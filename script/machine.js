console.log("machine loaded");

const interviewCountEl = document.getElementById("interviewcount");
const rejectCountEl = document.getElementById("rejectcount");
const totalCountEl = document.getElementById("totalcount");

const allBtn = document.getElementById("allbtn");
const interviewTabBtn = document.getElementById("interviewbtn");
const rejectTabBtn = document.getElementById("rejectbtn");
const emptyState = document.getElementById("emptyState");
const jobCountText = document.getElementById("jobcount");

let activeTab = "all";

//dashboard  logic 
function updateDashboard() {
  let interview = 0;
  let rejected = 0;
  let total = 0;

  const cards = document.querySelectorAll(".border");

  cards.forEach((card) => {
    total++;
    const status = card.querySelector("span").innerText;

    if (status === "Interview") interview++;
    if (status === "Rejected") rejected++;
  });

  totalCountEl.innerText = total;
  interviewCountEl.innerText = interview;
  rejectCountEl.innerText = rejected;
}

//filtering job 
function filterJobs(type) {
  activeTab = type;

  let visible = 0;
  const cards = document.querySelectorAll(".border");
  const total = cards.length;

  cards.forEach((card) => {
    const status = card.querySelector("span").innerText;

    if (type === "all") {
      card.style.display = "block";
      visible++;
    } else if (status === type) {
      card.style.display = "block";
      visible++;
    } else {
      card.style.display = "none";
    }
  });

  // Empty state
  emptyState.classList.toggle("hidden", visible !== 0);

  // job count 
  if (type === "all") {
    jobCountText.innerText = `${total} jobs`;
  } else {
    jobCountText.innerText = `${visible} of ${total} jobs`;
  }

  updateActiveTabStyle(type);
}

  
function updateActiveTabStyle(type) {
  allBtn.classList.add("btn-outline");
  interviewTabBtn.classList.add("btn-outline");
  rejectTabBtn.classList.add("btn-outline");

  if (type === "all") allBtn.classList.remove("btn-outline");
  if (type === "Interview") interviewTabBtn.classList.remove("btn-outline");
  if (type === "Rejected") rejectTabBtn.classList.remove("btn-outline");
}

document.querySelectorAll(".btn-success").forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".border");
    const statusSpan = card.querySelector("span");

    if (statusSpan.innerText === "Interview") return;

    statusSpan.innerText = "Interview";
    updateDashboard();
    filterJobs(activeTab);
  });
});

document.querySelectorAll(".btn-error").forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".border");
    const statusSpan = card.querySelector("span");

    if (statusSpan.innerText === "Rejected") return;

    statusSpan.innerText = "Rejected";
    updateDashboard();
    filterJobs(activeTab);
  });
});

/* dlt */
document.querySelectorAll(".absolute").forEach((deleteBtn) => {
  deleteBtn.addEventListener("click", () => {
    const card = deleteBtn.closest(".border");
    card.remove();

    updateDashboard();
    filterJobs(activeTab);
  });
});


allBtn.addEventListener("click", () => filterJobs("all"));
interviewTabBtn.addEventListener("click", () => filterJobs("Interview"));
rejectTabBtn.addEventListener("click", () => filterJobs("Rejected"));


filterJobs("all");
updateDashboard();
