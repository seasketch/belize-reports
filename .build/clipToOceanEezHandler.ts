
    import { VectorDataSource } from "@seasketch/geoprocessing";
    import Handler from "/Users/menzies/Projects/geoprocessing/belize-reports/src/functions/clipToOceanEez";
    import { Context, APIGatewayProxyResult, APIGatewayProxyEvent } from "aws-lambda";
    export const handler = async (event:APIGatewayProxyEvent, context:Context): Promise<APIGatewayProxyResult> => {
      return await Handler.lambdaHandler(event, context);
    }
    // Exports for manifest
    export const handlerFilename = 'clipToOceanEez.ts';
    export const options = Handler.options;
    export const sources = VectorDataSource.getRegisteredSources();
    VectorDataSource.clearRegisteredSources();
  