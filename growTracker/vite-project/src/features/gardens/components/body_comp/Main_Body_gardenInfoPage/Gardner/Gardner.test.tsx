import React from 'react';
import { render, screen } from '@testing-library/react';
import Gardner from './Gardner';

const mockPark = {
    name: 'Citys Garden',
    description: "Envisioning a garden filled with colorful blooms, the customer seeks a gardener to ensure each flower receives the care it needs. Pruning, watering, and maintaining soil health are essential tasks to cultivate this vibrant haven.",
    Contact_person: {
      name: 'Moshe',
      phone_number: '0548899258',
    },
    Gardner: {
      name: 'Oliver Greenfield',
      Phone: '+1 (555) 123-4567',
      Rating: 5,
      gardner_image: 'path/to/ellipse.jpg', // תחליף את זה בנתיב המתאים
    },
    Park_size: 100,
    Vegetation: 'grass, ornamental trees',
    Type: 'urban garden',
    Treatment: {
      grass_trimming: true,
      tree_pruning: true,
      pest_control: true
    },
    Coordinates: [30.333, 34.456],
    Address: {
      street: 'Menachem Begin 230',
      city: 'Tel Aviv'
    },
    GardenImg: ['path/to/garden.jpg', 'path/to/foto.jpg', 'path/to/foto2.jpg', 'path/to/foto3.jpg'], // תחליף את זה בנתיבים המתאימים
    GardenImgAlt: 'Garden Image',
  };

describe('Gardner component', () => {
  test('renders gardner name, phone, and rating', () => {
    render(<Gardner park={mockPark} />);

    const gardnerNameElement = screen.getByText(/Gardner :/i);
    const gardnerPhoneElement = screen.getByText(/Gardner Phone/i);
    const gardnerRatingElement = screen.getByText(/Gardner Rating :/i);

    expect(gardnerNameElement).toBeInTheDocument();
    expect(gardnerNameElement).toHaveTextContent(/Oliver Greenfield/i);

    expect(gardnerPhoneElement).toBeInTheDocument();
    expect(gardnerPhoneElement).toHaveTextContent(/\+1 \(555\) 123-4567/i);

    expect(gardnerRatingElement).toBeInTheDocument();
    expect(gardnerRatingElement).toHaveTextContent(/\b5\b/);
});

  test('renders gardner image with alt text', () => {
    render(<Gardner park={mockPark} />);

    const gardnerImageElement = screen.getByAltText(/Gardner.gardner_image/i);

    expect(gardnerImageElement).toBeInTheDocument();
    expect(gardnerImageElement).toHaveAttribute('src', 'path/to/ellipse.jpg');
  });
});
