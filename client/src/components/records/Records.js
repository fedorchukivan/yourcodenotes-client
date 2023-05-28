import './records.css'
import { Link, Navigate } from "react-router-dom"
import AppRoute from "../../common/enums/app-route"
import RecordCard from '../record-card/Record-card'
import { useSelector } from 'react-redux';


export default function Records() {
  const user = useSelector(({ auth }) => auth.user);

  if (!user) return <Navigate to={AppRoute.SIGNIN} />

  return (
    <>
      <ul className="navigation-container">
        <Link to={AppRoute.ROOT}><li className="navigation-button">My Projects</li></Link>
        <Link to={AppRoute.ROOT}><li className="navigation-button">Shared Projects</li></Link>
        <Link to={AppRoute.ROOT}><li className="navigation-button">Open Database</li></Link>
      </ul>
      <main className='records-container'>
        <RecordCard />        
        <RecordCard />        
        <RecordCard />        
        <RecordCard />        
      </main>
    </>
  )
}