---
id: configuration
title: Configuration
sidebar_position: 3
---

If you haven’t cloned the repository yet, run:

```bash
git clone https://github.com/CipherCell-DEV/srsRAN_test_environment
cd srsRAN_test_environment
git submodule update --init --recursive
```

## UE and gNB Configuration

Various aspects of this demo can be customized using configuration files located in **oran-sc-ric/e2-agents/srsRAN/**.

#### gNB Configuration
The gNB requires a configuration file located at **oran-sc-ric/e2-agents/srsRAN/gnb_zmq.yaml**. This file defines several key aspects of the gNB setup, which can be adjusted based on the current needs:
  - **Core network connectivity:** IP addresses for the Access and Mobility Management Function (AMF) are set (AMF: `10.53.1.2`, local CU-CP: `10.53.1.1`).  
  - **RF interface:** Uses the ZMQ driver, a virtual RF interface that allows operation without a physical radio.  
  - **Cell configuration and logging:** Defines the NR cell parameters, logging options, and PCAP capture settings.  
  - **RIC connectivity:** IP of the RIC is `10.0.2.10` and the bind IP for the local gNB agent is `10.0.2.1`.  
  - **Metrics:** Periodic reporting is enabled every 1000 ms for DU, CU-UP, and CU-CP.  

This configuration file is copied during setup to **srsRAN_Project/configs** to make it accessible within the Docker environment.

#### UE Configuration

A second configuration file can be found at **oran-sc-ric/e2-agents/srsRAN/ze_zmq.conf**. This file defines the configuration of the User Equipment (UE).  

Key settings include:  
- **Baseband sampling rate:** 11.52 MHz (`srate`).  
- **Number of antennas:** 1 (`nof_antennas`).  
- **NR bands:** Band 3 (`bands = 3`) with one active carrier (`nof_carriers = 1`).  
- **Packet capture:** Can be enabled in the `[pcap]` section.  
- **Logging:** Configurable in the `[log]` section.  
- **GUI:** Can be run in graphical (GUI) or console mode.
- **USIM:** Software-based SIM specifying the UE’s identity (IMSI/IMEI) and authentication keys using the Milenage algorithm.


Similar to the gNB configuration file, this UE configuration file is copied to **srsRAN_4G/configs** to make it accessible within the Docker environment.

