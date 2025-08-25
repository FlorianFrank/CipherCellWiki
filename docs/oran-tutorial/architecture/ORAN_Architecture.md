---
sidebar_label: 'Architectural Overview'
sidebar_position: 2
---

# Basic Components

Open Radio Access Network (O-RAN) is an evolving framework that emphasizes openness, intelligence, and flexibility in telecom networks. Its architecture spans multiple layers and components, enabling efficient service management and orchestration:  

![image_overview](/img/oran_architecture.svg)

- **O-RU (O-RAN Radio Unit):** Handles radio signal transmission and reception at the physical layer.  
- **O-DU (O-RAN Distributed Unit):** Manages real-time baseband processing and lower-layer protocols.  
- **O-CU (O-RAN Central Unit):** Focuses on higher-layer protocols and splits into two functional parts:
    - **O-CU-CP (Control Plane):** Responsible for non-real-time control and signaling functions.  
    - **O-CU-UP (User Plane):** Manages user data traffic with low latency.  
- **Near-Real-Time RIC:** Provides policy-driven and AI-assisted optimization for RAN functions.  
- **Service Management and Orchestration Framework:** Coordinates lifecycle management, network slicing, and resource allocation across O-RAN components.  

This layered approach enables interoperability, vendor flexibility, and the integration of intelligent control for next-generation mobile networks.

Next, we will describe each component of this architecture in greater detail.
