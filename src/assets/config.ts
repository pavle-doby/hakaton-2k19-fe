import { HttpHeaders } from "@angular/common/http";

export const baseURL = "http://178.17.27.199:8000/";
export const baseSocketURL = "ws://94.228.235.191:8000/notifications/";

export const httpOptions = {
  headers: new HttpHeaders({
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json"
  })
};

export function setTokenInHttpClientHeaders(token: string) {
  httpOptions.headers = httpOptions.headers.set(
    "Authorization",
    "Bearer " + token
  );
}
