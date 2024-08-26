import React from 'react';
import "./collection.scss";
import CollectionItems from '../../components/collection-items/collection-items';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectCollection } from '../../redux/shop/shop.selectors';

const CollectionPage = ({ collection }) => {
    // If collection is undefined, show a loading state or handle it gracefully
    if (!collection) {
        return <div>Loading...</div>;
    }

    const { title, items } = collection;

    return ( 
        <div className="collection">
            <h2 className='title'>{ title }</h2>
            <div className="items">
                {items.map(item => (
                    <CollectionItems key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}

// Updated mapStateToProps to use useParams to fetch categoryId
const mapStateToProps = (state) => {
    const { categoryId } = useParams();
    return {
        collection: selectCollection(categoryId)(state)
    };
};

export default connect(mapStateToProps)(CollectionPage);
