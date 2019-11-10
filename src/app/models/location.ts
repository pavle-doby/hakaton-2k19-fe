import {BeeHives} from './beeHives';
export class Location{
    latitude: number;
    longitude: number;
    mapType: string;
    zoom: number;
    markers: Array<BeeHives>;
}