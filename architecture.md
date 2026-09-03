# TechGuard Architecture

## Current MVP

```text
Browser UI
  ├── Dashboard
  ├── Asset register
  ├── Access reviews
  ├── Risk register
  ├── Control evidence
  └── IT tickets

In-memory synthetic data
  └── Modal workflows for new records
```

The first release is intentionally static so it can be demonstrated from a simple web server. It is designed around a clear operating model rather than a specific vendor product.

## Target production architecture

```text
Web client
   ↓ HTTPS / JSON API
FastAPI service ─── Audit log service
   ↓
PostgreSQL database
   ├── users and roles
   ├── assets and ownership
   ├── access reviews
   ├── risks and treatments
   ├── controls and evidence
   └── tickets and SLA events
   ↓
Notification worker → email / Teams reminders
```

## Security design decisions

- Every record has an owner and a review or due date.
- Privileged actions require a role with explicit permission.
- Access reviews are time-bound and produce an auditable decision.
- Synthetic data is used in the portfolio demo; no real company data is included.
- The future API should validate every request server-side and record create/update/delete events.
