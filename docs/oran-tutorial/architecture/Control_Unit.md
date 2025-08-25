---
sidebar_label: 'Central Unit'
title: Central Unit
sidebar_position: 5
---

The **Central Unit (O-CU)** is responsible for handling the **higher layers of the RAN protocol stack**, focusing on both control and user plane functions. It sits above the Distributed Unit (O-DU) and provides a centralized point for managing signaling, mobility, and user data.

![image_overview](/img/control_unit.svg)

- **Control Plane (O-CU-CP):** Manages non-real-time control functions such as session setup, handovers, and signaling.
- **User Plane (O-CU-UP):** Handles user data forwarding with low latency and high efficiency.
- **Centralized Management:** Facilitates network flexibility, easier orchestration, and interoperability between vendors.


**O-CU-CP:** Manages control signaling between the network and user equipment, handling tasks such as connection setup, mobility management, and security.

**O-CU-UP:** Handles packet forwarding, QoS enforcement, and traffic routing, ensuring efficient data transmission to and from the core network.




#### **Key Responsibilities**


#### **Connectivity**
- Connects **downward** to the **O-DU** via the **midhaul interface** (F1 interface).
- Supports integration with **Near-RT RIC** and higher-layer orchestration for advanced network control.

#### **Deployment Context**
- Typically deployed in **regional or central data centers**, enabling centralized control over multiple DUs.
- Supports **virtualized or cloud-native implementations**, improving scalability and automation.
