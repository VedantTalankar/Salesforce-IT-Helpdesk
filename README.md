# 🚀 IT Helpdesk CRM Project (Salesforce)

This project is a custom **IT Helpdesk CRM** built on Salesforce to streamline ticket management, automate workflows, and provide a seamless interface for users and support agents. It showcases **Admin, Developer, and LWC skills** along with Apex, automation, and deployment best practices.

---

## 📅 Project Phases

### **Phase 1: Problem Understanding & Industry Analysis**
- Researched IT Helpdesk systems used in organizations.
- Identified gaps: manual ticket tracking, lack of automation, poor visibility.
- Finalized scope: A Salesforce-based IT Helpdesk with ticketing, SLAs, dashboards, and automation.

---

### **Phase 2: Org Setup & Configuration**
- Created a new Salesforce Developer Org.
- Configured company settings (fiscal year, business hours, support processes).
- Set up profiles and permission sets for **Agents, Managers, and Admins**.

---

### **Phase 3: Data Modeling & Relationships**
- Created a custom `Ticket` object.
- Key fields: Ticket Number, Priority, Status, SLA Deadline, Assigned Technician.
- Defined relationships:
  - Tickets ↔ Accounts (lookup)
  - Tickets ↔ Contacts (lookup)
- Added required fields with validation rules.

---

### **Phase 4: Process Automation (Admin)**
- Built **Flows** to auto-assign tickets to queues.
- Added **Validation Rules** for SLA deadlines.
- Created **Approval Process** for escalation to managers.

---

### **Phase 5: Apex Programming (Developer)**
- Implemented **Apex Trigger** for case routing.
- Built **Apex Class (`TicketController`)** to handle ticket creation from LWC.
- Used **SOQL** queries for SLA-based ticket tracking.

---

### **Phase 6: User Interface Development**
- Built a **Lightning Web Component (LWC)** `createTicket`.
- Features:
  - Ticket creation form with SLA Deadline.
  - User-friendly layout with validation.
  - Added to Home Page using Lightning App Builder.

---

### **Phase 7: Integration & External Access**
- Enabled **Salesforce API access**.
- Designed REST API structure for external systems to create tickets.
- Configured Connected App for secure OAuth authentication.

---

### **Phase 8: Data Management & Deployment**
- Used **Change Sets & SFDX CLI** for deployment.
- Managed metadata retrieval & deployment:
  - `sf project deploy start --source-dir force-app/main/default`
- Ensured smooth movement from Dev Org → UAT Org → Production Org.

---

### **Phase 9: Reporting, Dashboards & Security Review**
- Created Reports:
  - Tickets by Status
  - Tickets approaching SLA
- Built Manager Dashboard.
- Security Review:
  - Field-level security for sensitive data.
  - Role hierarchy access tested.

---

### **Phase 10: Final Presentation & Demo Day**
- Finalized demo with:
  - Walkthrough of ticket creation via LWC.
  - Demonstration of automation & dashboards.
  - Highlighted Apex & LWC development.
- Uploaded project to GitHub for portfolio showcase.

---

## ⚙️ Tech Stack
- **Salesforce CRM**
- **Apex (Triggers, Classes, SOQL)**
- **Lightning Web Components (LWC)**
- **Process Builder / Flows**
- **Reports & Dashboards**
- **SFDX CLI & GitHub for version control**

---

## 👨‍💻 Author
**Vedant Talankar**  
4th Year CSE | Aspiring Salesforce & Cybersecurity Engineer  

---
