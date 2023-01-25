import { Skeleton } from "@mui/material";
import Box from "@mui/material/Box";
import { useGetAllValuesQuery, useGetOneValueQuery } from "../api";
import type { IValue } from "../models/services/value";

function Value() {
  const { currentData, isError, isLoading, isSuccess, error, isFetching } =
    useGetAllValuesQuery({
      pollingInterval: 0, // disable polling for this query
      refetchOnMountOrArgChange: true,
    });

  const result = useGetOneValueQuery("1");
  console.log("🚀 ~ file: value.view.tsx:10 ~ Value ~ error", error);
  console.log("🚀 ~ file: User.tsx:18 ~ User ~ currentData", currentData);

  // if (isError) return <div>An error has occurred!</div>

  return (
    <div
      className="value"
      style={{ display: "flex", justifyContent: "space-around" }}
    >
      <div className="getall">
        <h2>Get ALL VALUES</h2>
        {isError ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : isSuccess && currentData ? (
          <>
            {currentData.data.map((value: IValue) => (
              <div className="" key={value.id}>
                <h3>Name: {value.name}</h3>
                <h3>Description: {value.description}</h3>
              </div>
            ))}
          </>
        ) : null}
      </div>

      <div className="getone">
        <h2>Get ONE VALUES</h2>
        {result.isError ? (
          <>Oh no, there was an error</>
        ) : result.isLoading ? (
          <>Loading...</>
        ) : result.isSuccess && result.currentData ? (
          <>{result.currentData.data.name}</>
        ) : null}
      </div>
    </div>
  );
}

export default Value;
