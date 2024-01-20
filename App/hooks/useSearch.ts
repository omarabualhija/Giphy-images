import {useEffect, useState} from 'react';
import {useAppDispatch} from '../Redux';
import {searchAction} from '../Redux/slices/App/AppSlice';
import {GIPHY_TOKEN} from '@env';

const LIMIT = 20;

export const useSearch = ({onSuccess, onError}: callbackFunctionType) => {
  const dispatch = useAppDispatch();
  const [searchTxt, setSearchTxt] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);
  const [searchResult, setSearchResult] = useState<imgObjType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const [offset, setOffset] = useState<number>(0);
  const [totalCount, setTotalCount] = useState<number>(LIMIT);
  useEffect(() => {
    if (!!searchTxt.length) {
      const signal = dispatch(
        searchAction({
          api_key: GIPHY_TOKEN,
          q: searchTxt,
          limit: LIMIT,
          offset: offset,
        }),
      );
      (async () => {
        try {
          offset > 0 ? setLoadingMore(true) : setLoading(true);
          const res = await signal.unwrap();
          setSearchResult(prev =>
            offset > 0 ? [...prev, ...res.data] : [...res.data],
          );
          setTotalCount(res.pagination.total_count);
        } catch (err) {
          onError && onError(err);
        } finally {
          setLoading(false);
          setLoadingMore(false);
        }
      })();

      return () => {
        signal.abort();
      };
    }
  }, [searchTxt, offset]);

  const search = (txt: string, loadMore: boolean = false) => {
    if (!loadMore && txt !== searchTxt) {
      setSearchResult([]);
      setSearchTxt(txt);
      setOffset(0);
    }
    if (loadMore) setOffset(prev => prev + LIMIT);
    else isError && setIsError(true);
  };

  const onEndReached = () => {
    if (searchResult.length < totalCount) search(searchTxt, true);
  };

  return {search, isError, loading, loadingMore, searchResult, onEndReached};
};

export default useSearch;
