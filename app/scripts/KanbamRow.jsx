'use strict';
define(['react', 'jsx!KanbamColumn'], function (React, KanbamColumn) {
  return React.createClass({
    render: function () {
      var kanbamColumns = this.props.columnCluster.map(function (column) {
        return(
          <section className="kamban-row draggable">
            <KanbamColumn columnCluster = {column} />
          </section>
        );
      });
    }
  });
});
