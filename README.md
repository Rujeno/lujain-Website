# TechGuard

TechGuard is a portfolio-ready MVP for an **IT Governance & Security Assurance Hub**. It demonstrates how IT operations, access control, risk management, evidence collection, and service management can work together in one operating model.

## What this MVP demonstrates

- Technology asset inventory and ownership
- Periodic access reviews and recertification
- Risk register with likelihood × impact scoring
- Control evidence tracking
- IT ticket and SLA visibility
- Role-based operating model for IT Governance Lead, Control Owner, and Auditor
- Executive dashboard with control health and risk posture
- Add-risk workflow with modal form

## Project documentation

- `docs/project-case-study.md` explains the business problem, personas, and portfolio story.
- `docs/architecture.md` documents the current MVP and target production architecture.
- `docs/control-matrix.md` provides a synthetic control and evidence matrix.

## Run locally

No build step is required. Open `index.html` in a browser, or serve the folder with any static web server:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Portfolio positioning

This is a synthetic-data demonstration. It intentionally contains no real company data, credentials, or operational records. The next development phase would add a real API, persistent database, authentication, approval workflows, audit logs, and a control mapping layer.
