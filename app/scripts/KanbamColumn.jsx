'use strict';
define(['react', 'jsx!Postit'], function (React, Postit) {

  return React.createClass({
    render: function () {
      var postitCollection = this.props.columnCluster.postits.map(function (postit) {
        return(
          <Postit data={postit} />
        );
      });

      return(
        <div className="kanbam-column">
          {postitCollection}
        </div>
      );
    }
  });

});
