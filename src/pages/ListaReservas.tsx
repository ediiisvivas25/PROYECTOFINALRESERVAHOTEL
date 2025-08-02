import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
  IonRefresher, IonRefresherContent, IonCard, IonCardHeader,
  IonCardTitle, IonCardContent
} from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { getReservas } from '../api/api';
import { Reserva } from '../types/Reserva';

const ListaReservas: React.FC = () => {
  const [reservas, setReservas] = useState<Reserva[]>([]);

  const cargarReservas = async () => {
    const res = await getReservas();
    setReservas(res.data);
  };

  useEffect(() => {
    cargarReservas();
  }, []);

  const doRefresh = (event: CustomEvent) => {
    cargarReservas().then(() => event.detail.complete());
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Reservas Registradas</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">

        <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
          <IonRefresherContent pullingText="Desliza para actualizar" />
        </IonRefresher>

        {reservas.length === 0 ? (
          <p>No hay reservas registradas.</p>
        ) : (
          reservas.map((r, index) => (
            <IonCard key={index} color="light">
              <IonCardHeader>
                <IonCardTitle>{r.cliente} – {r.cedula}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <p><strong>Habitación:</strong> {r.habitacion}</p>
                <p><strong>Horario:</strong> {r.horario}</p>
              </IonCardContent>
            </IonCard>
          ))
        )}
      </IonContent>
    </IonPage>
  );
};

export default ListaReservas;
