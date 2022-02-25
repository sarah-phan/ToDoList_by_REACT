import React from 'react'
import { Route } from 'react-router-dom'
import NavbarHome from './_component/NavbarHome'

export default function HomeTemplate(props) {
    const { exact, path, component } = props
    return (
        <div>
            <NavbarHome/>
            <Route
                exact = {exact}
                path = {path}
                component = {component}
            />
        </div>
    )
}
