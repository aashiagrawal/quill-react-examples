import React from 'react'

type TailwindCardProps = {
    dashboardName?:string,
    children: any,
    onClick?: any,
    minHeight?: any
}

export function TailwindCard ({dashboardName, children, onClick, minHeight}: TailwindCardProps){
    return (
      <div className="max-w-xl rounded overflow-hidden shadow-lg" style={{ minHeight: minHeight }} onClick={onClick}>
          <div className="px-6 py-4">
              {dashboardName && 
                  <div className="font-bold text-xl mb-2">{dashboardName}</div>
              }
              {children}
          </div>
      </div>
    )
  }

export default TailwindCard