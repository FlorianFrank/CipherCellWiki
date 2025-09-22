---
id: prerequisites
title: Prerequisites
sidebar_position: 2
---

Before getting started, make sure you have the following installed on your system:

### Required Packages (for a fully Docker-based installation)
  - Git  
  - Python 3  
  - Docker  
  - Docker Compose  

> ⚠️ Ensure Docker is running and you have permission to execute Docker commands.

### Required Packages for Native Installation

Native compilation is currently supported **only for UEs and the gNB**, and only on **Linux systems**.  
On Ubuntu, you can install the required dependencies as follows:

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


## Clone the Repository

Start by cloning the repository and navigating into the project directory:

```bash
git clone git@github.com:CipherCell-DEV/oran-deploy-manager.git
cd oran-deploy-manager