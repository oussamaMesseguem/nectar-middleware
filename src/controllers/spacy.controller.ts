// Uncomment these imports to begin using these cool features!

import {inject} from '@loopback/core';
import {get, getModelSchemaRef, post, requestBody} from '@loopback/rest';
import {SpacyProxyRequestBody} from '../models/spacy-proxy.model';
import {SpacyProxy} from "../services";

// import {inject} from '@loopback/context';

export class SpacyController {
  constructor(@inject('services.SpacyProxy') protected spacyProxy: SpacyProxy) {}

  @get('/models', {
    responses: {
      '200': {
        description: 'Spacy available models',
        content: {'application/json': {schema: {}}},
      },
    },
  })
  async models(): Promise<string> {
    const response = await this.spacyProxy.models();
    return response;
  }

  @post('/sents', {
    responses: {
      '200': {
        description: 'Calls spacy/sents to split a text into sentences',
        content: {'application/json': {schema: {}}},
      },
    },
  })
  async sents(@requestBody({
    content: {
      'application/json': {
        schema: getModelSchemaRef(SpacyProxyRequestBody),
      },
    },
  }) body: SpacyProxyRequestBody): Promise<string[]> {
    const response = await this.spacyProxy.sents(body);
    return response;
  }

  @post('/sents_dep', {
    responses: {
      '200': {
        description: 'Calls spacy/sents to split a text into sentences',
        content: {'application/json': {schema: {}}},
      },
    },
  })
  async sentsDep(@requestBody({
    content: {
      'application/json': {
        schema: getModelSchemaRef(SpacyProxyRequestBody),
      },
    },
  }) body: SpacyProxyRequestBody): Promise<string[]> {
    const response = await this.spacyProxy.sentsDep(body);
    return response;
  }

  @post('/dep', {
    responses: {
      '200': {
        description: 'Calls spacy/sents to split a text into sentences',
        content: {'application/json': {schema: {}}},
      },
    },
  })
  async dep(@requestBody({
    content: {
      'application/json': {
        schema: getModelSchemaRef(SpacyProxyRequestBody),
      },
    },
  }) body: SpacyProxyRequestBody): Promise<string[]> {
    const response = await this.spacyProxy.dep(body);
    return response;
  }

  @post('/ent', {
    responses: {
      '200': {
        description: 'Calls spacy/sents to split a text into sentences',
        content: {'application/json': {schema: {}}},
      },
    },
  })
  async ent(@requestBody({
    content: {
      'application/json': {
        schema: getModelSchemaRef(SpacyProxyRequestBody),
      },
    },
  }) body: SpacyProxyRequestBody): Promise<string[]> {
    const response = await this.spacyProxy.ent(body);
    return response;
  }
}
