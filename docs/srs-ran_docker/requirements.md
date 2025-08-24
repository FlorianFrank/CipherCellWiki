---
id: required-repositories
title: Prequesites
sidebar_position: 1
---

This demo relies on a modular set of components that together provide a complete network simulation and control environment. Each component serves a distinct role:  

- **Control Layer**: Manages orchestration, coordination, and communication between network applications and the underlying radio network. Responsible for exposing interfaces for monitoring and control.  
- **Radio Access Network (RAN) Layer**: Implements the core 4G/5G radio protocol stacks (L1/L2/L3) and provides flexible splitting between centralized and distributed units. Handles user-plane and control-plane traffic.  
- **User Equipment (UE) Layer**: Simulates end-user devices, providing realistic traffic generation, protocol compliance, and connectivity testing for the RAN.  
- **Enhancement Layer**: Adds optional advanced capabilities such as userspace packet processing, custom monitoring, or experimental extensions to the RAN stack, enabling research and prototyping.  

Together, these components allow developers to simulate, monitor, and control a complete mobile network environment in a flexible, software-defined manner.

---

## 📦 Required Repositories

### ORAN SC RIC (Docker)
  [**Link to Github Repository**](https://github.com/srsran/oran-sc-ric)  
  - **Description**:
    - Minimal O-RAN SC Near-Real-Time RIC (i-release)  
    - Deployable as a multi-container Docker app (no Kubernetes/Helm)  
    - Includes example xApps for monitoring (E2SM_KPM) and control (E2SM_RC)  
    - Key services: e2term, e2mgr, submgr, appmgr, python_xapp_runner (via RIC Message Router)  

### srsRAN Project (5G RAN) - Core Network & gNB
  [**Link to Github Repository**](https://github.com/srsran/srsRAN_Project)

  - **Description**:
    - Complete 5G RAN solution with ORAN-native CU/DU  
    - Implements L1/L2/L3 stacks, portable across x86 and ARM  
    - Supports DU/CU split, with CU-CP (control plane) and CU-UP (user plane)  

### UE: srsRAN_4G
  [**Link to Github Repository**](https://github.com/srsran/srsRAN_4G)  

  - **Description**:
    - Open-source **4G software radio suite** developed by SRS  
    - Includes **srsUE** (full-stack 4G UE with prototype 5G features), **srsENB** (full-stack 4G eNodeB), and **srsEPC** (lightweight 4G core: MME, HSS, S/P-GW)  

### srsRAN Project with jbpf extensions
  [**Link to Github Repository**](https://github.com/xfoukas/srsRAN_Project_jbpf)  

  - **Description:**:
    - Extends **srsRAN Project** with support for the **jbpf userspace eBPF framework**  
    - Adds advanced **eBPF-based userspace features** to the srsRAN RAN stack


## Clone all projects:

Execute the following commands in order to checkout all repositories manually.

```bash
mkdir srs_ran_docker_demo
cd srs_ran_docker_demo

git clone git@github.com:srsran/oran-sc-ric.git
git clone git@github.com:srsran/srsRAN_Project.git
git clone git@github.com:srsran/srsRAN_4G.git
git clone git@github.com:xfoukas/srsRAN_Project_jbpf.git
```

or you can simply checkout our repository: 

```bash
git clone git@github.com:CipherCell-DEV/srsRAN_test_environment.git
git submodule update --init --recurcive
```

## Required dependencies when compiling locally (without Docker)

Install the following packages to compile the srsRAN project on Linux (tested on Ubuntu):

```bash
sudo apt-get update
sudo apt-get install -y \
    build-essential \
    cmake \
    libdw-dev \
    binutils-dev \
    libdwarf-dev \
    libelf-dev \
    pkg-config \
    libfftw3-dev \
    libyaml-cpp-dev \
    libmbedtls-dev \
    doxygen \
    libsctp-dev
```

when using MAC OS the following packages are required, which can be installed for example using Homebrew

```bash
brew install mbedtls
brew install yaml-cpp
brew install libusrsctp
```

**MAC OS Support is experimental and not fully tested!**