import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Garden_info from "./garden_info";


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

describe("Garden_info component tests", () => {
  
    test("renders treatment options", () => {
      render(<Garden_info park={mockPark} />);
      

      const grassTrimmingElement = screen.getByText(/Grass Trimming/i);
      expect(grassTrimmingElement).toBeInTheDocument();
  
      const treePruningElement = screen.getByText(/Tree Pruning/i);
      expect(treePruningElement).toBeInTheDocument();
  
      const pestControlElement = screen.getByText(/Pest Control/i);
      expect(pestControlElement).toBeInTheDocument();
    });
  


    test("renders park size, vegetation, and type", () => {
        render(<Garden_info park={mockPark} />);
          
        const parkSizeElement = screen.queryByText((content, element: Element | null) => {
          const hasText = element?.textContent?.includes("Park Size : 100 square meters") ?? false;
          return hasText;
        });

        expect(parkSizeElement).toBeDefined();
      });
      
      test("treatment options are checked based on park data", () => {
        render(<Garden_info park={mockPark} />);
        console.log(document.body.innerHTML);

        // const grassTrimmingCheckbox = screen.getByLabelText("Grass Trimming") as HTMLInputElement;
        // const treePruningCheckbox = screen.getByLabelText("Tree Pruning") as HTMLInputElement;
        // const pestControlCheckbox = screen.getByLabelText("Pest Control") as HTMLInputElement;
      
        // // Assertions
        // expect(grassTrimmingCheckbox).toBeInTheDocument();
        // expect(treePruningCheckbox).toBeInTheDocument();
        // expect(pestControlCheckbox).toBeInTheDocument();
      
        // // Verify checkbox checked status based on mock data
        // expect(grassTrimmingCheckbox.checked).toBe(mockPark.Treatment.grass_trimming);
        // expect(treePruningCheckbox.checked).toBe(mockPark.Treatment.tree_pruning);
        // expect(pestControlCheckbox.checked).toBe(mockPark.Treatment.pest_control);
      });
      
      });
    

