---
id: open_fronthaul_split
title: Open Fronthaul Split
sidebar_position: 6
---

Functional splitting in mobile networks was introduced to make the Radio Access Network (RAN) more flexible, scalable, and cost-efficient, and it is not a new concept. When 3G networks were introduced, the radio unit was divided into two components: the Remote Radio Head (RRH), which contained all radio functions and was positioned close to the antenna, and the Baseband Unit (BBU), which handled baseband processing functions. Each BBU and RRH was connected via a dedicated network segment known as the fronthaul, laying the foundation for more advanced and flexible RAN architectures.

As networks evolved, the BBU and RRH were separated to enable more efficient site deployment and maintenance. To further reduce costs and improve coordination, operators adopted the Centralized RAN (C-RAN) architecture, where multiple BBUs are pooled in a central location and connected to distributed RRHs via high-capacity fronthaul links. This approach allows resource sharing, easier upgrades, and improved coordination between cells, though it introduces a dependency on robust fronthaul connectivity.

With the advent of 5G and Open RAN, the BBU itself was further disaggregated into the Distributed Unit (DU) and Centralized Unit (CU). This functional split allows latency-sensitive functions (handled by the DU) to be placed closer to the radio sites, while higher-layer control and management functions (CU) are centralized in data centers. The DU–CU architecture enables cloudification, multi-vendor interoperability, and advanced capabilities such as massive MIMO and network slicing.

![split_options](/img/split_history.svg)

However, the distribution of functionalities between the DU and CU can be configured according to the network stack shown below, resulting in different allocations between these two units and enabling various split options. In the **split option** illustrated in this figure, the RRC is assigned to the CU, while the remaining protocol functions are handled by the DU and RU. However, in a higher split, such as split option 5, all layers up to Low MAC are assigned to the RU, while the High MAC and RRC layers are handled by the CU.

![split_options](/img/split_option1.svg)

The selection of the functional splits has high influence on **latency, bandwidth and scalability**. 

- **High Layer Split:** Splits close to the RF significantly reduce the bandwidth requirements between components but make the RRH more expensive, as many functions must be executed locally. Implementing CoMP in this scenario is extremely complex. This configuration is suitable for low-latency and edge computing scenarios.
- **Low Layer Split:** Splits close to the RRC allow the construction of cost-effective RRHs and are ideal for CoMP. However, they require high bandwidth between components and impose tight latency constraints, making them suitable for virtualized RAN, DU deployments, and fronthaul with high-capacity fiber.
- **Double Split:** A split in the middle of the network stack represents a trade-off between high- and low-layer splits, balancing cost, latency, and bandwidth requirements.


#### Why implement different split architectures?
- Flexible adoption: Supports a variety of hardware and software implementations.
- Improved coordination and load management: Enables efficient resource allocation across the network.
- Adaptation to different use cases: Allows customization for scenarios such as low-latency services, edge computing, or massive MIMO.
- Virtualization and multi-vendor support: Facilitates network virtualization and avoids vendor lock-in.

#### Common Splits

![split_options](/img/common_functional_splits.svg)

## Common Functional Splits in 4G/LTE & 5G/NR

- **4G/LTE Split 8**  
  - Split between the Radio Unit (RU) and Baseband Unit (BBU), at the I/Q sample level.  
  - **Use case:** Requires fronthaul high-bandwidth, low-latency fronthaul (e.g., CPRI). Mostly used in traditional LTE C-RAN deployments.

- **5G/NR Split 8**  
  - Similar to LTE split 8 — division at the RF/PHY boundary (I/Q samples).  
  - **Use case:** Provides full centralization of baseband processing, but needs very demanding fronthaul (not optimal for many 5G deployments).

- **5G/NR Split 2**  
  - Split between Packet Data Convergence Protocol (PDCP) and Radio Link Control (RLC).  
  - **Use case:** Often used in dual connectivity or when coordinating between centralized and distributed units. More tolerant of latency, good for non-ideal backhaul.

- **5G/NR Split 7.x**  
  - A family of splits within the PHY layer (e.g., 7.1, 7.2, 7.3) that separate higher PHY from lower PHY functions.  
  - **Use case:** Balance between centralization and fronthaul demand. Especially popular (Split 7.2) in O-RAN architectures since it allows flexible deployment with moderate fronthaul requirements.

- ### 5G Split 7.2x (O-RAN Standard)

    - Splits PHY into high-PHY (in DU) and low-PHY + RF (in RU).  
    - **Why use it:** Lighter fronthaul load than Split 8, but still supports advanced features (MIMO, beamforming).  
    - **Fronthaul:** Uses eCPRI over Ethernet, ~100 μs latency budget.  
    - **Adoption:** De facto industry standard (O-RAN Alliance, major vendors).
    - **The "x":** Refers to **where precoding happens** — e.g., in 7.2a precoding is done in the DU, in 7.2b it’s in the RU.  
        - 7.2a = centralized intelligence, heavier fronthaul.
        - 7.2b = lighter fronthaul, smarter/more complex radios.

