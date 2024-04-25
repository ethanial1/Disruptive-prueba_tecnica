import './statistic.css';

export function Statistic({icon, title, value}) {
  return (
    <div className="statistic_card d-flex vaxis-center">
      <i className={`bx ${icon}`}></i>
      <div>
        <h4 className='f-title'>{value}</h4>
        <span className='f-subtitle'>{title}</span>
      </div>
    </div>
  )
}
