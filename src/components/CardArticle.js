import React from 'react'
import { Card, Grid, Icon } from 'semantic-ui-react'


const CardListItem = (props) => {
    const { article } = props

    const extra = (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a href={article.url}>
            <Icon name='user' />
            {article.source.name}
        </a>
    )

    return (
        <Grid.Column width={8}>
            <Card
                image={article.urlToImage}
                header={article.title}
                meta={article.publishedAt.split("T")[0]}
                description={article.description}
                extra={extra}
            />
        </Grid.Column>
    )
}

const CardList = props => (
    <Card.Group>
        {props.articles.map( (article, index) => (
            <CardListItem key={article.title + index} article={article}/>
        ))}
    </Card.Group>
)

export default CardList