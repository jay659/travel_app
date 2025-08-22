
import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { FrappeProvider } from 'frappe-react-sdk';
import { Theme } from '@radix-ui/themes';

function App() {
  const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path="/login" lazy={() => import('@/pages/auth/Login')} />
			<Route 
				path="/dashboard" 
				lazy={() => import('@/pages/admin/AdminLayout')}
			>
				<Route index lazy={() => import('@/pages/admin/Dashboard')} />
				
			</Route>

		</>
	)
  )
  return (
	
	<Theme
		accentColor="indigo"
		grayColor="slate"
		panelBackground="translucent"
		scaling="100%"
		radius="full"
	>

	<FrappeProvider>
		 <RouterProvider router={router} />
	</FrappeProvider>
	</Theme>
  )
}


export default App
