import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
  IonItem, IonLabel, IonInput, IonSelect, IonSelectOption,
  IonButton, IonToast, IonIcon
} from '@ionic/react';
import { personCircle, card, bed, time } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';
import { getHabitaciones, getHorarios, postReserva } from '../api/api';

const IngresoReserva: React.FC = () => {
  const [cliente, setCliente] = useState('');
  const [cedula, setCedula] = useState('');
  const [habitacion, setHabitacion] = useState('');
  const [horario, setHorario] = useState('');
  const [habitaciones, setHabitaciones] = useState<{ id: number; numero: string; tipo: string }[]>([]);
  const [horarios, setHorarios] = useState<{ id: number; rango: string }[]>([]);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    getHabitaciones().then(res => setHabitaciones(res.data));
    getHorarios().then(res => setHorarios(res.data));
  }, []);

  const handleSubmit = async () => {
    if (cliente && cedula && habitacion && horario) {
      const nuevaReserva = { cliente, cedula, habitacion, horario };
      await postReserva(nuevaReserva);
      setShowToast(true);
      setCliente('');
      setCedula('');
      setHabitacion('');
      setHorario('');
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Reserva de Habitación</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">

        <IonItem lines="inset">
          <IonIcon icon={personCircle} slot="start" />
          <IonLabel position="floating">Nombre del Cliente</IonLabel>
          <IonInput value={cliente} onIonChange={e => setCliente(e.detail.value!)} fill="outline" />
        </IonItem>

        <IonItem lines="inset" className="ion-margin-top">
          <IonIcon icon={card} slot="start" />
          <IonLabel position="floating">Cédula</IonLabel>
          <IonInput value={cedula} onIonChange={e => setCedula(e.detail.value!)} fill="outline" />
        </IonItem>

        <IonItem lines="inset" className="ion-margin-top">
          <IonIcon icon={bed} slot="start" />
          <IonLabel>Habitación</IonLabel>
          <IonSelect value={habitacion} onIonChange={e => setHabitacion(e.detail.value)} fill="outline" interface="popover">
            {habitaciones.map((h) => (
              <IonSelectOption key={h.id} value={`${h.numero} - ${h.tipo}`}>
                {h.numero} - {h.tipo}
              </IonSelectOption>
            ))}
          </IonSelect>
        </IonItem>

        <IonItem lines="inset" className="ion-margin-top">
          <IonIcon icon={time} slot="start" />
          <IonLabel>Horario</IonLabel>
          <IonSelect value={horario} onIonChange={e => setHorario(e.detail.value)} fill="outline" interface="popover">
            {horarios.map((h) => (
              <IonSelectOption key={h.id} value={h.rango}>{h.rango}</IonSelectOption>
            ))}
          </IonSelect>
        </IonItem>

        <IonButton expand="block" className="ion-margin-top" onClick={handleSubmit} color="primary">
          Guardar Reserva
        </IonButton>

        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="Reserva registrada exitosamente"
          duration={1500}
          color="success"
        />
      </IonContent>
    </IonPage>
  );
};

export default IngresoReserva;
