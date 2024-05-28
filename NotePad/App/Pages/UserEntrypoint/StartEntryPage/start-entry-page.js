import { StartPageEntryButtons, StartPageFooter } from "../../../Widgets";
import { UserEntryMainTitle } from "../../../Entities/User";
import { UserEntrypointPlate } from "../../../Pull/User";

const StartEntryPage = () => {
    
    return(
        <UserEntrypointPlate>
            <UserEntryMainTitle />
            <StartPageEntryButtons />
            <StartPageFooter /> 
        </UserEntrypointPlate>
    )
}

export default StartEntryPage;
