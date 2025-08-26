---
id: overview
title: Overview
sidebar_position: 1
---

This demo relies on a modular set of components that together provide a complete network simulation and control environment. Each component serves a distinct role. THe components are illustrated in the figure below:


![image_overview](/img/experimental_setup_overview.pdf)

- It contains:
    - **Near-Real-Time RIC:** As described in the O-RAN tutorial, the Near-RT RIC is a key component of the O-RAN architecture whose primary purpose is to control and optimize the RAN (gNB) in near real-time. It performs tasks such as dynamic RAN optimization, radio resource management, policy enforcement, and the execution of xApps.
    - **5G Core Network:** Is the central component of a 5G network, responsible for control, management, and routing of both signaling and user data. It handles tasks such as subscriber authentication, session and mobility management, policy enforcement, and user plane data forwarding, providing the essential backbone that connects the RAN (gNB) to external networks and services.
    - **gNodeB (gNB):** The gNB is the 5G base station responsible for providing the radio interface between the UE and the 5G Core. It handles tasks such as radio resource management, scheduling, handovers, and data forwarding, and is typically split into a Central Unit (CU) for control-plane functions and a Distributed Unit (DU) for real-time user-plane processing.
    - **User Equipment (UE):** The UE  is the device used by the end user to access the 5G network. It implements the full 5G protocol stack and is responsible for connecting to the gNodeB, managing radio communication, handling mobility, and exchanging user data. Examples include smartphones, IoT devices, or software-based implementations such as srsUE (used in this demo).

### Repositories

All these functionalities are organized across the following repositories:
    - [**oran-sc-ric**](https://github.com/srsran/oran-sc-ric): 
      - *Description*:
        - Minimal O-RAN SC Near-Real-Time RIC (i-release)  
        - Deployable as a multi-container Docker app (no Kubernetes/Helm)  
        - Includes example xApps for monitoring (E2SM_KPM) and control (E2SM_RC)  
        - Key services: e2term, e2mgr, submgr, appmgr, python_xapp_runner (via RIC Message Router)  
    - [**srsRAN_Project**](https://github.com/srsran/srsran_project): 
      - *Description*:
            - Complete 5G RAN solution with ORAN-native CU/DU  
            - Implements L1/L2/L3 stacks, portable across x86 and ARM  
            - Supports DU/CU split, with CU-CP (control plane) and CU-UP (user plane)  
    - [**srsRAN_Project**](https://github.com/srsran/srsran_project): 
      - *Description*:
            - Complete 5G RAN solution with ORAN-native CU/DU  
            - Implements L1/L2/L3 stacks, portable across x86 and ARM  
            - Supports DU/CU split, with CU-CP (control plane) and CU-UP (user plane)  
    - [**srsRAN_4G**](https://github.com/srsran/srsRAN_4G)  
        - *Description*:
            - Open-source 4G software radio suite developed by SRS  
            - Includes srsUE (full-stack 4G UE with prototype 5G features), srsENB (full-stack 4G eNodeB), and srsEPC (lightweight 4G core: MME, HSS, S/P-GW)  
    - [**srsRAN Project with jbpf extensions**](https://github.com/xfoukas/srsRAN_Project_jbpf)
      - *Description:*
            - Extends srsRAN Project with support for the **jbpf userspace eBPF framework**  
            - Adds advanced eBPF-based userspace features to the srsRAN RAN stack
