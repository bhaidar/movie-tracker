import { getConnectionOptions, getConnection } from 'typeorm';

export const getDbConnectionOptions = async (
  connectionName: string = 'default'
) => {
  const options = await getConnectionOptions(
    process.env.NODE_ENV || 'development'
  );

  return {
    ...options,
    name: connectionName
  };
};

export const getDbConnection = async (connectionName: string = 'default') => {
  return await getConnection(connectionName);
};
