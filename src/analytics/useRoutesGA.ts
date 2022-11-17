import { useRouter } from "next/router";
import { useEffect } from "react";
import { GATag } from "./GTag";

export const useRoutesGA = () => {
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url: URL) => {
            GATag.pageview(url);
        }
        router.events.on("routeChangeComplete", handleRouteChange);
        router.events.on("hashChangeComplete", handleRouteChange);
        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
            router.events.off("hashChangeComplete", handleRouteChange);
        }
    }, [router.events]);
};