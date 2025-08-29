---
id: open_fronthaul_split
title: Open Fronthaul Split
sidebar_position: 6
---

In traditional 

Functional splitting in mobile networks was introduced to make the Radio Access Network (RAN) more flexible, scalable, and cost-efficient. In early cellular deployments, the Baseband Unit (BBU) and Remote Radio Head (RRH) were integrated into a single unit at each cell site, tightly coupled and co-located.

As networks evolved, the BBU and RRH were separated to enable more efficient site deployment and maintenance. To further reduce costs and improve coordination, operators adopted the Centralized RAN (C-RAN) architecture, where multiple BBUs are pooled in a central location and connected to distributed RRHs via high-capacity fronthaul links. This approach allows resource sharing, easier upgrades, and improved coordination between cells, though it introduces a dependency on robust fronthaul connectivity.

With the advent of 5G and Open RAN, the BBU itself was further disaggregated into the Distributed Unit (DU) and Centralized Unit (CU). This functional split allows latency-sensitive functions (handled by the DU) to be placed closer to the radio sites, while higher-layer control and management functions (CU) are centralized in data centers. The DU–CU architecture enables cloudification, multi-vendor interoperability, and advanced capabilities such as massive MIMO and network slicing.

![split_options](/img/split_history.svg)

However, the distribution of functionalities between the DU and CU can be configured according to the network stack shown below, resulting in different allocations between these two units and enabling various split options. In the **split option** illustrated in this figure, the RRC is assigned to the CU, while the remaining protocol functions are handled by the DU and RU. However, in a higher split, such as split option 5, all layers up to Low MAC are assigned to the RU, while the High MAC and RRC layers are handled by the CU.

![split_options](/img/split_option1.svg)



Functional split not a new concept. When 3G was introduced a radio unit was split into two componetnts namely 
    - Radio Unit/Radio Head (RRH) contained all radio functions positioned close to the antenna
    - BaseBand Unit: baseband processing functions
    - Each BBU and RRH unit were connected using a new network segment called front haul




Weghaun
Defines for example a UI is connected to which cell and also which technology is used 5G, 4G etc and also which band which component carrier, etc. 

- Custimization strategy is necessary allowing operatiors to specifiy different objectives of optimization network UE performance
- Flexible optimization and configuration of polocies 
