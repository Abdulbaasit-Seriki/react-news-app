import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import ListArticle from '../components/ListArticle'

class Homepage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render () {
        const { articles, errorFromApi} = this.props
        return (
            <Container>
                <Header as="h2" style={{ textAlign: "center", margin: 20 }}>
				Trending News
			    </Header>

                {articles.length > 0 && <ListArticle articles={articles} />}
                {errorFromApi && <p>{errorFromApi}</p>}
 
            </Container>
        )
    }

}

export default Homepage