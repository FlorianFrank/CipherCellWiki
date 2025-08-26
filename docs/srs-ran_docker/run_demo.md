---
id: run_demo
title: Execute Demo
sidebar_position: 5
---

After compiling the demo, you can start the components either **manually** or **automatically** using our provided script.

### Start the Demo Automatically

You can launch the entire demo with a single command:

```bash
cd srsRAN_test_environment/scripts
./run_all.sh
```

This script sets up a tmux environment with five terminals, each starting one of the core services:
    - Near-Real-Time RIC
    - 5G Core Network
    - gNB
    - User Equipment (UE)
    - Sample xApp

Next, we explain how to start the services manually.

### Manually Start the Demo

When starting the demo manually, you need **six separate terminal windows**, as shown in the figure below.

##### 1. O-RAN Near-Real-Time RIC

Start the prebuilt Docker Compose setup:

```bash
cd srsRAN_test_environment/oran-sc-ric
docker compose up
```
##### 2. 5G Core Network

Start the 5G core network using:

```bash
cd srsRAN_test_environment/docker
docker compose up --build 5gc
```

##### 3. Start the gNB

Run the gNB application:

```bash
cd srsRAN_test_environment/srsRAN_Project/build/apps/gnb
sudo ./gnb -c srsRAN_test_environment/oran-sc-ric/e2-agents/srsRAN/gnb_zmq.yaml
```

##### 4. Start the User Equipment (UE)

First, create the required network namespace:

```bash
sudo ip netns add ue1
```

Then start the UE:

```bash
cd srsRAN_test_environment/srsRAN_4G/build/srsue/src
sudo ./srsue srsRAN_test_environment/oran-sc-ric/e2-agents/srsRAN/ue_zmq.conf
```

##### 5. Start an xApp

Launch a simple xApp:

```bash
docker compose exec python_xapp_runner ./simple_xapp.py
```

##### 6. Generate Sample Traffic

To generate traffic, run:

```bash
sudo ip netns exec ue1 ping -s 60008 -i 0.1 10.45.1.1
```

You should now see the traffic in the terminal where the xApp is running.

![image_overview](/img/terminal_output_ubuntu.pdf)