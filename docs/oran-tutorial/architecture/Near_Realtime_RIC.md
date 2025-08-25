---
sidebar_label: 'Near Realtime RIC'
title: Near Realtime RIC
sidebar_position: 6
---

The **Near-Real-Time RIC (Near-RT RIC)** is a key component of the O-RAN architecture that enables **intelligent and policy-driven optimization** of the RAN. It operates on timescales ranging from 10 milliseconds to 1 second, allowing it to make near-real-time adjustments to network behavior.


![image_overview](/img/near_rt_ric.svg)

#### **Key Responsibilities**
- **Policy-Based Control:** Implements operator-defined policies to dynamically manage radio resources.
- **AI/ML-Driven Optimization:** Uses data analytics and machine learning to optimize handovers, traffic steering, interference management, and energy efficiency.
- **xApp Execution:** Runs modular applications (xApps) that extend the RIC’s capabilities for specific optimization tasks.

#### **Connectivity**
- Interfaces with **O-CU and O-DU** over the **E2 interface** to monitor and control network elements in near real-time.
- Communicates with the **Non-RT RIC** for policy guidance and long-term optimization.

#### **Deployment Context**
- Typically deployed at **edge or regional data centers** to balance low latency with centralized intelligence.
- Supports **multi-vendor environments**, enabling interoperability and flexible deployment of new xApps without vendor lock-in.