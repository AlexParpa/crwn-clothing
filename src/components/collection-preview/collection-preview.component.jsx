import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss'

// When this component gets rendered, it can get slow if items array is too large
const CollectionPreview = ({title, items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
                .filter((item, idx) => idx < 4)
                .map(({id, ...otherItemProps}) => ( 
                <CollectionItem key={id} {...otherItemProps}/>
                ))}
        </div>
    </div>
)

export default CollectionPreview