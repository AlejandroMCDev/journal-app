
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { getRoutes } from './router/AppRouter'
import { AppTheme } from './theme';
import { CheckingAuth } from './ui';
import { useCheckAuth } from './hooks/useCheckAuth';

const router = createBrowserRouter(getRoutes);


export const JournalApp = () => {

  const { status } = useCheckAuth();

  if (status === 'checking') {
    return <CheckingAuth/>    
  }

  return (
    <>
        <AppTheme>
            <RouterProvider router={router}/>
        </AppTheme>
    </>
  )
}
