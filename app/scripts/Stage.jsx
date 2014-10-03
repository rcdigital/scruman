'use strict';
define(['react', 'jsx!TestList'], function (React, TestList) {
  var data = [
    {name: "Pete Hunt", id:2},
    {name: "Jordan Walke", id:5}
  ];
  var Stage = React.createClass({
    render: function () {
      return (
        <div className="stage-test">
          <TestList data={this.props.data} />
        </div>
      );
    }
  });

  React.renderComponent(<Stage data={data} />, document.getElementById('stage-set'));
});
