import { Bookmark } from 'lucide-react'

const Card = () => {
    return (
        <div className="card">
        <div>
          <div className="top">
            <img src="data:image/png;base64,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" alt="" />
            <button>Save <Bookmark size={10} /> </button>
          </div>
          <div className="center">
            <h3>Amazon <span>5 days ago</span></h3>
            <h2>Senior UI/UX Designer</h2>
            <div className="tag">
              <h4>Part Time</h4>
              <h4>Senior Level</h4>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div>
            <div>
              <h3>$120/hr</h3>
              <p>Mumbai, India</p>
            </div>
          </div>
          <div>
            <button>Apply Now</button>
          </div>
        </div>
      </div>
    )
};

export default Card;