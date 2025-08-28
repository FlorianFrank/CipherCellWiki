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
    {"abbr": "NAS", "full": "Non-Access Stratum", "description": "A protocol in the 3GPP mobile network stack that manages signaling between the User Equipment (UE) and the core network. NAS handles mobility management, session management, authentication, and establishes data sessions, including specifying the APN and IP protocol for connectivity."}
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
