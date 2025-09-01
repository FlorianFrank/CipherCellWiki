---
id: protocol_stack
title: Protocol Stack
sidebar_position: 2
---

Splitting control-plane processing from user-plane processing allows for more flexible and efficient network deployment. The protocol stack defines the functional entities standardized by the O-RAN Alliance, and these components—O-CU-CP, O-CU-UP, and O-DU—are collectively referred to as E2 nodes. Their roles and definitions are specified by the O-RAN Alliance to ensure interoperability and modularity across vendors.

The PHY is split between the O-RU (lower PHY for RF processing) and O-DU (higher PHY), allowing fast signal processing near the radio and centralizing less time-sensitive functions.

All O-RAN components are connected to the 5G core network (IP core). The**O-CU-CP** connects to the **AMF (Access and Mobility Management Function)** via the **N2 interface**, allowing the AMF to handle UE registration, authentication, mobility management, and session management.
Meanwhile, the **O-CU-UP** connects to the UPF (User Plane Function) via the N3 interface, handling user data routing, forwarding, and QoS enforcement.

Furthermore, the O-CU-CP, O-CU-UP, and O-DU are connected to the Near-Real-Time RIC using an **E2 Interface,** as described in the architectural overview.

![image_overview](/img/oran_protocol_stack.svg)


However, the above-mentioned protocols only offer a **coarse-grained overview**.  
To enable a more **fine-grained analysis**, the protocol stack is further structured as presented in the subsequent figure.


![image_overview](/img/protocol_detail.svg)

Within the **PDCP (Packet Data Convergence Protocol) layer**, the processing is further subdivided into five distinct stages:

- **Retransmission Buffer**: Stores PDCP Protocol Data Units (PDUs) for potential retransmission, ensuring reliability in acknowledged modes.  
- **Numbering**: Assigns sequence numbers to PDUs to support in-order delivery and duplicate detection.  
- **Header Compression**: Reduces protocol overhead (e.g., IP headers) using schemes such as Robust Header Compression (ROHC), thereby improving spectral efficiency.  
- **Ciphering**: Applies encryption to protect the confidentiality of user plane and control plane data.  
- **Add PDCP Header**: Appends the PDCP-specific header to each PDU, carrying information such as sequence numbers and control fields.

The **RLC (Radio Link Control)** layer is subdivided into a **High RLC** and a **Low RLC** part.  
Together, these sublayers host the following functional components:

- **Transmission Buffer**: Stores incoming PDCP SDUs awaiting segmentation and transmission.  
- **Segmentation**: Splits larger PDCP SDUs into smaller RLC PDUs that can be efficiently transmitted over the MAC layer.  
- **Add RLC Header**: Appends RLC-specific headers carrying sequence numbers and control information to each PDU.  
- **RLC Control**: Manages operational modes (Acknowledged, Unacknowledged, Transparent), sequence numbering, and delivery guarantees.  
- **Retransmission Buffer**: Retains transmitted PDUs for potential retransmission in Acknowledged Mode (AM) to ensure reliability.


### Massive MIMO