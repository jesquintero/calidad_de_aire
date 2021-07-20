

export const getData = async(  ) => {

    const url = `https://air-quality.p.rapidapi.com/history/airquality?lon=-70.6713199&lat=-33.4975735`

    const resp = await fetch( url, {
        headers: {
            'x-rapidapi-key': '0953088d1bmshd8c65a230d0dc8ap1bb95ejsn93cc29ba6762',
            'x-rapidapi-host': 'air-quality.p.rapidapi.com'
        }
    } );
    const { data } = await resp.json();

   const infoG = data.map(info => {
       return {
           aqi: info.aqi,
           date: info.datetime
       }
   });

    return infoG
} 

