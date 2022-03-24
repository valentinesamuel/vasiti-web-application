
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
                  <p className="testimony">{testimony.testimony}</p>
            </div>
      )
}

export default Testifier