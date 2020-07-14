import React, { useEffect, ComponentClass, FC } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { currentLocation, descriptionLocation } from '../../../store/actions/Location';
import { withScriptjs } from "react-google-maps";

import usePlacesAutocomplete, { getGeocode,getLatLng, } from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import styles from './input.module.scss';
 
const PlacesAutocomplete: FC = () => {

  const locationDescription = useSelector((state) => state.location.description);
  const dispatch = useDispatch();



  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    
    requestOptions: {
      /* Define search scope here */
    },
    debounce: 300,
  });

  useEffect(() => {
    setValue(locationDescription, false);
  }, [locationDescription]);

  const ref = useOnclickOutside(() => {
    // When user clicks outside of the component, we can dismiss
    // the searched suggestions by calling this method

    clearSuggestions();
  });
 
  const handleInput = (e) => {
    // Update the keyword of the input element
    console.log(data);

    if(e.target.value === ''){
      dispatch(descriptionLocation(''))
    }
    setValue(e.target.value);
  };


 
  const handleSelect = ({ description }) => () => {
    // When user selects a place, we can replace the keyword without request data from API
    // by setting the second parameter to "false"
    setValue(description, false);
    clearSuggestions();
    console.log(description);
    // Get latitude and longitude via utility functions
    getGeocode({ address: description })
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => {

        dispatch(currentLocation({ lat, lng }))
        dispatch(descriptionLocation(description))

        console.log("📍 Coordinates: ", { lat, lng });
      })
      .catch((error) => {
        console.log("😱 Error: ", error);
      });
  };
 
  const renderSuggestions = () =>
    data.map((suggestion,i) => {
      const {
        id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;
  
      return (
        <li key={id === undefined?i:id} onClick={handleSelect(suggestion)}>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });

   
 
  return (
    <div ref={ref} className={styles.input}>
      <input
        value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder="Напишите адрес"
      />
      {/* We can use the "status" to decide whether we should display the dropdown or not */}
      {status === "OK" && <ul className={styles.input__ul}>{renderSuggestions()}</ul>}
    </div>
  );
};

export default PlacesAutocomplete;