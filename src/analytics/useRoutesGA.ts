import { useRouter } from "next/router";
import { useEffect } from "react";
import { GTag } from "./GTag";

export const useRoutesGA = () => {
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url: URL) => {
            GTag.pageview(url);
        }
        router.events.on("routeChangeComplete", handleRouteChange);
        router.events.on("hashChangeComplete", handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
            router.events.off('hashChangeComplete', handleRouteChange);
        }
    }, [router.events]);
};