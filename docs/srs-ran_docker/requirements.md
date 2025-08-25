---
id: required-repositories
title: Prequesites
sidebar_position: 2
---

This page describes all required steps and required packages before installing the test environment.
We tested our systems on Ubuntu and macOS Systems. 

More specifically the following versions are tested:
  - Ubuntu 24.04
  - macOS Sequoia 15.5

## Install necessary packages

Next, we list all the necessary packages required for either a dockerized or standalone execution.

### Installing Docker on Ubuntu

To set up **Docker** and **Docker Compose** on Ubuntu, follow these steps:

**1. Install Prerequisites**
```bash
sudo apt-get update && sudo apt-get install -y \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
```

**2. Add Docker’s Official GPG Key**


```bash
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | \
    sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
```

**3. Set Up the Docker Repository**


```bash
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] \
  https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

**4. Install Docker Engine and Plugins**

```bash
sudo apt-get update && sudo apt-get install -y \
    docker-ce \
    docker-ce-cli \
    containerd.io \
    docker-compose-plugin
```

**5. Add Current User to Docker Group**

Reloggin is necessary!

```bash
sudo usermod -aG docker $USER
```

**6. Install Latest Docker Compose (Standalone Binary)**


```bash
DOCKER_COMPOSE_VERSION=$(curl -s https://api.github.com/repos/docker/compose/releases/latest | \
    grep -Po '"tag_name": "\K[^\"]+')

sudo curl -L \
    "https://github.com/docker/compose/releases/download/${DOCKER_COMPOSE_VERSION}/docker-compose-$(uname -s)-$(uname -m)" \
    -o /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose
```

**7. Verify Installation**


```bash
docker --version
docker-compose --version
```

### Required packages for compiling on Ubuntu without Docker

To run **srsRAN** install the following packages:

```bash
sudo apt-get install cmake make gcc g++ pkg-config libfftw3-dev libmbedtls-dev libsctp-dev libyaml-cpp-dev
```


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