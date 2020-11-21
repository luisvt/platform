import { EntityHttpResourceUrls } from './http-url-generator';
import { Page } from '../utils/interfaces';

/**
 * Configuration settings for an entity collection data service
 * such as the `DefaultDataService<T>`.
 */
export class DefaultDataServiceConfig {
  /**
   * root path of the web api.  may also include protocol, domain, and port
   * for remote api, e.g.: `'https://api-domain.com:8000/api/v1'` (default: 'api')
   */
  root = 'api';
  /**
   * Known entity HttpResourceUrls.
   * HttpUrlGenerator will create these URLs for entity types not listed here.
   */
  entityHttpResourceUrls?: EntityHttpResourceUrls;
  /** Is a DELETE 404 really OK? (default: true) */
  delete404OK = true;
  /** Simulate GET latency in a demo (default: 0) */
  getDelay = 0;
  /** Simulate save method (PUT/POST/DELETE) latency in a demo (default: 0) */
  saveDelay = 0;
  /** request timeout in MS (default: 0)*/
  timeout = 0;
  /** pluralize requests for single entities (default: true) */
  pluralizeSingle = true;
  /** Sets if the page metadata information comes in the response headers */
  pageMetadataInHeaders = true;
  /** Name of the page size request parameter */
  pageSizeName = '_limit';
  /** Default value for the page size */
  pageSizeDefaultValue = '20';
  /** Name of the page number request parameter */
  pageNumberName = '_page';
  /** Default value for the page number */
  pageNumberDefaultValue = '1';
  /** This function is used to map response coming from the server */
  pageMapper = (
    options: any,
    config: DefaultDataServiceConfig,
    entityName: string,
    entitiesName: string
  ) => (resp: any): Page<any> => ({
    number: options.params.get(config.pageNumberName),
    size: options.params.get(config.pageSizeName),
    total: resp.headers.get('x-total-count'),
    items: resp.body,
  });
}
