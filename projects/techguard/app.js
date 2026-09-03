const state = {
  currentView: "dashboard",
  search: "",
  filter: "all",
  assets: [
    { id: "AST-024", name: "Microsoft 365 Tenant", owner: "IT Department", type: "Cloud service", criticality: "High", status: "Active", review: "12 Sep 2026" },
    { id: "AST-023", name: "CRM Platform", owner: "Sales Operations", type: "Business system", criticality: "High", status: "Active", review: "18 Sep 2026" },
    { id: "AST-021", name: "Finance Shared Drive", owner: "Finance", type: "Data repository", criticality: "Medium", status: "Active", review: "20 Sep 2026" },
    { id: "AST-019", name: "PBX / Voice Gateway", owner: "Infrastructure", type: "Network service", criticality: "High", status: "Under review", review: "05 Sep 2026" },
    { id: "AST-016", name: "Employee Asset Register", owner: "IT Department", type: "Operational record", criticality: "Medium", status: "Active", review: "30 Sep 2026" },
    { id: "AST-014", name: "Google Workspace", owner: "IT Department", type: "Cloud service", criticality: "High", status: "Active", review: "15 Sep 2026" }
  ],
  access: [
    { id: "AR-2026-018", subject: "Finance group access", owner: "Finance Manager", scope: "12 users · 4 roles", due: "05 Sep 2026", status: "Pending" },
    { id: "AR-2026-017", subject: "CRM privileged roles", owner: "Sales Director", scope: "5 users · 2 roles", due: "12 Sep 2026", status: "In review" },
    { id: "AR-2026-016", subject: "Google Workspace admins", owner: "IT Manager", scope: "3 users · 1 role", due: "20 Sep 2026", status: "Approved" },
    { id: "AR-2026-015", subject: "Project drive access", owner: "Projects Lead", scope: "18 users · 6 roles", due: "24 Sep 2026", status: "Approved" },
    { id: "AR-2026-014", subject: "Leavers reconciliation", owner: "HR Manager", scope: "4 users · 7 roles", due: "28 Aug 2026", status: "Pending" }
  ],
  risks: [
    { id: "RSK-006", title: "Privileged CRM access not recertified", owner: "IT Department", category: "Access control", score: 15, likelihood: "Likely", impact: "Major", status: "Open", treatment: "Reduce" },
    { id: "RSK-005", title: "Legacy PBX documentation incomplete", owner: "Infrastructure", category: "Technology", score: 12, likelihood: "Possible", impact: "Major", status: "In progress", treatment: "Reduce" },
    { id: "RSK-004", title: "Offboarding evidence not centralized", owner: "HR / IT", category: "Process", score: 10, likelihood: "Possible", impact: "Moderate", status: "Open", treatment: "Reduce" },
    { id: "RSK-003", title: "Shared-drive retention policy gap", owner: "Finance", category: "Data governance", score: 8, likelihood: "Unlikely", impact: "Major", status: "In progress", treatment: "Reduce" },
    { id: "RSK-002", title: "Vendor SLA evidence inconsistent", owner: "IT Department", category: "Third party", score: 6, likelihood: "Possible", impact: "Minor", status: "Accepted", treatment: "Monitor" }
  ],
  evidence: [
    { code: "AC-02", name: "User access review record", control: "Access Management", owner: "IT Department", due: "05 Sep 2026", status: "Pending" },
    { code: "AC-04", name: "Leaver access revocation log", control: "Access Management", owner: "HR / IT", due: "08 Sep 2026", status: "In review" },
    { code: "OP-01", name: "IT service catalog", control: "Operations", owner: "IT Department", due: "10 Sep 2026", status: "Complete" },
    { code: "AS-03", name: "Asset custody acknowledgements", control: "Asset Management", owner: "IT Department", due: "12 Sep 2026", status: "Complete" },
    { code: "TP-02", name: "Mobily service SLA", control: "Third Party", owner: "Procurement", due: "15 Sep 2026", status: "Pending" },
    { code: "IR-01", name: "Incident register and trends", control: "Incident Management", owner: "IT Department", due: "18 Sep 2026", status: "Complete" }
  ],
  tickets: [
    { id: "IT-2026-044", subject: "PBX connectivity follow-up", requester: "Operations", priority: "High", assignee: "Lujain Alshamrani", status: "Open", opened: "03 Sep 2026" },
    { id: "IT-2026-043", subject: "New user access request", requester: "HR", priority: "Medium", assignee: "IT Service Desk", status: "In progress", opened: "03 Sep 2026" },
    { id: "IT-2026-042", subject: "CRM workflow correction", requester: "Sales", priority: "Medium", assignee: "Lujain Alshamrani", status: "Closed", opened: "02 Sep 2026" },
    { id: "IT-2026-041", subject: "Laptop asset handover", requester: "Projects", priority: "Low", assignee: "IT Service Desk", status: "Closed", opened: "01 Sep 2026" },
    { id: "IT-2026-040", subject: "Shared drive permissions", requester: "Finance", priority: "High", assignee: "IT Service Desk", status: "In progress", opened: "31 Aug 2026" },
    { id: "IT-2026-039", subject: "Google Workspace backup check", requester: "Operations", priority: "Low", assignee: "IT Service Desk", status: "Closed", opened: "30 Aug 2026" }
  ]
};

const views = {
  dashboard: { label: "Dashboard" }, assets: { label: "Assets" }, access: { label: "Access reviews" },
  risks: { label: "Risk register" }, evidence: { label: "Control evidence" }, tickets: { label: "IT tickets" }, settings: { label: "Settings" }
};

const $ = (selector) => document.querySelector(selector);
const escapeHtml = (value) => String(value).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char]));
const tag = (value) => `<span class="tag ${String(value).toLowerCase().replace(/\s+/g, '-')}">${escapeHtml(value)}</span>`;

function render() {
  $("#breadcrumbCurrent").textContent = views[state.currentView].label;
  document.querySelectorAll(".nav-item").forEach((item) => item.classList.toggle("active", item.dataset.view === state.currentView));
  $("#viewContainer").innerHTML = state.currentView === "dashboard" ? dashboardView() : state.currentView === "settings" ? settingsView() : dataView(state.currentView);
  bindViewEvents();
}

function dashboardView() {
  return `
    <div class="hero">
      <div><span class="eyebrow">Thursday · 03 September 2026</span><h1>Good morning, Lujain.</h1><p>One workspace for keeping technology reliable, access controlled, and audit-ready.</p></div>
      <div class="hero-actions"><button class="secondary-button" data-action="view-report">View monthly report</button><button class="primary-button" data-action="add-risk">+ Add risk</button></div>
    </div>
    <div class="stat-grid">
      <div class="stat-card"><div class="stat-top"><span>Control health</span><span class="stat-icon">✓</span></div><div class="stat-number">86%</div><div class="stat-foot"><span class="trend-up">↑ 8.4%</span> vs. last month</div></div>
      <div class="stat-card risk"><div class="stat-top"><span>Open high risks</span><span class="stat-icon">△</span></div><div class="stat-number">3</div><div class="stat-foot"><span class="trend-down">↑ 1</span> needs attention</div></div>
      <div class="stat-card amber"><div class="stat-top"><span>Access reviews due</span><span class="stat-icon">⌘</span></div><div class="stat-number">5</div><div class="stat-foot"><span class="trend-down">2 overdue</span> this week</div></div>
      <div class="stat-card blue"><div class="stat-top"><span>Open IT tickets</span><span class="stat-icon">◈</span></div><div class="stat-number">7</div><div class="stat-foot"><span class="trend-up">↓ 18%</span> average resolution time</div></div>
    </div>
    <div class="content-grid">
      <section class="panel risk-panel"><div class="panel-header"><div><div class="panel-title">Risk posture</div><div class="panel-subtitle">Inherent risk distribution by likelihood and impact</div></div><button class="panel-link" data-view-link="risks">View register →</button></div><div class="panel-body"><div class="risk-layout"><div class="heatmap"><div></div><div class="axis-x">1</div><div class="axis-x">2</div><div class="axis-x">3</div><div class="axis-x">4</div><div class="axis-x">5</div><div class="axis-y">5</div><div class="heat-cell high">1</div><div class="heat-cell high">2</div><div class="heat-cell critical">3</div><div class="heat-cell critical">4</div><div class="heat-cell critical">5</div><div class="axis-y">4</div><div class="heat-cell med">1</div><div class="heat-cell high">2</div><div class="heat-cell high">3</div><div class="heat-cell critical">4</div><div class="heat-cell critical">5</div><div class="axis-y">3</div><div class="heat-cell low">1</div><div class="heat-cell med">2</div><div class="heat-cell high">3</div><div class="heat-cell high">4</div><div class="heat-cell critical">5</div><div class="axis-y">2</div><div class="heat-cell low">1</div><div class="heat-cell low">2</div><div class="heat-cell med">3</div><div class="heat-cell high">4</div><div class="heat-cell high">5</div><div class="axis-y">1</div><div class="heat-cell low">1</div><div class="heat-cell low">2</div><div class="heat-cell low">3</div><div class="heat-cell med">4</div><div class="heat-cell high">5</div><div></div><div class="axis-x">Impact</div></div><div class="risk-legend"><div><span class="eyebrow">Current score</span><div class="risk-score">12.4</div><div class="risk-score-label">out of 25 · medium-high</div></div><div class="legend-item"><i class="legend-dot critical"></i>Critical (20–25)</div><div class="legend-item"><i class="legend-dot high"></i>High (12–19)</div><div class="legend-item"><i class="legend-dot med"></i>Medium (6–11)</div><div class="legend-item"><i class="legend-dot low"></i>Low (1–5)</div></div></div></div></section>
      <section class="panel"><div class="panel-header"><div><div class="panel-title">Control completion</div><div class="panel-subtitle">Evidence status across control domains</div></div><button class="panel-link" data-view-link="evidence">View controls →</button></div><div class="panel-body"><div class="bar-chart">${[["AC",86],["AS",100],["OP",78],["IR",92],["TP",61],["DG",73]].map(([l,v])=>`<div class="bar-item"><span class="bar-value">${v}%</span><div class="bar" style="height:${v}%"></div><span class="bar-label">${l}</span></div>`).join("")}</div><div class="chart-legend"><span class="legend-line"></span>Evidence complete <span style="margin-left:auto;color:#a1adba">Target: 90%</span></div></div></section>
    </div>
    <div class="bottom-grid"><section class="panel"><div class="panel-header"><div><div class="panel-title">Recent activity</div><div class="panel-subtitle">What changed in your workspace</div></div><button class="panel-link" data-action="view-report">View all →</button></div><div class="panel-body"><ul class="activity-list"><li><span class="activity-badge teal">✓</span><div class="activity-copy"><strong>Access review completed</strong> for Google Workspace admins<span class="activity-time">Today · 09:42 by Lujain Alshamrani</span></div></li><li><span class="activity-badge red">△</span><div class="activity-copy"><strong>High risk opened:</strong> Privileged CRM access not recertified<span class="activity-time">Yesterday · 15:18 by IT Governance</span></div></li><li><span class="activity-badge amber">▤</span><div class="activity-copy"><strong>Evidence requested</strong> from Procurement for Mobily service SLA<span class="activity-time">Yesterday · 11:06 by Lujain Alshamrani</span></div></li><li><span class="activity-badge teal">◈</span><div class="activity-copy"><strong>Ticket IT-2026-042 closed</strong> within SLA<span class="activity-time">01 Sep · 16:23 by IT Service Desk</span></div></li></ul></div></section><section class="panel"><div class="panel-header"><div><div class="panel-title">Priority controls</div><div class="panel-subtitle">Controls requiring the next action</div></div><button class="panel-link" data-view-link="evidence">Open evidence →</button></div><div class="panel-body"><ul class="control-list"><li class="control-row"><span class="control-code">AC-02</span><div><span class="control-name">Periodic user access review</span><div class="progress-track"><div class="progress-bar" style="width:72%"></div></div></div><span class="control-status status-progress">72% · Due</span></li><li class="control-row"><span class="control-code">TP-02</span><div><span class="control-name">Third-party SLA evidence</span><div class="progress-track"><div class="progress-bar" style="width:42%;background:#d9a54e"></div></div></div><span class="control-status status-attention">42% · Gap</span></li><li class="control-row"><span class="control-code">IR-01</span><div><span class="control-name">Incident register maintained</span><div class="progress-track"><div class="progress-bar" style="width:92%"></div></div></div><span class="control-status status-complete">92% · Good</span></li></ul></div></section></div>`;
}

function dataView(view) {
  const config = {
    assets: { title: "Technology assets", desc: "Maintain ownership, criticality, lifecycle, and review status for every technology asset.", add: "Add asset", rows: filtered(state.assets), type: "assets" },
    access: { title: "Access reviews", desc: "Review user and role access before it becomes an operational or audit issue.", add: "Start review", rows: filtered(state.access), type: "access" },
    risks: { title: "Risk register", desc: "Track technology risks from identification through treatment and acceptance.", add: "Add risk", rows: filtered(state.risks), type: "risks" },
    evidence: { title: "Control evidence", desc: "Centralize the evidence needed to demonstrate that controls are designed and operating.", add: "Request evidence", rows: filtered(state.evidence), type: "evidence" },
    tickets: { title: "IT tickets", desc: "Connect service operations with ownership, priority, and SLA accountability.", add: "Create ticket", rows: filtered(state.tickets), type: "tickets" }
  }[view];
  return `<div class="view-head"><div><span class="eyebrow">Assurance workspace</span><h1>${config.title}</h1><p>${config.desc}</p></div><div class="view-tools"><input class="search-box" id="tableSearch" placeholder="Search ${config.title.toLowerCase()}..." value="${escapeHtml(state.search)}"/><select class="filter-select" id="tableFilter"><option value="all">All statuses</option><option value="Open">Open</option><option value="Pending">Pending</option><option value="In progress">In progress</option><option value="Complete">Complete</option><option value="Approved">Approved</option><option value="Closed">Closed</option></select><button class="primary-button" data-action="${view === "risks" ? "add-risk" : "add-item"}" data-item-type="${view}">+ ${config.add}</button></div></div>${summaryFor(view)}<section class="panel table-panel">${tableFor(config.type, config.rows)}</section>`;
}

function filtered(items) { const query = state.search.toLowerCase(); return items.filter((item) => { const matchesQuery = !query || Object.values(item).some((value) => String(value).toLowerCase().includes(query)); const matchesFilter = state.filter === "all" || Object.values(item).some((value) => String(value).toLowerCase() === state.filter.toLowerCase()); return matchesQuery && matchesFilter; }); }
function summaryFor(view) { const summaries = { assets: [["Registered assets", "24", "Across 6 business areas"], ["High criticality", "9", "Require stronger controls"], ["Reviews this month", "7", "2 awaiting owner action"]], access: [["Active reviews", "8", "Across 34 users and roles"], ["Overdue", "2", "Need owner follow-up"], ["Recertified", "91%", "Last 30-day cycle"]], risks: [["Total risks", "6", "Across 5 categories"], ["High / critical", "3", "Prioritized for treatment"], ["Treatment progress", "68%", "Target: 80%"]], evidence: [["Total controls", "18", "Across 6 domains"], ["Evidence gaps", "5", "Require action this week"], ["Complete", "72%", "Target: 90%"]], tickets: [["Open tickets", "7", "Across 4 departments"], ["High priority", "2", "Within SLA: 50%"], ["Avg. resolution", "1.4d", "Improved by 18%"]] }; return `<div class="summary-cards">${summaries[view].map((s,i)=>`<div class="mini-card"><h3>${s[0]}</h3><div class="mini-value ${i===1 && view !== "assets" ? "red" : i===2 ? "amber" : ""}">${s[1]}</div><p>${s[2]}</p></div>`).join("")}</div>`; }

function tableFor(type, rows) {
  if (!rows.length) return `<div class="empty-state"><strong>No matching records</strong>Try another search or clear the filter.</div>`;
  const headers = { assets: ["Asset", "Owner", "Type", "Criticality", "Status", "Next review"], access: ["Review", "Owner", "Scope", "Due date", "Status"], risks: ["Risk", "Owner", "Category", "Score", "Status", "Treatment"], evidence: ["Evidence", "Control domain", "Owner", "Due date", "Status"], tickets: ["Ticket", "Requester", "Priority", "Assignee", "Status", "Opened"] }[type];
  const body = rows.map((r) => {
    if (type === "assets") return `<tr><td><span class="table-primary">${r.name}</span><span class="table-secondary">${r.id}</span></td><td>${r.owner}</td><td>${r.type}</td><td>${tag(r.criticality)}</td><td>${tag(r.status)}</td><td>${r.review}</td></tr>`;
    if (type === "access") return `<tr><td><span class="table-primary">${r.subject}</span><span class="table-secondary">${r.id}</span></td><td>${r.owner}</td><td>${r.scope}</td><td>${r.due}</td><td>${tag(r.status)}</td></tr>`;
    if (type === "risks") return `<tr><td><span class="table-primary">${r.title}</span><span class="table-secondary">${r.id} · ${r.likelihood} likelihood / ${r.impact} impact</span></td><td>${r.owner}</td><td>${r.category}</td><td><strong style="color:${r.score >= 12 ? 'var(--red)' : 'var(--amber)'}">${r.score}/25</strong></td><td>${tag(r.status)}</td><td>${r.treatment}</td></tr>`;
    if (type === "evidence") return `<tr><td><span class="table-primary">${r.name}</span><span class="table-secondary">${r.code}</span></td><td>${r.control}</td><td>${r.owner}</td><td>${r.due}</td><td>${tag(r.status)}</td></tr>`;
    return `<tr><td><span class="table-primary">${r.subject}</span><span class="table-secondary">${r.id}</span></td><td>${r.requester}</td><td>${tag(r.priority)}</td><td>${r.assignee}</td><td>${tag(r.status)}</td><td>${r.opened}</td></tr>`;
  }).join("");
  return `<table class="data-table"><thead><tr>${headers.map((h)=>`<th>${h}</th>`).join("")}</tr></thead><tbody>${body}</tbody></table>`;
}

function settingsView() { return `<div class="view-head"><div><span class="eyebrow">System configuration</span><h1>Settings</h1><p>Configure the operating model behind your assurance workspace.</p></div></div><div class="settings-grid"><section class="setting-block"><h3>Workspace profile</h3><p>Set the organization context used across dashboards, reports, and control ownership.</p><div class="setting-line"><span>Organization name</span><strong>Madain Demo Org</strong></div><div class="setting-line"><span>Primary location</span><strong>Riyadh, Saudi Arabia</strong></div><div class="setting-line"><span>Data environment</span><span class="tag complete">Synthetic demo</span></div></section><section class="setting-block"><h3>Governance defaults</h3><p>Default settings used when creating new risks, reviews, and evidence requests.</p><div class="setting-line"><span>Access review cadence</span><strong>Every 90 days</strong></div><div class="setting-line"><span>Risk scoring method</span><strong>Likelihood × Impact</strong></div><div class="setting-line"><span>Reminder notifications</span><span class="switch"></span></div></section><section class="setting-block"><h3>Roles & permissions</h3><p>Role-based access ensures each user sees and performs only what they need.</p><div class="setting-line"><span>IT Governance Lead</span><span class="tag approved">Admin</span></div><div class="setting-line"><span>Control Owner</span><span class="tag in-review">Contribute</span></div><div class="setting-line"><span>Auditor</span><span class="tag low">Read-only</span></div></section><section class="setting-block"><h3>Audit trail</h3><p>Every important action is recorded for accountability and future assurance reviews.</p><div class="setting-line"><span>Events recorded</span><strong>1,284</strong></div><div class="setting-line"><span>Retention period</span><strong>12 months</strong></div><div class="setting-line"><span>Last export</span><strong>03 Sep 2026</strong></div></section></div>`; }

function openModal(type) {
  const labels = { risk: ["Risk management", "Add a technology risk"], asset: ["Asset management", "Register an asset"], ticket: ["Service operations", "Create an IT ticket"], evidence: ["Control assurance", "Request control evidence"] };
  const meta = labels[type] || labels.risk; $("#modalEyebrow").textContent = meta[0]; $("#modalTitle").textContent = meta[1];
  const fields = type === "risk" ? `<div class="form-grid"><div class="form-field full"><label>Risk title</label><input name="title" required placeholder="e.g. Unreviewed privileged access" /></div><div class="form-field"><label>Owner</label><input name="owner" required placeholder="Team or role" /></div><div class="form-field"><label>Category</label><select name="category"><option>Access control</option><option>Technology</option><option>Process</option><option>Data governance</option><option>Third party</option></select></div><div class="form-field"><label>Likelihood</label><select name="likelihood"><option>Possible</option><option>Likely</option><option>Unlikely</option></select></div><div class="form-field"><label>Impact</label><select name="impact"><option>Moderate</option><option>Major</option><option>Minor</option></select></div><div class="form-field full"><label>Treatment plan</label><textarea name="treatment" placeholder="What action will reduce or manage this risk?"></textarea></div></div>` : `<div class="form-grid"><div class="form-field full"><label>${type === "asset" ? "Asset name" : type === "ticket" ? "Issue summary" : "Evidence name"}</label><input name="title" required placeholder="Enter a clear name" /></div><div class="form-field"><label>Owner / requester</label><input name="owner" required placeholder="Team or person" /></div><div class="form-field"><label>Priority / status</label><select name="status"><option>Open</option><option>Pending</option><option>In progress</option><option>Complete</option></select></div><div class="form-field full"><label>Notes</label><textarea name="notes" placeholder="Add context for the record"></textarea></div></div>`;
  $("#modalFields").innerHTML = fields; $("#modalForm").dataset.type = type; $("#modalBackdrop").hidden = false; setTimeout(() => $("#modalFields input")?.focus(), 30);
}

function closeModal() { $("#modalBackdrop").hidden = true; $("#modalForm").reset(); }
function showToast(message) { const toast = $("#toast"); toast.textContent = message; toast.classList.add("show"); setTimeout(() => toast.classList.remove("show"), 2800); }

function bindViewEvents() {
  document.querySelectorAll("[data-view-link]").forEach((el) => el.addEventListener("click", () => { state.currentView = el.dataset.viewLink; state.search = ""; state.filter = "all"; render(); }));
  document.querySelectorAll("[data-action]").forEach((el) => el.addEventListener("click", () => { const action = el.dataset.action; if (action === "add-risk") openModal("risk"); else if (action === "add-item") openModal(el.dataset.itemType === "assets" ? "asset" : el.dataset.itemType === "tickets" ? "ticket" : "evidence"); else if (action === "view-report") showToast("Monthly assurance report is ready to export."); }));
  const search = $("#tableSearch"); if (search) { search.addEventListener("input", (e) => { state.search = e.target.value; render(); const input = $("#tableSearch"); input?.focus(); input?.setSelectionRange(state.search.length, state.search.length); }); }
  const filter = $("#tableFilter"); if (filter) filter.value = state.filter; filter?.addEventListener("change", (e) => { state.filter = e.target.value; render(); });
}

document.querySelectorAll(".nav-item").forEach((item) => item.addEventListener("click", () => { state.currentView = item.dataset.view; state.search = ""; state.filter = "all"; render(); $("#sidebar").classList.remove("open"); }));
$("#mobileMenu").addEventListener("click", () => $("#sidebar").classList.toggle("open"));
$("#closeModal").addEventListener("click", closeModal); $("#cancelModal").addEventListener("click", closeModal); $("#modalBackdrop").addEventListener("click", (e) => { if (e.target.id === "modalBackdrop") closeModal(); });
$("#modalForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.target).entries());
  const type = event.target.dataset.type;
  if (type === "risk") {
    state.risks.unshift({ id: `RSK-${String(state.risks.length + 7).padStart(3,"0")}`, title: data.title, owner: data.owner, category: data.category, score: 9, likelihood: data.likelihood, impact: data.impact, status: "Open", treatment: data.treatment || "Reduce" });
  }
  if (type === "asset") {
    state.assets.unshift({ id: `AST-${String(state.assets.length + 25).padStart(3,"0")}`, name: data.title, owner: data.owner, type: "Technology asset", criticality: "Medium", status: data.status === "Complete" ? "Active" : "Under review", review: "30 Sep 2026" });
  }
  if (type === "ticket") {
    state.tickets.unshift({ id: `IT-2026-${String(state.tickets.length + 45).padStart(3,"0")}`, subject: data.title, requester: data.owner, priority: "Medium", assignee: "IT Service Desk", status: data.status === "Complete" ? "Closed" : data.status, opened: "03 Sep 2026" });
  }
  if (type === "evidence") {
    state.evidence.unshift({ code: `CT-${String(state.evidence.length + 7).padStart(2,"0")}`, name: data.title, control: "New control request", owner: data.owner, due: "30 Sep 2026", status: data.status });
  }
  closeModal();
  showToast(`${type === "risk" ? "Risk" : type === "asset" ? "Asset" : type === "ticket" ? "Ticket" : "Evidence request"} added to the workspace.`);
  if (state.currentView !== "dashboard") render();
});
$("#exportBtn").addEventListener("click", () => { showToast("Report export prepared — demo action."); });
render();
