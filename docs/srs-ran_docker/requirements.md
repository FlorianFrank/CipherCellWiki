---
id: required-repositories
title: Prequesites
sidebar_position: 2
---

This page describes all required steps and required packages before installing the test environment.
We tested our systems on Ubuntu and MACOS Systems. More specifically the following versions are tested:





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