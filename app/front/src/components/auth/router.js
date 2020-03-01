import Auth from './Auth'
import Inscription from './Inscription'
import Connexion from './Connexion';

export default {
    path: '/auth',
    name: 'Auth',
    component: Auth,
    redirect: '/auth/connexion',
    children: [{
            path: 'connexion',
            component: Connexion
        },
        {
            path: 'inscription',
            component: Inscription
        }
    ]
}