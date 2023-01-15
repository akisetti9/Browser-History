import './index.css'

const HistoryItem = props => {
  const {eachHistory, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachHistory
  const onclickDelete = () => {
    deleteHistory(id)
  }
  return (
    <li className="cont-header">
      <p className="time">{timeAccessed}</p>
      <img
        src={logoUrl}
        alt="domain logo"
        key={logoUrl}
        className="title-logo"
      />
      <div className="titles">
        <p className="margin">{title}</p>
        <p className="margin link">{domainUrl}</p>
      </div>
      <button type="button" id="delete" className="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-logo"
          onClick={onclickDelete}
        />
      </button>
    </li>
  )
}

export default HistoryItem
