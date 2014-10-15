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

      var storyItem = function () {
        return (
          <div className="story-item header-item">
              <span className="header-title">Stories</span>
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
