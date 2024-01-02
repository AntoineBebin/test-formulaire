import { AdminDashboard } from '../features/Admin/AdminDashboard'
import { MyAccount } from '../features/Admin/MyAccount'
import { AdminSupport } from '../features/Admin/Support-Technique/AdminSupport'
import { SuscriberManagement } from '../features/Admin/SuscriberManagement'

export const adminRoutes = [
  { index: true, element: <MyAccount /> },
  { path: 'gestion-admin', element: <>Gestion des administrateurs</> },
  { path: 'gestion-abonnes', element: <SuscriberManagement /> },
  { path: 'support-technique', element: <AdminSupport /> },
  { path: 'dashboard-admin', element: <AdminDashboard /> }
]
