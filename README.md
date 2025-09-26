# 🚀 Salesforce IT Helpdesk & Ticket Escalation System

[![Salesforce](https://img.shields.io/badge/Platform-Salesforce-blue)](https://www.salesforce.com/)
[![Status](https://img.shields.io/badge/Status-Completed-success)]()

---

## 📌 Project Overview
A **Salesforce-native IT Helpdesk CRM** to streamline IT support ticket management.  
It enables **ticket creation, SLA enforcement, automated assignments, reporting dashboards**, and role-based access control.

**Target Users:**
- Employees (End-users)  
- Helpdesk Agents (L1, L2, L3)  
- IT Managers / Admins  

**Key Features:**
- Lightning Web Component (LWC) for ticket submission  
- SLA enforcement using Flows  
- Automatic ticket assignment to queues  
- Feedback collection after ticket closure  
- Reporting and dashboards for managerial insights  
- Profiles and Permission Sets for security  

---

## 📅 10-Phase Project Documentation

### **Phase 1: Problem Understanding & Industry Analysis**
- Identified challenges: delayed responses, SLA breaches, no centralized tracking.  
- Defined the goal: automate ticket lifecycle, enforce SLAs, provide dashboards.  
- Analyzed target users and stakeholders to define requirements.  

### **Phase 2: Org Setup & Configuration**
- Configured Salesforce Developer Org with **Service Cloud**.  
- Enabled standard objects: Case, Contact, Knowledge.  
- Created custom objects: SLA_Rule__c, Technician__c, Feedback__c.  

### **Phase 3: Data Modeling & Relationships**
- Established relationships:
  - Ticket → Technician (Lookup)  
  - Ticket → SLA Rule (Lookup)  
  - Feedback → Case (Lookup)  
- Defined fields, picklists, and required validations.  

### **Phase 4: Process Automation (Admin)**
- **Assignment Rules**: Route tickets to L1, L2, L3 queues automatically.  
- **Escalation Rules**: Escalate tickets if SLA deadlines exceeded.  
- **Flows**:
  - SLA Deadline Calculation  
  - Feedback Collection after closure  
- Validation rules to enforce SLA Deadline and Resolution Notes.  

### **Phase 5: Apex Programming (Developer)**
- Created **Apex Controller (`TicketController`)** for LWC integration.  
- Implemented server-side validation and error handling for ticket creation.  
- Enforced security via CRUD/FLS checks and exception handling.  

### **Phase 6: User Interface Development**
- Built **`createTicket` LWC component** for ticket submission.  
- Integrated Apex Controller with LWC.  
- Customized **Lightning App Builder** pages for Home Page display.  

### **Phase 7: Integration & External Access**
- Developed **IT Helpdesk App** with navigation tabs: Tickets, Technicians, SLA Rules, Reports & Dashboards.  
- Added LWC component to Home Page.  
- Ensured access for all roles without chatbot integration.  

### **Phase 8: Data Management & Deployment**
- Packaged all metadata (objects, fields, flows, Apex, LWC) in the repository.  
- Used **Salesforce CLI** for deployment to the org.  
- Verified functionality post-deployment.  

### **Phase 9: Reporting, Dashboards & Security Review**
- **Report**: Number of tickets assigned to each technician.  
- **Dashboard**: Circular (donut) chart visualizing technician workload.  
- Reviewed **Profiles, Roles, and Permission Sets** to ensure least-privilege access.  

### **Phase 10: Final Presentation & Demo Day**
- Demonstrated ticket creation via LWC, SLA enforcement, and dashboards.  
- Uploaded project to **GitHub** with README and documentation.  
- Showcased the end-to-end workflow to evaluators, highlighting technical depth and practical relevance.  

---

## ⚙️ Installation & Setup

1. **Clone the Repository**
```bash
git clone https://github.com/VedantTalankar/Salesforce-IT-Helpdesk.git
cd Salesforce-IT-Helpdesk
