import { Park } from '../../../interfaces/garden_interfise';


interface GardenInfoPageProps {
    park: Park;
}


const Gallery = ({ park }: GardenInfoPageProps) => {

    return (
        <>
       
                <div
                    style={{
                        flexGrow: '3',
                        backgroundColor: '#e0ffc7',
                        borderRadius: '10px',
                        border: '3px solid #999494',
                        height : '60%'
                    }}>
                    <img
                        style={{
                            width: '100%',
                            height: '100%'
                        }}
                        src={park.GardenImg[0]}
                        alt={`Garden Image `} />
                </div>
                <div style={{flexGrow : '1'}}>
                <div className='imgesDiv' >
                <div className='imgeDiv'>
                    <img
                        style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: '10%',
                        }} src={park.GardenImg[1]}
                        alt={`Garden Image `} />
                </div>
                <div className='imgeDiv'>
                    <img style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '10%',
                    }} src={park.GardenImg[2]}
                        alt={`Garden Image `} />
                </div>
                <div className='imgeDiv'>
                    <img
                        style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: '10%',
                        }} src={park.GardenImg[3]}
                        alt={`Garden Image `} />
                </div>
            </div>
                </div>
        </>
    );
}

export default Gallery;







