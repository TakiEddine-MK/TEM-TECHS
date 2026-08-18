window.TEM_SERVICES = {
  network: {
    icon:"network", title:{en:"Integrated Network Solutions",fr:"Solutions Réseau Intégrées",de:"Integrierte Netzwerklösungen"},
    intro:{en:"Secure, scalable connectivity for offices, branches, data centers and cloud environments.",fr:"Une connectivité sécurisée et évolutive pour bureaux, sites, centres de données et environnements cloud.",de:"Sichere, skalierbare Konnektivität für Büros, Standorte, Rechenzentren und Cloud-Umgebungen."},
    capabilities:[
      ["Network Design & Architecture","Design LAN, WAN and SD-WAN topologies, architecture plans and hybrid/cloud integration points.","Retail branch SD-WAN design connecting multiple sites to a centralized data center."],
      ["Network Monitoring & Management","Real-time performance monitoring, automated alerts, reporting and proactive issue resolution.","Monitor a distributed logistics network and alert operations teams before outages become business-impacting."],
      ["Network Security Solutions","Deploy and configure firewalls, intrusion prevention, VPN and secure remote access.","Implement encrypted remote-access VPN for a financial organization with policy-based access."],
      ["Wireless & Branch Connectivity","Plan reliable enterprise wireless and branch connectivity aligned to coverage, capacity and security requirements.","Modernize office Wi-Fi and branch connectivity for a growing multi-site business."]
    ],
    deliverables:["Topology and architecture diagrams","Implementation and migration plan","Firewall / VPN / segmentation configuration","Monitoring and alerting baseline","As-built documentation and handover"],
    tech:["Cisco","Fortinet","Palo Alto","Aruba","PRTG","SolarWinds","Elastic"],
    outcome:"A network foundation designed for availability, security, scale and easier operations."
  },
  cybersecurity: {
    icon:"cybersecurity", title:{en:"Cybersecurity Services",fr:"Services de Cybersécurité",de:"Cybersecurity-Services"},
    intro:{en:"Protect networks, cloud environments, identities and critical data with layered security controls, monitoring and resilience planning.",fr:"Protégez réseaux, environnements cloud, identités et données critiques grâce à des contrôles de sécurité multicouches, à la supervision et à la résilience.",de:"Schützen Sie Netzwerke, Cloud-Umgebungen, Identitäten und kritische Daten mit mehrschichtigen Sicherheitskontrollen, Monitoring und Resilienzplanung."},
    capabilities:[
      ["Security Assessment & Risk Review","Assess the current security posture, identify vulnerabilities and define practical mitigation priorities.","Review a growing company’s network and cloud environment and deliver a prioritized security improvement roadmap."],
      ["Network Security & Firewalls","Deploy and configure next-generation firewalls, intrusion prevention, segmentation, VPN and secure remote access.","Implement FortiGate or Palo Alto firewall policies and encrypted VPN connectivity for remote users and branch offices."],
      ["Cloud Security & Compliance","Review cloud security, data protection, identity controls and compliance requirements across Azure, AWS and hybrid environments.","Assess an Azure environment and recommend controls for identity, data protection and GDPR-aligned operations."],
      ["Identity & Access Management","Implement role-based access, MFA, least-privilege controls and periodic access reviews.","Apply RBAC and MFA so employees can access only the cloud resources required for their roles."],
      ["Threat Detection & Security Monitoring","Centralize security alerts, suspicious activity and threat detection to improve investigation and response.","Configure cloud threat detection and SIEM alerts for repeated authentication failures and anomalous activity."],
      ["Vulnerability Management & Hardening","Identify security weaknesses, prioritize remediation, maintain patching and harden systems to reduce attack surface.","Review virtual machines and network devices, prioritize critical vulnerabilities and implement secure configuration improvements."],
      ["Backup, Disaster Recovery & Cyber Resilience","Define RTO/RPO, backup controls and tested recovery procedures for outages, data loss or cyber incidents.","Build a recovery plan that protects critical systems and validates restoration through scheduled recovery tests."],
      ["DevSecOps Security Integration","Embed security checks and automated scanning within CI/CD and deployment workflows.","Add vulnerability and dependency scanning to the CI/CD pipeline before code reaches production."],
      ["Incident Response & Escalation","Support incident triage, containment, escalation, recovery and post-incident improvement using available security and operational evidence.","Correlate firewall, identity and system alerts during a security incident and support containment and recovery actions."]
    ],
    deliverables:["Security assessment and risk report","Prioritized remediation roadmap","Firewall, VPN, IAM and security-control configuration","Monitoring and threat-detection baseline","Backup / incident-response procedures","Documentation and operational handover"],
    tech:["Fortinet","Palo Alto Networks","Microsoft Defender","Microsoft Sentinel","Microsoft Entra ID","AWS GuardDuty","Elastic","Snyk"],
    outcome:"A stronger security posture with clearer controls, earlier threat detection and practical recovery capabilities."
  },
  "cloud-consulting": {
    icon:"cloud", title:{en:"Cloud Consulting",fr:"Conseil Cloud",de:"Cloud-Beratung"},
    intro:{en:"Make cloud decisions with a clear business case, target architecture and governance model.",fr:"Prenez vos décisions cloud avec un business case clair, une architecture cible et un modèle de gouvernance.",de:"Treffen Sie Cloud-Entscheidungen mit einem klaren Business Case, Zielarchitektur und Governance-Modell."},
    capabilities:[
      ["Cloud Readiness Assessment","Assess applications, data, infrastructure and workflows to determine migration readiness.","Assess an e-commerce company’s on-premises environment before migration."],
      ["Strategy & Roadmap","Define provider, business objectives, adoption phases, milestones and resource requirements.","Create a phased cloud roadmap for a company handling sensitive business data."],
      ["Provider Selection","Compare Azure, AWS and Google Cloud based on fit, cost, scalability and compliance.","Compare AWS and Azure for a client planning a new application platform."],
      ["Architecture Design","Produce high-level cloud blueprints covering IaaS, PaaS, SaaS, networking, identity and security.","Design a secure, scalable analytics environment for a growing business."],
      ["Cost Optimization","Estimate spend, identify savings opportunities and create forecasting recommendations.","Rightsize resources and establish cost controls for an expanding cloud estate."],
      ["Security, Governance & Compliance","Assess security, identity, access, data protection and policy requirements.","Create a governance model with RBAC, security controls and compliance tracking."],
      ["Disaster Recovery Planning","Define RTO/RPO, backup strategy and periodic recovery testing.","Create a recovery plan for critical systems to reduce operational downtime."],
      ["Hybrid / Multi-Cloud Strategy","Plan secure integration between on-premises and multiple cloud platforms.","Design a hybrid architecture connecting local workloads securely to Azure and AWS."]
    ],
    deliverables:["Assessment report","Cloud strategy and roadmap","Target architecture blueprint","Cost model and optimization recommendations","Security and governance framework"],
    tech:["Microsoft Azure","AWS","Google Cloud","Entra ID","Terraform"],
    outcome:"A cloud plan aligned to business priorities before investment and migration begin."
  },
  "cloud-migration": {
    icon:"migration", title:{en:"Cloud Migration",fr:"Migration Cloud",de:"Cloud-Migration"},
    intro:{en:"Move workloads, applications and data to cloud through a controlled, validated migration process.",fr:"Migrez charges de travail, applications et données vers le cloud via un processus contrôlé et validé.",de:"Migrieren Sie Workloads, Anwendungen und Daten mit einem kontrollierten, validierten Prozess in die Cloud."},
    capabilities:[
      ["Migration Readiness","Identify dependencies, compatibility issues and prerequisites.","Assess which workloads are ready to move and which require remediation first."],
      ["Migration Planning","Create phases, timelines, risk controls, downtime windows and resource plans.","Plan a staged migration for email, database and supporting infrastructure."],
      ["Data Migration","Transfer databases and files securely with validation and integrity checks.","Move business data to cloud storage with backup and post-migration verification."],
      ["Application Migration","Reconfigure and validate applications for cloud infrastructure.","Move a CRM application while preserving integrations and user access."],
      ["Infrastructure Migration","Move servers, VMs and network components and rebuild supporting cloud resources.","Rehost virtual machines and configure virtual networks, firewalls and load balancing."],
      ["Hybrid Integration","Connect on-premises workloads and cloud services securely.","Maintain selected local applications while extending infrastructure into Azure."],
      ["Rehost / Refactor","Use lift-and-shift where appropriate or re-architect to use cloud-native services.","Refactor a web workload to use autoscaling and managed cloud services."],
      ["Testing & Handover","Validate performance, security and integrity, then document and train operations teams.","Run post-migration validation and provide operational runbooks and handover sessions."]
    ],
    deliverables:["Migration assessment","Phased migration plan","Risk and rollback plan","Execution and validation records","Handover documentation"],
    tech:["Azure Migrate","AWS Migration Services","Google Cloud","VMware","VPN / ExpressRoute concepts"],
    outcome:"A migration executed with clear controls, validation and minimal avoidable disruption."
  },
  devops: {
    icon:"devops", title:{en:"DevOps & Automation",fr:"DevOps & Automatisation",de:"DevOps & Automatisierung"},
    intro:{en:"Improve release quality and delivery speed with repeatable automation and better observability.",fr:"Améliorez la qualité des versions et la vitesse de livraison grâce à l’automatisation et à l’observabilité.",de:"Verbessern Sie Release-Qualität und Liefergeschwindigkeit durch Automatisierung und Observability."},
    capabilities:[
      ["CI/CD Pipelines","Automate build, test and deployment workflows.","Create a pipeline that deploys approved application changes automatically."],
      ["Infrastructure as Code","Manage infrastructure as version-controlled code using repeatable templates.","Provision consistent environments with Terraform."],
      ["Automated Testing","Integrate automated testing into delivery workflows.","Run unit, integration and end-to-end tests before releases reach production."],
      ["Containers & Kubernetes","Containerize applications and orchestrate scalable deployments.","Deploy an application using Docker and Kubernetes with controlled scaling."],
      ["Monitoring & Logging","Implement telemetry, dashboards, logging and alerts.","Centralize application logs and performance monitoring for faster troubleshooting."],
      ["DevSecOps","Embed security checks within CI/CD and release workflows.","Add automated vulnerability and dependency scanning before deployment."],
      ["Release Automation","Standardize approvals, deployments and rollback paths.","Create repeatable releases with approval gates and rollback procedures."]
    ],
    deliverables:["Pipeline design and implementation","IaC repository and templates","Monitoring / logging baseline","Security integration recommendations","Runbooks and team handover"],
    tech:["GitHub Actions","GitLab CI/CD","Jenkins","Terraform","Docker","Kubernetes","Prometheus","Grafana"],
    outcome:"Faster and more repeatable delivery with fewer manual deployment steps."
  },
  "managed-cloud": {
    icon:"managed", title:{en:"Managed Cloud Services",fr:"Services Cloud Managés",de:"Managed Cloud Services"},
    intro:{en:"Ongoing operational care for cloud environments with monitoring, security, backup and optimization.",fr:"Gestion opérationnelle continue des environnements cloud avec supervision, sécurité, sauvegarde et optimisation.",de:"Laufender Betrieb von Cloud-Umgebungen mit Monitoring, Sicherheit, Backup und Optimierung."},
    capabilities:[
      ["Cloud Monitoring & Alerts","Track health, capacity, performance and critical events.","Monitor CPU, memory, storage and service health for a production platform."],
      ["Backup & Disaster Recovery","Automate backups and maintain recovery plans and tests.","Protect databases with scheduled backups and validated restoration procedures."],
      ["Security Management","Maintain security controls, threat detection and vulnerability review.","Configure cloud security alerts and response procedures for critical events."],
      ["Updates & Patching","Keep supported infrastructure components current and reduce known vulnerabilities.","Apply controlled monthly patching to cloud virtual machines."],
      ["Cost Optimization","Review consumption and recommend rightsizing or lifecycle changes.","Identify idle resources and over-provisioned systems to reduce recurring spend."],
      ["Performance Optimization","Tune infrastructure and application-supporting resources.","Identify resource bottlenecks and adjust allocation for better responsiveness."],
      ["Identity & Access","Manage role-based access, MFA and periodic reviews.","Implement least-privilege access policies across an Azure environment."],
      ["Reporting & Analytics","Provide health, incident, security and cost reporting.","Deliver a monthly operational report with trends and recommendations."]
    ],
    deliverables:["Operational monitoring baseline","Backup / recovery configuration","Patch and security plan","Monthly service report","Optimization recommendations"],
    tech:["Azure Monitor","AWS CloudWatch","Microsoft Defender","IAM / Entra ID","Backup platforms"],
    outcome:"A cloud environment that is easier to operate, monitor and continuously improve."
  },
  "noc-soc": {
    icon:"monitoring", title:{en:"NOC & SOC Monitoring",fr:"Supervision NOC & SOC",de:"NOC- & SOC-Monitoring"},
    intro:{en:"Operational and security visibility for infrastructure, networks and cloud environments.",fr:"Visibilité opérationnelle et sécurité pour infrastructures, réseaux et environnements cloud.",de:"Betriebs- und Sicherheitsübersicht für Infrastruktur, Netzwerke und Cloud-Umgebungen."},
    capabilities:[
      ["Infrastructure Monitoring","Track availability, performance, capacity and faults.","Identify WAN degradation before it becomes a complete branch outage."],
      ["Security Event Visibility","Centralize security alerts and suspicious activity for investigation.","Surface repeated authentication failures and anomalous security events."],
      ["Alerting & Escalation","Define thresholds, severity and escalation paths.","Route critical infrastructure alerts to the right operations team."],
      ["Incident Support","Provide operational context, triage information and escalation support.","Correlate device, link and system alerts during a service disruption."],
      ["Service Reporting","Report trends, recurring issues and operational health.","Provide monthly availability and incident trend summaries."]
    ],
    deliverables:["Monitoring scope and thresholds","Alert and escalation matrix","Dashboards and reports","Incident visibility procedures","Operational health reporting"],
    tech:["Elastic","PRTG","SolarWinds","Site24x7","OpManager","Cloud-native monitoring"],
    outcome:"Earlier detection, clearer escalation and improved operational visibility."
  },
  software: {
    icon:"software", title:{en:"Software Development",fr:"Développement Logiciel",de:"Softwareentwicklung"},
    intro:{en:"Purpose-built web, mobile and integration solutions designed around real business workflows.",fr:"Solutions web, mobiles et d’intégration conçues autour de processus métier réels.",de:"Individuelle Web-, Mobile- und Integrationslösungen für reale Geschäftsprozesse."},
    capabilities:[
      ["Web Applications","Design responsive business applications with backend and API integrations.","Build a customer portal for a logistics company to track shipments."],
      ["Mobile Applications","Develop cross-platform or native mobile experiences.","Create a mobile service application with authentication and backend integration."],
      ["API Development & Integration","Connect platforms and services through secure APIs.","Integrate an e-commerce platform with payment and business systems."],
      ["UI/UX Design","Create wireframes, prototypes and intuitive interfaces.","Design an accessible dashboard for an online service platform."],
      ["Maintenance & Support","Maintain, troubleshoot and enhance existing applications.","Provide ongoing fixes, security updates and feature improvements for an internal application."]
    ],
    deliverables:["Requirements and solution design","UI/UX prototype","Application / API implementation","Testing and deployment","Documentation and support handover"],
    tech:["Modern Web Stack","REST APIs","Cloud Hosting","Databases","CI/CD"],
    outcome:"Digital applications built to support business processes, integrations and future growth."
  }
};
