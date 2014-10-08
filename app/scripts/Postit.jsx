'use strict';
define(['react'], function (React) {
  
  return React.createClass({
    render: function () {
      var cx = React.addons.classSet;
      var postItClasses = cs({
        'postit': true,
        'postit-role': this.props.role,
        'postit-impediment': this.props.impediment
      });
      return (
        <section className={postItClasses}>
          <header className="postit-header">
            <span className="info username">{this.props.userName}</span>
            <span className="info task-id">{this.props.id}</span>
          </header>
          <div className="postit-message">
            <p className="info task-message">{this.props.message}</p>
          </div>
          <footer className="postit-footer">
            <span className="info concluded-time">{this.props.concludedTime}</span>
            <span className="info estimate">{this.props.estimate}</span>
          </footer>
        </section>
      );
    }
  });
});
