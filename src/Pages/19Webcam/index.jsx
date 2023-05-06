import ReactPlayer from 'react-player';
import styles from './styles.module.scss';
import { RangeInput } from '@/Components';

const WebCamPage = () => {
  const photos = [];
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <h2 className={styles.title}>19 Page</h2>
        <div className={styles.photobooth}>
          <div className={styles.controls}>
            <button onClick={() => console.log('Take photo')}>Take Photo</button>
            <div className={styles.rgb}>
              <RangeInput
                label='Red Min:'
                name='rmin'
                min={0}
                max={255}
                initialValue={0}
              />

              <RangeInput
                label='Red Max:'
                name='rmax'
                min={0}
                max={255}
                initialValue={0}
              />

              <br />

              <RangeInput
                label='Green Min:'
                name='gmin'
                min={0}
                max={255}
                initialValue={0}
              />

              <RangeInput
                label='Green Max:'
                name='gmax'
                min={0}
                max={255}
                initialValue={0}
              />

              <br />

              <RangeInput
                label='Blue Min:'
                name='bmin'
                min={0}
                max={255}
                initialValue={0}
              />

              <RangeInput
                label='Blue Max:'
                name='bmax'
                min={0}
                max={255}
                initialValue={0}
              />
            </div>
          </div>

          <canvas className={styles.photo} />

          <div className={styles.video}>
            <ReactPlayer url='' width='100%' height='100%' playing muted />
          </div>

          <div className={styles.strip}>{photos.map(photo => console.log(photo))}</div>
        </div>
      </div>
    </section>
  );
};

export default WebCamPage;
