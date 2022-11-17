type GTagEvent = {
    action: string;
    category: string;
    label: string;
    value: number;
};

export class GATag {
    static TRACKING_ID: string = process.env.NEXT_PUBLIC_GA_TRACKING_ID!;
    static pageview = (url: URL) => {
        window.gtag?.("config", GATag.TRACKING_ID, {
            page_path: url,
        });
    };

    // Если будет нужно, то можно тегать события этим методом 
    static event = ({ action, category, label, value }: GTagEvent) => {
        window.gtag?.("event", action, {
            event_category: category,
            event_label: label,
            value: value,
        });
    };
}