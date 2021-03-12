const LocationInfoBox = ({ info }) => {
    return (
        <div className="location-info">
            <h2>Event Information</h2>
            <ul>
                <li>TYPE : <strong>{info.id}</strong></li>
                <li>TITLE : <strong>{info.title}</strong></li>
                <li>DATE : <strong>{info.date}</strong></li>
            </ul>
        </div>
    )
}

export default LocationInfoBox
