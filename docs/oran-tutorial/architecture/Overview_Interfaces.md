---
sidebar_label: 'Overview of Interfaces'
title: Overview of Interfaces
sidebar_position: 8
---

This page describes all interfaces within an O-RAN environment.

| **Interface** | **Connected Components**        | **Description**                                                                                   |
|---------------|----------------------------------|---------------------------------------------------------------------------------------------------|
| **A1**        | Non-RT RIC ↔ Near-RT RIC       | Provides policy-based guidance, AI/ML model updates, and enrichment information from Non-RT RIC to Near-RT RIC. |
| **E2**        | Near-RT RIC ↔ O-CU / O-DU      | Enables real-time control and monitoring of RAN functions via xApps, supporting RAN optimization. |
| **F1**        | O-CU ↔ O-DU                    | Splits centralized and distributed units, carrying both control-plane (F1-C) and user-plane (F1-U) data. |
| **E1**        | O-CU-CP ↔ O-CU-UP              | Separates control-plane and user-plane within the O-CU for flexible deployment.                  |
| **Open Fronthaul** | O-DU ↔ O-RU                | Transports digitized I/Q samples and control signaling, based on the 7-2x functional split.       |
| **N2**        | O-CU-CP ↔ 5G Core (AMF)        | Handles control-plane signaling for mobility, session, and authentication management.            |
| **N3**        | O-CU-UP ↔ 5G Core (UPF)        | Carries user-plane traffic between RAN and the 5G Core UPF.                                      |
| **O1**        | SMO ↔ All O-RAN Components     | Used for management, configuration, and orchestration of O-RAN elements by the Service Management and Orchestration layer. |
| **O2**          | SMO ↔ Cloud Infrastructure       | Interface between SMO and cloud platforms for managing virtualized RAN functions and resources.  |

