# 6-Month Applied AI Engineer Program

**Austin AI School** · Go from zero to production-ready AI engineer

🎓 6 Months · 🔧 12 Projects · 💰 $150K–$250K+ Roles · 30% Lecture, 70% Hands-On

---

## Program Overview

The Applied AI Engineer Program is a 24-week, project-driven curriculum designed to take you from Python fundamentals to production-ready AI engineering. Based on the skills companies are actually hiring for, every stage builds on the last — and every stage produces a portfolio project you can show employers.

**4 Phases · 12 Stages · 12 Projects**

| Phase | Stages | Weeks | Focus |
|-------|--------|-------|-------|
| 🔨 Build | 1–4 | 1–8 | Foundations: Python, LLMs, Prompts, RAG |
| 🚀 Ship | 5–8 | 9–16 | Applications: Workflows, Apps, Evals, Infra |
| ⚡ Scale | 9–10 | 17–20 | Operations: Deployment, Security |
| 🎯 Launch | 11–12 | 21–24 | Career: Portfolio, Job Search |

---

## Stage 1: Python + Production APIs
**Weeks 1–2 · Build Phase**

Master the production Python skills that separate hobbyists from professionals. Build async APIs, handle webhooks from real services, and write code that's tested, typed, and deployment-ready.

### Learning Objectives
- Build async REST APIs with FastAPI and Pydantic validation
- Design webhook endpoints for Stripe, Twilio, and SendGrid
- Implement proper error handling, retries, and idempotency
- Write comprehensive tests with pytest and async fixtures
- Use type hints and Pydantic models for bulletproof data contracts

### Key Topics
- FastAPI routers, middleware, dependency injection
- Async/await patterns with httpx
- REST + GraphQL API design principles
- Third-party SDK integration
- Environment management, secrets, .env best practices

### 🛠 Project
Build a production webhook server that processes events from 3 services (Stripe payments, Twilio SMS, SendGrid emails) with proper validation, idempotency, error handling, and 90%+ test coverage.

### Tools
`Python 3.12+` · `FastAPI` · `httpx` · `Pydantic` · `pytest`

---

## Stage 2: LLM Fundamentals for Production
**Weeks 3–4 · Build Phase**

Understand how LLMs work at the API level — tokens, context windows, pricing, and the cost/latency/quality tradeoffs that determine whether your AI product makes or loses money.

### Learning Objectives
- Compare GPT-4, Claude, Gemini, and Llama for different use cases
- Implement intelligent model routing based on quality thresholds
- Build streaming, batching, and caching patterns for LLM APIs
- Calculate and optimize token costs across providers
- Design retry-with-backoff strategies for production reliability

### Key Topics
- Tokenization, context windows, and model capabilities
- Embedding theory and similarity search fundamentals
- Cost/latency tradeoff analysis across providers
- API patterns: streaming, batching, caching
- Model selection frameworks and decision matrices

### 🛠 Project
Build a model router that selects the cheapest model meeting a quality threshold. Routes requests across GPT-4, Claude, and Llama based on complexity, caches responses, and tracks cost per request.

### Tools
`OpenAI SDK` · `Anthropic SDK` · `LiteLLM` · `tiktoken`

---

## Stage 3: Prompt Engineering + Structured Outputs
**Weeks 5–6 · Build Phase**

Engineer prompts as versioned, tested, production artifacts. Guarantee structured outputs and build evaluation pipelines that catch prompt regressions before users do.

### Learning Objectives
- Design system prompts, few-shot chains, and chain-of-thought patterns
- Enforce structured outputs with Pydantic schemas and JSON modes
- Build prompt versioning systems with rollback capabilities
- Create unit evaluations and A/B tests for prompt quality

### Key Topics
- System prompts, persona patterns, and guardrails
- Pydantic/JSON schema validation for LLM outputs
- Structured output modes (function calling, tool use)
- Prompt versioning, A/B testing frameworks
- Evaluation-driven prompt development

### 🛠 Project
Build a prompt management system with versioning, automated evals, and rollback. Includes a dashboard showing prompt performance, A/B test results, and one-click rollback.

### Tools
`Pydantic` · `instructor` · `BAML` · `promptfoo`

---

## Stage 4: RAG + Knowledge Grounding
**Weeks 7–8 · Build Phase**

Master the #1 pattern in production AI. Chunking strategies, hybrid search, reranking, and the metadata engineering that separates toy demos from systems that actually reduce hallucinations.

### Learning Objectives
- Implement semantic, recursive, and sliding window chunking
- Build hybrid search combining BM25 + vector similarity
- Integrate rerankers (Cohere, ColBERT) for precision
- Design metadata filtering and citation tracking systems
- Measure and reduce hallucination rates with grounding scores

### Key Topics
- Vector databases: Pinecone, Weaviate, Chroma, pgvector
- Embedding models and dimension tradeoffs
- Chunk overlap, parent-child retrieval, contextual compression
- Metadata schemas for filtering and access control
- Hallucination detection and confidence scoring

### 🛠 Project
Build a production RAG system over company docs with inline citations, confidence scores, hybrid search, reranking, metadata filtering, and a hallucination detection pipeline.

### Tools
`LangChain` · `LlamaIndex` · `Chroma` · `sentence-transformers` · `Cohere`

---

## Stage 5: AI Workflows + Orchestration
**Weeks 9–10 · Ship Phase**

Build multi-step agent workflows with tool calling, state machines, human-in-the-loop patterns, and the orchestration frameworks powering real AI products.

### Learning Objectives
- Implement tool calling via function calling and MCP protocols
- Design state machines for complex multi-step workflows
- Build human-in-the-loop patterns for high-stakes decisions
- Create retry logic, fallback chains, and session memory

### Key Topics
- Tool calling patterns and function registration
- MCP (Model Context Protocol) integration
- State machines and workflow orchestration
- Session memory and conversation management
- Multi-agent coordination patterns

### 🛠 Project
Build a customer support agent that routes tickets, answers from a knowledge base, escalates when confidence is low, and learns from resolved tickets.

### Tools
`LangGraph` · `CrewAI` · `Temporal` · `Redis`

---

## Stage 6: Build Production-Ready Apps
**Weeks 11–12 · Ship Phase**

Put everything together into a full-stack AI application with streaming UIs, graceful degradation, rate limiting, and production patterns.

### Learning Objectives
- Build domain-specific copilots (legal, medical, financial)
- Implement streaming UIs with SSE and WebSockets
- Design graceful degradation and fallback strategies
- Implement rate limiting, queue management, and backpressure

### Key Topics
- Full-stack AI application architecture
- Automation pipelines and event-driven design
- Server-Sent Events and WebSocket patterns
- Queue management with BullMQ
- Domain-specific data handling and compliance

### 🛠 Project
Build an end-to-end AI copilot for a specific industry with streaming chat UI, document ingestion, citation tracking, and production error handling.

### Tools
`Next.js` · `React` · `Vercel AI SDK` · `BullMQ` · `SSE`

---

## Stage 7: Evaluation + Reliability
**Weeks 13–14 · Ship Phase**

Build evaluation frameworks that quantify accuracy, detect hallucinations, catch regressions, and ensure your AI system works before it reaches users.

### Learning Objectives
- Design accuracy scoring and hallucination detection pipelines
- Build custom eval frameworks for domain-specific metrics
- Implement regression testing and A/B output validation
- Create continuous evaluation pipelines in CI/CD

### Key Topics
- RAGAS evaluation framework for RAG systems
- DeepEval for LLM output quality assessment
- Custom eval metrics and scoring rubrics
- Regression testing for non-deterministic systems
- A/B testing frameworks for AI outputs

### 🛠 Project
Build a comprehensive eval suite that catches regressions before deployment, with automated scoring, hallucination detection, and a GitHub Actions pipeline that blocks deploys on quality drops.

### Tools
`RAGAS` · `DeepEval` · `promptfoo` · `pytest` · `GitHub Actions`

---

## Stage 8: AI Infrastructure + Optimization
**Weeks 15–16 · Ship Phase**

Run models locally, quantize for speed, and optimize inference to serve 50+ req/s at under $0.001/request.

### Learning Objectives
- Deploy models locally with vLLM, Ollama, and llama.cpp
- Apply quantization techniques (GGUF, GPTQ, AWQ)
- Optimize KV caching and response streaming
- Track and minimize token costs across your stack
- Design edge deployment patterns for low-latency inference

### Key Topics
- Local inference engines and GPU optimization
- Quantization formats and quality/speed tradeoffs
- KV cache management and memory optimization
- Batching strategies for throughput
- Edge deployment and hybrid cloud/local architectures

### 🛠 Project
Deploy a quantized model serving 50 req/s at under $0.001/request with benchmarks, auto-scaling, and a real-time cost dashboard.

### Tools
`vLLM` · `Ollama` · `llama.cpp` · `CUDA` · `TensorRT-LLM`

---

## Stage 9: Deployment + Observability
**Weeks 17–18 · Scale Phase**

Ship AI services to production with full observability — Docker, CI/CD, cloud hosting, distributed tracing, and deployment patterns.

### Learning Objectives
- Containerize AI services with Docker multi-stage builds
- Build CI/CD pipelines with GitHub Actions and ArgoCD
- Deploy to AWS, GCP, Railway, or Modal
- Implement distributed tracing with OpenTelemetry
- Set up alerting, canary releases, and blue-green deployments

### Key Topics
- Docker best practices for ML workloads
- CI/CD pipeline design for AI systems
- Cloud provider comparison and cost optimization
- Structured logging and distributed tracing
- Monitoring dashboards and alert design

### 🛠 Project
Deploy a multi-model AI service with Dockerized services, GitHub Actions CI/CD, Terraform infrastructure, Grafana dashboards, Prometheus metrics, and OpenTelemetry tracing.

### Tools
`Docker` · `GitHub Actions` · `Terraform` · `Grafana` · `Prometheus` · `OpenTelemetry`

---

## Stage 10: AI Security + Guardrails
**Weeks 19–20 · Scale Phase**

Secure AI systems against prompt injection, data leakage, and abuse. PII redaction, compliance patterns, and enterprise guardrails.

### Learning Objectives
- Implement input/output filtering and prompt injection defense
- Build PII redaction pipelines with Presidio and custom NER
- Design compliance checks for SOC 2, HIPAA, and GDPR
- Create sandboxing, content moderation, and abuse prevention

### Key Topics
- OWASP LLM Top 10 vulnerabilities
- Prompt injection attack vectors and defenses
- PII detection and redaction strategies
- Compliance automation patterns
- Content moderation and safety classifiers

### 🛠 Project
Build a security middleware that blocks injections, redacts PII, enforces content policies, logs threats, and generates compliance audit reports.

### Tools
`Guardrails AI` · `NeMo Guardrails` · `Presidio` · `OWASP LLM Top 10`

---

## Stage 11: Open Source + Portfolio
**Weeks 21–22 · Launch Phase**

Turn your projects into a portfolio that gets you hired. Ship polished repos, write docs that get stars, record demos, and publish evaluation reports.

### Learning Objectives
- Ship end-to-end apps publicly on GitHub with professional READMEs
- Write architecture docs that demonstrate system design skills
- Record compelling demo walkthroughs
- Publish evaluation reports and technical blog posts

### Key Topics
- Open-source best practices and repo structure
- Technical writing for developer audiences
- Demo creation and video presentation
- Blog writing for Dev.to, Medium, personal sites
- Building a public presence on Twitter/X and LinkedIn

### 🛠 Project
Ship 2 polished open-source projects with comprehensive docs, live demos, eval reports, and blog write-ups.

### Tools
`GitHub` · `Loom` · `Dev.to` · `Medium` · `Twitter/X`

---

## Stage 12: Career Launch
**Weeks 23–24 · Launch Phase**

Convert your skills into a career. Target high-paying AI roles, ace technical interviews, and leverage Austin's AI ecosystem.

### Learning Objectives
- Identify and target high-value AI engineering roles
- Optimize resume and LinkedIn for AI-specific keywords
- Master technical interviews: system design for AI + live coding
- Complete 3 technical interviews (mock or real) with feedback

### Key Topics
- Target roles: Applied AI Engineer, GenAI Developer, AI Integration Engineer, LLM Solutions Engineer
- Salary benchmarks: $150K–$250K+ for Applied AI Engineers
- Technical interview patterns for AI roles
- Networking: Austin AI Meetup, online communities, conferences
- Negotiation strategies and offer evaluation

### 🛠 Project
Complete 3 technical interviews (mock or real) and build a personalized job search pipeline with target companies, networking contacts, and prep materials.

### Tools
`LinkedIn` · `GitHub Profile` · `Austin AI Meetup` · `Interview Prep`

---

## Who This Is For

- **🔄 Career Changers** — You're in tech (or adjacent) and want to pivot to AI engineering
- **⚙️ Backend Developers** — Add LLMs, RAG, and AI orchestration to your toolkit
- **📊 Data Scientists** — Learn the production engineering skills to ship models at scale
- **📋 Technical PMs** — Gain hands-on skills to evaluate tradeoffs and lead AI teams

## Prerequisites

- **Python basics** — variables, functions, loops, classes
- **Command line** — navigate directories, run scripts, install packages
- **Git fundamentals** — clone, commit, push, pull, branch
- **Basic web concepts** — HTTP methods, JSON, what an API is
- **Laptop with 8GB+ RAM** — Mac, Windows, or Linux

> 📚 Need to brush up? We send a free 2-week prep course to every enrolled student.

## What's Included

- 🎥 **24 Live Sessions** — Bi-weekly live instruction with Q&A and code reviews
- 🛠 **12 Portfolio Projects** — One real-world, deploy-ready project per stage
- 👨‍🏫 **Mentor Matching** — 1:8 ratio with working AI engineers
- 💬 **Private Community** — Lifetime Discord access with students, alumni, and mentors
- 🎯 **Career Support** — Resume reviews, mock interviews, job referrals, salary coaching
- 📹 **Session Recordings** — All sessions recorded and available forever

## Outcomes

- **12** production-grade portfolio projects on GitHub
- **$150K+** average starting salary for Applied AI Engineers
- **90%** projected completion rate
- **40+** tools and frameworks covered
- Lifetime access to community, recordings, and curriculum updates

## Pricing

| Plan | Price | Details |
|------|-------|---------|
| **Pay in Full** | **$4,997** | One-time payment · Best value · Save $397 |
| **Payment Plan** | **$899/mo × 6** | Monthly payments · $5,394 total |
| **Corporate/Group** | **Custom** | 3+ seats · 15–30% volume discounts |

All plans include: 14-day money-back guarantee, full curriculum access, mentor matching, community access, and career support.

## Your Instructor

### Chris Lofton
**CEO, MindPress · Founder, Austin AI School**

Chris has managed AI implementation and workforce development across 240+ locations, training thousands of professionals to leverage AI. As CEO of MindPress, he builds AI-powered education platforms serving organizations nationwide. He designed this program to be the course he wished existed: practical, project-driven, and focused on the skills employers actually hire for.

## FAQ

**Do I need prior AI/ML experience?**
No. The program starts with production Python and builds systematically. We send a free 2-week prep course to every enrolled student.

**What's the time commitment per week?**
15–20 hours: ~4 hours live sessions, ~6 hours project work, ~5–10 hours reading and practice. Most students balance this with a full-time job.

**Is this live or self-paced?**
Both. Live sessions run bi-weekly on a fixed schedule. All recordings are available immediately. Projects have deadlines but flexible hours.

**How is this different from General Assembly, Springboard, etc.?**
(1) 100% focused on Applied AI Engineering. (2) 70% hands-on with 12 production projects. (3) Curriculum based on what companies are hiring for right now.

**What happens if I fall behind?**
You can pause for up to 2 weeks and rejoin. All recordings are permanent. Your mentor helps create a catch-up plan. You can join the next cohort for missed stages — free.

**Is there a refund policy?**
Full refund within 14 days, no questions asked. If you complete all 12 stages and don't land interviews within 6 months, we refund 50%.

---

## Apply Now

**Next cohort starts soon. Limited to 24 students.**

→ Apply at [austinai.school/curriculum](https://austinai.school/curriculum)
→ Email: hello@austinai.school

---

*© 2026 Austin AI School. All rights reserved.*
