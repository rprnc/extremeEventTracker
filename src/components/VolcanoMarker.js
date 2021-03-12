import { Icon } from '@iconify/react'
import alertIcon from '@iconify/icons-mdi/alert'

const VolcanoMarker = ({ lat, lng, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={alertIcon} className="location-icon" />
        </div>
    )
}

export default VolcanoMarker
