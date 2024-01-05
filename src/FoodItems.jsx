import React from 'react';
import Item from './Item';

const FoodItems = () => {
    let foodItems=[
        "apple","orange","mango","jackfruid"
    ];
    return (
        <div>
            {
                foodItems.map(item=>
                    <Item key={item} foodItem={item}></Item>
                )
            }
            
        </div>
    );
};

export default FoodItems;