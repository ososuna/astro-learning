import type { Doc, LaunchesResponse } from '../types/api';

export const getLaunchById = async (id: string) => {
  const resp = await fetch(` https://api.spacexdata.com/v5/launches/${id}`);
  return await resp.json() as Doc;
};

export const getLatestLaunches = async () => {
  const resp = await fetch('https://api.spacexdata.com/v5/launches/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: {},
      options: {
        sort: {
          date_unix: 'asc'
        },
        limit: 12
      }
    })
  });
  const { docs: launches } = await resp.json() as LaunchesResponse;
  return launches;
};
