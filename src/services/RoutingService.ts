import * as H from 'history';

export class RoutingService {

    public static SetRoute(history: H.History, route: string): void {
        history.push(route);
    }

}