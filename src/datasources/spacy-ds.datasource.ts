import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const baseURL = 'http://192.168.99.101:8080/';
const config = {
  name: 'spacyDS',
  connector: 'rest',
  baseURL,
  crud: false,
  options: {
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
    },
  },
  operations: [
    {
      template: {
        method: 'GET',
        url: `${baseURL}models`,
      },
      functions: {
        models: [],
      },
    },
    {
      template: {
        method: 'POST',
        url: `${baseURL}sents`,
        body: "{body:object}"
      },
      functions: {
        sents: ['body']
      },
    },
    {
      template: {
        method: 'POST',
        url: `${baseURL}sents_dep`,
        body: "{body:object}"
      },
      functions: {
        sentsDep: ['body']
      },
    },
    {
      template: {
        method: 'POST',
        url: `${baseURL}dep`,
        body: "{body:object}"
      },
      functions: {
        dep: ['body']
      },
    },
    {
      template: {
        method: 'POST',
        url: `${baseURL}ent`,
        body: "{body:object}"
      },
      functions: {
        ent: ['body']
      }
    }
  ],
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class SpacyDsDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'spacyDS';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.spacyDS', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
