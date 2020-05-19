import {inject, Provider} from '@loopback/core';
import {GenericService, getService} from '@loopback/service-proxy';
import {SpacyDsDataSource} from '../datasources';

export interface SpacyProxy extends GenericService {}

export class SpacyProxyProvider implements Provider<SpacyProxy> {
  constructor(
    // spacyDS must match the name property in the datasource json file
    @inject('datasources.spacyDS')
    protected dataSource: SpacyDsDataSource = new SpacyDsDataSource(),
  ) {}

  value(): Promise<SpacyProxy> {
    return getService(this.dataSource);
  }
}
