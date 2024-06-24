htmx.defineExtension("replace-params", {
    onEvent: (name, evt) => {
        if (name === "htmx:configRequest") {
            const path = evt.detail.path.split("?")[0];
            const params = evt.detail.path.split("?")[1] || "";
            const searchParams = new URLSearchParams(params);
            for (const key in evt.detail.parameters) {
                if (evt.detail.parameters[key] !== '') {
                    searchParams.set(key, evt.detail.parameters[key]);
                } else {
                    searchParams.delete(key);
                }
                delete evt.detail.parameters[key];
            }
            evt.detail.path = `${path}?${searchParams.toString()}`;
        }
    },
});