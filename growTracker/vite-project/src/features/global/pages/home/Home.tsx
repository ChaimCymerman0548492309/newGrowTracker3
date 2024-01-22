import React from 'react'
import GardenInfoPage from '../../../gardens/pages/gardenInfoPage/GardenInfoPage'
import garden from '../../../../assets/garden.svg'
import Ellipse from '../../../../assets/Ellipse.svg'
import { foto } from '../../../../assets/Gardner_image';
import { foto3 } from '../../../../assets/foto3';
import { foto2 } from '../../../../assets/foto2';
import { StyledCheckbox } from '../../../global/styles/StyledCheckbox';
import { Park } from '../../../gardens/interfaces/garden_interfise';

const park = {
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
      gardner_image: Ellipse,
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
  GardenImg: [garden, foto, foto2, foto3],
  GardenImgAlt: 'Garden Image',
};




function Home() {
  return (
    <>
      <GardenInfoPage park={park}/>
    </>
  )
}

export default Home