import { HttpHeaders } from "@angular/common/http";

// export function setTokenInHttpClientHeaders(
//   headers: HttpHeaders,
//   token: string
// ) {
//   return headers.set("Authorization", `Bearer ${token}`);
// }

export const baseURL = "http://94.228.235.191:8000/";

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
