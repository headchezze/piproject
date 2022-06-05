import React from 'react'

export const LinkCard = ({ link}) => {
    return(
        <>
            <h4 className="center"> Данные о ссылке </h4>
            
            <p>Ваша ссылка: <a href={link.to} target="_blank" rel="noopener noreferrer"> {link.to}</a></p>
            <p>Откуда: <a href={link.from} target="_blank" rel="noopener noreferrer"> {link.from}</a></p>
            <p>Количество кликов по ссылке: <strong>{link.clicks}</strong></p>
        <p>Дата создания: <string>{new Date(link.date).toLocaleDateString()}</string></p>
        </>
    )
}