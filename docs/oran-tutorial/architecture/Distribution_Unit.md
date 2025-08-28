---
sidebar_label: 'Distribution Unit'
title: Distribution Unit
sidebar_position: 4
---

The **Distributed Unit (DU)** is responsible for **real-time baseband processing** and managing the lower layers of the RAN protocol stack. It sits between the Radio Unit (O-RU) and the Central Unit (O-CU) in the O-RAN architecture.

![image_overview](/img/distribution_unit.svg)


### **O-DU (O-RAN Distributed Unit)**

The **Distributed Unit (DU)** is a critical component of the O-RAN architecture responsible for **real-time baseband processing** and managing the **lower layers of the protocol stack**. Positioned between the Radio Unit (O-RU) and the Central Unit (O-CU), it plays a key role in reducing latency and ensuring efficient communication.

#### **Key Responsibilities**
- **Lower Layer Management:** Oversees the lower layers of the protocol stack, including the Upper Physical (PHY), MAC (Medium Access Control), and RLC (Radio Link Control) layers.
- **Data Organization and Management:** Converts data into the appropriate format for efficient radio transmission and reception.
- **Scheduling:** Allocates radio resources and manages user traffic to ensure low-latency performance.
- **HARQ Management:** Handles Hybrid Automatic Repeat Request for error correction and retransmissions.

#### **Connectivity**
- **Direct Interaction with the Radio Unit (O-RU):** Facilitates seamless communication with the RU through the **fronthaul interface** (eCPRI).
- Connects **upward** to the **O-CU** via the **midhaul interface** (F1 interface).

#### **Performance and Deployment**
- **Latency Reduction and Efficiency:** Positioned closer to the RU, the DU optimizes performance by managing time-sensitive protocol layers.
- Typically deployed at **cell sites or edge data centers** for ultra-low latency requirements.
- Supports **virtualized or containerized** implementations for cloud-native deployments.
