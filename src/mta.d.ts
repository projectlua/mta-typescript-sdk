type Var = object;
type Player = object;
type Ped = object;
type Vehicle = object;
type _Object = object;
type Pickup = object;
type Marker = object;
type Colshape = object;
type Blip = object;
type RadarArea = object;
type Projectile = object;
type Team = object;
type Serverconsole = object;
type Button = object;
type Checkbox = object;
type Combobox = object;
type Editfield = object;
type Gridlist = object;
type Memo = object;
type Progressbar = object;
type Radiobutton = object;
type Scrollbar = object;
type Scrollpane = object;
type Staticimage = object;
type Tabpanel = object;
type Tab = object;
type Textlabel = object;
type _Window = object;
type TXD = object;
type DFF = object;
type COL = object;
type Sound = object;
type Texture = object;
type Shader = object;
type DXfont = object;
type GUIfont = object;
type Weapon = object;
type Camera = object;
type Effect = object;
type Browser = object;
type Light = object;
type Searchlight = object;
type Material = object;
type Color = number;
type Font = object;
type element = object;
type table = object;

declare const exports: table;

declare const resource: element;

declare const resourceRoot: element;

declare const root: element;

declare const guiRoot: element;

declare const localPlayer: element;

declare const source: element;

declare const eventName: string;

declare const client: element;

declare const sourceResourceRoot: element;

declare const sourceResource: element;

declare const sourceTimer: element;

declare namespace table {
    export function insert(this: void, table: object, item: any): number;
    export function remove(this: void, table: object, index: number): number;
}

declare function Vector2(x: number, y: number): boolean

declare module "mta" {
    export const enum Locales {
        Arabic = "ar",
        Belarusian = "by",
        Czech = "cz",
        German = "de",
        English = "en",
        Spanish = "es",
        Farsi = "fa",
        French = "fr",
        Hebrew = "he",
        Hungarian = "hu",
        Indonesian = "id",
        Hindi = "hi_in",
        Malayalam = "ml_in",
        Telugu = "te_in",
        Tamil = "ta_in",
        Italian = "it",
        Lithuanian = "lt",
        Latvian = "lv",
        NorwegianBokmal = "nb_no",
        NorwegianNynorsk = "nn_no",
        Polish = "pl",
        Portugese = "pt",
        BrazilianPortuguese = "pt_br",
        Romanian = "ro",
        Serbian = "sr",
        Russian = "ru",
        Slovak = "sk",
        Thai = "th",
        Turkish = "tr",
        Ukrainian = "uk",
        ChineseSimplified = "zh_cn",
        ChineseTraditional = "zh_tw"
    }

    export function addCommandHandler(this: void, commandName: string, handlerFunction: Function, restricted?: false, caseSensitive?: true): boolean

    export function addCommandHandler(this: void, commandName: string, handlerFunction: Function, caseSensitive?: true): boolean
    
    export function outputChatBox(this: void, text: string, visibleTo?: element, r?: 231, g?: 217, b?: 176, colorCoded?: false): boolean
    
    export function outputChatBox(this: void, text: string, r?: 231, g?: 217, b?: 176, colorCoded?: false): boolean

    export function addEvent(this: void, eventName: string, allowRemoteTrigger?: false): boolean

    export function addEventHandler(this: void, eventName: string, attachedTo: element, handlerFunction: Function, getPropagated?: true, priority?: "normal"): boolean

    export function getEventHandlers(this: void, eventName: string, attachedTo: element): table

    export function cancelEvent(this: void, cancel?: true, reason?: ""): boolean

    export function cancelEvent(this: void): boolean

    export function getCancelReason(this: void): string

    export function removeEventHandler(this: void, eventName: string, attachedTo: element, functionVar: Function): boolean

    export function triggerClientEvent(this: void, sendTo: element, name: string, sourceElement: element, ...args: any[]): boolean
    export function triggerClientEvent(this: void, sendTo: table, name: string, sourceElement: element, ...args: any[]): boolean
    export function triggerClientEvent(this: void, name: string, sourceElement: element, ...args: any[]): boolean

    export function triggerServerEvent(this: void, name: string, sourceElement: element, ...args: any[]): boolean

    export function triggerEvent(this: void, eventName: string, baseElement: element, ...args: any[]): boolean

    export function wasEventCancelled(this: void): boolean

    export function triggerLatentClientEvent(this: void, sendTo: element, name: string, bandwidth?: 50000, persist?: false, theElement?: element, ...args: any[]): boolean
    export function triggerLatentClientEvent(this: void, sendTo: table, name: string, bandwidth?: 50000, persist?: false, theElement?: element, ...args: any[]): boolean
    export function triggerLatentClientEvent(this: void, name: string, bandwidth?: 50000, persist?: false, theElement?: element, ...args: any[]): boolean

    export function getLatentEventHandles(this: void, thePlayer: Player): table

    export function getLatentEventHandles(this: void): table

    export function getLatentEventStatus(this: void, thePlayer: Player, handle: number): table

    export function getLatentEventStatus(this: void, handle: number): table

    export function cancelLatentEvent(this: void, thePlayer: Player, handle: number): boolean

    export function cancelLatentEvent(this: void, handle: number): boolean

    export function createBlip(this: void, x: number, y: number, z: number, icon?: 0, size?: 2, r?: 255, g?: 0, b?: 0, a?: 255, ordering?: 0, visibleDistance?: 99999.0, visibleTo?: element): Blip

    export function createBlipAttachedTo(this: void, elementToAttachTo: element, icon?: 0, size?: 2, r?: 255, g?: 0, b?: 0, a?: 255, ordering?: 0, visibleDistance?: 99999.0, visibleTo?: element): Blip

    export function getBlipColor(this: void, theBlip: Blip): [number, number, number, number]

    export function getBlipIcon(this: void, theBlip: Blip): number

    export function getBlipSize(this: void, theBlip: Blip): number

    export function setBlipColor(this: void, theBlip: Blip, red: number, green: number, blue: number, alpha: number): boolean

    export function setBlipIcon(this: void, theBlip: Blip, icon: number): boolean

    export function setBlipSize(this: void, theBlip: Blip, iconSize: number): boolean

    export function getBlipOrdering(this: void, theBlip: Blip): number

    export function setBlipOrdering(this: void, theBlip: Blip, ordering: number): boolean

    export function getBlipVisibleDistance(this: void, theBlip: Blip): number

    export function setBlipVisibleDistance(this: void, theBlip: Blip, theDistance: number): boolean
 
    export function createColCircle(this: void, fX: number, fY: number, radius: number): Colshape

    export function createColCuboid(this: void, fX: number, fY: number, fZ: number, fWidth: number, fDepth: number, fHeight: number): Colshape

    export function createColRectangle(this: void, fX: number, fY: number, fWidth: number, fHeight: number): Colshape

    export function createColSphere(this: void, fX: number, fY: number, fZ: number, fRadius: number): Colshape

    export function createColTube(this: void, fX: number, fY: number, fZ: number, fRadius: number, fHeight: number): Colshape

    export function createColPolygon(this: void, fX: number, fY: number, fX1: number, fY1: number, fX2: number, fY2: number, ...args: number[]): Colshape

    export function createMarker(this: void, x: number, y: number, z: number, theType?: "checkponumber", size?: 4.0, r?: 0, g?: 0, b?: 255, a?: 255, visibleTo?: element): Marker

    export function getMarkerColor(this: void, theMarker: Marker): [number, number, number, number]

    export function getMarkerCount(this: void): number

    export function getMarkerIcon(this: void, theMarker: Marker): string

    export function getMarkerSize(this: void, theMarker: Marker): number

    export function getMarkerTarget(this: void, theMarker: Marker): [number, number, number]

    export function getMarkerType(this: void, theMarker: Marker): string

    export function setMarkerColor(this: void, theMarker: Marker, r: number, g: number, b: number, a: number): boolean

    export function setMarkerIcon(this: void, theMarker: Marker, icon: string): boolean

    export function setMarkerSize(this: void, theMarker: Marker, size: number): boolean

    export function setMarkerTarget(this: void, theMarker: Marker, x: number, y: number, z: number): boolean

    export function setMarkerType(this: void, theMarker: Marker, markerType: string): boolean

    export function createObject(this: void, modelid: number, x: number, y: number, z: number, rx?: number, ry?: number, rz?: number, isLowLOD?: false): _Object

    export function moveObject(this: void, theObject: _Object, time: number, targetx: number, targety: number, targetz: number, moverx?: number, movery?: number, moverz?: number, strEasingType?: string, fEasingPeriod?: number, fEasingAmplitude?: number, fEasingOvershoot?: number): boolean

    export function stopObject(this: void, theobject: _Object): boolean

    export function getObjectScale(theObject: _Object): number

    export function setObjectScale(theObject: _Object, scale: number, scaleY?: number, scaleZ?: number): boolean

    export function getPedFightingStyle(thePed: Ped): number

    export function getPedAmmoInClip(thePed: Ped, weaponSlot?: number): number

    export function getPedGravity(thePed: Ped): number

    export function isPedFrozen(thePed: Ped): boolean

    export function getPedOccupiedVehicle(thePed: Ped): Vehicle

    export function setPedStat(thePed: Ped, stat: number, value: number): boolean

    export function addPedClothes(thePed: Ped, clothesTexture: string, clothesModel: string, clothesType: number): boolean

    export function isPedDucked(thePed: Ped): boolean

    export function isPedHeadless(thePed: Ped): boolean

    export function getPedContactElement(thePed: Ped): element

    export function createPed(modelid: number, x: number, y: number, z: number, rot?: 0.0, synced?: true): Ped
    export function createPed(modelid: number, x: number, y: number, z: number, rot?: 0.0): Ped

    export function getPedArmor(thePed: Ped): number

    export function setPedOnFire(thePed: Ped, isOnFire: boolean): boolean

    export function getPedClothes(thePed: Ped, clothesType: number): string

    export function isPedInVehicle(thePed: Ped): boolean

    export function isPedInWater(thePed: Ped): boolean

    export function isPedOnFire(thePed: Ped): boolean

    export function doesPedHaveJetPack(thePed: Ped): boolean

    export function getValidPedModels(): table

    export function getPedWeaponSlot(thePed: Ped): number

    export function killPed(thePed: Ped, theKiller?: Ped, weapon?: 255, bodyPart?: 255, stealth?: false): boolean

    export function reloadPedWeapon(thePed: Ped): boolean

    export function isPedOnGround(thePed: Ped): boolean

    export function getPedWeapon(thePed: Ped, weaponSlot?: number): number

    export function getPedTarget(thePed: Ped): element

    export function isPedDoingGangDriveby(thePed: Ped): boolean

    export function givePedJetPack(thePed: Ped): boolean

    export function getPedWalkingStyle(thePed: Ped): number

    export function getPedStat(thePed: Ped, stat: number): number

    export function isPedChoking(thePed: Ped): boolean

    export function removePedJetPack(thePed: Ped): boolean

    export function getPedOccupiedVehicleSeat(thePed: Ped): number

    export function isPedDead(thePed: Ped): boolean

    export function setPedAnalogControlState(thePed: Ped, control: string, state: number): boolean

    export function setPedWeaponSlot(thePed: Ped, weaponSlot: number): boolean

    export function setPedDoingGangDriveby(thePed: Ped, state: boolean): boolean

    export function setPedFightingStyle(thePed: Ped, style: number): boolean

    export function setPedChoking(thePed: Ped, choking: boolean): boolean

    export function getPedTotalAmmo(thePed: Ped, weaponSlot?: number): number

    export function setPedArmor(thePed: Ped, armor: number): boolean

    export function setPedAnimation(thePed: Ped, block?: string, anim?: string, time?: -1, loop?: true, updatePosition?: true, numbererruptable?: true, freezeLastFrame?: true, blendTime?: 250): boolean

    export function removePedFromVehicle(thePed: Ped): boolean

    export function setPedFrozen(thePed: Ped, frozen: boolean): boolean

    export function setPedGravity(thePed: Ped, gravity: number): boolean

    export function setPedHeadless(thePed: Ped, headState: boolean): boolean

    export function removePedClothes(thePed: Ped, clothesType: number, clothesTexture?: string, clothesModel?: string): boolean

    export function setPedAnimationProgress(thePed: Ped, anim?: string, progress?: number): boolean

    export function createPickup(x: number, y: number, z: number, theType: number, amount_weapon_model: number, respawnTime?: 30000, ammo?: 50): Pickup

    export function getPickupAmmo(thePickup: Pickup): number

    export function getPickupAmount(thePickup: Pickup): number

    export function getPickupType(thePickup: Pickup): number

    export function getPickupWeapon(thePickup: Pickup): number

    export function setPickupType(thePickup: Pickup, theType: number, amount_weapon_model: number, ammo?: number): boolean

    export function getPickupRespawnnumbererval(thePickup: Pickup): number

    export function isPickupSpawned(thePickup: Pickup): boolean

    export function setPickupRespawnnumbererval(thePickup: Pickup, ms: number): boolean

    export function usePickup(thePickup: Pickup, thePlayer: Player): boolean

    export function createRadarArea(startPosX: number, startPosY: number, sizeX: number, sizeY: number, r?: 255, g?: 0, b?: 0, a?: 255, visibleTo?: element): RadarArea

    export function getRadarAreaColor(theRadararea: RadarArea): [number, number, number, number]

    export function getRadarAreaSize(theRadararea: RadarArea): [number, number]

    export function isInsideRadarArea(theRadararea: RadarArea, posX: number, posY: number): boolean

    export function isRadarAreaFlashing(theRadararea: RadarArea): boolean

    export function setRadarAreaColor(theRadarArea: RadarArea, r: number, g: number, b: number, a: number): boolean

    export function setRadarAreaFlashing(theRadarArea: RadarArea, flash: boolean): boolean

    export function setRadarAreaSize(theRadararea: RadarArea, x: number, y: number): boolean

    export function setVehicleColor(theVehicle: Vehicle, r1: number, g1: number, b1: number, r2?: number, g2?: number, b2?: number, r3?: number, g3?: number, b3?: number, r4?: number, g4?: number, b4?: number): boolean

    export function setTrainSpeed(train: Vehicle, speed: number): boolean
    export function setVehiclePanelState(theVehicle: Vehicle, panelID: number, state: number): boolean
    export function detachTrailerFromVehicle(theVehicle: Vehicle, theTrailer?: Vehicle): boolean
    export function setVehicleTurretPosition(turretVehicle: Vehicle, positionX: number, positionY: number): boolean
    export function setVehicleDoorOpenRatio(theVehicle: Vehicle, door: number, ratio: number, time?: 0): boolean

    export function setVehicleRespawnPosition(theVehicle: Vehicle, x: number, y: number, z: number, rx?: number, ry?: number, rz?: number): boolean
    export function setVehicleRespawnDelay(theVehicle: Vehicle, timeDelay: number): boolean
    export function setVehicleHandling(theVehicle: element, property: string, value: object): boolean

    export function setVehiclePlateText(theVehicle: element, numberplate: string): boolean

    export function setVehicleHeadLightColor(theVehicle: Vehicle, red: number, green: number, blue: number): boolean

    export function setTrainDirection(train: Vehicle, clockwise: boolean): boolean
    export function setTrainDerailable(derailableVehicle: Vehicle, derailable: boolean): boolean

    export function fixVehicle(theVehicle: Vehicle): boolean

    export function addVehicleUpgrade(theVehicle: Vehicle, upgrade: number): boolean
    export function createVehicle(model: number, x: number, y: number, z: number, rx?: number, ry?: number, rz?: number, numberplate?: string, bDirection?: boolean, variant1?: number, variant2?: number): Vehicle

    export function setVehicleSirensOn(theVehicle: Vehicle, sirensOn: boolean): boolean

    export function getVehicleSirens(theVehicle: Vehicle): table

    export function setVehicleWheelStates(theVehicle: Vehicle, frontLeft: number, rearLeft?: -1, frontRight?: -1, rearRight?: -1): boolean
    export function isVehicleDamageProof(theVehicle: Vehicle): boolean

    export function getVehiclePlateText(theVehicle: Vehicle): string

    export function isTrainChainEngine(theTrain: Vehicle): boolean

    export function getVehicleTurnVelocity(theVehicle?: Vehicle): [number, number, number]

    export function respawnVehicle(theVehicle: Vehicle): boolean

    export function isTrainDerailable(vehicleToCheck: Vehicle): boolean

    export function getTrainDirection(train: Vehicle): boolean
    export function getVehicleTowedByVehicle(theVehicle: Vehicle): Vehicle
    export function resetVehicleExplosionTime(theVehicle: Vehicle): boolean

    export function isTrainDerailed(vehicleToCheck: Vehicle): boolean

    export function resetVehicleIdleTime(theVehicle: Vehicle): boolean

    export function spawnVehicle(theVehicle: Vehicle, x: number, y: number, z: number, rx?: number, ry?: number, rz?: number): boolean

    export function isVehicleFuelTankExplodable(theVehicle: Vehicle): boolean
    export function setVehicleOverrideLights(theVehicle: Vehicle, value: number): boolean
    export function setTrainPosition(train: Vehicle, position: number): boolean
    export function setModelHandling(modelId: number, property: string, value: object): boolean

    export function addVehicleSirens(theVehicle: Vehicle, sirenCount: number, sirenType: number, visible360flag?: false, checkLosFlag?: true, useRandomiser?: true, silentFlag?: false): boolean

    export function removeVehicleUpgrade(theVehicle: Vehicle, upgrade: number): boolean
    export function blowVehicle(vehicleToBlow: Vehicle, explode?: true): boolean
    export function blowVehicle(vehicleToBlow: Vehicle): boolean

    export function attachTrailerToVehicle(theVehicle: Vehicle, theTrailer: Vehicle): boolean
    export function getVehiclesOfType(model: number): table
    export function setVehicleSirens(theVehicle: Vehicle, sirenPonumber: number, posX: number, posY: number, posZ: number, red: number, green: number, blue: number, alpha?: 255, minAlpha?: 0.0): boolean

    export function setTrainDerailed(vehicleToDerail: Vehicle, derailed: boolean): boolean

    export function removeVehicleSirens(theVehicle: Vehicle): boolean

    export function setVehicleTaxiLightOn(taxi: Vehicle, LightState: boolean): boolean

    export function getVehicleTowingVehicle(theVehicle: Vehicle): Vehicle
    export function setVehicleDamageProof(theVehicle: Vehicle, damageProof: boolean): boolean

    export function getVehicleOverrideLights(theVehicle: Vehicle): number
    export function getVehicleType(theVehicle: Vehicle): string

    export function setVehicleVariant(theVehicle: Vehicle, variant1?: number, variant2?: number): boolean
    export function toggleVehicleRespawn(theVehicle: Vehicle, Respawn: boolean): boolean
    export function isVehicleTaxiLightOn(taxi: Vehicle): boolean

    export function getVehicleSirenParams(theVehicle: Vehicle): table

    export function isVehicleOnGround(theVehicle: Vehicle): boolean

    export function getVehicleOccupant(theVehicle: Vehicle, seat?: 0): Player

    export function isVehicleBlown(theVehicle: Vehicle): boolean
    export function getTrainSpeed(train: Vehicle): number
    export function setVehicleLightState(theVehicle: Vehicle, light: number, state: number): boolean
    export function getTrainPosition(train: Vehicle): number
    export function getVehicleHandling(theVehicle: element): table

    export function getVehicleCompatibleUpgrades(theVehicle: Vehicle, slot?: number): table

    export function getVehicleDoorState(theVehicle: Vehicle, door: number): number
    export function getVehiclePanumberjob(theVehicle: Vehicle): number
    export function getModelHandling(modelId: number): table

    export function isVehicleLocked(theVehicle: Vehicle): boolean

    export function getVehicleMaxPassengers(theVehicle: Vehicle): number
    export function getVehicleMaxPassengers(modelID: number): number

    export function getVehicleHeadLightColor(theVehicle: Vehicle): [number, number, number]

    export function getVehicleWheelStates(theVehicle: Vehicle): [number, number, number, number]
    export function getVehicleName(theVehicle: Vehicle): string

    export function getVehiclePanelState(theVehicle: Vehicle, panel: number): number

    export function getVehicleModelFromName(name: string): number

    export function getVehicleNameFromModel(model: number): string

    export function getOriginalHandling(modelID: number): table

    export function getVehicleEngineState(theVehicle: Vehicle): boolean

    export function getVehicleLandingGearDown(theVehicle: Vehicle): boolean

    export function getVehicleLightState(theVehicle: Vehicle, light: number): number
    export function getVehicleColor(theVehicle: Vehicle): [number, number, number, number]

    export function getVehicleController(theVehicle: Vehicle): Player

    export function getVehicleUpgrades(theVehicle: Vehicle): table

    export function getVehicleSirensOn(theVehicle: Vehicle): boolean

    export function getVehicleTurretPosition(turretVehicle: Vehicle): [number, number]

    export function setVehiclePanumberjob(theVehicle: Vehicle, value: number): boolean
    export function setVehicleDoorsUndamageable(theVehicle: Vehicle, state: boolean): boolean

    export function setVehicleLandingGearDown(theVehicle: Vehicle, gearState: boolean): boolean

    export function setVehicleDoorState(theVehicle: Vehicle, door: number, state: number): boolean

    export function getVehicleOccupants(theVehicle: Vehicle): table

    export function getVehicleUpgradeOnSlot(theVehicle: Vehicle, slot: number): number
    export function setVehicleLocked(theVehicle: Vehicle, locked: boolean): boolean

    export function getVehicleUpgradeSlotName(slot_or_upgrade: number): string

    export function setVehicleEngineState(theVehicle: Vehicle, engineState: boolean): boolean

    export function setVehicleIdleRespawnDelay(theVehicle: Vehicle, timeDelay: number): boolean
    export function setVehicleFuelTankExplodable(theVehicle: Vehicle, explodable: boolean): boolean

    export function getVehicleVariant(theVehicle: Vehicle): [number, number]

    export function setVehicleTurnVelocity(theVehicle: Vehicle, rx: number, ry: number, rz: number): boolean

    export function getVehicleDoorOpenRatio(theVehicle: Vehicle, door: number): number

    export function attachElements(theElement: element, theAttachToElement: element, xPosOffset?: 0, yPosOffset?: 0, zPosOffset?: 0, xRotOffset?: 0, yRotOffset?: 0, zRotOffset?: 0): boolean

    export function createElement(elementType: string, elementID: string): element

    export function destroyElement(elementToDestroy: element): boolean

    export function detachElements(theElement: element, theAttachToElement: element): boolean

    export function getAttachedElements(theElement: element): table

    export function getElementAttachedOffsets(theElement: element): [number, number, number, number, number, number]

    export function getElementAlpha(theElement: element): number

    export function getElementCollisionsEnabled(theElement: element): boolean

    export function getElementAttachedTo(theElement: element): element

    export function getElementBoundingBox(theElement: element): [number, number, number, number, number, number]

    export function getElementByID(id: string, index?: 0): element

    export function getElementChild(parent: element, index: number): element

    export function getElementChildren(parent: element, theType: string): table

    export function getElementChildrenCount(parent: element): number

    export function getElementColShape(theElement: element): Colshape

    export function getElementData(theElement: element, key: string, inherit: true): Var

    export function getElementDimension(theElement: element): number

    export function getElementDistanceFromCentreOfMassToBaseOfModel(theElement: element): number

    export function getElementHealth(theElement: element): number

    export function getElementID(theElement: element): string

    export function getElementInterior(theElement: element): number

    export function getElementMatrix(theElement: element, legacy: true): table

    export function getElementModel(theElement: element): number

    export function getElementParent(theElement: element): element

    export function getElementPosition(theElement: element): [number, number, number]

    export function getElementRotation(theElement: element, rotOrder?: "default"): [number, number, number]

    export function getElementRadius(theElement: element): number

    export function getElementsByType(theType: string, startat?: element): table

    export function getElementsByType(theType: string, startat?: element, streamedIn?: false): table

    export function getElementsWithinColShape(shape: Colshape, elemType?: string): table

    export function getElementType(theElement: element): string

    export function getElementVelocity(theElement: element): [number, number, number]

    export function getLowLODElement(theElement: element): element

    export function getRootElement(): element

    export function getResourceRootElement(theResource?: object): element

    export function isElement(theValue: object): boolean

    export function isElementAttached(theElement: element): boolean

    export function isElementCallPropagationEnabled(theElement: element): boolean

    export function isElementCollidableWith(theElement: element, withElement: element): boolean

    export function isElementDoubleSided(theElement: element): boolean

    export function isElementFrozen(theElement: element): boolean

    export function isElementLocal(theElement: element): boolean

    export function isElementLowLOD(theElement: element): boolean

    export function isElementInWater(theElement: element): boolean

    export function isElementOnScreen(theElement: element): boolean

    export function isElementStreamable(theElement: element): boolean

    export function isElementStreamedIn(theElement: element): boolean

    export function isElementSyncer(theElement: element): boolean

    export function isElementWaitingForGroundToLoad(theElement: element): boolean

    export function isElementWithinColShape(theElement: element, theShape: Colshape): boolean

    export function isElementWithinMarker(theElement: element, theMarker: Marker): boolean

    export function setElementAlpha(theElement: element, alpha: number): boolean

    export function setElementAttachedOffsets(theElement: element, xPosOffset?: number, yPosOffset?: number, zPosOffset?: number, xRotOffset?: number, yRotOffset?: number, zRotOffset?: number): boolean

    export function setElementCallPropagationEnabled(theElement: element, enabled: boolean): boolean

    export function setElementCollidableWith(theElement: element, withElement: element, enabled: boolean): boolean

    export function setElementCollisionsEnabled(theElement: element, enabled: boolean): boolean

    export function setElementData(theElement: element, key: string, value: Var, synchronize?: true): boolean

    export function setElementDimension(theElement: element, dimension: number): boolean

    export function setElementDoubleSided(theElement: element, enable: boolean): boolean

    export function setElementFrozen(theElement: element, freezeStatus: boolean): boolean

    export function setElementHealth(theElement: element, newHealth: number): boolean

    export function setElementID(theElement: element, name: string): boolean

    export function setElementInterior(theElement: element, interior: number, x?: number, y?: number, z?: number): boolean

    export function setElementMatrix(theElement: element, theMatrix: table): boolean

    export function setElementModel(theElement: element, model: number): boolean

    export function setElementParent(theElement: element, parent: element): boolean

    export function setElementPosition(theElement: element, x: number, y: number, z: number, warp?: true): boolean

    export function setElementRotation(theElement: element, rotX: number, rotY: number, rotZ: number, rotOrder?: "default", conformPedRotation?: false): boolean

    export function setElementStreamable(theElement: element, streamable: boolean): boolean

    export function setElementVelocity(theElement: element, speedX: number, speedY: number, speedZ: number): boolean

    export function setLowLODElement(theElement: element, lowLODElement: element): boolean

    ////////// SERVER ONLY

    export function clearElementVisibleTo(theElement: element): boolean

    export function cloneElement(theElement: element, xPos?: 0, yPos?: 0, zPos?: 0, cloneChildren?: false): element

    export function getElementByIndex(theType: string, index: number): element

    export function getElementZoneName(theElement: element, citiesonly?: false): string

    export function isElementVisibleTo(theElement: element, visibleTo: element): boolean

    export function removeElementData(theElement: element, key: string): boolean

    export function setElementSyncer(theElement: element, thePlayer: Player): boolean

    export function setElementVisibleTo(theElement: element, visibleTo: element, visible: boolean): boolean

    export function getElementSyncer(theElement: element): element

    export function countPlayersInTeam(theTeam: Team): number

    export function getTeamColor(theTeam: Team): [number, number, number]

    export function getTeamFriendlyFire(theTeam: Team): boolean

    export function getTeamFromName(teamName: string): Team

    export function getTeamName(theTeam: Team): string

    export function countPlayersInTeam(theTeam: Team): table

    export function createTeam(teamName: string, colorR?: 255, colorG?: 255, colorB?: 255): Team

    export function getPlayerTeam(thePlayer: Player): Team

    export function setPlayerTeam(thePlayer: Player, theTeam: Team): boolean

    export function setTeamColor(theTeam: Team, colorR: number, colorG: number, colorB: number): boolean

    export function setTeamFriendlyFire(theTeam: Team, friendlyFire: boolean): boolean

    export function setTeamName(theTeam: Team, newName: string): boolean

    export function tocolor(red: number, green: number, blue: number, alpha?: number): Color

    export function dxDrawImage(posX: number, posY: number, width: number, height: number, image: string, rotation?: 0, rotationCenterOffsetX?: 0, rotationCenterOffsetY?: 0, color?: 0, postGUI?: false): boolean

    export function dxDrawImage(posX: number, posY: number, width: number, height: number, image: Material, rotation?: 0, rotationCenterOffsetX?: 0, rotationCenterOffsetY?: 0, color?: 0, postGUI?: false): boolean

    export function dxDrawImageSection(posX: number, posY: number, width: number, height: number, u: number, v: number, usize: number, vsize: number, image: string, rotation?: 0, rotationCenterOffsetX?: 0, rotationCenterOffsetY?: 0, color?: 0, postGUI?: false): boolean

    export function dxDrawImageSection(posX: number, posY: number, width: number, height: number, u: number, v: number, usize: number, vsize: number, image: Material, rotation?: 0, rotationCenterOffsetX?: 0, rotationCenterOffsetY?: 0, color?: 0, postGUI?: false): boolean

    export function dxDrawLine(startX: number, startY: number, endX: number, endY: number, color: Color, width?: 1, postGUI?: false): boolean

    export function dxDrawLine3D(startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number, color?: 0, width?: 1, postGUI?: false): boolean

    export function dxDrawRectangle(startX: number, startY: number, width: number, height: number, color?: Color, postGUI?: false, subPixelPositioning?: boolean): boolean;

    export function dxDrawText(text: string, left: number, top: number, right?: 0, bottom?: 0, color?: 0, scale?: 1, font?: Font, alignX?: "left", alignY?: "top", clip?: false, wordBreak?: false, postGUI?: false, colorCoded?: false, subPixelPositioning?: false, fRotation?: 0, fRotationCenterX?: 0, fRotationCenterY?: 0): boolean;

    export function showCursor(state: boolean): void;

    export function dxGetFontHeight(scale?: 1, font?: Font): number

    export function dxGetTextWidth(text: string, scale?: 1, font?: Font, bColorCoded?: false): number

    export function dxCreateFont(filepath: string, size?: 9, bold?: false, quality?: "proof"): element

    export function dxCreateTexture(filepath: string, textureFormat?: "argb", mipmaps?: true, textureEdge?: "wrap"): element

    export function dxCreateTexture(pixels: string, textureFormat?: "argb", mipmaps?: true, textureEdge?: "wrap"): element

    export function dxCreateTexture(width: number, height: number, textureFormat?: "argb", mipmaps?: true, textureEdge?: "wrap"): element

    export function dxCreateShader(filepath: string, priority?: 0, maxDistance?: 0, layered?: false, elementTypes?: "world,vehicle,object,other"): [element, string]

    export function dxCreateRenderTarget(width: number, height: number, withAlpha: false): element

    export function dxCreateScreenSource(width: number, height: number): element

    export function dxGetMaterialSize(material: element): [number, number, number]

    export function dxSetShaderValue(theShader: element, parameterName: string, value: object): boolean

    export function createProjectile(creator: element, weaponType: number, posX?: number, posY?: number, posZ?: number, force?: 1.0, target?: element, rotX?: number, rotY?: number, rotZ?: number, velX?: number, velY?: number, velZ?: number, model?: number): Projectile

    export function getProjectileCreator(theProjectile: Projectile): element

    export function getProjectileForce(theProjectile: Projectile): number

    export function getProjectileTarget(theProjectile: Projectile): element

    export function getProjectileType(theProjectile: Projectile): number

    export function detonateSatchels(): boolean

    export function detonateSatchels(player: Player): boolean

    export function getProjectileCounter(theProjectile: Projectile): number

    export function setProjectileCounter(theProjectile: Projectile, timeToDetonate: number): boolean
}