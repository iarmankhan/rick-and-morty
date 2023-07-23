import {FetchCharactersQueryHookResult} from "../../graphql/apollo.types.generated.ts";
import {Character} from "./character-card.tsx";

export function transformCharacterListResponse(data: FetchCharactersQueryHookResult['data']) {
  return (data?.characters?.results?.map((character) => {
    if (!character) return null;

    return {
      id: character.id!,
      name: character.name!,
      status: character.status ?? undefined,
      species: character.species ?? undefined,
      location: character.location?.name ?? undefined,
      gender: character.gender ?? undefined,
      image: character.image ?? null,
    } satisfies Character;
  }).filter(Boolean) || []) as Character[];
}
