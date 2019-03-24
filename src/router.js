import React from 'react';
import ListHotel from './page/ListHotel/ListHotel';

const routes = [
    {
        path : '/',
        exact : true,
        main : () => <ListHotel />
    },
]

export default routes;