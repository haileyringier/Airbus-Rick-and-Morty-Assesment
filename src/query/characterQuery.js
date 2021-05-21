import { gql } from '@apollo/client';

const GET_CHARACTERS = gql`
    query GetCharacters($page: Int) {
        characters(page: $page) {
        info {
            count
            pages
            next
            prev
        }
        results {
            id
            name
            status
            species
            gender
            image
            location {
                name
            }
        }
        }
    }
`;

export default GET_CHARACTERS;
