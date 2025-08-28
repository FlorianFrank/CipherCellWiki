import React from 'react';

export default function AbbreviationsPanel() {
  const abbreviations = [
    { abbr: 'RIC', full: 'Intelligent Controller', description: 'Controller in RAN architecture' },
    { abbr: 'RAN', full: 'Radio Access Network', description: 'Handles radio connection to User Equipmment' },
    { abbr: 'UE', full: 'User Equipment', description: 'The device or terminal used by an end-user to connect to a network, such as a smartphone, tablet, or IoT device.' },
    { abbr: 'gNB', full: 'Next Generation Node B', description: 'The 5G base station that connects User Equipment (UE) to the 5G network, handling radio communications and data transmission.' },
    { abbr: 'ZMQ', full: 'ZeroMQ', description: 'A lightweight messaging library used to transfer IQ samples between UE and gNB.' },
    { abbr: 'SIM', full: 'Subscriber Identity Module', description: 'A smart card that securely stores the subscriber identity (IMSI) and authentication credentials (keys) for a UE to connect to a mobile network.' },
    { abbr: 'IMSI', full: 'International Mobile Subscriber Identity',   "description": "A unique identifier assigned to each mobile subscriber, used by mobile networks to identify and authenticate the user. It consists of the Mobile Country Code (MCC), Mobile Network Code (MNC), and Mobile Subscriber Identification Number (MSIN)."},
    {"abbr": "IMEI", "full": "International Mobile Equipment Identity", "description": "A unique identifier assigned to each mobile device (hardware), used by mobile networks to identify and track the device. It helps prevent stolen devices from accessing networks and distinguishes devices even if they use the same SIM."},
    {"abbr": "RRC", "full": "Radio Resource Control","description": "A protocol in the 3GPP mobile network stack that manages signaling between the User Equipment (UE) and the base station. RRC handles connection setup, release, mobility, and configuration of radio resources, defining how a device communicates over the air interface."},
    {"abbr": "NAS", "full": "Non-Access Stratum", "description": "A protocol in the 3GPP mobile network stack that manages signaling between the User Equipment (UE) and the core network. NAS handles mobility management, session management, authentication, and establishes data sessions, including specifying the APN and IP protocol for connectivity."},
    {"abbr": "MIMO", "full": "Multiple Input Multiple Output", "description": "A wireless technology that uses multiple transmit and receive antennas to improve communication performance. MIMO enhances data rates and reliability by sending multiple data streams simultaneously over different antennas."}, 
    {"abbr": "HARQ", "full": "Hybrid Automatic Repeat reQuest", "description": "An error correction technique that combines forward error correction (FEC) and retransmissions. HARQ improves reliability by allowing the receiver to request retransmission of corrupted packets while combining them with previously received data."},
    {"abbr": "RLC", "full": "Radio Link Control", "description": "A Layer 2 protocol in the 3GPP stack that handles segmentation and reassembly of packets, error correction through retransmissions (ARQ), and ensures in-sequence delivery. It operates in Transparent, Unacknowledged, or Acknowledged modes and resides above MAC and below PDCP."},
    {"abbr": "PDCP", "full": "Packet Data Convergence Protocol", "description": "A Layer 2 protocol in the 3GPP stack that handles header compression, encryption, integrity protection, sequence numbering, and in-order delivery of packets. It resides above RLC and below IP, and in O-RAN is typically implemented in the O-CU."},
    {"abbr": "RRC", "full": "Radio Resource Control", "description": "A 3GPP protocol that manages the UE's radio connection with the base station, handling connection setup, release, mobility, and configuration of radio resources."},
    {"abbr": "SDAP", "full": "Service Data Adaptation Protocol", "description": "A 5G NR user plane protocol that maps QoS flows to data radio bearers, marks packets with QoS identifiers, and ensures user data is delivered according to its quality of service requirements."},
    {"abbr": "AMF", "full": "Access and Mobility Management Function", "description": "A 5G core network function responsible for managing UE registration, connection, authentication, and mobility, including handovers and reachability within the 5G network."},
    {"abbr": "UPF", "full": "User Plane Function", "description": "A 5G core network function responsible for routing and forwarding user data, enforcing QoS, handling packet inspection, and interfacing with data networks. It connects to the O-CU-UP via the N3 interface in the 5G architecture."}, {"abbr": "UPF", "full": "User Plane Function","description": "A 5G core network function responsible for routing and forwarding user data, enforcing QoS, and interfacing with data networks. It connects to the O-CU-UP via the N3 interface in the 5G architecture."}, 
    {"abbr": "Node B", "full": "Node B", "description": "The base station in 3G UMTS networks responsible for radio transmission and reception with UEs."},
    {"abbr": "eNodeB", "full": "Evolved Node B", "description": "The base station in LTE networks that handles radio transmission, scheduling, and connection management for UEs."},
    {"abbr": "3GPP", "full": "3rd Generation Partnership Project", "description": "A global standards organization responsible for defining mobile communication technologies, including 2G, 3G, 4G LTE, and 5G NR, specifying protocol stacks, interfaces, and network procedures."},
    {"abbr": "KPM", "full": "Key Performance Metric", "description": "Standardized measurements used to monitor, analyze, and optimize the performance of the RAN and core network, including metrics such as throughput, latency, PRB utilization, and signal quality."},
    {"abbr": "PRB", "full": "Physical Resource Block", "description": "The smallest unit of resource allocation in the LTE and 5G NR physical layer, consisting of a group of subcarriers in the frequency domain and symbols in the time domain, used to schedule user data and control information."},
    {"abbr": "5GC", "full": "5G Core Network", "description": "The central part of a 5G network responsible for control-plane and user-plane functions, including mobility management, session management, authentication, and connectivity to external data networks."}
  ];

  // Sort abbreviations alphabetically by abbr
  const sortedAbbreviations = abbreviations.sort((a, b) => a.abbr.localeCompare(b.abbr));

  return (
    <div
      className="documentation-panel"
      data-slider-position="4"
    >
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', borderBottom: '1px solid #ccc', padding: '0.5rem' }}>
              Abbreviation
            </th>
            <th style={{ textAlign: 'left', borderBottom: '1px solid #ccc', padding: '0.5rem' }}>
              Full Form
            </th>
            <th style={{ textAlign: 'left', borderBottom: '1px solid #ccc', padding: '0.5rem' }}>
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedAbbreviations.map(({ abbr, full, description }) => (
            <tr key={abbr}>
              <td style={{ padding: '0.5rem', borderBottom: '1px solid #eee' }}>{abbr}</td>
              <td style={{ padding: '0.5rem', borderBottom: '1px solid #eee' }}>{full}</td>
              <td style={{ padding: '0.5rem', borderBottom: '1px solid #eee' }}>{description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
