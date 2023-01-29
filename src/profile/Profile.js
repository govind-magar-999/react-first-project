function Profile({details}) {

  return (
    <>
    <div style={{display:'flex'}}>
        <div style={{border:'1px solid grey', padding:'60px', borderRadius:'6px'}}>
            <img style={{borderRadius:'70px', marginBottom:'40px'}} src={details?.picture?.large} alt="Personality avatar" />
            <h3>{details?.name?.title} {details?.name?.first} {details?.name?.last} ({details?.gender==="male"?"He/Him":"She/Her"})</h3>
            <p>Email: <a href="mailto:{details.email}">{details?.email}</a></p>
            <p>Contact number: <a href={details?.phone}>{details?.phone}</a></p>
            <p>Nationality: {details?.nat}</p>
        </div>
        <div>
        </div>
    </div>
    </>
  )
}

export default Profile