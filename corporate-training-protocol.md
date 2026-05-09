# Corporate AI Training Protocol
### Austin AI School — Enterprise Training Delivery Framework
**Version 2.1 | 2026**

> This protocol has been developed from training programs delivered across 240+ locations to 10,000+ professionals. It represents a battle-tested, repeatable framework for planning, delivering, and measuring corporate AI training at scale.

---

## Table of Contents

1. [Discovery & Needs Assessment (Week 1)](#1-discovery--needs-assessment-week-1)
2. [Program Design (Week 2)](#2-program-design-week-2)
3. [Pre-Training Setup (Week 3)](#3-pre-training-setup-week-3)
4. [Training Delivery (Week 4+)](#4-training-delivery-week-4)
5. [Post-Training & Reinforcement](#5-post-training--reinforcement)
6. [Measurement & Reporting](#6-measurement--reporting)
7. [Scaling & Repeatability](#7-scaling--repeatability)

---

## 1. Discovery & Needs Assessment (Week 1)

### 1.1 Stakeholder Interview Template

Conduct separate interviews with three stakeholder tiers. Allocate 45–60 minutes per session.

#### C-Suite / Executive Sponsors (5–7 people)

| # | Question |
|---|----------|
| 1 | What are your top 3 strategic priorities for the next 12 months, and where does AI fit within them? |
| 2 | What does a successful AI training program look like to you? What outcomes would justify the investment? |
| 3 | What is your current annual budget allocation for employee training and development? |
| 4 | Have you attempted any AI initiatives previously? What worked and what didn't? |
| 5 | What competitive pressures are driving your interest in AI adoption? |
| 6 | How do you currently measure employee productivity, and where do you see the biggest inefficiency gaps? |
| 7 | What is your risk tolerance for AI experimentation — conservative, moderate, or aggressive? |
| 8 | Are there regulatory or compliance constraints we need to design around (HIPAA, SOX, GDPR, etc.)? |
| 9 | What is your target timeline for seeing measurable ROI from this investment? |
| 10 | Who are the internal champions and potential resistors for this initiative? |

#### Department Heads / Managers (8–12 people across functions)

| # | Question |
|---|----------|
| 11 | Walk me through your team's typical workflow — what takes the most time and feels the most repetitive? |
| 12 | What tools and software does your team use daily? Which processes still involve manual data entry, copy-paste, or spreadsheet wrangling? |
| 13 | If your team could automate one task tomorrow, what would have the biggest impact? |
| 14 | What is your team's current comfort level with technology change on a 1–10 scale? |
| 15 | How much time per week could you realistically allocate for training without disrupting operations? |

#### End Users / Individual Contributors (15–20 people, diverse roles)

| # | Question |
|---|----------|
| 16 | Have you used any AI tools (ChatGPT, Copilot, Gemini, etc.) in your personal or professional life? |
| 17 | On a scale of 1–5, how confident are you that AI will positively impact your job? |
| 18 | What part of your daily work do you wish a smart assistant could handle for you? |
| 19 | What concerns do you have about AI in the workplace (job security, accuracy, privacy)? |
| 20 | How do you prefer to learn new skills — video, live instruction, hands-on labs, self-paced reading, or peer learning? |

---

### 1.2 AI Maturity Assessment

Rate the organization across 8 dimensions using the 5-level scale below. The composite score determines the recommended starting point.

#### Maturity Levels

| Level | Label | Score | Description |
|-------|-------|-------|-------------|
| 1 | **Unaware** | 0–10 | No formal AI strategy. Employees may use AI tools ad hoc without organizational knowledge. No policies, no budget, no designated owner. |
| 2 | **Exploring** | 11–25 | Leadership is curious. A few individuals are experimenting. No formal training, no governance, no success metrics. Budget is exploratory only. |
| 3 | **Experimenting** | 26–50 | Pilot projects underway in 1–2 departments. Some employees have received basic training. AI use policy drafted but not enforced. ROI is anecdotal. |
| 4 | **Implementing** | 51–75 | AI tools integrated into multiple workflows. Formal training program exists. Governance policies enforced. Measurable productivity improvements documented. |
| 5 | **Optimizing** | 76–100 | AI is a core competency. Continuous learning culture established. Custom models/agents deployed. AI strategy directly tied to business KPIs. Innovation team in place. |

#### Scoring Dimensions (rate each 0–12.5, total = 100)

| Dimension | Questions to Evaluate | Score |
|-----------|----------------------|-------|
| Leadership & Vision | Is there executive sponsorship? Published AI strategy? | ___ / 12.5 |
| Talent & Skills | Do employees have AI skills? Is there a training program? | ___ / 12.5 |
| Data Readiness | Is data accessible, clean, governed, and documented? | ___ / 12.5 |
| Technology Infrastructure | Are cloud platforms, APIs, and dev environments available? | ___ / 12.5 |
| Process Integration | Are workflows AI-augmented? Are there documented use cases? | ___ / 12.5 |
| Governance & Ethics | Are there AI use policies, bias review processes, privacy controls? | ___ / 12.5 |
| Culture & Change Readiness | Is there appetite for change? Is experimentation encouraged? | ___ / 12.5 |
| Measurement & ROI | Are AI outcomes tracked? Is there a dashboard or reporting cadence? | ___ / 12.5 |
| **TOTAL** | | ___ / 100 |

---

### 1.3 Skills Gap Analysis Matrix

Complete one row per role. Use the scoring key: **1** = No knowledge, **2** = Awareness only, **3** = Can use with guidance, **4** = Independent proficiency, **5** = Can teach others.

| Role | AI Fundamentals | Prompt Engineering | Data Literacy | Tool Proficiency | Workflow Automation | AI Ethics & Policy | Current Avg | Target Avg | Gap |
|------|----------------|-------------------|---------------|-----------------|---------------------|-------------------|-------------|------------|-----|
| C-Suite Executive | ___ | ___ | ___ | ___ | ___ | ___ | ___ | 3.5 | ___ |
| VP / Director | ___ | ___ | ___ | ___ | ___ | ___ | ___ | 3.5 | ___ |
| Department Manager | ___ | ___ | ___ | ___ | ___ | ___ | ___ | 4.0 | ___ |
| Project Manager | ___ | ___ | ___ | ___ | ___ | ___ | ___ | 4.0 | ___ |
| Software Engineer | ___ | ___ | ___ | ___ | ___ | ___ | ___ | 5.0 | ___ |
| Data Analyst | ___ | ___ | ___ | ___ | ___ | ___ | ___ | 5.0 | ___ |
| Marketing Specialist | ___ | ___ | ___ | ___ | ___ | ___ | ___ | 4.0 | ___ |
| Sales Representative | ___ | ___ | ___ | ___ | ___ | ___ | ___ | 3.5 | ___ |
| Customer Support Rep | ___ | ___ | ___ | ___ | ___ | ___ | ___ | 4.0 | ___ |
| HR / People Ops | ___ | ___ | ___ | ___ | ___ | ___ | ___ | 3.5 | ___ |
| Finance / Accounting | ___ | ___ | ___ | ___ | ___ | ___ | ___ | 3.5 | ___ |
| Legal / Compliance | ___ | ___ | ___ | ___ | ___ | ___ | ___ | 3.0 | ___ |
| Operations / Logistics | ___ | ___ | ___ | ___ | ___ | ___ | ___ | 4.0 | ___ |

---

### 1.4 Technology Stack Audit Checklist

Audit the client's current technology environment. Check all that apply:

#### Cloud & Infrastructure
- [ ] Cloud provider identified (AWS / Azure / GCP / Other)
- [ ] SSO / identity provider in place (Okta, Azure AD, etc.)
- [ ] VPN or secure access for remote participants
- [ ] API gateway or management layer available
- [ ] Container orchestration capability (Docker, Kubernetes)

#### Data & Analytics
- [ ] Centralized data warehouse or lake (Snowflake, BigQuery, Redshift)
- [ ] Data governance policy documented
- [ ] ETL / data pipeline tooling in place
- [ ] BI / analytics platform (Tableau, Power BI, Looker)
- [ ] Data access permissions model documented

#### AI & ML Tooling
- [ ] LLM API access (OpenAI, Anthropic, Google, Azure OpenAI)
- [ ] AI coding assistants deployed (Copilot, Cursor, Cody)
- [ ] No-code/low-code AI platforms (Zapier AI, Make, Microsoft Power Automate)
- [ ] Vector database available (Pinecone, Weaviate, ChromaDB)
- [ ] Model hosting / inference infrastructure

#### Collaboration & Productivity
- [ ] Office suite identified (Google Workspace / Microsoft 365)
- [ ] Project management tool (Jira, Asana, Monday, Linear)
- [ ] Communication platform (Slack, Teams, Discord)
- [ ] Knowledge base or wiki (Notion, Confluence, SharePoint)
- [ ] LMS or training platform (existing or needed)

#### Security & Compliance
- [ ] AI acceptable use policy exists
- [ ] Data classification policy (what can/cannot be sent to AI)
- [ ] Vendor security review process
- [ ] Audit logging for AI tool usage
- [ ] Incident response plan includes AI-related scenarios

---

### 1.5 Business Goals Alignment Worksheet

Map each business goal to AI training outcomes:

| Business Goal | AI Capability Needed | Training Track | Success Metric | Timeline |
|--------------|---------------------|---------------|----------------|----------|
| Reduce customer response time by 40% | AI-powered support automation | End-User + Technical | Avg. response time (hrs) | 90 days |
| Cut content production costs by 30% | Generative AI for marketing | End-User | Cost per content piece ($) | 60 days |
| Accelerate software delivery by 25% | AI coding assistants, AI testing | Technical | Sprint velocity (story points) | 90 days |
| Improve sales forecast accuracy to 90% | Predictive analytics, AI CRM | Manager + Technical | Forecast accuracy (%) | 120 days |
| Reduce compliance review time by 50% | Document AI, policy automation | End-User + Manager | Hours per review cycle | 90 days |
| _[Client Goal 1]_ | | | | |
| _[Client Goal 2]_ | | | | |
| _[Client Goal 3]_ | | | | |

---

### 1.6 ROI Projection Model

#### Formula

```
ROI (%) = [(Total Benefits − Total Costs) / Total Costs] × 100
```

#### Cost Components

| Cost Item | Calculation | Example |
|-----------|------------|---------|
| Training delivery fees | Per-person rate × headcount | $1,500 × 50 = $75,000 |
| Employee time (opportunity cost) | Avg hourly rate × training hours × headcount | $65/hr × 16 hrs × 50 = $52,000 |
| Technology / tool licenses | Per-seat cost × 12 months | $30/seat × 50 × 12 = $18,000 |
| Internal coordination | Project manager hours × rate | 80 hrs × $85/hr = $6,800 |
| **Total Investment** | | **$151,800** |

#### Benefit Components

| Benefit Item | Calculation | Example |
|-------------|------------|---------|
| Time saved per employee per week | Hours saved × hourly rate × 52 weeks × headcount | 3 hrs × $65 × 52 × 50 = $507,000 |
| Error reduction | Error cost × error reduction % × frequency | $500 × 40% × 200/yr = $40,000 |
| Revenue acceleration | Faster deal cycles × avg deal value × close rate improvement | 15% faster × $50K × 5% = $37,500 |
| Reduced vendor/contractor spend | Current spend × replacement % | $200K × 30% = $60,000 |
| **Total Annual Benefits** | | **$644,500** |

#### ROI Calculation

```
ROI = [($644,500 − $151,800) / $151,800] × 100 = 324%
Payback period = $151,800 / ($644,500 / 12) = 2.8 months
```

---

## 2. Program Design (Week 2)

### 2.1 Training Tracks

#### Track A: Executive Track (1 Day / 6 Hours)

**Audience:** C-suite, VPs, Directors, Board Members
**Class Size:** 8–15 participants
**Prerequisites:** None

| Time | Module | Content | Format |
|------|--------|---------|--------|
| 9:00–10:00 | The AI Landscape | Current state of AI, key terminology demystified, what's hype vs. real. Market trends and competitor analysis. | Lecture + Discussion |
| 10:00–10:45 | AI Strategy Frameworks | Build vs. buy decisions, vendor evaluation criteria, total cost of ownership models. | Case Study Workshop |
| 10:45–11:00 | Break | | |
| 11:00–12:00 | Hands-On Executive Demo | Live demonstrations of 5 enterprise AI tools. Executives try real business scenarios with ChatGPT, Copilot, and industry-specific tools. | Guided Hands-On |
| 12:00–1:00 | Lunch | | |
| 1:00–2:00 | AI Governance & Risk | AI policy creation, bias/fairness considerations, regulatory landscape, data privacy, IP ownership. | Workshop |
| 2:00–2:45 | ROI & Business Case Building | How to model AI ROI, identify quick wins, build internal business cases for AI investment. | Template Exercise |
| 2:45–3:00 | Break | | |
| 3:00–3:45 | Change Management for AI | Leading AI transformation, managing employee concerns, communication strategies. | Panel Discussion |
| 3:45–4:30 | Action Planning | Each executive creates a 90-day AI action plan for their department. | Individual + Group |
| 4:30–5:00 | Q&A and Wrap-Up | Open discussion, next steps, resources provided. | Open Forum |

**Deliverables:** 90-day AI Action Plan, Vendor Evaluation Scorecard, AI Policy Draft Template

---

#### Track B: Manager Track (2 Days / 14 Hours)

**Audience:** Department managers, team leads, project managers
**Class Size:** 12–20 participants
**Prerequisites:** Basic familiarity with AI concepts (pre-reading provided)

**Day 1: Understanding & Planning**

| Time | Module | Content |
|------|--------|---------|
| 9:00–10:30 | AI Foundations for Leaders | How LLMs, computer vision, and predictive models work at a conceptual level. |
| 10:45–12:00 | Identifying AI Opportunities | Framework for finding high-ROI AI use cases within your department. Hands-on use case mapping exercise. |
| 1:00–2:30 | Tool Evaluation & Selection | Hands-on comparison of 8+ AI tools. Managers evaluate and score tools against department needs. |
| 2:45–4:00 | Implementation Planning | Project scoping, timeline estimation, resource requirements, risk identification. |
| 4:00–5:00 | Change Management Deep Dive | Resistance patterns, communication templates, stakeholder management. |

**Day 2: Execution & Enablement**

| Time | Module | Content |
|------|--------|---------|
| 9:00–10:30 | Prompt Engineering for Managers | Advanced prompting techniques for business use cases. Building prompt libraries for your team. |
| 10:45–12:00 | Workflow Automation Workshop | Hands-on building of 3 automated workflows using no-code AI tools. |
| 1:00–2:30 | Team Enablement Strategies | How to train your team, create adoption incentives, measure usage, and build an AI culture. |
| 2:45–4:00 | Measuring AI Impact | Setting KPIs, building dashboards, reporting to leadership. |
| 4:00–5:00 | Capstone: Department AI Roadmap | Each manager presents a 6-month AI adoption roadmap for their team. |

**Deliverables:** Department AI Roadmap, Prompt Library Starter Kit, AI Adoption Measurement Dashboard Template

---

#### Track C: Technical Track (5 Days / 35 Hours)

**Audience:** Software engineers, data analysts, data scientists, IT professionals
**Class Size:** 10–16 participants
**Prerequisites:** Basic programming proficiency (Python preferred), command line familiarity

**Day 1: AI Foundations & Prompt Engineering**
- How transformer architectures work (attention mechanisms, tokenization)
- Prompt engineering: zero-shot, few-shot, chain-of-thought, system prompts
- Structured output generation (JSON mode, function calling)
- Lab: Build a multi-turn conversational assistant with system prompt optimization

**Day 2: API Integration & Application Development**
- OpenAI, Anthropic, and Google APIs — authentication, rate limiting, cost management
- Building AI-powered applications with Python (FastAPI + LLM APIs)
- Streaming responses, error handling, retry logic
- Lab: Build a full-stack AI application with a web UI

**Day 3: RAG & Knowledge Systems**
- Retrieval-Augmented Generation architecture
- Document chunking strategies, embedding models, vector databases
- Building a production RAG pipeline (LangChain / LlamaIndex)
- Lab: Build a company knowledge base Q&A system using client's actual documents

**Day 4: AI Agents & Autonomous Systems**
- Agent architectures: ReAct, Plan-and-Execute, multi-agent systems
- Tool use and function calling
- Building agents with LangGraph and CrewAI
- Lab: Build a multi-agent system that researches, analyzes, and reports

**Day 5: Deployment, Security & Production**
- Model deployment: API hosting, containerization, scaling
- Security: prompt injection prevention, output filtering, PII detection
- Cost optimization: caching, model selection, token management
- Monitoring and observability for AI systems
- Lab: Deploy a production-ready AI application with monitoring

**Deliverables:** 5 working AI applications, Production deployment playbook, Code repository with all labs

---

#### Track D: End-User Track (Half Day / 3.5 Hours)

**Audience:** All employees — sales, marketing, HR, finance, operations, support
**Class Size:** 20–30 participants
**Prerequisites:** None

| Time | Module | Content |
|------|--------|---------|
| 9:00–9:30 | Welcome & AI at Our Company | Why we're investing in AI, what it means for your role, AI use policy overview. |
| 9:30–10:15 | AI Tools in Action | Live demos of approved AI tools. See real examples from your industry and role. |
| 10:15–10:30 | Break | |
| 10:30–11:15 | Prompt Engineering Essentials | The CRAFT framework: Context, Role, Action, Format, Tone. Practice writing effective prompts. |
| 11:15–12:00 | Hands-On Lab: Your First AI Workflow | Participants complete 3 guided exercises using AI for tasks relevant to their actual job. |
| 12:00–12:30 | AI Ethics, Policy & Q&A | What you can/can't do with AI at work. Data privacy. When to trust AI output. Open Q&A. |

**Deliverables:** Quick-reference prompt card, 10 role-specific prompt templates, AI use policy acknowledgment

---

### 2.2 Industry Customization Matrix

| Module | Healthcare | Finance | Legal | Manufacturing | Retail |
|--------|-----------|---------|-------|--------------|--------|
| Use Cases | Clinical notes summarization, patient triage, drug interaction checks, radiology AI | Fraud detection, risk modeling, algorithmic trading, regulatory reporting | Contract analysis, legal research, e-discovery, compliance monitoring | Predictive maintenance, quality control, supply chain optimization, safety monitoring | Demand forecasting, personalization, inventory optimization, customer service automation |
| Compliance Focus | HIPAA, FDA 21 CFR Part 11, clinical trial regulations | SOX, SEC regulations, FINRA, PCI-DSS, Basel III | Attorney-client privilege, court e-filing rules, bar ethics opinions | OSHA, ISO 9001, FDA (food), EPA regulations | PCI-DSS, CCPA/GDPR, FTC advertising rules |
| Sample Data | De-identified patient records, clinical trial data, medical imaging | Stock prices, transaction logs, financial statements, credit scores | Contract corpus, case law, regulatory filings | Sensor readings, maintenance logs, QC images, supply chain data | Transaction data, customer reviews, inventory logs, web analytics |
| Tools Emphasized | Epic AI, ambient scribes, medical coding AI | Bloomberg GPT, Kensho, Palantir, Alteryx | Harvey AI, CoCounsel, Westlaw AI | Siemens MindSphere, PTC ThingWorx, Augury | Shopify AI, Dynamic Yield, Salesforce Einstein |
| Capstone Project | Build a clinical decision support chatbot | Build a risk assessment automation pipeline | Build a contract review and extraction system | Build a predictive maintenance alert system | Build a customer service AI with product recommendations |

---

### 2.3 Learning Objectives — Bloom's Taxonomy Mapping

| Level | Verb | Executive Track | Manager Track | Technical Track | End-User Track |
|-------|------|----------------|---------------|-----------------|---------------|
| **Remember** | Define, List, Recall | Define 10 key AI terms accurately | List 5 AI use case categories | Recall transformer architecture components | Define AI, LLM, prompt, and hallucination |
| **Understand** | Explain, Summarize | Explain AI's strategic impact on their industry | Summarize change management principles for AI | Explain how RAG systems retrieve and generate answers | Summarize the company's AI use policy |
| **Apply** | Use, Implement | Use a vendor evaluation scorecard | Implement a department AI opportunity audit | Build a working API integration with error handling | Use the CRAFT framework to write effective prompts |
| **Analyze** | Compare, Evaluate | Analyze competitor AI strategies | Compare AI tools against department requirements | Analyze embedding quality and retrieval accuracy | Analyze AI output for accuracy and bias |
| **Evaluate** | Justify, Assess | Justify AI investment with ROI projections | Assess team readiness and create an adoption plan | Evaluate model performance with quantitative metrics | Evaluate when to use AI vs. manual approaches |
| **Create** | Design, Build | Design a 90-day AI action plan | Create a 6-month department AI roadmap | Build and deploy a production AI application | Create 5 custom prompts for daily workflows |

---

### 2.4 Delivery Format Decision Tree

```
START: How many participants?
│
├─ < 15 participants
│   ├─ All in same location? → IN-PERSON WORKSHOP
│   └─ Distributed? → LIVE VIRTUAL (Zoom/Teams)
│
├─ 15–50 participants
│   ├─ Same timezone (±2 hrs)? → LIVE VIRTUAL with breakout rooms
│   └─ Multiple timezones?
│       ├─ Budget allows multiple sessions? → MULTIPLE LIVE COHORTS
│       └─ Budget constrained? → HYBRID (recorded lectures + live labs)
│
├─ 50–200 participants
│   ├─ Same office/campus? → IN-PERSON (large venue) + breakout labs
│   └─ Distributed?
│       ├─ Staggered rollout OK? → COHORT MODEL (4–6 weeks, 20/cohort)
│       └─ Need simultaneous? → LIVE VIRTUAL + self-paced pre-work
│
└─ 200+ participants
    └─ BLENDED: Self-paced LMS modules + live virtual workshops + in-person capstone
```

---

### 2.5 Resource Requirements Checklist

#### For In-Person Delivery
- [ ] Training room with projector/large display and whiteboard
- [ ] High-speed WiFi (minimum 100 Mbps, tested with full participant load)
- [ ] Power strips / charging stations for all participants
- [ ] Each participant has a laptop with admin/install privileges
- [ ] Printed materials: agenda, quick-reference cards, exercise packets
- [ ] Catering: AM snacks, lunch, PM snacks, beverages
- [ ] A/V: wireless presenter, lapel mic for rooms > 20 people
- [ ] Backup mobile hotspot

#### For Virtual Delivery
- [ ] Video conferencing platform with breakout room capability
- [ ] Shared coding environment (GitHub Codespaces, Replit, or Google Colab)
- [ ] Digital whiteboard (Miro, FigJam)
- [ ] Chat channel for Q&A and resource sharing (Slack/Teams)
- [ ] Recording capability and consent
- [ ] Participant tech check scheduled 48 hours before

#### For All Deliveries
- [ ] Lead instructor (certified, 3+ deliveries of this content)
- [ ] Teaching assistant (1 per 12 participants for technical tracks)
- [ ] Pre-configured API keys with spending limits ($5–$20/participant)
- [ ] Sample datasets relevant to client's industry
- [ ] Git repository with all lab starter code
- [ ] Post-training resource package (links, templates, recordings)

---

## 3. Pre-Training Setup (Week 3)

### 3.1 Technical Environment Checklist

Complete all items minimum 5 business days before training start.

#### API Keys & Accounts
- [ ] OpenAI API key provisioned (spending limit: $__/participant)
- [ ] Anthropic API key provisioned (if applicable)
- [ ] Google AI Studio access (if applicable)
- [ ] API keys tested and verified working
- [ ] Rate limits confirmed sufficient for class size

#### Development Environment
- [ ] GitHub organization or repository created
- [ ] Codespaces / cloud IDE configured and tested
- [ ] Python 3.11+ environment with required packages pre-installed
- [ ] requirements.txt verified — all dependencies install cleanly
- [ ] Sample code repository cloned and tested end-to-end
- [ ] Database instances provisioned (if applicable)

#### Data & Content
- [ ] Training datasets uploaded to shared location
- [ ] Datasets tested for completeness and format correctness
- [ ] Sample documents for RAG exercises prepared
- [ ] Client-specific use case examples prepared
- [ ] All exercises tested with current API versions (within 48 hrs)

#### Access & Security
- [ ] Participant accounts created in all required platforms
- [ ] SSO integration tested (if applicable)
- [ ] VPN access confirmed (if required)
- [ ] AI use policy signed by all participants
- [ ] Data handling agreements in place for any client data used in training

#### Backup Plans
- [ ] Offline versions of all slide decks downloaded
- [ ] Pre-recorded demo videos for critical sections
- [ ] Alternative exercises that don't require API access
- [ ] Backup API keys from secondary provider
- [ ] Local LLM option ready (Ollama + Llama 3) for network failures

---

### 3.2 Pre-Assessment Quiz (10 Sample Questions)

**Instructions:** This quiz establishes your starting point. Answer honestly — there's no penalty for wrong answers. Results help us customize the training to your needs.

**Q1.** What does "LLM" stand for?
- a) Large Language Model ✓
- b) Linear Learning Machine
- c) Logical Linguistic Method
- d) I'm not sure

**Q2.** Which of the following is an example of generative AI?
- a) A spam filter
- b) ChatGPT writing an email draft ✓
- c) A thermostat adjusting temperature
- d) A calculator app

**Q3.** What is "prompt engineering"?
- a) Building hardware for AI systems
- b) Crafting effective instructions to get better AI outputs ✓
- c) Programming in Python
- d) Designing user interfaces

**Q4.** What is a "hallucination" in the context of AI?
- a) When AI generates plausible but incorrect information ✓
- b) When the AI refuses to answer
- c) When the screen displays visual glitches
- d) When the model runs out of memory

**Q5.** Which of these is a potential risk of using AI in business?
- a) Accidentally sharing confidential data with an AI service ✓
- b) AI working too slowly
- c) AI making your computer run out of storage
- d) AI replacing all electricity

**Q6.** What is RAG (Retrieval-Augmented Generation)?
- a) A type of AI image filter
- b) A technique that gives AI access to specific documents to improve accuracy ✓
- c) A programming language
- d) I'm not sure

**Q7.** Which statement about AI-generated content is most accurate?
- a) AI output is always accurate and can be used without review
- b) AI output should always be reviewed by a human before use ✓
- c) AI output is always wrong and unreliable
- d) AI can only generate text, not other content types

**Q8.** An AI "agent" is best described as:
- a) A human who manages AI systems
- b) An AI system that can take actions and make decisions to complete tasks ✓
- c) A customer service chatbot that only answers FAQs
- d) I'm not sure

**Q9.** Your company's AI use policy is important because:
- a) It prevents all AI usage in the workplace
- b) It provides guidelines on what data can be shared with AI and how to use it responsibly ✓
- c) It only applies to the IT department
- d) It's just a formality with no real impact

**Q10.** Which approach would likely give you the best results when using an AI assistant?
- a) "Fix this" (vague, no context)
- b) "You are an expert financial analyst. Review this Q3 report and identify the top 3 risks, with supporting data from the report." ✓
- c) "Do everything for me"
- d) All approaches work equally well

**Scoring:** 8–10 correct = Advanced (may skip foundational modules) | 5–7 = Intermediate | 0–4 = Foundational (full program recommended)

---

### 3.3 LMS Configuration Checklist

- [ ] LMS instance created (or client LMS access granted)
- [ ] Course shell built with correct module structure
- [ ] All training materials uploaded (slides, handouts, lab guides)
- [ ] Pre-assessment quiz configured and tested
- [ ] Post-assessment quiz configured and tested
- [ ] Discussion forums created for each module
- [ ] Completion tracking enabled
- [ ] Certificate template uploaded and auto-issuance configured
- [ ] Participant roster imported with correct roles/permissions
- [ ] Email notifications configured (enrollment confirmation, reminders, completions)
- [ ] Mobile access tested (iOS and Android)
- [ ] SSO integration tested with client's identity provider
- [ ] Accessibility compliance verified (WCAG 2.1 AA)
- [ ] Reporting dashboards configured for client admins
- [ ] Backup export of all content created

---

### 3.4 Communication Timeline

| Timing | Channel | Audience | Message |
|--------|---------|----------|---------|
| T-14 days | Email | All participants | **Enrollment Confirmation** — Welcome, training dates/times, logistics, pre-work instructions, calendar invite attached |
| T-14 days | Email | Managers | **Manager Briefing** — What their reports will learn, time commitment, how to support them |
| T-10 days | LMS | All participants | **Pre-Assessment Quiz** — "Complete by T-7 to help us customize the training" |
| T-7 days | Email | All participants | **Technical Setup Instructions** — Account creation, software installation, environment testing. Include helpdesk contact. |
| T-5 days | Email | All participants | **Pre-Reading Materials** — Short articles/videos (< 30 min total) to build foundational context |
| T-3 days | Slack/Teams | All participants | **Welcome to the Training Channel** — Introductions, icebreaker question, tech check reminder |
| T-2 days | Email | All participants | **Tech Check Reminder** — "Have you tested your setup? Here's the checklist. Contact support if stuck." |
| T-1 day | Email | All participants | **Final Reminder** — Tomorrow's agenda, start time, what to bring, parking/login details |
| T-0 (morning) | Slack/Teams | All participants | **Day-of Welcome** — "We're live in 30 minutes! Here's the Zoom link / room number" |

---

### 3.5 Participant Welcome Packet

Distribute digitally (PDF) at T-14 days:

1. **Welcome letter** from the lead instructor (personalized with company name)
2. **Training overview** — dates, times, location/links, objectives
3. **Agenda** — full schedule for all training days
4. **Pre-work checklist** — what to complete before Day 1
5. **Technology setup guide** — step-by-step with screenshots
6. **AI use policy acknowledgment** — review and sign before Day 1
7. **FAQ** — 10 most common questions about the training
8. **Instructor bio** — credentials, experience, photo
9. **Learning objectives** — what you'll be able to do after training
10. **Resource list** — recommended books, channels, communities for continued learning

---

## 4. Training Delivery (Week 4+)

### 4.1 Session Structure

Every training session follows the **30/70 Rule**: 30% instructor-led content, 70% hands-on practice.

#### Standard 90-Minute Block

| Segment | Duration | Activity | Purpose |
|---------|----------|----------|---------|
| Opening | 5 min | Quick poll or quiz question | Activate prior knowledge |
| Concept | 15 min | Instructor presentation with live demos | Deliver core content |
| Guided Practice | 20 min | Instructor-led walkthrough — participants follow along | Bridge theory to practice |
| Independent Lab | 35 min | Participants work on exercises (solo or pairs) | Build real skills |
| Debrief | 10 min | Review solutions, discuss challenges, preview next topic | Consolidate learning |
| Checkpoint | 5 min | Quick 3-question check + "muddiest point" | Verify understanding |

---

### 4.2 Facilitation Guidelines

#### Do's ✅
1. **Start every session with a real-world story** that connects AI to the participants' actual work
2. **Use participants' names** — learn them before Day 1 from the roster
3. **Circulate during labs** — check in with every participant at least once per exercise
4. **Celebrate small wins** — publicly acknowledge when someone gets a creative result
5. **Adjust pace based on the room** — if 50%+ are struggling, slow down; if 80%+ finish early, add stretch goals
6. **Use the "I do, we do, you do" model** for complex technical concepts
7. **Provide multiple difficulty levels** for labs (Standard, Advanced, Expert Challenge)
8. **Document good questions** and create an FAQ for the cohort
9. **Take a break every 75–90 minutes** — no exceptions
10. **End each day with a 2-minute "wins and wishes"** roundtable

#### Don'ts ❌
1. **Don't read slides verbatim** — slides are visual aids, not scripts
2. **Don't skip the hands-on labs** to "cover more content" — labs are the learning
3. **Don't assume everyone is at the same level** — always provide scaffolding
4. **Don't dismiss "basic" questions** — they often reveal gaps the whole class shares
5. **Don't let one participant dominate discussion** — use structured turn-taking
6. **Don't troubleshoot one person's issue for 10+ minutes** in front of the class — use TAs or break time
7. **Don't use jargon without defining it first** — even technical audiences appreciate clarity
8. **Don't go over time** — respect the schedule, people have other commitments
9. **Don't ignore the chat** (virtual) — assign a TA to monitor and surface questions
10. **Don't present outdated demos** — verify all tools and APIs within 48 hours of delivery

---

### 4.3 Lab Exercise Framework

Use this template for every lab exercise:

```
============================================
LAB [NUMBER]: [TITLE]
============================================

OBJECTIVE:
[1-2 sentences: what the participant will build/accomplish]

ESTIMATED TIME: [XX] minutes

DIFFICULTY: ☐ Standard  ☐ Advanced  ☐ Expert Challenge

PREREQUISITES:
- [Completed Lab X]
- [API key configured]
- [Specific tool installed]

SCENARIO:
[2-3 sentences setting a realistic business context]
Example: "Your marketing team needs to generate personalized
email campaigns for 5 customer segments. Build a prompt chain
that takes a segment profile and generates subject line,
email body, and CTA — maintaining brand voice throughout."

STEP-BY-STEP INSTRUCTIONS:
1. [First step with specific commands/actions]
2. [Second step]
3. [Continue...]

EXPECTED OUTPUT:
[Description or screenshot of what success looks like]

STRETCH GOALS (optional):
- [Additional challenge for fast finishers]
- [Extended feature or optimization]

COMMON ISSUES:
- Issue: [description] → Fix: [solution]
- Issue: [description] → Fix: [solution]

SOLUTION CODE / REFERENCE:
[Available in /solutions/lab-[number]/ — only check after attempting]
============================================
```

---

### 4.4 Virtual Delivery Best Practices

1. **Cameras on (encouraged, not required)** — lead by example with your own camera on
2. **Use breakout rooms for every lab** — groups of 2–3 for pair programming, 4–5 for discussions
3. **Share a persistent "parking lot" doc** (Google Doc or Notion page) for questions that need follow-up
4. **Use polls every 20 minutes** to maintain engagement and check comprehension
5. **Have a co-facilitator/TA** monitoring chat at all times
6. **Provide pre-configured cloud environments** — never waste training time on local setup issues
7. **Record all sessions** (with consent) and share within 24 hours
8. **Use a 50-minute hour** — end 10 minutes early each hour for bio breaks and screen rest
9. **Start each morning with a 5-minute informal check-in** — build community
10. **Use annotation tools** to highlight code on screen while explaining
11. **Create a dedicated Slack/Teams channel** for real-time troubleshooting during labs
12. **Send a 2-minute video recap** at the end of each day summarizing key takeaways
13. **Have participants share their screens** during exercises — normalize showing work-in-progress
14. **Use timers visible to everyone** for lab exercises — create gentle urgency
15. **Alternate between instructor-led and participant-led demos** — let learners teach back

---

### 4.5 Real-Time Assessment Checkpoint Rubric

Use after each major module. Takes 3–5 minutes.

| Criteria | Exceeds (3) | Meets (2) | Developing (1) | Not Yet (0) |
|----------|-------------|-----------|-----------------|-------------|
| **Concept Understanding** | Can explain the concept to others using original examples | Can correctly describe the concept and its purpose | Can recognize the concept but struggles to explain it | Cannot identify or describe the concept |
| **Tool Proficiency** | Uses the tool efficiently with shortcuts and optimizations | Can complete required tasks with the tool independently | Can use the tool with step-by-step guidance | Cannot operate the tool even with assistance |
| **Problem Solving** | Identifies creative or novel approaches to the exercise | Solves the exercise using taught methods | Partially completes the exercise with help | Cannot make meaningful progress |
| **Output Quality** | Output exceeds requirements — production-ready quality | Output meets all stated requirements | Output is partially complete or contains errors | No usable output produced |

**Score Interpretation:**
- 10–12: Ready to advance — assign stretch goals
- 7–9: On track — continue with standard curriculum
- 4–6: Needs support — pair with advanced learner, provide extra practice
- 0–3: Intervention needed — 1-on-1 TA support, modified exercises

---

### 4.6 Troubleshooting Playbook

| # | Issue | Symptoms | Fix |
|---|-------|----------|-----|
| 1 | **API key not working** | 401 Unauthorized error | Verify key is correct (no trailing spaces). Check if billing is set up on the API account. Regenerate key if needed. Have backup keys ready. |
| 2 | **Rate limit exceeded** | 429 Too Many Requests | Reduce class to sequential (not simultaneous) API calls. Switch to a lower-traffic model (gpt-4o-mini). Use pre-generated outputs for demo portions. |
| 3 | **Python package conflicts** | ImportError, version mismatch | Use pre-built virtual environments. `pip install -r requirements.txt --force-reinstall`. Switch to cloud IDE (Codespaces) as fallback. |
| 4 | **Slow internet / high latency** | Timeouts, frozen screens | Switch to mobile hotspot. Reduce video quality. Use pre-downloaded materials. Have offline exercises ready. |
| 5 | **Participant can't access LMS** | Login failures, 403 errors | Verify email address matches enrollment. Reset password. Check SSO configuration. Have direct-download links as backup. |
| 6 | **AI model returns unexpected results** | Hallucinations, wrong format | Explain this is a teaching moment about AI limitations. Adjust temperature settings. Add more specific instructions to the prompt. |
| 7 | **Participant far behind the group** | Not completing labs, visibly frustrated | Assign TA for 1-on-1 support. Provide completed starter code for current step. Pair with supportive advanced learner. |
| 8 | **Participant far ahead of the group** | Finishing labs in half the time, disengaged | Assign stretch goals. Ask them to help others (peer teaching). Provide advanced challenges. Consider them for TA role in future cohorts. |
| 9 | **Audio/video issues (virtual)** | Echo, can't hear, frozen video | Standard troubleshooting: headphones, restart browser, leave/rejoin. Provide phone dial-in backup. Chat-based participation as last resort. |
| 10 | **Participant resistance / skepticism** | "AI will take my job," "This is just hype" | Acknowledge concerns genuinely. Share data on AI as augmentation vs. replacement. Focus on concrete productivity gains they'll experience today. |

---

### 4.7 Daily Feedback Form

**Training: [Program Name] — Day [X] Feedback**

Please take 2 minutes to share your feedback. Your responses are anonymous and directly improve the training.

1. **Overall, how would you rate today's training?**
   ☐ Excellent (5) ☐ Good (4) ☐ Average (3) ☐ Below Average (2) ☐ Poor (1)

2. **The pace of today's content was:**
   ☐ Way too fast ☐ Slightly too fast ☐ Just right ☐ Slightly too slow ☐ Way too slow

3. **The hands-on labs were:** (select all that apply)
   ☐ Relevant to my job ☐ Engaging ☐ Clear instructions ☐ Too easy ☐ Too hard ☐ Confusing

4. **What was the most valuable thing you learned today?**
   [Open text]

5. **What was the most confusing or unclear topic?**
   [Open text]

6. **What would you like more of tomorrow?**
   ☐ More demos ☐ More hands-on time ☐ More discussion ☐ More real-world examples ☐ More breaks

7. **How confident are you in applying what you learned today?**
   ☐ Very confident (5) ☐ Confident (4) ☐ Somewhat (3) ☐ Not very (2) ☐ Not at all (1)

8. **Any other comments or suggestions?**
   [Open text]

---

## 5. Post-Training & Reinforcement

### 5.1 Knowledge Assessment Comparison

#### Pre/Post Assessment Score Tracking

| Participant | Pre-Score (%) | Post-Score (%) | Improvement | Meets Target (70%+)? |
|-------------|--------------|----------------|-------------|----------------------|
| [Name 1] | 35% | 82% | +47 pts | ✅ Yes |
| [Name 2] | 50% | 91% | +41 pts | ✅ Yes |
| [Name 3] | 20% | 65% | +45 pts | ❌ No — schedule review |
| **Cohort Average** | **35%** | **83%** | **+48 pts** | **92% pass rate** |

**Cohort targets:**
- Average improvement: ≥ 30 percentage points
- Post-training pass rate (70%+): ≥ 85% of participants
- If targets not met: schedule supplementary workshop within 2 weeks

---

### 5.2 Certification Criteria & Badge Levels

#### 🥉 AI Practitioner
**Requirements:**
- Complete assigned training track (100% attendance or async completion)
- Score 70%+ on post-assessment
- Complete 1 guided capstone exercise
- Sign AI use policy acknowledgment

**Validity:** 1 year (renewable via refresher module)

#### 🥈 AI Professional
**Requirements:**
- Hold AI Practitioner certification
- Complete an additional advanced module (RAG, Agents, or Automation)
- Score 85%+ on advanced assessment
- Complete an independent capstone project with business impact documentation
- Submit a peer-reviewed case study (500+ words)
- 30-day demonstrated AI usage in daily work (verified by manager)

**Validity:** 2 years (renewable via advanced refresher or conference presentation)

#### 🥇 AI Expert
**Requirements:**
- Hold AI Professional certification
- Complete all 4 advanced modules
- Score 95%+ on expert assessment
- Build and deploy a production AI solution used by 5+ people
- Deliver a presentation or workshop to peers (minimum 30 minutes)
- Mentor 2+ AI Practitioner candidates through their certification
- Pass a live technical interview with Austin AI School assessor

**Validity:** 2 years (renewable via contribution to training curriculum or published case study)

---

### 5.3 30-60-90 Day Reinforcement Calendar

#### Days 1–30: Foundation

| Week | Activity | Format | Duration |
|------|----------|--------|----------|
| Week 1 | Daily AI challenge: Use an AI tool for one new task each day | Self-paced | 15 min/day |
| Week 2 | Lunch & Learn: "Show what you've built" — participants demo their experiments | Virtual meetup | 45 min |
| Week 3 | Prompt library expansion: Add 5 new tested prompts to the team library | Async + peer review | 30 min |
| Week 4 | 30-day check-in survey + 1-on-1 with mentor (15 min) | Survey + call | 30 min |

#### Days 31–60: Application

| Week | Activity | Format | Duration |
|------|----------|--------|----------|
| Week 5 | Identify an AI automation opportunity in your workflow and document it | Written proposal | 1 hour |
| Week 6 | Build a prototype of your AI automation (with mentor support) | Hands-on + office hours | 2 hours |
| Week 7 | Advanced topic webinar: "What's New in AI" — latest tools and techniques | Live webinar | 60 min |
| Week 8 | Present prototype to team and gather feedback. 60-day survey. | Team meeting + survey | 45 min |

#### Days 61–90: Mastery

| Week | Activity | Format | Duration |
|------|----------|--------|----------|
| Week 9 | Refine and deploy your AI project based on feedback | Hands-on | 2 hours |
| Week 10 | Peer teaching: Teach one AI skill to a colleague who wasn't in training | 1-on-1 | 30 min |
| Week 11 | Document ROI: measure time saved, quality improved, or costs reduced | Written report | 1 hour |
| Week 12 | 90-day capstone presentation + certification ceremony. Final survey. | Virtual event | 90 min |

---

### 5.4 Mentor Matching Criteria

Each participant is matched with a mentor based on:

| Criteria | Weight | Matching Logic |
|----------|--------|---------------|
| Department/Function | 30% | Same department preferred; adjacent department acceptable |
| Technical Level | 25% | Mentor should be 1–2 levels above mentee (not more — avoid intimidation) |
| Learning Goals | 20% | Mentor has experience in mentee's target skill area |
| Schedule Compatibility | 15% | Overlapping working hours, similar timezone |
| Communication Style | 10% | Match preferences (structured agendas vs. casual check-ins) |

**Mentor expectations:**
- 1× 30-minute check-in per week for 12 weeks
- Respond to async questions within 24 hours (business days)
- Review mentee's capstone project and provide written feedback
- Escalate blockers to program coordinator

**Mentor qualifications:**
- Completed AI Professional certification (minimum)
- 6+ months of active AI tool usage in their role
- Volunteer or nominated by manager
- Completed 1-hour mentor orientation session

---

### 5.5 Community Setup Checklist

- [ ] **Slack/Teams channel** created: #ai-practitioners (all graduates)
- [ ] **Weekly prompt** posted every Monday: "AI Win of the Week" — share a success story
- [ ] **Resource library** set up: shared Google Drive / SharePoint folder with tools, templates, articles
- [ ] **Monthly virtual meetup** scheduled: rotating topics (tool demos, use case showcases, guest speakers)
- [ ] **FAQ document** started: crowdsourced answers to common AI questions
- [ ] **Office hours** scheduled: 1 hour/week with an Austin AI School instructor for ongoing questions
- [ ] **Prompt library** (shared): organized by department and use case, version-controlled
- [ ] **Innovation board**: Trello/Notion board where anyone can propose AI project ideas for the team
- [ ] **Newsletter**: bi-weekly email with AI news, community highlights, new resources, upcoming events
- [ ] **Recognition program**: monthly "AI Champion" spotlight — peer-nominated

---

### 5.6 Capstone Project Assignment Template

```
============================================
CAPSTONE PROJECT ASSIGNMENT
============================================

PARTICIPANT: [Name]
DEPARTMENT: [Department]
MENTOR: [Assigned Mentor Name]
DUE DATE: [90 days from training completion]

PROJECT TITLE: [Participant chooses]

BUSINESS PROBLEM:
Identify a real workflow challenge in your department that AI
can address. Describe the current state, pain points, and
who is affected.

PROPOSED SOLUTION:
Describe the AI-powered solution you will build. Specify:
- Which AI capabilities you will use (generation, analysis,
  automation, classification, extraction, etc.)
- Which tools/APIs you will use
- Who will use the final solution
- Expected time savings or quality improvement

SUCCESS CRITERIA:
Define 3 measurable outcomes:
1. [e.g., "Reduce report generation time from 4 hours to 30 minutes"]
2. [e.g., "Achieve 90%+ accuracy on document classification"]
3. [e.g., "Adopted by 5+ team members within 2 weeks of deployment"]

DELIVERABLES:
☐ Working prototype (deployed or demo-ready)
☐ 1-page project summary (problem, solution, results)
☐ 5-minute presentation to cohort
☐ ROI estimate (time saved, cost reduced, quality improved)

EVALUATION RUBRIC:
| Criteria              | Weight | Score (1-5) |
|-----------------------|--------|-------------|
| Business Relevance    | 25%    |             |
| Technical Execution   | 25%    |             |
| Measurable Impact     | 25%    |             |
| Presentation Quality  | 15%    |             |
| Innovation/Creativity | 10%    |             |
| TOTAL                 | 100%   |             |

Passing score: 3.5 / 5.0 weighted average
============================================
```

---

## 6. Measurement & Reporting

### 6.1 Kirkpatrick 4-Level Evaluation

#### Level 1: Reaction (Satisfaction Survey — administered Day of completion)

Rate each item 1–5 (1 = Strongly Disagree, 5 = Strongly Agree):

1. The training content was relevant to my job responsibilities.
2. The instructor was knowledgeable and well-prepared.
3. The hands-on exercises helped me understand the concepts.
4. The pace of the training was appropriate for my skill level.
5. I feel more confident using AI tools after this training.
6. The training materials (slides, handouts, labs) were high quality.
7. The training environment (room/virtual setup) was conducive to learning.
8. I would recommend this training to a colleague.
9. The training met or exceeded my expectations.
10. I can identify at least 3 ways to apply what I learned to my daily work.

**Open-ended:**
- What was the single most valuable takeaway?
- What one thing would you change about the training?
- What additional topics would you like to learn about?

**Target:** Average score ≥ 4.2 / 5.0 across all questions

---

#### Level 2: Learning (Assessment Rubric)

| Competency Area | Assessment Method | Passing Score | Weight |
|----------------|-------------------|---------------|--------|
| AI Fundamentals | Multiple choice quiz (20 questions) | 70% | 20% |
| Prompt Engineering | Practical exercise: write 5 prompts evaluated by rubric | 3.5/5 avg | 25% |
| Tool Proficiency | Timed hands-on task: complete a workflow using AI tools | Complete within time limit | 25% |
| Application | Capstone project scored by rubric | 3.5/5 weighted | 20% |
| Critical Thinking | Evaluate an AI output for accuracy, bias, and completeness | 70% | 10% |

**Overall passing threshold:** Weighted average ≥ 70%

---

#### Level 3: Behavior (Manager Observation — 30, 60, 90 days post-training)

**Manager Assessment Form — to be completed by direct supervisor**

Employee: _________________ Date: _________ Assessment Period: ☐ 30-day ☐ 60-day ☐ 90-day

Rate each behavior 1–5 (1 = Not observed, 5 = Consistently demonstrated):

| # | Behavior | 30-Day | 60-Day | 90-Day |
|---|----------|--------|--------|--------|
| 1 | Uses AI tools regularly in their daily workflow | | | |
| 2 | Produces higher quality work output since training | | | |
| 3 | Completes tasks faster than before training | | | |
| 4 | Shares AI techniques and tips with teammates | | | |
| 5 | Follows the company AI use policy consistently | | | |
| 6 | Identifies new opportunities for AI in the department | | | |
| 7 | Reviews and validates AI output before using it | | | |
| 8 | Has built or contributed to at least one AI-powered workflow | | | |
| 9 | Requires less support/hand-holding for AI-related tasks | | | |
| 10 | Demonstrates enthusiasm for continued AI learning | | | |

**Open-ended:**
- Describe a specific example of this employee using AI effectively.
- What barriers, if any, are preventing fuller AI adoption?
- What additional support does this employee need?

**Target:** Average score ≥ 3.5 at 30 days, ≥ 4.0 at 60 days, ≥ 4.0 at 90 days

---

#### Level 4: Results (Business KPI Tracking)

| KPI | Baseline (Pre-Training) | 30-Day | 60-Day | 90-Day | Target | Status |
|-----|------------------------|--------|--------|--------|--------|--------|
| Avg. task completion time (hrs) | ___ | ___ | ___ | ___ | -30% | ☐ |
| Employee productivity score | ___ | ___ | ___ | ___ | +25% | ☐ |
| Customer satisfaction (CSAT) | ___ | ___ | ___ | ___ | +10% | ☐ |
| Error / rework rate (%) | ___ | ___ | ___ | ___ | -40% | ☐ |
| Revenue per employee ($) | ___ | ___ | ___ | ___ | +15% | ☐ |
| AI tool adoption rate (%) | ___ | ___ | ___ | ___ | 80%+ | ☐ |
| Time-to-first-value (days) | ___ | ___ | ___ | ___ | < 14 days | ☐ |
| Employee confidence score (survey) | ___ | ___ | ___ | ___ | 4.0/5.0 | ☐ |
| Support ticket reduction (%) | ___ | ___ | ___ | ___ | -25% | ☐ |
| Content production volume (units/week) | ___ | ___ | ___ | ___ | +50% | ☐ |

---

### 6.2 ROI Calculation Methodology

#### Worked Example

**Client:** Mid-size marketing agency, 40 employees trained

**Costs:**
| Item | Amount |
|------|--------|
| Training fees (40 × $1,200) | $48,000 |
| Employee time (40 × $55/hr × 8 hrs) | $17,600 |
| AI tool licenses (40 × $25/mo × 12) | $12,000 |
| Internal project management (60 hrs × $75/hr) | $4,500 |
| **Total Cost** | **$82,100** |

**Benefits (measured at 90 days, annualized):**
| Item | Calculation | Amount |
|------|------------|--------|
| Time saved on content creation | 40 people × 4 hrs/week × $55/hr × 52 weeks | $457,600 |
| Reduced freelancer spend | 30% reduction × $180,000 annual spend | $54,000 |
| Faster client deliverables (revenue impact) | 20% faster delivery × 15% more projects × $500K revenue | $15,000 |
| Reduced errors / rework | 35% fewer revision cycles × $40,000 annual rework cost | $14,000 |
| **Total Annual Benefits** | | **$540,600** |

**ROI Calculation:**
```
ROI = [($540,600 − $82,100) / $82,100] × 100 = 558%
Payback Period = $82,100 / ($540,600 / 12) = 1.8 months
Net Annual Value = $540,600 − $82,100 = $458,500
```

---

### 6.3 Executive Summary Report Template

```
============================================
AI TRAINING PROGRAM — EXECUTIVE SUMMARY
============================================

CLIENT: [Company Name]
PROGRAM DATES: [Start] — [End]
REPORT DATE: [Date]
PREPARED BY: Austin AI School

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PROGRAM OVERVIEW
• Participants trained: [X]
• Training tracks delivered: [list]
• Total training hours: [X]
• Completion rate: [X]%

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

KEY RESULTS

Satisfaction (Level 1):
  Overall satisfaction: [X.X] / 5.0  (target: 4.2)
  Net Promoter Score: [X]  (target: 50+)
  Would recommend: [X]%

Learning (Level 2):
  Pre-assessment average: [X]%
  Post-assessment average: [X]%
  Improvement: +[X] percentage points
  Pass rate: [X]%  (target: 85%)

Behavior Change (Level 3 — 90 days):
  AI tool daily usage rate: [X]%  (target: 80%)
  Manager observation avg score: [X.X] / 5.0
  Capstone projects completed: [X] / [X]

Business Impact (Level 4 — 90 days):
  Productivity improvement: [X]%
  Time saved per employee/week: [X] hours
  Cost savings (annualized): $[X]
  ROI: [X]%

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TOP ACHIEVEMENTS
1. [Specific success story / project]
2. [Specific success story / project]
3. [Specific success story / project]

AREAS FOR IMPROVEMENT
1. [Finding + recommendation]
2. [Finding + recommendation]

RECOMMENDATIONS FOR NEXT PHASE
1. [Specific next step]
2. [Specific next step]
3. [Specific next step]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### 6.4 Continuous Improvement Framework

#### After Every Cohort (within 5 business days)
- [ ] Compile all daily feedback forms and satisfaction surveys
- [ ] Calculate aggregate scores across all Kirkpatrick levels
- [ ] Conduct instructor debrief (what worked, what didn't, what to change)
- [ ] Identify top 3 content updates needed (outdated tools, unclear exercises, missing topics)
- [ ] Update exercise repository with bug fixes and improvements
- [ ] Send thank-you email to participants with resource links

#### Monthly
- [ ] Review 30-day behavioral survey data from all active cohorts
- [ ] Track industry changes — new tools, API updates, pricing changes
- [ ] Update demo environments with latest tool versions
- [ ] Publish "What's New in AI" update for alumni community

#### Quarterly
- [ ] Full curriculum review against current AI landscape
- [ ] Update all case studies and industry examples
- [ ] Review and refresh pre/post assessments
- [ ] Analyze trends across cohorts (improving? declining? plateauing?)
- [ ] Conduct instructor calibration session (multi-instructor consistency)
- [ ] Update ROI calculation examples with latest client data
- [ ] Review competitor training offerings

---

## 7. Scaling & Repeatability

### 7.1 Train-the-Trainer Certification Program

**Duration:** 3 days (24 hours)
**Class Size:** 6–10 trainer candidates

#### Prerequisites
- AI Expert certification (or equivalent demonstrated expertise)
- 2+ years of teaching/facilitation experience
- Strong communication skills (assessed via video submission)

#### Day 1: Content Mastery
- Deep dive into all 4 training tracks
- Master every lab exercise (complete all, including stretch goals)
- Understand common misconceptions and how to address them
- Assessment: Score 95%+ on comprehensive technical exam

#### Day 2: Facilitation Skills
- Adult learning theory (Kolb, Bloom, Knowles)
- The 30/70 rule — designing for hands-on practice
- Managing difficult participants (resistors, dominators, silent learners)
- Virtual facilitation techniques
- Inclusive teaching practices
- Assessment: Deliver a 20-minute micro-teach, scored by rubric

#### Day 3: Operations & Logistics
- Pre-training setup procedures
- Troubleshooting playbook practice (simulated failures)
- Assessment and reporting procedures
- Quality standards and brand consistency
- Practice full session delivery with feedback
- Assessment: Deliver a 45-minute mock session with live participants

#### Certification Requirements
- 95%+ on technical exam
- 4.0/5.0+ on micro-teach evaluation
- 4.0/5.0+ on mock session evaluation
- Complete all administrative certifications (LMS, reporting)
- Shadow 1 full training delivery as a TA
- Deliver 1 full training under observation with debrief

#### Ongoing Requirements
- Quarterly calibration sessions
- Annual re-certification (updated content exam + observed delivery)
- Maintain 4.2+ participant satisfaction average

---

### 7.2 Content Update Cadence

#### Quarterly Review Checklist

| Category | Review Items | Owner | Status |
|----------|-------------|-------|--------|
| **API & Tools** | Verify all API calls work with current versions | Technical Lead | ☐ |
| | Update pricing examples with current rates | Technical Lead | ☐ |
| | Test all lab exercises end-to-end | QA Team | ☐ |
| | Add/remove tools based on market relevance | Curriculum Lead | ☐ |
| **Content** | Update industry statistics and research citations | Content Lead | ☐ |
| | Refresh case studies with recent client successes | Program Manager | ☐ |
| | Review and update all slide decks | Instructors | ☐ |
| | Update competitor landscape slides | Business Dev | ☐ |
| **Assessment** | Review assessment questions for relevance | Curriculum Lead | ☐ |
| | Analyze question-level performance data (too easy/hard?) | Data Analyst | ☐ |
| | Update certification exam question bank | Assessment Lead | ☐ |
| **Logistics** | Verify all environment setup scripts work | DevOps | ☐ |
| | Update participant welcome packet | Program Manager | ☐ |
| | Review and update communication templates | Marketing | ☐ |
| **Compliance** | Review AI use policy template for regulatory changes | Legal | ☐ |
| | Update data handling procedures if needed | Compliance | ☐ |

---

### 7.3 Multi-Site Deployment Playbook

#### Phase 1: Pilot (Month 1)
- Select 1 site / department as pilot
- Full protocol delivery with maximum observation and data collection
- Document all deviations, issues, and learnings
- Achieve baseline satisfaction score ≥ 4.2

#### Phase 2: Validation (Month 2)
- Deploy to 2 additional sites simultaneously
- Use trained TTT instructors (with Austin AI School observation)
- Compare results across 3 sites — identify variance
- Refine based on multi-site feedback

#### Phase 3: Scale (Months 3–6)
- Roll out to remaining sites in cohorts of 3–5 per month
- Assign regional coordinators for sites > 3 per region
- Establish shared resource repository across all sites
- Weekly sync meetings across all active deployments

#### Phase 4: Sustain (Ongoing)
- Transition to internal TTT-led delivery with quarterly Austin AI School audits
- Monthly cross-site community calls
- Quarterly content refresh (see 7.2)
- Annual program review and strategic realignment

#### Scaling Metrics

| Metric | Pilot Target | Scale Target |
|--------|-------------|--------------|
| Participant satisfaction | ≥ 4.2 / 5.0 | ≥ 4.0 / 5.0 |
| Post-assessment pass rate | ≥ 85% | ≥ 80% |
| 90-day AI adoption rate | ≥ 75% | ≥ 70% |
| Cross-site consistency (std dev) | N/A | ≤ 0.3 pts on satisfaction |

---

### 7.4 Quality Assurance Scoring Rubric

Score each delivery on the following dimensions (1–5 scale):

| Dimension | 5 (Exceptional) | 4 (Strong) | 3 (Acceptable) | 2 (Needs Improvement) | 1 (Unacceptable) | Score |
|-----------|-----------------|------------|-----------------|----------------------|-------------------|-------|
| **Content Accuracy** | 100% accurate, current within 30 days | Minor updates needed, all fundamentals correct | 1-2 outdated examples but core content solid | Multiple outdated references, some errors | Significant errors or outdated content | ___ |
| **Instructor Delivery** | Exceptional engagement, adapts perfectly to audience | Clear, confident, good pacing and interaction | Adequate delivery, covers all material | Reads slides, limited interaction, pacing issues | Unprepared, confusing, poor communication | ___ |
| **Lab Quality** | All labs work perfectly, clear instructions, great scaffolding | Labs work, instructions mostly clear, minor issues | Labs work with some troubleshooting needed | Frequent lab issues, confusing instructions | Labs broken, participants can't complete exercises | ___ |
| **Participant Engagement** | 90%+ active participation throughout | 75%+ active participation | 60%+ active participation | 40-59% participation, noticeable disengagement | Widespread disengagement or frustration | ___ |
| **Logistics & Environment** | Flawless setup, all tech works, smooth transitions | Minor issues resolved quickly, no impact on learning | Some tech issues with moderate impact | Significant setup issues affecting learning | Major failures preventing delivery | ___ |
| **Assessment & Feedback** | All assessments completed, rich data collected, acted upon | Assessments completed, data analyzed | Assessments mostly completed | Incomplete assessment data | No assessments conducted | ___ |

**Minimum passing score:** 3.5 average across all dimensions
**Target score:** 4.0+ average
**Corrective action triggered at:** < 3.5 average or any single dimension scoring 2 or below

---

### 7.5 Partner Licensing Framework

#### License Tiers

| Tier | Name | Rights | Annual Fee | Requirements |
|------|------|--------|-----------|-------------|
| Silver | **Authorized Delivery Partner** | Deliver Austin AI School curriculum to own clients using our materials | $25,000/yr | 2+ certified TTT instructors, quarterly audits |
| Gold | **Premium Training Partner** | All Silver rights + co-branding, priority content updates, dedicated support | $50,000/yr | 4+ certified TTT instructors, monthly reporting, annual review |
| Platinum | **Strategic Alliance Partner** | All Gold rights + curriculum customization, joint go-to-market, revenue sharing on referrals | $100,000/yr + rev share | 6+ certified TTT instructors, exclusive territory option, joint business planning |

#### Partner Requirements (All Tiers)
- Maintain certified instructor pool (see TTT program, Section 7.1)
- Submit delivery reports within 5 business days of each training completion
- Achieve minimum 4.0 / 5.0 satisfaction score average across all deliveries
- Participate in quarterly partner calibration calls
- Use only current-version materials (updated within 90 days)
- Follow brand guidelines for all client-facing materials
- Maintain appropriate business insurance and liability coverage

#### Quality Enforcement
- Quarterly mystery audits (unannounced observation of delivery)
- Annual instructor re-certification required
- Partner scorecard reviewed quarterly:
  - Satisfaction scores
  - Completion rates
  - Assessment pass rates
  - Reporting timeliness
- Corrective action plan required if any metric falls below threshold for 2 consecutive quarters
- License revocation after 3 consecutive quarters below threshold

---

## Appendix: Quick-Reference Checklists

### Master Timeline

| Week | Phase | Key Deliverables |
|------|-------|-----------------|
| Week 1 | Discovery & Assessment | Stakeholder interviews, maturity assessment, skills gap analysis, tech audit, ROI projection |
| Week 2 | Program Design | Track selection, curriculum customization, learning objectives, resource planning |
| Week 3 | Pre-Training Setup | Environment config, pre-assessments, LMS setup, communications, welcome packets |
| Week 4+ | Training Delivery | Sessions delivered per track schedule (1–5 days depending on track) |
| Week 5–16 | Reinforcement | 30-60-90 day activities, mentoring, community building, capstone projects |
| Week 8 | Mid-Point Report | 60-day behavioral assessment, interim ROI estimate |
| Week 16 | Final Report | Full Kirkpatrick evaluation, ROI calculation, executive summary, recommendations |
| Ongoing | Scaling | TTT certification, quarterly content updates, multi-site deployment, QA audits |

---

*This protocol is the proprietary methodology of Austin AI School. For licensing inquiries, contact partnerships@austinai.school.*

*Version 2.1 — Last updated 2026. Developed from training programs delivered across 240+ locations to 10,000+ professionals.*
