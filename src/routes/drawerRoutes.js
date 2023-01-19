import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import Conversas from '../Pages/Conversas';
import Suporte from '../Pages/Suporte';
import Home from '../Pages/Home';
import StackRoutes from './stackRoutes';

const Drawer = createDrawerNavigator()

export default function DrawerRoutes() {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name='HomeDrawer' component={StackRoutes}/>
            <Drawer.Screen name='Conversas' component={Conversas}/>
            <Drawer.Screen name='Suporte' component={Suporte}/>
        </Drawer.Navigator>
    )
}