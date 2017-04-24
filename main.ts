import { NgModule } from '@angular/core';

import { SpacesBaseService } from './lib/spaces_base.service';
import { SpacesLoggingService } from './lib/spaces_logging.service';
import { SpacesMessagesService } from './lib/spaces_messages.service';
import { SpacesRequestService } from './lib/spaces_request.service';
import { SpacesStorageService } from './lib/spaces_storage.service';
import { SpacesUtilityService } from './lib/spaces_utilities.service';

// Third part
import { Device } from 'ng2-device-detector';

@NgModule({
    providers: [
        SpacesBaseService,
        SpacesLoggingService,
        SpacesMessagesService,
        SpacesRequestService,
        SpacesStorageService,
        SpacesUtilityService,
        Device,
    ]
})
class SpacesModule { }

export {
    SpacesBaseService,
    SpacesLoggingService,
    SpacesMessagesService,
    SpacesRequestService,
    SpacesStorageService,
    SpacesUtilityService,
    SpacesModule,
}