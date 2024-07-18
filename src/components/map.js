
export default function Map({ latitude, longitude }) {

    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=14&size=600x300&markers=color:red%7C${latitude},${longitude}&key=${apiKey}`;

    return (
        <div className="">
            <img src={mapUrl} alt="Map" className="w-auto h-auto xl:w-[900px]" />
        </div>
    )
}
