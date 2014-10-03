'use strict';
define(['react'], function (React) {

  return React.createClass({
    render: function () {
      return(
        <div className="classe">
          <h1>teste</h1>
          <p>{this.props.name}</p>
        </div>
      );
    }
  });

});
