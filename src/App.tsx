import {
  IonApp, IonTabs, IonTabBar, IonTabButton,
  IonRouterOutlet, IonLabel, IonIcon, setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router-dom';
import { calendar, list } from 'ionicons/icons';

import IngresoReserva from './pages/IngresoReserva';
import ListaReservas from './pages/ListaReservas';

/* Estilos Ionic */
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/ingreso">
            <IngresoReserva />
          </Route>
          <Route exact path="/lista">
            <ListaReservas />
          </Route>
          <Route exact path="/">
            <Redirect to="/ingreso" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="ingreso" href="/ingreso">
            <IonIcon icon={calendar} />
            <IonLabel>Nueva Reserva</IonLabel>
          </IonTabButton>
          <IonTabButton tab="lista" href="/lista">
            <IonIcon icon={list} />
            <IonLabel>Reservas</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
