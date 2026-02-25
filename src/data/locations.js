export const companyLocations = [
  {
    id: 'hq-hyd',
    type: 'Head Office',
    city: 'Hyderabad',
    name: 'BKK & Associates - Hyderabad HQ',
    telephone: '+919701328888',
    url: 'https://bkkca.com/contact',
    address: {
      streetAddress: 'Flat 303, Srishti Homes, Beside Metro Pillar A1010, S R Nagar',
      addressLocality: 'Hyderabad',
      addressRegion: 'Telangana',
      postalCode: '500038',
      addressCountry: 'IN'
    },
    geo: {
      latitude: '17.4399', // Placeholder: Update with exact Google Maps coordinates later
      longitude: '78.4483'
    }
  },
  {
    id: 'br-blr',
    type: 'Branch Office',
    city: 'Bangalore',
    name: 'BKK & Associates - Bangalore Branch',
    telephone: '+918978907890',
    url: 'https://bkkca.com/contact',
    address: {
      streetAddress: '#36, II Floor, 91 Springboard, Salarpuria Towers-I, 7th Block, Koramangala',
      addressLocality: 'Bangalore',
      addressRegion: 'Karnataka',
      postalCode: '560095',
      addressCountry: 'IN'
    },
    geo: {
      latitude: '12.9352', 
      longitude: '77.6245'
    }
  },
  {
    id: 'br-vzg',
    type: 'Branch Office',
    city: 'Visakhapatnam',
    name: 'BKK & Associates - Visakhapatnam Branch',
    telephone: '+919701328888',
    url: 'https://bkkca.com/contact',
    address: {
      streetAddress: 'Flat A2, Baba Towers, Opp. Andhra University out gate',
      addressLocality: 'Visakhapatnam',
      addressRegion: 'Andhra Pradesh',
      postalCode: '530003',
      addressCountry: 'IN'
    },
    geo: {
      latitude: '17.7294', 
      longitude: '83.3163'
    }
  }
  // Want to add Mumbai later? Just paste a new object right here. 
  // The schema and UI will scale infinitely.
];