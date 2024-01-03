import React, {FC} from 'react';
import { CustomTitle } from '../../../global/styles/CustomTitle';
const GardenInfoPage  =() => {
    const park = {
        name: 'Citys Garden',
        Description: "Envisioning a garden filled with colorful blooms, the customer seeks a gardener to ensure each flower receives the care it needs. Pruning, watering, and maintaining soil health are essential tasks to cultivate this vibrant haven.",
        Contact_person: {
            name: 'Moshe',
            phone_number: '0548899258',
        },
        Gardner: {
            name: 'Oliver Greenfield',
            Phone: '+1 (555) 123-4567',
            Rating: 5,
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
        }
    };

    return (
        <div>
            <CustomTitle> {park.name}</CustomTitle>
            <p>Description: {park.Description}</p>
            <p>Contact Person: {park.Contact_person.name}</p>
            <p>Contact Number: {park.Contact_person.phone_number}</p>
            <p>Gardner: {park.Gardner.name}</p>
            <p>Gardner Phone: {park.Gardner.Phone}</p>
            <p>Gardner Rating: {park.Gardner.Rating}</p>
            <p>Park Size: {park.Park_size} square meters</p>
            <p>Vegetation: {park.Vegetation}</p>
            <p>Type: {park.Type}</p>
            <p>Treatment: {JSON.stringify(park.Treatment)}</p>
            <p>Coordinates: {park.Coordinates.join(', ')}</p>
            <p>Address: {park.Address.street}, {park.Address.city}</p>
        </div>
    );
}

export default GardenInfoPage;

