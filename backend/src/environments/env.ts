import { ProductionEnvironment } from './prod.env';
import { DevEnvironment } from './dev.env';
export interface Environment {
    node_env:string;
    db_url: string;
    access_key: string;
    secret_key: string;
    bucket_name: string;
    jwt_key: string;
    accountSid: string;
    authToken: string;
}
export function getEnvironmentVariable() {
    if (process.env.NODE_ENV === 'prod') {
        return ProductionEnvironment;
    }
    return DevEnvironment;

}