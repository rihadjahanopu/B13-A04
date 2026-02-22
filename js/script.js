let jobs = [
	{
		id: 1,
		company: "Mobile First Corp",
		position: "React Native Developer",
		location: "Remote",
		type: "Full-time",
		salary: "$130,000 - $175,000",
		description:
			"Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
		status: "not-applied",
	},
	{
		id: 2,
		company: "WebFlow Agency",
		position: "Web Designer & Developer",
		location: "Los Angeles, CA",
		type: "Part-time",
		salary: "$80,000 - $120,000",
		description:
			"Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.",
		status: "not-applied",
	},
	{
		id: 3,
		company: "DataViz Solutions",
		position: "Data Visualization Specialist",
		location: "Boston, MA",
		type: "Full-time",
		salary: "$125,000 - $165,000",
		description:
			"Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.",
		status: "not-applied",
	},
	{
		id: 4,
		company: "CloudFirst Inc",
		position: "Backend Developer",
		location: "Seattle, WA",
		type: "Full-time",
		salary: "$140,000 - $190,000",
		description:
			"Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.",
		status: "not-applied",
	},
	{
		id: 5,
		company: "Innovation Labs",
		position: "UI/UX Engineer",
		location: "Austin, TX",
		type: "Full-time",
		salary: "$110,000 - $150,000",
		description:
			"Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.",
		status: "not-applied",
	},
	{
		id: 6,
		company: "MegaCorp Solutions",
		position: "JavaScript Developer",
		location: "New York, NY",
		type: "Full-time",
		salary: "$130,000 - $170,000",
		description:
			"Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.",
		status: "not-applied",
	},
	{
		id: 7,
		company: "StartupXYZ",
		position: "Full Stack Engineer",
		location: "Chicago, IL",
		type: "Full-time",
		salary: "$120,000 - $160,000",
		description:
			"Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.",
		status: "not-applied",
	},
	{
		id: 8,
		company: "TechCorp Industries",
		position: "Senior Frontend Developer",
		location: "San Francisco, CA",
		type: "Full-time",
		salary: "$150,000 - $200,000",
		description:
			"We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.",
		status: "not-applied",
	},
];

let activeTab = "all";

function updateStats() {
	const total = jobs.length;
	const interview = jobs.filter((j) => j.status === "interview").length;
	const rejected = jobs.filter((j) => j.status === "rejected").length;

	document.getElementById("stat-total").textContent = total;
	document.getElementById("stat-interview").textContent = interview;
	document.getElementById("stat-rejected").textContent = rejected;
}

function getFilteredJobs() {
	if (activeTab === "all") return jobs;
	if (activeTab === "interview")
		return jobs.filter((j) => j.status === "interview");
	if (activeTab === "rejected")
		return jobs.filter((j) => j.status === "rejected");
	return jobs;
}

function getStatusBadge(status) {
	if (status === "not-applied") {
		return `<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-700 border border-blue-300">NOT APPLIED</span>`;
	} else if (status === "interview") {
		return `<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500 text-white border border-emerald-600">INTERVIEW</span>`;
	} else if (status === "rejected") {
		return `<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-500 text-white border border-red-600">REJECTED</span>`;
	}
}

function renderJob(job) {
	let actionButtons = "";
	if (job.status === "not-applied") {
		actionButtons = `
						<button onclick="updateStatus(${job.id}, 'interview')"
							class="flex-1 px-4 py-2 border border-emerald-600 text-emerald-700 bg-emerald-100 rounded-md hover:bg-emerald-200 transition-colors btn-press font-medium text-sm">
							INTERVIEW
						</button>
						<button onclick="updateStatus(${job.id}, 'rejected')"
							class="flex-1 px-4 py-2 border border-red-600 text-red-700 bg-red-100 rounded-md hover:bg-red-200 transition-colors btn-press font-medium text-sm">
							REJECTED
						</button>
					`;
	} else {
		actionButtons = `
						<button onclick="updateStatus(${job.id}, 'interview')"
							class="flex-1 px-4 py-2 border border-emerald-600 text-emerald-700 bg-emerald-100 rounded-md hover:bg-emerald-200 transition-colors btn-press font-medium text-sm">
							INTERVIEW
						</button>
						<button onclick="updateStatus(${job.id}, 'rejected')"
							class="flex-1 px-4 py-2 border border-red-600 text-red-700 bg-red-100 rounded-md hover:bg-red-200 transition-colors btn-press font-medium text-sm">
							REJECTED
						</button>
					`;
	}
	return `
					<div class="bg-white border border-slate-200 rounded-lg shadow-sm card-hover p-5">
						<div class="flex items-start justify-between mb-3">
							<div>
								<h3 class="font-semibold text-slate-900">${job.company}</h3>
								<p class="text-sm text-slate-600">${job.position}</p>
							</div>
							<button onclick="deleteJob(${job.id})" class="text-slate-400 hover:text-red-500 transition-colors btn-press">
								<i class="fas fa-trash-alt"></i>
							</button>
						</div>
						<div class="flex flex-wrap gap-3 mb-3 text-sm text-slate-500">
							<span class="flex items-center gap-1">
								<i class="fas fa-map-marker-alt text-xs"></i>
								${job.location}
							</span>
							<span class="flex items-center gap-1">
								<i class="fas fa-clock text-xs"></i>
								${job.type}
							</span>
							<span class="flex items-center gap-1">
								<i class="fas fa-dollar-sign text-xs"></i>
								${job.salary}
							</span>
						</div>
						<div class="mb-3">
							${getStatusBadge(job.status)}
						</div>
						<p class="text-sm text-slate-600 leading-relaxed">${job.description}</p>
						<div class="flex gap-3 mt-4">
							${actionButtons}
						</div>

					</div>
				`;
}
