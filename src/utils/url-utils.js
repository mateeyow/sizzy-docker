import PROTOCOLS from "config/protocols";
import { isHttpsUri, isHttpUri } from "valid-url";

export const isUrlSameProtocol = (url: string, protocol: string) => {
  let isHttp = (protocol === PROTOCOLS.HTTP) && !!isHttpUri(url);
  let isHttps = (protocol === PROTOCOLS.HTTPS )&& !!isHttpsUri(url);
  return isHttp || isHttps;
};

export const getOppositeProtocol = (protocol: string) => protocol === PROTOCOLS.HTTPS ? PROTOCOLS.HTTP : PROTOCOLS.HTTPS;