/**
 * @author WMXPY
 * @namespace Search
 * @description Find
 */

export type FindTextSearchQuery = {

    $text: {
        $search: string;
    };
};

export const createFindTextSearchQuery = (target: string): FindTextSearchQuery => {

    return {
        $text: {
            $search: target,
        },
    };
};
