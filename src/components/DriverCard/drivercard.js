function DriverCard ({listing}) {

    return(
        <>
            <p>#{listing.position}: {listing.driver.name}</p>
        </>
    )
}

export default DriverCard 