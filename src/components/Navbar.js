import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = { activeItem: "home" }
    }

    // handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu secondary>
                <Link className="item" to='/' 
                    name='trending'
                    active={activeItem === 'trending'}
                    onClick={this.handleItemClick}
                >
                    Trending News
                </Link>
                <Link className="item" to='/categories'
                        name='categories'
                        active={activeItem === 'categories'}
                        onClick={this.handleItemClick}
                >
                    Categories
                </Link>
            </Menu>
            
        )
    }

}

export default withRouter(Navbar)