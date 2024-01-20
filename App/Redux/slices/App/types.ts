type initialAppSliceState = {
  loadingHomeData: boolean;
  loadingMoreHomeData: boolean;
  homeData: imgObjType[];
  errorHomeData: boolean;
  nextOffset: number;
  total_count: number;
  count: 20;
};

type getHomeDataResponse = {
  data: imgObjType[];
  meta: {
    status: responseCode;
    msg: responseMessage;
    response_id: string;
  };
  pagination: {
    total_count: number;
    count: number;
    offset: number;
  };
};

type getHomeDataParams = {
  api_key: string;
  limit: number;
  offset: number;
};
type searchResponse = {
  data: imgObjType[];
  meta: {
    status: responseCode;
    msg: responseMessage;
    response_id: string;
  };
  pagination: {
    total_count: number;
    count: number;
    offset: number;
  };
};

type searchParams = {
  api_key: string;
  q: string;
  limit: number;
  offset: number;
};
