import {container} from "tsyringe";

import { UuidProvider } from "./uuidProvider/implementation/UuidProvider";
import { IUuidProvider } from "./uuidProvider/iUuidProvider";

container.registerSingleton<IUuidProvider>("UuidProvider",UuidProvider);