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