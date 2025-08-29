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


More detail on the protocol stack is provided in 

![image_overview](/img/protocol_detail.svg)