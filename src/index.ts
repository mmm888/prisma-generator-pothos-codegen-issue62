import { ApolloServer } from '@apollo/server'
import { schema } from './schema'
import { startStandaloneServer } from '@apollo/server/standalone';

async function main() {
    const server = new ApolloServer({
        schema,
    })

    const { url } = await startStandaloneServer(server, { listen: { port: 3000 }})
    console.log(`Server started on ${url}`)
}

main()
