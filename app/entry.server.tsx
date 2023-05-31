import { PassThrough } from "stream";
import type { EntryContext } from "@remix-run/node";
import { Response } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { createI18nextServerInstance } from "./utils/i18n/i18next.server";
import { I18nextProvider } from "react-i18next";
import { IsBotProvider } from "~/utils/isBotProvider";

const ABORT_DELAY = 5000;

export default async function handleRequest(
   request: Request,
   responseStatusCode: number,
   responseHeaders: Headers,
   remixContext: EntryContext
) {
   let callbackName = isbot(request.headers.get("user-agent"))
      ? "onAllReady"
      : "onShellReady";

   return new Promise(async (resolve, reject) => {
      let didError = false;

      // First, we create a new instance of i18next so every request will have a
      // completely unique instance and not share any state
      const instance = await createI18nextServerInstance(request, remixContext);

      let { pipe, abort } = renderToPipeableStream(
         <I18nextProvider i18n={instance}>
            <IsBotProvider
               isBot={isbot(request.headers.get("User-Agent") ?? "")}
            >
               <RemixServer context={remixContext} url={request.url} />
            </IsBotProvider>
         </I18nextProvider>,
         {
            [callbackName]: () => {
               let body = new PassThrough();

               responseHeaders.set("Content-Type", "text/html");

               resolve(
                  new Response(body, {
                     headers: responseHeaders,
                     status: didError ? 500 : responseStatusCode,
                  })
               );

               pipe(body);
            },
            onShellError(error: unknown) {
               reject(error);
            },
            onError(error: unknown) {
               didError = true;

               console.error(error);
            },
         }
      );

      setTimeout(abort, ABORT_DELAY);
   });
}
