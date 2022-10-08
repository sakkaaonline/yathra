import React from "react";
import PropTypes from "prop-types";
import ReactPlayer from "react-player"

const FacebookEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <p className="loading">Loading Video...</p>
    <ReactPlayer
        url={embedId}
        controls={false}
        playing={false}
        width='100%'
        height='100%'
        playsinline={true}
      />
  </div>
);

FacebookEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default FacebookEmbed;