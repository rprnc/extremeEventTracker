import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import FireMarker from './FireMarker'
import VolcanoMarker from './VolcanoMarker'
import IcebergMarker from './IcebergMarker'
import HurricaneMarker from './HurricaneMarker'
import LocationInfoBox from './LocationInfoBox'

const Map = ({ eventData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null)

    const markers = eventData.map(ev => {
        if (ev.categories[0].id === 8) {
            return <FireMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.categories[0].title, title: ev.title, date: ev.geometries[0].date })} />
        } else if (ev.categories[0].id === 12 && ev.geometries[0].type === "Point") {
            return <VolcanoMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.categories[0].title, title: ev.title, date: ev.geometries[0].date })} />
        } else if (ev.categories[0].id === 15) {
            return <IcebergMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.categories[0].title, title: ev.title, date: ev.geometries[0].date })} />
        } else if (ev.categories[0].id === 10) {
            let stormItems = []
            for (let i = 0; i < ev.geometries.length - 1; i++) {
                stormItems.push(<HurricaneMarker lat={ev.geometries[i].coordinates[1]} lng={ev.geometries[i].coordinates[0]} onClick={() => setLocationInfo({ id: ev.categories[0].title, title: ev.title, date: ev.geometries[i].date })} />)
            }
            return stormItems
        }
        return null
    })


    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{
                    key:
                        'AIzaSyByN2aW8YqW2IGFyivJ2lAuos9bRhcegqE'
                }}
                defaultCenter={center}
                defaultZoom={zoom}
                onClick={() => setLocationInfo(false)}
            >
                {markers}

            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 0.0,
        lng: -180.0
    },
    zoom: 2
}

export default Map
