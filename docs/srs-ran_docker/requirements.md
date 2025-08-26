---
id: required-repositories
title: Prequesites
sidebar_position: 2
---

This page describes all required steps and packages before installing the test environment.  
We tested our systems on **Ubuntu** and **macOS**.

Tested versions:
- Ubuntu **24.04**
- macOS **Sequoia 15.5**

---

# Install Necessary Packages

Below we list all the necessary packages required for either a **dockerized** or **standalone** execution.

---

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

> ⚠️ **Note**: Relogin is required after running this command.

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

---

### Required packages for compiling on Ubuntu without Docker

Install the following packages to compile the *srsRAN project* on Linux (tested on Ubuntu):

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

### Terminal Management with tmux


To run our example, six terminal windows are required. To organize them efficiently, we use the **tmux** package:

```bash
sudo apt-get install tmux 
```
---

### Installation on macOS

There are two ways to install Docker on macOS:

#### 1. Install via Homebrew

```bash
brew install --cask docker
```

#### 2. Install via Official Site

Download and install Docker Desktop directly from the official site:
[Docker Desktop for Mac](https://docs.docker.com/desktop/install/mac/)

#### Additional Required Packages

When using macOS, the following packages are required. They can be installed with Homebrew:

```bash
brew install mbedtls
brew install yaml-cpp
brew install libusrsctp
brew install tmux
```
> ⚠️ **Note**: macOS support is experimental and not fully tested.
