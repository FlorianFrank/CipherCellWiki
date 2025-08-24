---
id: installation
title: Installation
sidebar_position: 3
---

This chapter explains how to install all components either **automatically** or **manually**.

## Automated and Guided Installation of All Components

If you haven’t cloned the repository yet, run:

```bash
git clone https://github.com/CipherCell-DEV/srsRAN_test_environment
cd srsRAN_test_environment
git submodule update --init --recursive
```

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