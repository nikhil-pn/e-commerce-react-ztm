import React from "react";
import "../menu/menu.styles.scss"

export const MenuItem =({title, id, size,linkUrl, imageUrl})=>(
    <div className={`${size} menu-item`}>
        <div className="background-image" style={{
            backgroundImage: `url(${imageUrl})`
        }}></div>

    <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">{linkUrl}</span>
    </div>
    </div>
  
)