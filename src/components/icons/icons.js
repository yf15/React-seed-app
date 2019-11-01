import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faHome, faCoffee, faBars, faSmile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { dom } from '@fortawesome/fontawesome-svg-core'

dom.watch()
library.add(fab, faHome, faCoffee, faBars, faSmile)

class Icons extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s12 m6 l3">
          <div>
            <span>
              <i class="fa fa-home"></i>
            </span>
            <label>
              home
                    </label>
          </div>
          <div>
            <i class="fa fa-coffee"></i>
            <label>
              coffee
                    </label>
          </div>
        </div>

        <div className="col s12 m6 l3">
          <div>
            <FontAwesomeIcon icon={['fab', 'apple']} fixedWidth />
            <label>
              apple
                        </label>
          </div>
          <div>
            <FontAwesomeIcon icon={['fab', 'microsoft']} fixedWidth />
            <label>
              microsoft
                        </label>
          </div>
          <div>
            <FontAwesomeIcon icon={['fab', 'google']} fixedWidth />
            <label>
              google
                    </label>
          </div>
          <div>
            <FontAwesomeIcon icon={['fab', 'google']} fixedWidth />
            <label>
              google
                    </label>
          </div>
        </div>
      </div>
    );
  }
}

export default Icons;

