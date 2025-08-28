import React from 'react';

export default function AbbreviationsPanel() {
  const abbreviations = [
    { abbr: 'RIC', full: 'Intelligent Controller', description: 'Controller in RAN architecture' },
    { abbr: 'RAN', full: 'Radio Access Network', description: 'Handles radio connection to UE' },
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
