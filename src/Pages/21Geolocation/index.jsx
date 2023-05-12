import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import { CompassSvg } from '@/Assets/21Compass';

const standardLatGap = 0.01;
const standardLngGap = 0.01;
const standardDegGap = 1;

const GeolocationPage = () => {
  const [degree, setDegree] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const [geoError, setGeoError] = useState(false);

  setInterval(() => {
    navigator.geolocation.watchPosition(
      data => {
        if (!data.coords) return;

        const {
          latitude: currentLat,
          longitude: currentLng,
          heading: currentDeg,
          speed: currentSpeed,
        } = data.coords;

        if (currentDeg === null || currentSpeed === null) {
          setGeoError(true);
        }

        const currentLatGap = Math.abs(currentLat - position.latitude);
        const currentLngGap = Math.abs(currentLng - position.longitude);
        const currentDegGap = Math.abs(degree - currentDeg);

        if (currentLatGap > standardLatGap || currentLngGap > standardLngGap) {
          setPosition({ latitude: currentLat, longitude: currentLng });
        }

        if (currentDegGap > standardDegGap) {
          setDegree(currentDeg);
        }

        if (currentSpeed !== speed && currentSpeed !== null) {
          setSpeed(currentSpeed);
        }
      },
      () => {
        setGeoError(true);
      },
    );
  }, 1000);

  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <div className={styles.compass}>
          {geoError && (
            <div className={styles.error}>
              Sorry, Your device does not support compass!
            </div>
          )}
          <CompassSvg />
        </div>

        <div className={styles.info}>
          <p>
            Your Speed : <span>{speed}</span>
          </p>
          <p>
            Latitude : <span>{position.latitude}</span>
          </p>
          <p>
            Longitude : <span>{position.longitude}</span>
          </p>
          <Link
            to={`https://maps.google.com/?ll=${position.latitude},${position.longitude}`}
            target='_blank'
          >
            Open Google Map
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GeolocationPage;
