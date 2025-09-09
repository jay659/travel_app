
import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { ProtectedRoute } from './utils/auth/ProtectedRoute';
import { FrappeProvider } from 'frappe-react-sdk';
import { Theme } from '@radix-ui/themes';

function App() {
  const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path="/login" lazy={() => import('@/pages/auth/Login')} />
			<Route path="/sign-up" lazy={() => import('@/pages/auth/SignUp')} />
			<Route  path="/" element = {<ProtectedRoute/>}>
				<Route path='/test' lazy={() => import('@/pages/admin/Dashboard')} />
				
			</Route>

		</>
	),{
		basename: import.meta.env.VITE_BASE_NAME ? `/${import.meta.env.VITE_BASE_NAME}` : ''
	}
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
