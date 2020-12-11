import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Input, Menu } from 'semantic-ui-react'

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = { activeItem: "home" }
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu secondary>
                <Link to='/trending'>
                    <Menu.Item
                    name='Trending News'
                    active={activeItem === 'trending'}
                    onClick={this.handleItemClick}
                    />
                </Link>
                <Link to='/categories'>
                    <Menu.Item
                        name='categories'
                        active={activeItem === 'categories'}
                        onClick={this.handleItemClick}
                    />
                </Link>
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Input icon='search' placeholder='Search...' />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
            
        )
    }

}