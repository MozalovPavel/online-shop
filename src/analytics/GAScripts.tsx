import Script from "next/script";
import { GATag } from "./GTag";

export const GAScripts = () => {
    return (
        <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${GATag.TRACKING_ID}`}
            />
            <Script
                id="gtag-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag("js", new Date());
                    
                        gtag("config", "${GATag.TRACKING_ID}");
                    `
                }
                }
            />
        </>
    );
};