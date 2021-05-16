
import { useHistory } from "react-router"
import { RoutingService } from "services/RoutingService";

function useRouting() {
    const history = useHistory();

    return {
        redirect: (route: string) => {
            RoutingService.SetRoute(history, route);
        },
        route: history.location.pathname
    }
}

export default useRouting;