// Write your code here
import './index.css'
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'
import {IoMdClose} from 'react-icons/io'

import ReactPlayer from 'react-player'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails
  return (
    <div className="thumbnail-div">
      <Popup
        modal
        trigger={
          <img className="movie-img" src={thumbnailUrl} alt="thumbnail" />
        }
      >
        {close => (
          <div className="popup-container">
            <button
              type="button"
              className="trigger-button"
              onClick={() => close()}
              aria-label="close"
              data-testid="closeButton"
            >
              <IoMdClose />
            </button>
            <div className="content">
              <ReactPlayer url={videoUrl} controls />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
