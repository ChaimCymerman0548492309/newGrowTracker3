import React from 'react';
import { render, screen } from '@testing-library/react';
import User from './User';

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


describe('User component', () => {
    test('renders contact person name and phone number', () => {
      render(<User park={mockPark} />);
  
      const contactPersonNameElement = screen.getByText(/Contact Person :/i);
      const contactPhoneNumberElement = screen.getByText(/Contact Number :/i);
  
      expect(contactPersonNameElement).toBeInTheDocument();
      expect(contactPhoneNumberElement).toBeInTheDocument();
    });
  
    test('displays correct contact person name', () => {
      render(<User park={mockPark} />);
  
      const contactPersonNameElement = screen.getByText(/Contact Person :/i);
  
      expect(contactPersonNameElement).toHaveTextContent(/Moshe/i);
    });
  
    test('displays correct contact person phone number', () => {
      render(<User park={mockPark} />);
  
      const contactPhoneNumberElement = screen.getByText(/Contact Number :/i);
  
      expect(contactPhoneNumberElement).toHaveTextContent(/0548899258/i);
    });
  
    test('renders with correct data', () => {
      render(<User park={mockPark} />);
  
      const contactPersonNameElement = screen.getByText(/Contact Person :/i);
      const contactPhoneNumberElement = screen.getByText(/Contact Number :/i);
  
      expect(contactPersonNameElement).toHaveTextContent(/Moshe/i);
      expect(contactPhoneNumberElement).toHaveTextContent(/0548899258/i);
      // Add more assertions for other data if needed
    });

  });

  