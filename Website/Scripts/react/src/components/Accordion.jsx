import React, { useState } from 'react';
import AccordionItem from './AccordionItem';

function Accordion() {
    const [items, setItems] = useState([
        {
            title: 'Test One',
            subtitle: 'Test One - subtitle',
            open: true
        },
        {
            title: 'Test Two',
            subtitle: 'Test Two - subtitle',
            open: false
        },
        {
            title: 'Test Three',
            subtitle: 'Test Three - subtitle',
            open: false
        },
    ]);

    const toggleItem = index => {
        setItems(items.map((item, i) => {
            if (i === index) {
                item.open = !item.open
            } else {
                item.open = false;
            }

            return item;
        }))
    }

    return (
        <div className="items">
            {items.map((item, i) => (
                <AccordionItem item={item} index={i} toggleItem={toggleItem} key={i} />
            ))}
        </div>
    )
}

export default Accordion
