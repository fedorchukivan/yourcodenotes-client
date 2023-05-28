import './records.css'
import { Navigate } from "react-router-dom"
import AppRoute from "../../common/enums/app-route"
import RecordCard from '../record-card/Record-card'
import { useSelector } from 'react-redux';
import Navigation from '../navigation/Navigation';


export default function Records() {
  const { user, cards } = useSelector(({ auth, cards }) => ({
      user: auth.user,
      cards: cards.cards
    })
  );


  if (!user) return <Navigate to={AppRoute.SIGNIN} />

  return (
    <>
      <Navigation />
      <main className='records-container'>
        { cards.map(card => <RecordCard card={card} key={card.id}/>) }
      </main>
    </>
  )
}