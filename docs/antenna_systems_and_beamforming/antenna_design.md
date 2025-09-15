---
id: intro_antenna
title: Basics of Antenna Design
sidebar_position: 1
---

An antenna is a device that uses a radiating element to convert electrical signals into electromagnetic waves and vice versa.
A very simple antenna is shown in the following figure in (a).

![beamforming1](/img/antennas_beams.svg)

As shown in the figure, the beam becomes more powerful and directive when two radiating elements are used and supplied with the same signal, as illustrated in (b) and (c). Even when four radiating elements are employed, they are still considered a single antenna because each element receives the same signal.

The directivity of a beam can be controlled by varying the signals applied to each radiating element. By adjusting the amplitudes and phases individually, the beam can be steered in different directions.

For each main beam also **side lobes** appear. These are secondary peaks in an antenna’s radiation pattern that appear away from the main beam, often causing unwanted interference. Side lobes can be reduced or shaped by adjusting the amplitudes and phases of the signals applied to each radiating element, and their magnitude decreases as more radiating elements are combined.

By using modules with different antennas, a technique called spatial multiplexing allows multiple beams to be transmitted simultaneously, for example to different user equipment, as shown in Figure 1 (e).
The number of beams is limited by the number of separate radiating elements, while the power per beam decreases as the number of beams increases.

![beams_phase_shift](/img/beams_phase_shift.svg)

Furthermore, since it is often too expensive to provide a separate signal to each radiating element, so-called phased arrays are used. For this reason, phase shifters are employed to control the beam direction by adjusting the phase of the signal at each element, while providing the same signal to each phase shifter. This design in shown in Figure 2 (d).

In addition to directivity and multiplexing, **polarization** is crucial in antenna design. It describes the orientation of the electric field, which can be linear, circular, or elliptical. Matching polarization maximizes signal strength, while mismatches cause losses. Different polarizations also enable multiplexing, allowing two data streams on the same frequency with orthogonal orientations.