'use strict';
define(['react', 'jsx!KanbamHeader', 'jsx!KanbamRow'], function (React, KanbamHeader, KanbamRow) {
  var header = [
    {name: 'TO-DO', id: 1},
    {name: 'DOING', id: 2},
    {name: 'DONE', id: 3}
  ];



  var Stage = React.createClass({
    render: function () {
      console.log(this.props);
      return (
        <div className="stage">
          <KanbamHeader projectHeader={this.props.header} />
        </div>
      );
    }
  });

  React.renderComponent(<Stage  header={header} />, document.getElementById('stage-set'));
});
