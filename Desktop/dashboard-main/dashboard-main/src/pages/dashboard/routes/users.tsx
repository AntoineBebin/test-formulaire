import { Report } from '../features/Support/screens/Report'
import { Request } from '../features/Support/screens/Request'
import { RequestFollow } from '../features/Support/screens/RequestFollow'
import { Acces } from '../features/User/Acces'
import { Historique } from '../features/User/Historique'
import { Informations } from '../features/User/Informations'
import { PaymentFacturation } from '../features/User/PaymentFacturation'
import { Suscribe } from '../features/User/Suscribe'
import { UserDashboard } from '../features/User/UserDashboard'

export const userRoutes = [
  { index: true, element: <Informations /> },
  {
    path: 'acces',
    element: <Acces />
  },
  { path: 'abonnement', element: <Suscribe /> },
  { path: 'paiement-et-facturation', element: <PaymentFacturation /> },
  { path: 'historique-de-facturation', element: <Historique /> },
  { path: 'dashboard', element: <UserDashboard /> },
  { path: 'création-ticket', element: <Report /> },
  { path: 'suivi-requete', element: <Request /> },
  { path: 'suivi-requete-suite', element: <RequestFollow /> }
]
