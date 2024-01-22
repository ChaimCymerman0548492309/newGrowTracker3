export interface Address {
    street: string;
    city: string;
  }
  
  export interface ContactPerson {
    name: string;
    phone_number: string;
  }
  
  export interface Gardner {
    name: string;
    Phone: string;
    Rating: number;
    gardner_image: string; // אני מניח שזה מסלול לקובץ התמונה
  }
  
  export interface Treatment {
    grass_trimming: boolean;
    tree_pruning: boolean;
    pest_control: boolean;
  }
  
  export interface Park {
    name: string;
    description: string;
    Contact_person: ContactPerson;
    Gardner: Gardner;
    Park_size: number;
    Vegetation: string;
    Type: string;
    Treatment: Treatment;
    Coordinates: number[];
    Address: Address;
    GardenImg: string[];
    GardenImgAlt: string;
  }
  
  
  