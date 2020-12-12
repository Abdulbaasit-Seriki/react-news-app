import React from 'react'
import { Container, Grid, Header } from 'semantic-ui-react'
import { getSearchArticles } from '../api'
import CardList from '../components/CardArticle'

class Categories extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            technologyArticles: [], 
            politicsArticles: [], 
            cultureArticles: [],
            loading: false,
            errorFromApi: ''
        }
    }

    async componentDidMount() {
        this._isMounted = true
        this.setState({ loading: true })
        try {
            const techNews = await getSearchArticles(`technology`)
            const politicsNews = await getSearchArticles(`politics`)
            const cultureNews = await getSearchArticles(`culture`)
            if (this._isMounted) {
                console.log(`Mount is true`)
                this.setState({
                    technologyArticles: techNews.articles,
                    politicsArticles: politicsNews.articles,
                    cultureArticles: cultureNews.articles
                })
            }
        
        } catch (err) {
            this.setState({ errorFromApi: 'Oops! Couldn.t Find Any Related Article' })
        }
        this.setState({ loading: false })
    }
    
    componentWillUnmount() {
        this._isMounted = false
    }
   
    render() {
        
        const { technologyArticles, politicsArticles, cultureArticles, errorFromApi} = this.state
        // console.log(this.state)
        return (
            
            <Container>
                <Grid columns='equal' celled='internally' padded='vertically' style={{ gridGap: '20px' }}>
                    <Grid.Row>
                        <Header as="h2" style={{ textAlign: "left", margin: 20, gridColumn: "1/-1" }}>
                            Technology
                        </Header>
                            {technologyArticles.length > 0 && <CardList articles={technologyArticles} />}
                            {console.log(technologyArticles.length > 0)}
                            {errorFromApi && <p>{errorFromApi}</p>}
                    </Grid.Row>
                    <Grid.Row>
                        <Header as="h2" style={{ textAlign: "left", margin: 20 }}>
                            Politics
                        </Header>
                            {politicsArticles.length > 0 && <CardList articles={politicsArticles} />}
                            {errorFromApi && <p>{errorFromApi}</p>}
                    </Grid.Row>
                    <Grid.Row>
                        <Header as="h2" style={{ textAlign: "left", margin: 20 }}>
                            Culture
                        </Header>
                            {cultureArticles.length > 0 && <CardList articles={cultureArticles} />}
                            {errorFromApi && <p>{errorFromApi}</p>}
                    </Grid.Row>
                </Grid>
            </Container>
        )
    }
}



export default Categories