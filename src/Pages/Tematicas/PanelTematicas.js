import React from 'react'
import { Outlet } from 'react-router-dom'

export const PanelTematicas = () => {
  return (
    <div>
        <div>
          <Outlet/>
        </div>
    </div>
  )
}
