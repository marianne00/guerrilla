import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { LOAD_PROPERTIES } from '../../GraphQL/Queries'
import Property from '../Property/Property'
import './Properties.scss';


const Properties = () => {

  const { data, error } = useQuery(LOAD_PROPERTIES);
  const [properties, setProperties] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [pageSettings, setPageSettings] = useState({
    itemsPerPage: 3,
    maxPage: 1,
    currentPage: 1
  });



  useEffect(() => {
    if (data) {
      setProperties(data.propertyCollection.items);
      setFilteredProperties(data.propertyCollection.items);
      var categories = data.propertyCollection.items.map((item) => {
        return item.category;
      });

      setPageSettings({
        ...pageSettings,
        maxPage: (data.propertyCollection.items.length / 3)
      });

      setCategories([...new Set(categories)]);
    }
  }, [data]);

  const onFilterHandler = (e) => {
    var filter = [e.target.value];
    var filteredProperties = [];
  
    if (filter[0] !== 'All Categories') {
      filteredProperties = properties.filter(property => filter.includes( property.category ));
      setFilteredProperties(filteredProperties);
    } else {
      filteredProperties = properties;
      setFilteredProperties(filteredProperties);
    }

    // update page settings after filtering
    setPageSettings({
      ...pageSettings,
      currentPage: 1,
      maxPage: filteredProperties.length / 3
    })
  }

  const loadMore = () => {
    setPageSettings({
      ...pageSettings,
      currentPage: pageSettings.currentPage + 1
    })
  }

  const showLess = () => {
    setPageSettings({
      ...pageSettings,
      currentPage: pageSettings.currentPage - 1
    })
  }

  if (error) {
    return <h1>There's an error loading the data</h1>;
  }

  return (
    <div className='container'>
      <p className='section-heading'>Properties</p>
      <p className='section-subtext'>Turpis facilisis tempor pulvinar in lobortis ornare magna.</p>
      <select 
        onChange={onFilterHandler} 
        className="page-filters">
        <option value="All Categories">All Categories</option>
        {
          categories && categories.map((category, i) => {
            return <option key={i} value={category}>{category}</option>
          })
        }
      </select>
      <div className='property-list'>
        {
          filteredProperties && filteredProperties.slice(0, pageSettings.itemsPerPage * (pageSettings.currentPage)).map((property, i) => {
            return <Property property={property} key={i}/>
          })
        }
      </div>
      <div className='page-controls'>
        {(pageSettings.maxPage === pageSettings.currentPage) && <button onClick={showLess} className="btn-primary">Show Less</button>}
        {(pageSettings.maxPage > pageSettings.currentPage) && <button onClick={loadMore} className="btn-primary">Load more</button>}
      </div>
    </div>
  )
}

export default Properties