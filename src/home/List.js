import React from 'react';
import { faShoppingBasket, faCheck } from '@fortawesome/free-solid-svg-icons';

import CustomCard from '../common/CustomCard';
import ListFooter from './ListFooter';
import ListItem from './ListItem';
import './List.css'

const List = (props) => (
    <CustomCard
        containerClass="list-container"
        link="/lista"
        footer={<ListFooter total={props.total} />}>
        <div>
            <p className="title">{props.list}</p>
            <div className="list-card-body">
                <ListItem icon={faShoppingBasket} text={`${props.openedItems} Item(s) Restante`} />
                <ListItem icon={faCheck} text={`${props.closedItems} Item(s) Comprados`}/>
            </div>
        </div>
    </CustomCard>
);

export default List;