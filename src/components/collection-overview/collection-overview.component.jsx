import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CollectionPreview from '../collection-preview/collection-preview.component'
import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors'
import './collections-overview.styles.scss';


const CollectionOverview = ({collections}) => (
    <div className="shop-page">
        {collections.map(({ id, ...restCollectionsProps }) => (
            <CollectionPreview key={id} {...restCollectionsProps} />
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview);