import React from "react";
import PropTypes from "prop-types";
import Timestamp from "react-timestamp";

class Article extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="article-title">
          <a href={this.props.path}>{this.props.title}</a>
        </div>
        <div className="article-body">
          {this.props.description}
          <div className="article-meta-details">
            <small>
              Created by: {this.props.author}, &nbsp;
              <Timestamp time={this.props.created_at} precision={4} />,
              last_updated:{" "}
              <Timestamp time={this.props.updated_at} precision={4} />
            </small>
          </div>
        </div>
      </React.Fragment>
    );
  }
  componentDidMount() {
    let self = this;
    setInterval(() => self.forceUpdate(), 5000);
  }

  componentWillUnmount() {
    if (this._timer) {
      clearInterval(this_timer);
      this._timer = null;
    }
  }
}

Article.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  path: PropTypes.string,
  author: PropTypes.string,
  created_at: PropTypes.string,
  updated_at: PropTypes.string
};
export default Article;
