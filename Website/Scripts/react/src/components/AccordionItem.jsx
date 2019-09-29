import React from 'react'

function AccordionItem({item, index, toggleItem}) {
    return (
        <div
			className={"item " + (item.open ? 'open' : '')}
			key={index}
			onClick={() => toggleItem(index)}
		>
			<div className="item-title">
				{item.title}
			</div>
			<div className="item-subtitle">
				{item.subtitle}
			</div>
		</div>
    )
}

export default AccordionItem
