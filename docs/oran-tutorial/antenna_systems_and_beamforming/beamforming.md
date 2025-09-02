---
id: beamforming
title: Beamforming 
sidebar_position: 3
---

**Beamforming** is a signal processing technique used in modern wireless communication systems to direct radio signals more precisely toward specific users or devices, instead of broadcasting uniformly in all directions.  

In traditional antenna systems, signals are radiated omnidirectionally, which leads to interference and inefficient use of power. Beamforming, by contrast, uses an array of antennas where the signal phases and amplitudes are adjusted (constructive and destructive interference) to form a **beam** that is steered toward a target direction.  

The following figures shows the basic funcitonallity of beamforming

![beamforming1](/img/beam_forming1.svg)

A sender with a fixed position broadcasts a signal to be received by a device with two antennas, **ant1** and **ant2**. These antennas are located at different distances, `d_ant1` and `d_ant2`, from the sender. Since the distance `d_ant2` is shorter, **ant2** receives the signal first.  

When the signals are processed by a digital circuit and summed together, they can cancel each other out. This occurs when the distance between the antennas, `Δd`, is equal to half the period of the received signal. In this case, the resulting beam pattern exhibits **zero energy** in that direction.


![beamforming1](/img/beam_forming2.svg)

By adding a delay to the processing of delay of `Δt` the two waveforms of the antenna are synchronized leading to beam pattern of double the energy of a single received signal



### Key Benefits
- **Improved coverage:** Stronger signals at the receiver, especially at the cell edge.  
- **Higher capacity:** Multiple beams can serve different users simultaneously (spatial multiplexing).  
- **Reduced interference:** Unwanted directions can be suppressed, leading to better overall network performance.  
- **Energy efficiency:** Concentrates power where it is needed, reducing waste.  
