import React from 'react'
import './style.scss'
import Spinner from '../spinner/index'

export default ({ popup = false }) => {
    return (
        <div className="popup__wrapper">
            <div className="popup__content">
                {
                    popup ? (
                        <>
                        <div className="popup_image_block">
                            {/* <img src="" alt="" className="popup__image"/>
                            <img src="" alt="" className="popup__image"/> */}
                        </div>
                        <div className="popup__info">
                                <h1>dawdawd</h1>
                                <p>dawdawd</p>
                                <h1>dawdawd</h1>
                                <p>dawdawd</p>
                                <h1>dawdawd</h1>
                                <p>dawdawd</p>
                        </div>
                        </>
                    ) : <div className="popup__spinner_wrapper"><Spinner /></div>
                }
            </div>
        </div>
    )
}