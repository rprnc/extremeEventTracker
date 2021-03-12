import { Icon } from '@iconify/react'
import weatherHurricane from '@iconify/icons-mdi/weather-hurricane'

const HurricaneMarker = ({ lat, lng, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={weatherHurricane} className="storm-icon" />
        </div>
    )
}

export default HurricaneMarker
