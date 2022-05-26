import React from 'react'
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { useSession } from './contexts/SessionContext'
import { useOnlineStatus } from './hooks/useOnlineStatus'
import { ScrollToTop } from './components/ScrollToTop'
import { HelmetTags } from './components/HelmetTags'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { AllCollections } from './pages/AllCollections'
import { CollectionDetails } from './pages/CollectionDetails'
import { Analytics } from './pages/Analytics'
import { Advertise } from './pages/Advertise'
import { Merch } from './pages/Merch'
import { ProfileSetting } from './pages/ProfileSetting'
import { ProductDetail } from './pages/ProductDetail'
import { WatchList } from './pages/WatchList'
import { Calendar } from './pages/Calendar'
import { CardPayment } from './pages/CardPayment'

export const App = () => {
  const onlineStatus = useOnlineStatus()
  const [{ auth }] = useSession()

  return (
    <>
      <Header />
      {onlineStatus && (
        <ScrollToTop>
          <HelmetTags />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/collections'>
              <AllCollections />
            </Route>
            <Route exact path='/collections/:id'>
              <CollectionDetails />
            </Route>
            <Route exact path='/analytics'>
              <Analytics />
            </Route>
            <Route exact path='/merch'>
              <Merch />
            </Route>
            <Route exact path='/merch/:id'>
              <ProductDetail />
            </Route>
            <Route exact path='/advertise'>
              <Advertise />
            </Route>
            <Route exact path='/profile-setting'>
              {auth ? (
                <ProfileSetting />
              ) : (
                <Redirect to='/' />
              )}
            </Route>
            <Route exact path='/watch-list'>
              {auth ? (
                <WatchList />
              ) : (
                <Redirect to='/' />
              )}
            </Route>
            <Route exact path='/card-payment'>
              <CardPayment />
            </Route>
            <Route exact path='/calendar'>
              {auth ? (
                <Calendar />
              ) : (
                <Redirect to='/' />
              )}
            </Route>
          </Switch>
          <Footer />
        </ScrollToTop>
      )}
    </>
  )
}