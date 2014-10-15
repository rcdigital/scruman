'use strict';
define(['react', 'jsx!KanbamHeader', 'jsx!KanbamStories'], function (React, KanbamHeader, KanbamStories) {
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
          <KanbamStories story={this.props.stories} />
        </div>
      );
    }
  });

  React.renderComponent(<Stage  header={header} stories={stories} />, document.getElementById('stage-set'));
});
