
    import { VectorDataSource } from "@seasketch/geoprocessing";
    import Handler from "/Users/petermenzies/Projects/geoprocessing/belize-reports/src/functions/habitatOverlap";
    import { Context, APIGatewayProxyResult, APIGatewayProxyEvent } from "aws-lambda";
    export const handler = async (event:APIGatewayProxyEvent, context:Context): Promise<APIGatewayProxyResult> => {
      return await Handler.lambdaHandler(event, context);
    }
    // Exports for manifest
    export const handlerFilename = 'habitatOverlap.ts';
    export const options = Handler.options;
    export const sources = VectorDataSource.getRegisteredSources();
    VectorDataSource.clearRegisteredSources();
  