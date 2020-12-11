import React from 'react'
import { getSearchArticles, getTrendingNews } from './api'
import { Header, Container } from 'semantic-ui-react'
import ListArticle from './components/ListArticle'
import SearchBar from './components/searchBar'

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
			});
			} catch (err) {
			this.setState({ errorFromApi: "Could not find any articles" });
			}
			this.setState({ loading: false })
	}
	

	render() {
		const { articles, errorFromApi, loading } = this.state

		return (
			<Container>
				<SearchBar searchForInput={this.searchForInput} />
				{loading ? 
						<p style={{ textAlign: "center" }}>Searching for articles...</p> : 
						<Header as="h2" style={{ textAlign: "center", margin: 20 }}>
							Trending News
						</Header>
				}
			
				{articles.length > 0 && <ListArticle articles={articles} />}
				{errorFromApi && <p>{errorFromApi}</p>}
			</Container>
		)
	}

}

export default App
