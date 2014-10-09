'use strict';
define(['react', 'jsx!Postit'], function (React, Postit) {

  return React.createClass({
    render: function () {
      var postitCollection = this.props.postits.map(function (postit) {
        return(
          <Postit data={postit} />
        );
      });

      return(
        <div className="kanbam-row">
          {postitCollection}
        </div>
      );
    }
  });

});
