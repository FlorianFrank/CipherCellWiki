---
id: massive_mimo
title: MIMO and Massive MIMO
sidebar_position: 5
---

Wireless systems can operate in different antenna configurations depending on the number of transmit and receive
antennas. The most common modes are:

- **SISO (Single-Input Single-Output):** One transmit antenna and one receive antenna. This is the simplest
  configuration.
- **SIMO (Single-Input Multiple-Output):** One transmit antenna and multiple receive antennas. Provides **receive
  diversity** to improve reliability.
- **MISO (Multiple-Input Single-Output):** Multiple transmit antennas and one receive antenna. Provides **transmit
  diversity** to improve signal strength.

![antenna_configs](/img/antenna_configs.svg)

**MIMO (Multiple-Input Multiple-Output)** is a wireless communication technology that employs **multiple antennas at
both
the transmitter and receiver**. This technique offers several advantages:

- **Increased Gain:** Higher signal-to-noise ratio (SNR) due to combining multiple received signals.
- **Improved Reliability:** Multiple signals can traverse different paths, increasing the probability of successful
  transmission.
- **Higher Link Capacity:** Parallel data streams increase throughput and overall spectral efficiency.

## Massive MIMO

**Massive MIMO** extends the MIMO concept by using **very large numbers of antennas (tens or hundreds) at the base
station** to dramatically increase capacity, energy efficiency, and spatial multiplexing.

In such systems the transmission and reception can be expressed as:

$$
y = F(H W x + n)
$$

Where:

- **$x$:** The vector of data symbols transmitted to a user.
- **$W$:** The **precoding (or beamforming) matrix** applied at the transmitter to direct energy from the many
  antennas toward each user, reducing interference.
- **$H$:** The **large channel matrix**, describing how each of the many transmit antennas couples to each receive
  antenna/user (includes fading, path loss, and phase).
- **$n$:** Additive noise at the receivers.
- **$F(\cdot)$:** The **receiver-side processing function** (e.g., detection, equalization, or decoding) applied to
  the composite signal to recover the transmitted data.
- **$y$:** The received decoded signal.

Thus, $F(HWx + n)$ represents the **MIMO receiver taking the precoded, channel-affected, noisy signal and
processing it to separate and detect the user data streams**. Because of the large number of antennas, \(H\)
and $W$ are much larger than in standard MIMO, enabling higher spatial multiplexing gains and improved interference
suppression.


To **increase bandwidth**, one approach is to use a **higher carrier frequency**.  
Operating at higher frequencies reduces the physical size of antennas but also limits the power that can be applied to each antenna.  
Consequently, **more transmitting and receiving antennas** are required to maintain link quality.  

This results in **narrower beams**, which help reduce **multi-user interference** but also decrease **multipath diversity**.  
As a result, the system must **accurately track users’ positions** and requires **more RF chains**, making the circuit
board design more complex.

Let the total system bandwidth be constrained as $ W $, which represents the maximum available spectral width for
transmission. 


**Analog beamforming** is a technique in which signals from multiple antenna elements are combined in the **analog
domain** (before analog-to-digital conversion) using phase shifters or variable gain amplifiers.  
This allows the antenna array to form a directional beam with a single RF chain, reducing hardware complexity and power
consumption at the cost of flexibility compared to digital beamforming.
