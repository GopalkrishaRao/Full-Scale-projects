import React from 'react'

export default function FormatPrice({price}) {
  return ( 
    //  Format currency add symbol
    //  Int nubmer format - 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat' 

    Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: "INR",
        maximumFractionDigits: 2
            }).format(price/100)
        )
    }
