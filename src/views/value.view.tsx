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

  const result = useGetOneValueQuery("1", {
    pollingInterval: 0, // disable polling for this query,
    refetchOnMountOrArgChange: true,
  });

  if (isError) return <div>An error has occurred!</div>;

  if (isFetching && !currentData)
    return (
      <Box sx={{ overflow: "hidden" }}>
        <Skeleton variant="text" />
      </Box>
    );

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
                <h4>Description: {value.description}</h4>
              </div>
            ))}
          </>
        ) : null}
      </div>

      <div className="getone">
        <h2>Get ONE VALUE</h2>
        {result.isError ? (
          <>Oh no, there was an error</>
        ) : result.isLoading ? (
          <>Loading...</>
        ) : result.isSuccess && result.currentData ? (
          <>
            <h3>Name: {result.data.data.name}</h3>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default Value;
