---
id: installation
title: Installation
sidebar_position: 4
---

This chapter explains how to install all components either **automatically** or **manually**.

## Automated and Guided Installation of All Components

This repository provides a collection of scripts designed to **automate the setup of the srsRAN-based test environment**.  
All necessary scripts can be found in the **`srsRAN_test_environment/scripts`** directory.

By running: 

```bash
cd srsRAN_test_environment/scripts
./build_all.sh
```

This will launch an interactive dialog where you can select various options, such as the build type. For example:

```bash 
$ ./build_all.sh

**************************************************
***** Start Building srsRAN test environment *****
*****             CipherCell                 *****
**************************************************

Docker-based compilation is available for your system: macOS 15.5.
Choose your build type:
1: Docker
2: Native
Enter choice (1 or 2): 1
You chose Docker build.
Compile all components?
Enter choice (y or n): n
Compile sc ric?
Enter choice (y or n): y
Compile core network?
Enter choice (y or n): y
Compile gnb network?
Enter choice (y or n): y
Compile srs ran 4G?
Enter choice (y or n): y
Compile SRC RIC of build type: 1
Patching sc-ric docker-compose.yml for macOS systems
```
The main script relies on helper scripts in **scripts/compile**, which use Python to compile individual components while handling error checking and generating log files. The corresponding logs are stored in **scripts/logs/compile**.  

For Docker-based compilation, the script uses the project’s own Dockerfiles when available. If not, custom Dockerfiles are provided, copied into the project folder, and executed during installation. All Dockerfiles are located in the **docker** directory.

### Additional Notes

- The **srsUE** component, found in the [srsRAN_4G project](https://github.com/srsran/srsRAN_4G), cannot be built locally on macOS due to the lack of TUN/TAP support. It must therefore be compiled and run inside a Docker container.

## Manual Compiliation of all Components

**1. Dockerized near-rt RIC (`oran-sc-ric`)**

To compile and run the near real-time RIC, execute the following commands:

```bash
cd oran-sc-ric
docker compose build
```

**2. 5GC Core (`srsRAN_Project`)**

To compile the 5G core, run:

```bash
cd srsRAN_Project/docker
docker compose build 5gc
```

**3. Compile gNB locally (`srsRAN_Project`)**

> ⚠️ **Warning:** Currently only working on Ubuntu (no macOS support).

To install the gNB locally the following packages must be preinstalled: 

```bash
RUN apt-get update && apt-get install -y \
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
    libsctp-dev \
    libzmq3-dev \
    libzmq5
```

The configuration is done using cmake followed by the compilation extablished by the following parameters: 

```bash
cd srsRAN_Project
mkdir build
cd build

cmake .. -DENABLE_EXPORT=ON -DENABLE_ZEROMQ=ON
make -j"$(nproc)"
```

We set the following parameters: 
    - **ENABLE_EXPORT:** Makes selected libraries available for other software to link to; when ON, libraries are compiled in PIC mode, a dummy target (`srsran_exported_libs`) is created to build all exported libraries at once, and the macro `ADD_TO_EXPORTED_LIBS` can tag libraries for export and installation.
    - **ENABLE_ZEROMQ:** Required for Split-8 configurations. In addition, since our UE uses a ZMQ-based RF driver, ZMQ must be enabled for both the UE and the gNB to allow inter-process communication, control messaging, and integration with external controllers or monitoring applications.

**4. Compile UE locally (`srsRAN_Project`)**

> ⚠️ **Warning:** Currently only working on Ubuntu (no macOS support).

In order to compile the UE locally the following packages must be preinstalled: 

```bash
    apt-get install build-essential \
    cmake \
    git \
    pkg-config \
    libfftw3-dev \
    libzmq3-dev \
    libmbedtls-dev \
    libsoapysdr-dev \
    soapysdr-tools \
    libboost-all-dev \
    libsctp-dev \
    lksctp-tools \
    libconfig++-dev
```

To compile the demo on a local Ubuntu machine run the following command: 

```bash
cd srsRAN_4G
mkdir build
cd build
cmake ..
make -j"$(nproc)"
```