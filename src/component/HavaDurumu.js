import React from 'react'

const HavaDurumu = ({ hava }) => {
    if (!hava) {
        return <div>Yükleniyor...</div>
    }
    return (
        <div>
            <h3>{hava.name}</h3>
            <p>{hava.weather.map((data) => data.description.toUpperCase()).join(", ")}</p>
            <p>Derece: {hava.main.temp}°C</p>
            <p>Tarih: {new Date(hava.dt * 1000).toLocaleDateString()}</p>
        </div>
    )
}
export default HavaDurumu;