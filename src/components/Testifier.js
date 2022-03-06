// import human from '../assets/images/potrait/joseph.svg'

const Testifier = ({ testimony }) => {
      let statusColor = ''
      if (testimony.statusColor === 'blue') {
            statusColor = 'blue'
      } else if (testimony.statusColor === 'green') {
            statusColor = 'green'
      } else if (testimony.statusColor === 'orange') {
            statusColor = 'orange'
      }

      return (
            <div className='container'>
                  <img src={testimony.potrait} className="photo" alt="testifier" />
                  <h3 className='testifier'>{testimony.firstName} {testimony.lastName}</h3>
                  <span className='status-location'>
                        <p className="location">{testimony.location}</p>
                        <p className={statusColor}>{testimony.status}</p>
                  </span>
                  <p className="testimony">Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.</p>
            </div>
      )
}

export default Testifier