'use strict';
define(['react', 'jsx!Test'], function (React, Test) {

  return React.createClass({
    render: function () {
      var testNodes = this.props.data.map(function (author) {
        return (
          <Test key={author.id} name={author.name} />
        );
      });

      return (
        <div className="test-list">
          { testNodes }
        </div>
      );
    }
  });

});
