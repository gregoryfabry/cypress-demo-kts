import React from 'react';
import { connect } from 'react-redux';

class TotalHours extends React.Component {
  constructor(props) {
    super(props);
    this.generateTotalHours(props.entries);
    this.generateTotalRevenue(props.entries);
  }

  componentWillReceiveProps(nextProps) {
    this.generateTotalHours(nextProps.entries);
    this.generateTotalRevenue(nextProps.entries);
  }

  generateTotalHours(entries) {
    this.totalHours = entries.reduce((acc, cur) => acc + cur.hours, 0);
  }

  // TODO: correctly generate total revenue from entries, which is an array of Entry { hours: int, rate: int }
  generateTotalRevenue(entries) {
    this.totalRevenue = 0;
  }

  render() {
    return (
      <div>
        <div>
          Total Hours: {this.totalHours}
        </div>
        <div>
          Total Revenue: {this.totalRevenue}
        </div>
      </div>
    );
  }
}

const connectStateToProps = (state) => {
  return {
    entries: state.hourTrackerReducer.entries,
  };
};

export default connect(connectStateToProps, undefined)(TotalHours);
