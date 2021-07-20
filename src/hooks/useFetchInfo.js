import { useState, useEffect } from 'react';
import { getData } from '../helpers/getData';

export const useFetchInfo = ( ) => {

    const [state, setState ] = useState({
        data: [],
        loading: true
    });

    useEffect( ()=> {
        getData( )
            .then( info => {
                setState({
                    data: info,
                    loading: false
                });
            })


    }, [ ] );
    

    return state; 
}