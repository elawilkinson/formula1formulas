function TeamCard ({listing}) {

    return(
        <>
            <p>#{listing.position}: {listing.team.name}</p>
        </>
    )
}

export default TeamCard 