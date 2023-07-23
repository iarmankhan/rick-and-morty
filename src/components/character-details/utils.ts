import { FetchCharacterQueryResult } from '../../graphql/apollo.types.generated.ts';
import { Character } from '../characters/character-card.tsx';

export function transformCharacterResponse(data: FetchCharacterQueryResult['data']) {
  if (!data?.character) return null;

  const { character } = data;

  return {
    id: character.id!,
    name: character.name!,
    status: character.status ?? undefined,
    species: character.species ?? undefined,
    location: character.location?.name ?? undefined,
    gender: character.gender ?? undefined,
    image: character.image ?? null,
  } satisfies Character;
}
