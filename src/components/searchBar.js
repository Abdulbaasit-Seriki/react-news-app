import React from 'react'
import { Button, Form } from 'semantic-ui-react'

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = { searchInput: '' }
    }

    handleChange(event) {
        this.setState({ searchInput: event.target.value })
    }

    async handleSubmission(event) {
        event.preventDefault()
        await this.props.searchForInput(this.state.searchInput)
    }

    render() {
        return (
            <section style={{ display: "flex", justifyContent: "center", alignItems:"center" }}>
                <Form onSubmit={this.handleSubmission}>
                    <Form.Group>
                        <Form.Input 
                            placeholder="Search"
                            name="searchTerm"
                            value={this.state.searchInput}
                            onChange={this.handleChange}
                        />
                        <Button type="submit" color="blue">
                            Search
                        </Button>
                    </Form.Group>
                </Form>
            </section>
        )
    }
}

export default SearchBar