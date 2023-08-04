import { useDispatch, useSelector } from 'react-redux';
import {Link as RouterLink} from 'react-router-dom';
import { Google } from '@mui/icons-material'
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'

import { startGoogleSingIn, startLoginWithEmailPassword } from '../../store/auth/thunk';

import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { useMemo } from 'react';

const formData = {
  email: '',
  password: ''
}

export const LoginPage = () => {

  const { status,errorMessage } = useSelector( state => state.auth )
  const dispatch = useDispatch()

  const {email,password,onInputChange,formState} = useForm(formData);

  const isAuthenticating = useMemo( () => status === 'checking', [status] );

  const onSubmit = ( event ) => {
    event.preventDefault();

    dispatch( startLoginWithEmailPassword( formState ) );
  }

  const onGoogleSingIn = () => {
    dispatch( startGoogleSingIn() );
  }

  return (  
    <AuthLayout title='Login'>
        <form onSubmit={onSubmit}>
              <Grid container>
                <Grid item xs={12} sx={{mt: 2}}>
                  <TextField label="Correo" type='email' placeholder='correo@google.com' fullWidth name='email' value={email} onChange={onInputChange}/>
                </Grid>

                <Grid item xs={12} sx={{mt: 2}}>
                  <TextField label="Contraseña" type='password' placeholder='Contraseña' fullWidth name='password' value={password} onChange={onInputChange}/>
                </Grid>
              </Grid>

              <Grid container display={ !!errorMessage ? '' : 'none'} sx={{mt: 1}}>
                <Grid item xs={ 12 } sm={ 12 }>
                  <Alert severity='error'>{ errorMessage }</Alert>
                </Grid>
              </Grid>

              <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
                <Grid item xs={ 12 } sm={ 6 }>
                  <Button disabled={ isAuthenticating } type='submit' variant='contained' fullWidth>
                    Login
                  </Button>
                </Grid>

                <Grid item xs={ 12 } sm={ 6 }>
                  <Button disabled={ isAuthenticating } variant='contained' fullWidth onClick={onGoogleSingIn}>
                    <Google/>
                    <Typography sx={{ ml: 1 }}>Google</Typography>
                  </Button>
                </Grid>

                <Grid container direction='row' justifyContent='end'>
                  <Link component={RouterLink} color='inherit' sx={{mt: 2}} to= '/auth/register'>
                    Crear una cuenta
                  </Link>
                </Grid>

              </Grid>

            </form>
    </AuthLayout>
  )
}
