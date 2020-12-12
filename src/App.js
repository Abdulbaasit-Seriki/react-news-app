import React from 'react'
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import { getSearchArticles, getTrendingNews } from './api'
import Navbar from './components/Navbar'
import SearchBar from './components/searchBar'
import Homepage from './pages/home'
import Categories from './pages/categories'


class App extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			articles: [],
			searchInput: "",
			totalResults: "",
			loading: false,
			errorFromApi: "",
		}
	}

	async componentDidMount() {
		try {
			const response = await getTrendingNews()
			this.setState({ articles: response.articles })
		} catch (err) {
			this.setState({ errorFromApi: 'Ooopss!!! Could not Find Any News Article' })
		}
	}

	searchForInput = async input => {
		try {
			this.setState({ loading: true })
			const response = await getSearchArticles(input)
			this.setState({
				articles: response.articles,
				searchInput: input,
				totalResults: response.totalResults,
			})
			} catch (err) {
				this.setState({ errorFromApi: "Could not find any articles" })
			}
			this.setState({ loading: false })
	}
	

	render() {
		const { articles, errorFromApi, loading } = this.state

		return (
			<Container>
				<Router>
					<Navbar />
					<SearchBar searchForInput={this.searchForInput} />
					{loading && <p style={{ textAlign: "center" }}>Searching for articles...</p>  
							
					}

					<Switch>
						<Route path='/' exact component={ () => (
							<Homepage articles={articles} errorFromApi={errorFromApi}/>
						)}/>
						<Route path='/categories' exact component={ () => <Categories />}/>
					</Switch>
				</Router> 
			</Container>
		)
	}

}

export default App
