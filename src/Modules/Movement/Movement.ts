//credit to Isolate AntiCheat
import { world, Player, system, GameMode, Vector3, PlayerLeaveAfterEvent, PlayerPlaceBlockAfterEvent } from "@minecraft/server";
import { flag, isAdmin, c } from "../../Assets/Util";
import lang from "../../Data/Languages/lang";
import { MinecraftEffectTypes } from "../../node_modules/@minecraft/vanilla-data/lib/index";

interface Horizontal {
    x: number,
    z: number
}

const lastXZ = new Map<string, Horizontal>()
const lastLocation = new Map<string, Vector3>()

/**
 * @author jasonlaubb
 * @description Check if player change speed with a high range while high speed
 */

async function Movement (player: Player, now: number) {
    const config = c()
    const velocity = player.getVelocity()
    const { x: x1, z: z1 }: Horizontal = player.getVelocity();

    //get and set the new data
    const lastVelocity = lastXZ.get(player.id)
    lastXZ.set(player.id, velocity)

    //last location
    const lastPos = lastLocation.get(player.id) ?? player.location
    lastLocation.set(player.id, player.location)

    //to prevent bug, stop check in first tick
    if (lastVelocity === undefined) return;
    const { x: x2, z: z2 }: Horizontal = lastVelocity

    //calulate the horizontal velocity
    const hVelocity = Math.hypot(x1, z1)

    //check if player get damamged
    const damaged = player.lastExplosionTime && now - player.lastExplosionTime < 4500

    //state the difference of X and Z

    //flag the player
    if(hVelocity > config.antiMovement.maxHorizontalVelocity && (Math.abs(x1 - x2) > 0.1 || Math.abs(z1 - z2) > 0.1)) {
        if (player.isJumping || player.isGliding || player.getEffect(MinecraftEffectTypes.Speed) || damaged == true || player.isFlying || player.isInWater || !(player.lastBlockPlace && Date.now() - player.lastBlockPlace > 800) || player.hasTag("matrix:riding")) return
        //A - false positive: low, efficiency: high
        flag (player, "Movement", "A", config.antiMovement.maxVL, config.antiMovement.punishment, [lang(">velocityXZ") + ":" + hVelocity.toFixed(2)])
        if (!config.slient) player.teleport(lastPos)
    }
}

const movement = () => {
    const DateNow = Date.now()
    const players = world.getPlayers({ excludeGameModes: [GameMode.spectator]} )
    for (const player of players) {
        if (isAdmin(player)) continue;
        Movement (player, DateNow)
    }
}

const blockPlace = ({ player }: PlayerPlaceBlockAfterEvent) => player.lastBlockPlace = Date.now() 

const playerLeave = ({ playerId }: PlayerLeaveAfterEvent) => {
    lastXZ.delete(playerId)
    lastLocation.delete(playerId)
}

let id: number

export default {
    enable () {
        id = system.runInterval(movement)
        world.afterEvents.playerLeave.subscribe(playerLeave)
        world.afterEvents.playerPlaceBlock.subscribe(blockPlace)
    },
    disable () {
        lastXZ.clear()
        lastLocation.clear()
        system.clearRun(id)
        world.afterEvents.playerLeave.unsubscribe(playerLeave)
        world.afterEvents.playerPlaceBlock.unsubscribe(blockPlace)
    }
}
