import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({category}) => {

    return (
        <div role="tablist" className="tabs tabs-lifted">
            {
                category.map(data =>  <Link to={`/category/${data.category}`} role="tab" className="tab">{data.category}</Link>)
            }
       
      </div>
    );
};

export default Category;