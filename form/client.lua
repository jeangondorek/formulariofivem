local display = false
local Tunnel = module("vrp","lib/Tunnel")
local Proxy = module("vrp","lib/Proxy")
anima = Tunnel.getInterface("form")

RegisterCommand("nui", function(source, args)
    SetDisplay(not display)
end)

RegisterNUICallback("exit", function(data)
    SetDisplay(false)
    anima.cancelChek()
end)

RegisterNUICallback("main", function(data)
    SetDisplay(false)
end)

function SetDisplay(bool)
    display = bool
    SetNuiFocus(bool, bool)
    SendNUIMessage({
        type = "ui",
        status = bool,
    })
end

Citizen.CreateThread(function()
    while display do
        Citizen.Wait(5)
        DisableControlAction(0, 1, display) -- LookLeftRight
        DisableControlAction(0, 2, display) -- LookUpDown
        DisableControlAction(0, 142, display) -- MeleeAttackAlternate
        DisableControlAction(0, 18, display) -- Enter
        DisableControlAction(0, 322, display) -- ESC
        DisableControlAction(0, 106, display) -- VehicleMouseControlOverride
    end
end)

function DrawText3D(x, y, z, text)
    SetTextScale(0.35, 0.35)
    SetTextFont(4)
    SetTextProportional(1)
    SetTextColour(255, 255, 255, 250)
    SetTextEntry("STRING")
    SetTextCentre(true)
    AddTextComponentString(text)
    SetDrawOrigin(x,y,z, 0)
    DrawText(0.0, 0.0)
    local factor = (string.len(text)) / 370
    DrawRect(0.0, 0.0+0.0125, 0.017+ factor, 0.03, 0, 0, 0, 75)
    ClearDrawOrigin()
end

Citizen.CreateThread(function()
    while true do
        local ped = PlayerPedId()
        local optmus = 1000
        local pos = GetEntityCoords(GetPlayerPed(-1))
        if (GetDistanceBetweenCoords(pos, 440.96 , -980.02 , 30.69, true) < 1.2) then  -- LOC DO BLIP ALTERAR
            -- EDIT
            optmus = 5
            DrawText3D(440.96 , -980.02 , 30.73 + 0.2, "~b~[E] ~w~Para fazer formulário.") -- LOC DO BLIP ALTERAR
            -- EDIT
            if IsControlJustReleased(1, 38) then        
                SetDisplay(not display)
                anima.editalChek()
            end
        end
        Citizen.Wait(optmus)
	end
end)

RegisterNUICallback('name', function(data, cb)
    TriggerServerEvent("log" , data)
end)