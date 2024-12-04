import { FaceType } from "@/__generated__/graphql";
import { useQuery } from "@apollo/client";
import { GET_LANUAGE_FACE_CONFIG } from "@components/graphql/languages";

export interface LanguageConfig {
    required: FaceType[];
    optional: FaceType[];
    typeMetadata: {
        [key: string]: {
            label: string;
            inputType: string;
            options?: string[];
        };
    };
}

export const useLanguageFaceConfig = (languageName: string) => {
    const { data, loading, error } = useQuery(GET_LANUAGE_FACE_CONFIG, {
        variables: { languageName },
    });

    return { languageFaceConfig: data, loading, error };
};
