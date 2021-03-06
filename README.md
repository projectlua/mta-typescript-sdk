---
description: >-
  TypeScript works much faster and more interactively than Lua. MTA uses Lua,
  this module allows you to create a system with TypeScript in the MTA. It is a
  third party project, still under development.
---

# Welcome to TypeScript.lua

## Let's try this:

Below we see a simple vehicle creation code snippet:

{% code title="index.ts" %}
```typescript
include * as 'mta' from 'mta';
const Vehicles = [
    {model: 420, x: 0, y: 0, z: 0},
    {model: 597, x: 0, y: 5, z: 0}
];

class Car {
    vehicle: Vehicle;

    constructor(model: number, x: number, y: number, z: number) {
        this.vehicle = mta.createVehicle(model, x, y, z);
    };

    setColor(r: number, g: number, b: number) {
        mta.setVehicleColor(this.vehicle, r, g, b);
    };
}

mta.addEventHandler('onResourceStart', resourceRoot,
    () => {
        for (const row of Vehicles) {
            const veh = new Car(row.model, row.x, row.y, row.z);
            veh.setColor(255, 255, 255);
        }  
    }
);
```
{% endcode %}

{% hint style="info" %}
Includes custom lua classes when translating to lua.
{% endhint %}

Output:

{% code title="index.lua" %}
```lua
--The script generated by TypeScript.lua project
local ____exports = {}
local mta = _G
local Vehicles = {
    {model = 420, x = 0, y = 0, z = 0},
    {model = 597, x = 0, y = 5, z = 0}
}
local Car = __TS__Class()
Car.name = "Car"
function Car.prototype.____constructor(self, model, x, y, z)
    self.vehicle = mta.createVehicle(model, x, y, z)
end
function Car.prototype.setColor(self, r, g, b)
    mta.setVehicleColor(self.vehicle, r, g, b)
end
mta.addEventHandler("onResourceStart", resourceRoot,
    function()
        for ____, row in ipairs(Vehicles) do
            local veh = __TS__New(Car, row.model, row.x, row.y, row.z)
            veh:setColor(255, 255, 255)
        end
    end
)
return ____exports
```
{% endcode %}



