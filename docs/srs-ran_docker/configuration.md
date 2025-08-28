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
### Docker-based setup

In the initial prototype, three separate Docker Compose setups are required:
    - The first hosts all near-real-time RIC components (oran-sc-ric)
    - The second contains the 5G Core (5gc)
    - The third includes the gNB and UE (sran_test_environment)

To separate the different connections, four dedicated networks are defined:  
- **ric_network (10.0.2.0/24):** Connects the Near-Real-Time RIC and the gNB  
- **ran (10.53.1.0/24):** Handles connections between the gNB and the 5G Core  
- **metrics (172.19.1.0/24):** Captures metrics from the 5G Core  
- **gnb_ue (172.28.0.0/24):** Used exclusively within the srsran_test_environment to link the UE and gNB  


![image_overview](/img/docker_interconnection.pdf)

> ⚠️ **Warning:**  
> When running on **ARM-based Macs (Apple Silicon)**, you must explicitly set the platform for each Docker container:  
> 
> ```yaml
> platform: linux/amd64
> ```  
> 
> Failing to do so will cause **oran-sc-ric** and **5gc** to fail during compilation.  

> 💡 **Note:**  
> While the **UE** and **gNB** containers will compile and run without specifying the platform, they perform **extremely slowly**, and the UE will **not be able to establish a connection with the gNB**.


### UE and gNB Configuration

Various aspects of this demo can be customized using configuration files located in **oran-sc-ric/e2-agents/srsRAN/**. We store all customized config files directly in **srsRAN_test_environment/config**

#### gNB Configuration
The gNB requires a configuration file located at **oran-sc-ric/e2-agents/srsRAN/gnb_zmq.yaml**. This file defines several key aspects of the gNB setup, which can be adjusted based on the current needs:
  - **Core network connectivity:** IP addresses for the Access and Mobility Management Function (AMF) are set (AMF: `10.53.1.2`, local CU-CP: `10.53.1.1`).  
  - **RF interface:** Uses the ZMQ driver, a virtual RF interface that allows operation without a physical radio. ZMQ is explained later in this section.

- **ru_sdr:**
  - **device_args:** In the predefined config UE and gNB are executed on the same local machine therefore the following config is set:
    ```yaml
    device_args: tx_port=tcp://127.0.0.1:2000,rx_port=tcp://127.0.0.1:2001,base_srate=11.52e6
    ```
    When running the gNB and UE in separate containers (each with its own IP), this will no longer work. Instead, replace `127.0.0.1` with the respective container IP addresses:
    ```yaml
    device_args: tx_port=tcp://<IP of gNB>:2000,rx_port=tcp://<IP of UE>:2001,base_srate=11.52e6
    ```
    so for exapmple 
    ```yaml
    device_args: tx_port=tcp://172.28.0.2:2000,rx_port=tcp://172.28.0.2:2001,base_srate=11.52e6
    ```

    ✅ **Tip:** You can also set the `tx_port` to `tcp://0.0.0.0:2000` to listen on all available network interfaces, simplifying connectivity when using Docker networks.

    The UE must be configured in the opposite way, as described below.

  - **srate:** Defines the sample rate in MHz used by the RF interface for both the gNB and UE. 
  - **tx_gain (Transmit Gain):** Controls the output power of the transmitted RF signal, expressed in dB, and can be adjusted to optimize coverage, avoid interference, and match the dynamic range of the receiver.
  - **tx_gain (Transmit Gain):** Controls the output power of the transmitted RF signal, expressed in dB. 
  
    > **Note:** Both gain values have no effect in a software-only (simulation) environment.

- **cell_cfg:**
  - **dl_arfcn:** Downlink Absolute Radio-Frequency Channel Number (ARFCN), representing the specific channel used by the base station to transmit to the mobile device.
  - **band:** The band number indicating the frequency range used by the network. in 5G or LET band 3 refers to 1800 MHz
  - **channel_bandwidth_MHz:** Bandwidth of the radio channel, defining the frequency range used by the network for transmitting and receiving data.
  - **common_scs:** In 5G the radio spectrum is divided into subcarriers. The spacing between these subcarriers determines how the signal is structured in frequency and time. 
  `common_src: 15` means each subcarrier is 15 kHz apart, which is the default for low-frequency bands (FR1, below 6 GHz) in NR.
  - **plmn:** The PLMN (Public Land Mobile Network) identifies the country and operator to which the gNB belongs. In this example, `plmn: 00101` consists of:  
    - **MCC (Mobile Country Code):** `001`, identifying the country  
    - **MNC (Mobile Network Code):** `01`, identifying the operator
  - **tac:** Tracking Area Code identifying a group of cells. Used for device location tracking, paging, mobility, and handovers. Must match the core network (AMF) configuration.


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

