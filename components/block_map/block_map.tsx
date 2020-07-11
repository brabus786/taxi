import React from 'react';
import styles from './block_map.module.scss';
import MyMapComponent from '../google_map/google_map';

const BlockMap = () => {
    return (
        <div className={styles.BlockMap}>
            <MyMapComponent
                isMarkerShown={true}
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBWtEzFuGqWtyuRCc3mgxETV2z4R2NKaMA&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
    );
};

export default BlockMap;