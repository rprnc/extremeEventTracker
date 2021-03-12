import { Icon } from '@iconify/react'
import hexagonSlice6 from '@iconify/icons-mdi/hexagon-slice-6'

const IcebergMarker = ({ lat, lng, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={hexagonSlice6} className="location-icon" />
        </div>
    )
}

export default IcebergMarker
