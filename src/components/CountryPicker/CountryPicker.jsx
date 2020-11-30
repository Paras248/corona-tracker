import React, { useEffect, useState } from "react";
import { NativeSelect, FormControl } from "@material-ui/core"
import styles from "./CountryPicker.module.css";
import { fetchCountries } from "../../api";


function CountryPicker({handleCountryChange}){
    const [fetchedCountries, setFetchedCountries] = useState([]);
    useEffect(() => {
        async function fetchApi(){
            setFetchedCountries(await fetchCountries());
        }
        fetchApi();
    },[setFetchedCountries]);
   
    return(
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(event) => handleCountryChange(event.target.value)}>
                <option value="global">Global</option>
                {
                    fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)
                }
            </NativeSelect>
        </FormControl>
    );
}

export default CountryPicker;