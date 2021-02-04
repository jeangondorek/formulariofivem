local DISCORD_WEBHOOK = "WEBOOK" -- tem que por um WEBOOK
local Tunnel = module("vrp","lib/Tunnel")
local Proxy = module("vrp","lib/Proxy")
local Tools = module("vrp","lib/Tools")
vRP = Proxy.getInterface("vRP")
vRPclient = Tunnel.getInterface("vRP")

anima = {}
Tunnel.bindInterface("form",anima)

RegisterServerEvent('log')
AddEventHandler('log', function(data)

    local connect = {
        {
            ["color"] = "16776960", -----16777215 branco -----255 azul ------16711680 vermelho ------16776960 amarelo ------65280 verde------16711927 rosa
            ["title"] = "Novo formulário de | " ..data.plate.." || "..data.lastname,

            -- EDIT tem limite de 2048 caracteres dentro do description
            ["description"] =
            "Primeiro nome: \n **"..data.plate.."** \n Discord: \n **"..data.lastname.."** \n Idade: \n **"..data.age.."** \n Idade RL: \n **"..data.ager..
            "** \n Telefone: \n**"..data.telef.."** \n Porque deseja entrar na polícia? \n**"..data.why.."** \n Como o policial deve abordar à um civil que cometeu um crime?: \n**"..data.why2..
            "** \n Quando deve ser utilizado o Código de Rádio? \n**"..data.why3.."** \n Ao entrar no servidor para exercer sua função de policial, o que você deverá fazer? \n**"..data.why4.."** \n Horários disponíveis: \n**"..data.why5..
            "** \n Como podem ser iniciadas as Blitz? \n**"..data.why6.."** \n Você já fez parte de uma Corporação Policial? \n**"..data.why7.."** \n Você ja foi preso alguma vez? \n**"..data.why8..
            "** \n Você tem conhecimento no código Q? Se sim mencione 3 tipos de códigos Q, eo que que eles significam.? \n**"..data.why9.."** \n Quais devem ser os valores de um policial? \n**"..data.why10.."**\n",
            -- EDIT

            ["thumbnail"]= {
                ["url"]= ""..data.foto.."",
              },

	        ["footer"] = {
                ["text"] = "Novo formulário da polícia",
            },
        }
    }
    -- tem que por um avatar em avatar_url
    PerformHttpRequest(DISCORD_WEBHOOK, function(err, text, headers) end, 'POST', json.encode({username = "Recrutador da Polícia",  avatar_url = "URL",embeds = connect}), { ['Content-Type'] = 'application/json' })
    -- EDIT
end)

function anima.editalChek()
	local source = source
    local user_id = vRP.getUserId(source)
    vRPclient._playAnim(source,false,{{"amb@medic@standing@timeofdeath@base","base"}},true)
end

function anima.cancelChek()
	local source = source
    local user_id = vRP.getUserId(source)
    vRPclient._stopAnim(source)
end
