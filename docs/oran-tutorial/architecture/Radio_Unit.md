---
sidebar_label: 'Radio Unit'
title: Radio Unit
sidebar_position: 3
---

The **Radio Unit (RU)** is the component responsible for handling the **radio frequency (RF) functions** in the O-RAN architecture. It operates at the edge of the RAN and directly interfaces with user equipment (UE) over the air interface.

![image_overview](/img/radio_unit.pdf)

#### **Key Responsibilities**
- **RF Transmission and Reception:** Converts digital baseband signals from the Distributed Unit (O-DU) into analog RF signals for over-the-air transmission, and vice versa.
- **Beamforming and Filtering:** Performs antenna-related processing, including beamforming for advanced MIMO configurations.
- **Synchronization:** Maintains timing accuracy required for 5G and other advanced features.

#### **Connectivity**
- Connects to the **O-DU** via the **fronthaul interface** (commonly based on eCPRI).
- Works under strict latency constraints to ensure real-time performance.

#### **Deployment Context**
- Typically installed near antennas on towers or rooftops to minimize signal loss.
- Can be implemented as **open hardware** in compliance with O-RAN standards, supporting interoperability across vendors.
