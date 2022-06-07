import React, { useState } from 'react'
import { GiHighlighter, GiFoldedPaper } from "react-icons/gi";

function Info_Question({ title, info }) {
    const [showinfo, Setshowinfo] = useState(false);

    const showInfo_ = (() => {
        Setshowinfo(!showinfo);
        // eslint-disable-next-line no-lone-blocks

    })
    return (
        <article className='question'>
            <header>
                <h4>
                    {title}
                </h4>
                <button className='btn' onClick={showInfo_}>   {showinfo ? <GiFoldedPaper /> : <GiHighlighter />}</button>
            </header>
            {showinfo && <p>{info}</p>}
        </article>
    )
}

export default Info_Question