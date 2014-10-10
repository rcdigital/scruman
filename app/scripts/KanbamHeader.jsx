'use strict';
define(['react'], function (React) {

  return React.createClass({
    render: function () {
      var headerItems = function (headerItem) {
        return (
            <div className="header-item" key={headerItem.id}>
              <span className="header-title">{headerItem.name}</span>
            </div>
          );
      };
      return (
        <section className="kanbam-header">
          {this.props.projectHeader.map(headerItems)}
        </section>
      );
    }
  });
});
