import { render, screen } from "@testing-library/react";
import Main_Body_gardenInfoPage from './Main_Body_gardenInfoPage';
import '@testing-library/jest-dom';


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

describe("header test", () => {
  test("test Gardner Rating is displayed", () => {  
      render(<Main_Body_gardenInfoPage park={mockPark} />);
    console.log(document.body.innerHTML);
    const titleElement = screen.getByText(/Gardner Rating :/i);
    expect(titleElement).toBeInTheDocument();
  });

test("test image is displayed", () => {
    render(<Main_Body_gardenInfoPage park={mockPark} />)
    const imageElement = screen.getByRole("img")
    expect(imageElement).toBeInTheDocument()
    });
});
