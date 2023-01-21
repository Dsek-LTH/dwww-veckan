import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Medal = {
  __typename?: 'Medal';
  description: Scalars['String'];
  id: Scalars['Int'];
  image: Scalars['String'];
  name: Scalars['String'];
  requirement: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createMedal: Medal;
  deleteMedal: Medal;
  updateMedal: Medal;
};


export type MutationCreateMedalArgs = {
  description: Scalars['String'];
  image: Scalars['String'];
  name: Scalars['String'];
  requirement: Scalars['String'];
};


export type MutationDeleteMedalArgs = {
  id: Scalars['Int'];
};


export type MutationUpdateMedalArgs = {
  id: Scalars['Int'];
  input: UpdateMedal;
};

export type Query = {
  __typename?: 'Query';
  medal?: Maybe<Medal>;
  medals: Array<Medal>;
};


export type QueryMedalArgs = {
  id: Scalars['Int'];
};

export type UpdateMedal = {
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  requirement?: InputMaybe<Scalars['String']>;
};

export type AllMedalsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllMedalsQuery = { __typename?: 'Query', medals: Array<{ __typename?: 'Medal', id: number, name: string, description: string, image: string, requirement: string }> };

export type DeleteMedalMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteMedalMutation = { __typename?: 'Mutation', deleteMedal: { __typename?: 'Medal', id: number, name: string } };


export const AllMedalsDocument = gql`
    query AllMedals {
  medals {
    id
    name
    description
    image
    requirement
  }
}
    `;

/**
 * __useAllMedalsQuery__
 *
 * To run a query within a React component, call `useAllMedalsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllMedalsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllMedalsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllMedalsQuery(baseOptions?: Apollo.QueryHookOptions<AllMedalsQuery, AllMedalsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllMedalsQuery, AllMedalsQueryVariables>(AllMedalsDocument, options);
      }
export function useAllMedalsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllMedalsQuery, AllMedalsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllMedalsQuery, AllMedalsQueryVariables>(AllMedalsDocument, options);
        }
export type AllMedalsQueryHookResult = ReturnType<typeof useAllMedalsQuery>;
export type AllMedalsLazyQueryHookResult = ReturnType<typeof useAllMedalsLazyQuery>;
export type AllMedalsQueryResult = Apollo.QueryResult<AllMedalsQuery, AllMedalsQueryVariables>;
export const DeleteMedalDocument = gql`
    mutation DeleteMedal($id: Int!) {
  deleteMedal(id: $id) {
    id
    name
  }
}
    `;
export type DeleteMedalMutationFn = Apollo.MutationFunction<DeleteMedalMutation, DeleteMedalMutationVariables>;

/**
 * __useDeleteMedalMutation__
 *
 * To run a mutation, you first call `useDeleteMedalMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMedalMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMedalMutation, { data, loading, error }] = useDeleteMedalMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteMedalMutation(baseOptions?: Apollo.MutationHookOptions<DeleteMedalMutation, DeleteMedalMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteMedalMutation, DeleteMedalMutationVariables>(DeleteMedalDocument, options);
      }
export type DeleteMedalMutationHookResult = ReturnType<typeof useDeleteMedalMutation>;
export type DeleteMedalMutationResult = Apollo.MutationResult<DeleteMedalMutation>;
export type DeleteMedalMutationOptions = Apollo.BaseMutationOptions<DeleteMedalMutation, DeleteMedalMutationVariables>;