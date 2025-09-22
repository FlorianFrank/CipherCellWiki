---
id: configuration
title: Configuration
sidebar_position: 3
---

## Central Configuration using a yml file

All components of the O-RAN/5G testbed can be centrally configured using the YAML file located at:  
**scripts/config/sample_configuration.yml.**

```yaml
environment:
  log_level: "INFO"
  log_dir: "logs"
  build_dir: "."

near_rt_ric:
  build_type: "docker"
  implementation: "oran-sc-ric"
  release: 'i'
  network:
    subnet: 10.0.2.0/24
    dbaas_ip: 10.0.2.12
    e2term_ip: 10.0.2.10
    e2mgr_ip: 10.0.2.11
    submgr_ip: 10.0.2.13
    appmgr_ip: 10.0.2.14
    rtmgr_sim_ip: 10.0.2.15
    xapp_runner_ip: 10.0.2.20

5gc:
  build_type: "docker"
  implementation: "srs"
  ip_addr: 10.53.1.2
  subnet: 10.53.1.0/24

gnb:
  type: "srs"
  build_type: "docker"
  ip_addr:
    e2: 10.0.2.3
    ru_sdr: 172.28.0.2
    cu_cp: 10.53.1.3
  srate: 11.52e6
  tx_gain: 75
  rx_gain: 75

ue:
  - ue:
    implementation: "srs"
    name: "ue1"
    build_type: "docker"
    ue_type: "srsUE"
    ip_addr: 172.28.0.3
    srate: 11.52e6
    usim:
      mode: soft
      algo: milenage
      opc: 63BFA50EE6523365FF14C1F45F88737D
      k: 00112233445566778899aabbccddeeff
      imsi: 001010123456780
      imei: 353490069873319
    gateway:
      netns: ue1
      ip_devname: tun_srsue
      ip_netmask: 255.255.255.0
```

This file allows you to define the setup for all major components, including the **Near-Real-Time RIC**, **5G Core**, *
*gNodeB**, and **User Equipment (UE)**.

### Overview of Configuration Sections

- **environment**  
  Global settings for logging and build directories:
  ```yaml
  environment:
    log_level: "INFO"
    log_dir: "logs"
    build_dir: "."
  ```

All directories are relative to the root directory so where the `./run_all.sh` is located.
> ⚠️ Note: When running the Docker-based setup, set `build_dir` to the root directory (`"."`) to ensure proper mounting
> and container builds.
 
- **near RT RIC**
    
    Configuration settings for the Near-Real-Time RIC implementation:
    
      ```yaml
      near_rt_ric:
        build_type: "docker"
        implementation: "oran-sc-ric"
        release: 'i'
        network:
          subnet: 10.0.2.0/24
          dbaas_ip: 10.0.2.12
          e2term_ip: 10.0.2.10
          e2mgr_ip: 10.0.2.11
          submgr_ip: 10.0.2.13
          appmgr_ip: 10.0.2.14
          rtmgr_sim_ip: 10.0.2.15
          xapp_runner_ip: 10.0.2.20 
      ```
    
    - **build_type:** Specifies whether to use a native or Docker-based build.  
      > ⚠️ Currently, only Docker-based builds are supported.
    
      - **release:** Specifies the ORAN-SC RIC release.  
      >   ⚠️ Currently, only the `'i'` release is supported. Support for additional releases is **work in progress**.
    
      - **implementation:** Specifies the Near-Real-Time RIC implementation.  
      >   ⚠️ **Note:** Currently, only `oran-sc-ric` is supported. Support for `flexRIC` is under development.

- **5G Core**
    
    Specifies the configuration settings for the **5G Core (5GC)**.  
    
    > ⚠️ **Note:** Currently, only the `srsRAN_Project` implementation is supported.
    
    ```yaml
    5gc:
      build_type: "docker"
      implementation: "srs"
      ip_addr: 10.53.1.2
      subnet: 10.53.1.0/24
    ```

- **gNB:**  

    Specifies the configuration settings for the gNodeB (gNB).  
    
    > ⚠️ **Note:** Currently, only the `srsRAN_Project` implementation is supported.
    
    ```yaml
    gnb:
      type: "srs"
      build_type: "docker"
      ip_addr:
        e2: 10.0.2.3
        ru_sdr: 172.28.0.2
        cu_cp: 10.53.1.3
      srate: 11.52e6
      tx_gain: 75
      rx_gain: 75
    ```
      
    - **type:** Specifies the gNB implementation type (e.g., srs).
    - **build_type:** Determines whether to use a native or Docker-based build (docker).
    - **ip_addr:** IP addresses for the gNB interfaces:
      - e2: IP for the E2 interface connecting to the Near-RT RIC
      - ru_sdr: IP for the Radio Unit (RU) software-defined radio interface
      - cu_cp: IP for the CU-CP interface of the gNB
    - **srate:** Sample rate in Hz, determining the baseband processing rate.
    - **tx_gain:** Transmit gain applied to the gNB radio output.
    - **rx_gain:** Receive gain applied to the gNB radio input.


- **UE:** 

    Specifies the configuration settings for the **User Equipment (UE)**.  
    
    > ℹ️️ Multiple UEs are supported, but each UE must have a unique name.
    
 ```yaml 
    - ue:
      implementation: "srs"
      name: "ue1"
      build_type: "docker"
      ue_type: "srsUE"
      ip_addr: 172.28.0.3
      srate: 11.52e6
      usim:
        mode: soft
        algo: milenage
        opc: 63BFA50EE6523365FF14C1F45F88737D
        k: 00112233445566778899aabbccddeeff
        imsi: 001010123456780
        imei: 353490069873319
      gateway:
        netns: ue1
        ip_devname: tun_srsue
        ip_netmask: 255.255.255.0
   ```

- **implementation:** Specifies which UE software stack is used. Currently, `srs` is supported
  - **name:** Unique identifier for the UE instance. This is required when defining multiple UEs to avoid conflicts as
    this name is attached. 
  - **build_type:** Determines the build method: docker (recommended) or native.
    >   ⚠️ Native builds are only supported on Linux systems and may require additional dependencies.
  - **srate (sample rate):** Defines the baseband processing rate. Must match the gNB sample rate to ensure proper signal
    processing and synchronization.
  - **usim:** Sim card parameters for authentication and identification
  - **gateway**: Defines the UE's network interface and namespace
    - netns: Linux network namespace for isolating UE traffic.
    - ip_devname: Virtual interface device name (e.g., tun_srsue).
    - ip_netmask: Subnet mask for UE IP configuration.

### Additional Notes
 - Each UE must have a unique name and ip_addr to avoid conflicts.
 - You can define multiple UEs in the YAML, but currently only the first UE may be fully set up; multi-UE deployment support is planned.
 - Dockerized UEs simplify dependency management and allow multiple instances to run concurrently in isolated namespaces.
 - Ensure that the UE srate matches the gNB sample rate for proper RF and baseband operation.


## Interactive Configuration

An alternative way to set up the demo is via an **interactive console**, which guides you step by step through the configuration process.  
In this mode, only the standard IP settings shown below are applied:

![docker_interconnection_overview](/img/docker_interconnection.svg)
