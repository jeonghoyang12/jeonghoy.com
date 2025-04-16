---
title: "Building AWS Security System"
date: "2025"
---

Security monitoring is essential for cloud environments, but getting hands-on experience can be challenging. I built my own AWS security monitoring system to learn the fundamentals and bridge the gap between theory and practice.

**Note**: This project was developed as part of my security engineering skill development in 2025. You can view the full code repository <u>[here](https://github.com/jeonghoyang12/security-monitoring-project).</u>

**1. Cloud Security Monitoring Architecture**

Security monitoring systems detect threats by analyzing logs and identifying suspicious patterns.

A comprehensive solution needs three core components working together: log collection, centralized analysis, and visualization. For AWS environments, CloudTrail serves as the foundation by recording all API activities.

The ELK stack (Elasticsearch, Logstash, Kibana) provides a powerful, open-source platform for building your own security monitoring system:

- Logstash processes and normalizes logs
- Elasticsearch indexes and stores security events
- Kibana visualizes data and creates security dashboards

**2. Detection Rules**

Detection rules transform raw logs into actionable security insights. They define patterns that indicate potential threats.

Effective detection rules need to balance sensitivity (catching threats) and specificity (avoiding false positives). Each rule should focus on a specific attack vector or suspicious behavior pattern.

![/images/Failed-login-attempt.png](/images/Failed-login-attempt.png)
*<span style="color: gray; font-size: 12px;">Logs detected due to the failed login attempts</span>*

**3. Dashboard Visualization**

Security dashboards translate complex data into actionable insights through visual representation.

A well-designed dashboard highlights security anomalies, provides context for investigations, and enables quick response to potential threats. It should present both high-level metrics and detailed event information.

![/images/dashboard.png](/images/dashboard.png)
*<span style="color: gray; font-size: 12px;">Dashboard built with Kibana</span>*

**4. Future Implementation: GitHub Security Integration**

An essential next step in my project roadmap is integrating security practices directly into the development workflow.

While my current implementation focuses on the monitoring capabilities, I'm actively working on extending the project to include GitHub security features. This work-in-progress component will enhance the security posture by shifting security left into the development process.

*Planned Features*

- Pre-commit hooks to prevent credential leakage
- GitHub Actions workflows for automated security scanning
- Dependabot configuration for vulnerability alerts
- A comprehensive security policy document
- CodeQL integration for code vulnerability scanning
- Documentation of security controls and their implementation

This integration represents the next phase of development and will complete the security lifecycle from development to production monitoring.

**5. Implementation Challenges**

Building a security monitoring system involves overcoming several technical hurdles.

**Docker Configuration Issues:** Container compatibility issues are common when deploying the ELK stack, especially on different architectures like ARM64 (Mac M1/M2). Memory allocation is particularly critical for Elasticsearch.

**CloudTrail Log Processing:** CloudTrail logs have a complex nested JSON structure that requires careful parsing to extract security-relevant information.