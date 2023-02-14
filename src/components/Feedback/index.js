import {Component} from 'react'
import './index.css'

const Emojis = props => {
  const {each, feedback} = props
  const {id, name, imageUrl} = each
  const onFeedback = () => feedback(id)
  return (
    <li>
      <div className="image-div">
        <img src={imageUrl} alt={name} className="image" onClick={onFeedback} />
      </div>
    </li>
  )
}

class Feedback extends Component {
  state = {Status: true}

  feedback = id => {
    const {Status} = this.state
    this.setState({Status: !Status})
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {Status} = this.state

    return (
      <div className="bg-container">
        <div className="sub-container">
          {Status ? (
            <div>
              <h1>
                How satisfied are you with our customer support performance?
              </h1>
              <div>
                <ul className="container">
                  {emojis.map(each => (
                    <Emojis
                      each={each}
                      key={each.id}
                      feedback={this.feedback}
                    />
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div>
              <img src={loveEmojiUrl} alt="love emoji" className="image" />
              <h1>Thank You</h1>
              <p>
                We will use your feedback to improve our customer support
                performance
              </p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Feedback
