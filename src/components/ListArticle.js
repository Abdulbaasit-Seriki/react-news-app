import React from 'react'
import { List, Header, Grid, Image } from 'semantic-ui-react'

const ListItem = props => {
    const { article } = props
    return (
        <List.Item style={{ padding: 20 }}>
          <Grid>
            <Grid.Column width={5}>
              <Image src={article.urlToImage} />
            </Grid.Column>
            <Grid.Column
              width={11}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <Header as="h3">{article.title}</Header>
              <List.Description style={{ margin: "20px 0" }}>
                {article.description}
              </List.Description>
              <List horizontal>
                <List.Item>Published At: {article.publishedAt.split("T")[0]}</List.Item>
                <List.Item>
                    By: 
                  <a href={article.url}> {article.source.name}</a>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid>
        </List.Item>
      )

}

const ListArticle = props => {
    return (
        <List divided style={{ maxWidth: '100%', margin: "0 auto" }}>
        {props.articles.map((article, index) => (
            <ListItem key={article.title + index} article={article} />
        ))}
        </List>
    )
}

export default ListArticle