import {muiTheme} from "storybook-addon-material-ui";
import MackenziesMindTheme from "../src/theme/transform-hw/TransformHWTheme";
import {QueryClient, QueryClientProvider} from "react-query";
import {BrowserRouter} from "react-router-dom";

export const parameters = {
    actions: {argTypesRegex: "^on[A-Z].*"},
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}

const mockedQueryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
        },
    },
});

export const decorators = [
    (Story) => (
        <QueryClientProvider client={mockedQueryClient}>
            <BrowserRouter>
            <Story/>
            </BrowserRouter>
        </QueryClientProvider>),
    muiTheme([MackenziesMindTheme]),
];