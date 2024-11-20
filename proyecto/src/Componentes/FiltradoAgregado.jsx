import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';
import './FiltradoAgregado.css';

class FiltradoAgregado extends Component {
  render() {
    const { filterOptions, filterLabel, filterPlaceholder, addLabel, onFilterChange, onAddClick } = this.props;

    return (
      <div className="filter-container">
        <span>{filterLabel}</span>
        <select onChange={(e) => onFilterChange(e.target.value)}>
          {filterOptions.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder={filterPlaceholder}
          onChange={(e) => onFilterChange(e.target.value)}
        />
        <span className="add-label">{addLabel}: </span>
        <button className="add-icon" onClick={onAddClick}>
          <FaPlus />
        </button>
      </div>
    );
  }
}

FiltradoAgregado.propTypes = {
  filterOptions: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  filterLabel: PropTypes.string,
  filterPlaceholder: PropTypes.string,
  addLabel: PropTypes.string,
  onFilterChange: PropTypes.func.isRequired,
  onAddClick: PropTypes.func.isRequired,
};

export default FiltradoAgregado;
